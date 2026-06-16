import { NextRequest, NextResponse } from 'next/server'
import { put } from '@vercel/blob'
import { rateLimit } from '@/lib/rate-limit'

const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif']
const MAX_SIZE_BYTES = 10 * 1024 * 1024 // 10MB

// Requests must originate from the production site, a Vercel preview, or localhost.
function isAllowedOrigin(origin: string): boolean {
  return (
    origin.includes('mariettaantiquemall.com') ||
    origin.includes('.vercel.app') ||
    origin.includes('localhost')
  )
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get('origin') || request.headers.get('referer') || ''
  if (!isAllowedOrigin(origin)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json(
      { error: 'Photo uploads are not configured. Please try again later.' },
      { status: 503 }
    )
  }

  const { success, limit, remaining } = await rateLimit(request, {
    prefix: 'upload-item-photo',
    limit: 20,
    window: '1 h',
  })
  if (!success) {
    return NextResponse.json(
      { error: 'Too many uploads. Please try again later.' },
      { status: 429, headers: { 'X-RateLimit-Limit': String(limit), 'X-RateLimit-Remaining': String(remaining) } }
    )
  }

  let body: { photo?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const { photo } = body
  if (!photo) {
    return NextResponse.json({ error: 'No photo provided' }, { status: 400 })
  }

  const match = photo.match(/^data:([^;]+);base64,(.+)$/)
  if (!match) {
    return NextResponse.json({ error: 'Invalid photo format' }, { status: 400 })
  }

  const [, contentType, base64] = match

  if (!ALLOWED_TYPES.includes(contentType)) {
    return NextResponse.json({ error: 'Invalid file type' }, { status: 400 })
  }

  const buffer = Buffer.from(base64, 'base64')

  if (buffer.byteLength > MAX_SIZE_BYTES) {
    return NextResponse.json({ error: 'File exceeds 10MB limit' }, { status: 400 })
  }

  const ext = contentType.split('/')[1] || 'webp'

  try {
    const blob = await put(
      `items/${Date.now()}-${Math.random().toString(36).slice(2, 6)}.${ext}`,
      buffer,
      { access: 'public', contentType }
    )
    return NextResponse.json({ url: blob.url }, { status: 200 })
  } catch (error) {
    console.error('upload-item-photo error:', error)
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 })
  }
}
