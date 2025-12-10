# Vercel Environment Variables Setup

## ⚠️ IMPORTANT: Add Environment Variables to Vercel

The newsletter signup feature requires Mailchimp API credentials to be configured in your Vercel deployment.

## Steps to Add Environment Variables in Vercel:

1. **Go to your Vercel project dashboard:**
   - Visit: https://vercel.com/
   - Select your project: `marietta-antique-mall`

2. **Navigate to Settings → Environment Variables:**
   - Click on "Settings" tab
   - Click on "Environment Variables" in the left sidebar

3. **Add the following environment variables:**

   **Note:** The actual values for these variables are stored securely in `.env.local` (which is gitignored). Copy the values from your local `.env.local` file.

   | Variable Name | Where to Find the Value | Environment |
   |--------------|-------------------------|-------------|
   | `MAILCHIMP_API_KEY` | Copy from `.env.local` file | Production, Preview, Development |
   | `MAILCHIMP_SERVER_PREFIX` | Copy from `.env.local` file (should be `us13`) | Production, Preview, Development |
   | `MAILCHIMP_AUDIENCE_ID` | Copy from `.env.local` file | Production, Preview, Development |

4. **For each variable:**
   - Click "Add New" button
   - Enter the variable **Name** (exactly as shown above)
   - Enter the **Value** (from the table above)
   - Select which environments: **Check all three boxes** (Production, Preview, Development)
   - Click "Save"

5. **Redeploy your application:**
   - After adding all three variables, go to "Deployments" tab
   - Click the three dots ⋯ on your latest deployment
   - Click "Redeploy"
   - This ensures the environment variables are loaded

## Verification:

Once deployed with the environment variables:
- Visit your website: https://www.mariettaantiquemall.com
- Wait 3 seconds for the newsletter popup to appear
- Enter a test email address
- Click "Subscribe Now"
- You should see "Welcome Aboard!" success message
- Check your Mailchimp account to verify the subscriber was added

## Troubleshooting:

If newsletter signup fails:
1. Check Vercel logs: Settings → Functions → View Function Logs
2. Verify all three environment variables are set correctly
3. Ensure you redeployed after adding variables
4. Check Mailchimp API key is still valid at: https://us13.admin.mailchimp.com/account/api/

## Security Notes:

- ✅ `.env.local` is gitignored (API keys are NOT in source control)
- ✅ API keys are only stored in Vercel environment variables
- ✅ Newsletter API route validates all inputs server-side
- ✅ Mailchimp credentials are never exposed to the browser

## Local Development:

For local testing, the `.env.local` file has already been created with the correct credentials. Simply run:

```bash
npm run dev
```

The newsletter signup will work immediately in your local environment.

---

**Generated with Claude Code**
