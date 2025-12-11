import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Lazy initialization to avoid build-time errors
let resend: Resend | null = null
function getResendClient() {
  if (!resend && process.env.RESEND_API_KEY) {
    resend = new Resend(process.env.RESEND_API_KEY)
  }
  return resend
}

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

    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        {
          success: false,
          message: 'Email service is not configured.',
        },
        { status: 503 }
      )
    }

    // Format email HTML
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body {
              margin: 0;
              padding: 0;
              font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
              background-color: #f4f4f4;
            }
            .email-container {
              max-width: 600px;
              margin: 40px auto;
              background-color: #ffffff;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            }
            .header {
              background: linear-gradient(135deg, #2A2A2A 0%, #3A3A3A 100%);
              padding: 40px 30px;
              text-align: center;
            }
            .logo {
              font-family: 'Playfair Display', Georgia, serif;
              font-size: 28px;
              font-weight: 700;
              color: #D4C4B0;
              margin: 0;
            }
            .content {
              padding: 40px 30px;
            }
            .title {
              font-size: 20px;
              font-weight: 600;
              color: #2A2A2A;
              margin: 0 0 24px 0;
              text-align: center;
              border-bottom: 3px solid #D4C4B0;
              padding-bottom: 12px;
            }
            .email-box {
              background-color: #FAF8F5;
              border: 2px solid #D4C4B0;
              border-radius: 6px;
              padding: 20px;
              text-align: center;
              font-size: 18px;
              font-weight: 600;
              color: #2A2A2A;
              margin: 20px 0;
            }
            .footer {
              background-color: #FAF8F5;
              padding: 24px 30px;
              border-top: 1px solid #E5E5E5;
              text-align: center;
              font-size: 13px;
              color: #666;
            }
            .timestamp {
              font-weight: 600;
              color: #2A2A2A;
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="header">
              <div class="logo">MARIETTA ANTIQUE MALL</div>
            </div>
            <div class="content">
              <h1 class="title">New Newsletter Subscriber</h1>
              <div class="email-box">
                ${email}
              </div>
              <p style="text-align: center; color: #666; margin-top: 20px;">
                Subscribed via website newsletter popup
              </p>
            </div>
            <div class="footer">
              <p style="margin: 0;">
                <span class="timestamp">Submitted on ${new Date().toLocaleString('en-US', {
                  timeZone: 'America/New_York',
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                  hour: 'numeric',
                  minute: '2-digit',
                  hour12: true
                })} EST</span>
              </p>
              <p style="margin: 6px 0 0 0;">
                Via <a href="https://www.mariettaantiquemall.com" style="color: #D4C4B0;">www.mariettaantiquemall.com</a>
              </p>
            </div>
          </div>
        </body>
      </html>
    `

    // Send email via Resend
    const resendClient = getResendClient()
    if (!resendClient) {
      throw new Error('Email service is not available')
    }

    const { data, error } = await resendClient.emails.send({
      from: 'Marietta Antique Mall <newsletter@mariettaantiquemall.com>',
      to: 'contactus@mariettaantiquemall.com',
      replyTo: email,
      subject: `Newsletter Subscription - ${email}`,
      html: emailHtml,
    })

    if (error) {
      throw new Error(error.message)
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully subscribed to newsletter',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing newsletter subscription:', error)
    return NextResponse.json(
      {
        error: 'Failed to subscribe to newsletter. Please try again later.',
        code: 'SUBSCRIPTION_FAILED',
      },
      { status: 500 }
    )
  }
}
