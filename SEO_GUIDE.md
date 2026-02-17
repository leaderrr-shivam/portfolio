# SEO Verification Guide for Shivam's Portfolio

To get your website listed on Google and Bing, you need to prove you own it. Follow these steps:

## 1. Google Search Console (GSC)
1.  Go to [Google Search Console](https://search.google.com/search-console).
2.  Login with your Google account.
3.  Click **"Add property"**.
4.  Choose **"URL prefix"** (easier than Domain for GitHub Pages).
5.  Enter your URL: `https://leaderrr-shivam.github.io/portfolio/`.
6.  Click **Continue**.
7.  In the verification method list, choose **"HTML tag"**.
8.  Copy the code that looks like: `<meta name="google-site-verification" content="..." />`.
9.  **Action**: Open your `index.html` file and replace `YOUR_GOOGLE_VERIFICATION_CODE` with the code inside the `content="..."` part.
10. Commit and push the changes properly.
11. Wait for deployment (1-2 mins).
12. Go back to GSC and click **Verify**.

## 2. Bing Webmaster Tools
1.  Go to [Bing Webmaster Tools](https://www.bing.com/webmasters).
2.  Login (you can use your Google account).
3.  Add your site URL.
4.  Choose **"HTML Meta Tag"** verification.
5.  Copy the code that looks like: `<meta name="msvalidate.01" content="..." />`.
6.  **Action**: Open `index.html` and replace `YOUR_BING_VERIFICATION_CODE` with the code.
7.  Deploy and click **Verify** on Bing.

## 3. Submit Sitemap
Once verified, tell them where your pages are:

**Google:**
- In Search Console sidebar, click **Sitemaps**.
- Enter `sitemap.xml` in the box.
- Click **Submit**.

**Bing:**
- In Sidebar, click **Sitemaps**.
- Click **Submit Sitemap**.
- Enter `https://leaderrr-shivam.github.io/portfolio/sitemap.xml`.

## 4. Updates
I have already added:
- **Rich Snippets**: Code that tells Google you are an "AI Engineer" (Person Schema).
- **Keywords**: "Generative AI", "LLM", "Freelance AI Developer" to match recruiter searches.
