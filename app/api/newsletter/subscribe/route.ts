import { NextRequest, NextResponse } from 'next/server'
import mailchimp from '@mailchimp/mailchimp_marketing'

// Initialize Mailchimp
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX, // e.g., 'us13'
})

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email address is required' },
        { status: 400 }
      )
    }

    // Check for required environment variables
    if (!process.env.MAILCHIMP_API_KEY || !process.env.MAILCHIMP_SERVER_PREFIX || !process.env.MAILCHIMP_AUDIENCE_ID) {
      console.error('Missing Mailchimp environment variables')
      return NextResponse.json(
        { error: 'Newsletter service is not configured' },
        { status: 500 }
      )
    }

    // Add subscriber to Mailchimp audience
    const response = await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID,
      {
        email_address: email,
        status: 'subscribed', // 'subscribed' or 'pending' (for double opt-in)
        tags: ['Website Newsletter'], // Tag to identify source
      }
    )

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully subscribed to newsletter',
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Mailchimp API Error:', error)

    // Handle specific Mailchimp errors
    if (error.status === 400 && error.response?.body?.title === 'Member Exists') {
      return NextResponse.json(
        {
          error: 'This email is already subscribed to our newsletter',
          code: 'ALREADY_SUBSCRIBED',
        },
        { status: 400 }
      )
    }

    if (error.status === 400 && error.response?.body?.title === 'Invalid Resource') {
      return NextResponse.json(
        {
          error: 'Invalid email address format',
          code: 'INVALID_EMAIL',
        },
        { status: 400 }
      )
    }

    // Generic error response
    return NextResponse.json(
      {
        error: 'Failed to subscribe to newsletter. Please try again later.',
        code: 'SUBSCRIPTION_FAILED',
      },
      { status: 500 }
    )
  }
}
