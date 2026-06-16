import type { NextRequest } from 'next/server'
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

/**
 * Lightweight, graceful rate limiting for the Sell-or-Donate API routes.
 *
 * If UPSTASH_REDIS_REST_URL / _TOKEN are not configured, every request is
 * allowed (no-op). This lets the feature ship without Upstash and add it later.
 *
 * Adapted for the Next.js App Router: there is no Express-style `res`, so this
 * returns a result object and the caller builds the response.
 */

type Duration = `${number} ${'ms' | 's' | 'm' | 'h' | 'd'}`

interface RateLimitOptions {
  prefix: string
  limit: number
  window: Duration
}

interface RateLimitResult {
  success: boolean
  limit: number
  remaining: number
}

let redis: Redis | null = null

function getRedis(): Redis {
  if (!redis) {
    redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })
  }
  return redis
}

const limiters = new Map<string, Ratelimit>()

function getLimiter(prefix: string, tokens: number, window: Duration): Ratelimit {
  const key = `${prefix}:${tokens}:${window}`
  let limiter = limiters.get(key)
  if (!limiter) {
    limiter = new Ratelimit({
      redis: getRedis(),
      limiter: Ratelimit.slidingWindow(tokens, window),
      prefix: `rl:${prefix}`,
    })
    limiters.set(key, limiter)
  }
  return limiter
}

export async function rateLimit(
  req: NextRequest,
  { prefix, limit, window }: RateLimitOptions
): Promise<RateLimitResult> {
  // Graceful no-op when Upstash is not configured.
  if (!process.env.UPSTASH_REDIS_REST_URL) {
    return { success: true, limit, remaining: limit }
  }

  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    'unknown'

  try {
    const result = await getLimiter(prefix, limit, window).limit(ip)
    return { success: result.success, limit, remaining: result.remaining }
  } catch (err) {
    // Never let a limiter outage take down the form — fail open.
    console.error('Rate limit error (allowing request):', err instanceof Error ? err.message : err)
    return { success: true, limit, remaining: limit }
  }
}
