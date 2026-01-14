# 🚀 GitHub Pages Deployment Guide

This guide explains how to deploy your 8-bit portfolio to GitHub Pages.

## Option 1: Deploy to `yys-4.github.io` (Recommended)

Your portfolio will be accessible at: **https://yys-4.github.io**

### Steps:

#### 1. Rename Your Repository

1. Go to https://github.com/yys-4/portofolio-8bit
2. Click **Settings** (top right)
3. Scroll down to **Repository name**
4. Change `portofolio-8bit` to `yys-4.github.io`
5. Click **Rename**

#### 2. Enable GitHub Pages

1. In your repository, go to **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Save the settings

#### 3. Push the Deployment Configuration

The deployment workflow has already been created. Just commit and push:

\`\`\`bash
cd /Users/muhammadayyas/Documents/8bit/portfolio

git add .
git commit -m "Add GitHub Pages deployment"
git push origin main
\`\`\`

#### 4. Wait for Deployment

1. Go to **Actions** tab in your GitHub repository
2. Watch the deployment workflow run
3. Once complete (green checkmark), your site will be live at **https://yys-4.github.io**

---

## Option 2: Deploy to `yys-4.github.io/portofolio-8bit`

Your portfolio will be accessible at: **https://yys-4.github.io/portofolio-8bit**

### Steps:

#### 1. Update next.config.ts

Add the `basePath` configuration:

\`\`\`typescript
const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/portofolio-8bit',
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
};
\`\`\`

#### 2. Enable GitHub Pages

1. Go to **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Save the settings

#### 3. Push Changes

\`\`\`bash
git add .
git commit -m "Add GitHub Pages deployment with basePath"
git push origin main
\`\`\`

#### 4. Wait for Deployment

The GitHub Actions workflow will automatically build and deploy your site.

---

## Troubleshooting

### Deployment Failed

1. Check the **Actions** tab for error messages
2. Ensure all dependencies are correctly listed in `package.json`
3. Try running `npm run build` locally to catch build errors

### 404 Error After Deployment

1. Make sure you've enabled GitHub Pages in Settings
2. Verify the workflow completed successfully (green checkmark)
3. Wait a few minutes for DNS propagation

### Images Not Loading

1. Ensure `images.unoptimized: true` is set in `next.config.ts`
2. Use relative paths for images (e.g., `/images/avatar.png`)
3. If using Option 2, make sure `basePath` is configured

### CSS Not Loading

1. Check that `output: 'export'` is set in `next.config.ts`
2. Verify the build completed without errors
3. Clear your browser cache

---

## Updating Your Portfolio

After making changes to your portfolio:

\`\`\`bash
# Make your changes to cv-data.ts or components
git add .
git commit -m "Update portfolio content"
git push origin main
\`\`\`

The GitHub Actions workflow will automatically rebuild and redeploy your site.

---

## Custom Domain (Optional)

To use a custom domain like `portfolio.yourdomain.com`:

1. Add a `CNAME` file to the `public/` folder:
   \`\`\`
   portfolio.yourdomain.com
   \`\`\`

2. In your domain registrar, add a CNAME record:
   - **Name:** `portfolio`
   - **Value:** `yys-4.github.io`

3. In GitHub Settings → Pages, add your custom domain

4. Enable **Enforce HTTPS**

---

## Monitoring Deployments

- **Actions Tab:** View deployment history and logs
- **Environments:** See deployment status and URLs
- **Pages Settings:** Manage GitHub Pages configuration

---

## Performance Optimization

Your portfolio is already optimized with:
- ✅ Static export (fast loading)
- ✅ Tailwind CSS (minimal CSS bundle)
- ✅ Next.js optimization
- ✅ Image optimization disabled (for GitHub Pages compatibility)

For further optimization:
- Add a CDN (Cloudflare)
- Enable caching headers
- Compress assets

---

## Need Help?

- **GitHub Pages Docs:** https://docs.github.com/en/pages
- **Next.js Static Export:** https://nextjs.org/docs/app/building-your-application/deploying/static-exports
- **Repository Issues:** https://github.com/yys-4/portofolio-8bit/issues

---

**Your portfolio is ready to go live! 🎮**
