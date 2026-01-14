# Domain Configuration Fix

## Problem
The deployment was trying to use the custom domain "mhdays.me" which is now inactive, causing deployment errors.

## Solution Implemented
The deployment workflow has been updated to explicitly remove any CNAME file that might be created during the build process. This ensures that the site will be served on the default GitHub Pages domain: **yys-4.github.io/portofolio-8bit**

## Changes Made
1. Added a step in `.github/workflows/deploy.yml` to remove any CNAME file before deployment
2. This prevents GitHub Pages from trying to use the inactive "mhdays.me" domain

## Additional Steps (Important!)
You may also need to manually update the GitHub Pages settings in your repository to remove the custom domain:

1. Go to your repository: https://github.com/yys-4/portofolio-8bit
2. Click on **Settings** (top navigation)
3. In the left sidebar, click on **Pages**
4. Under "Custom domain", if you see "mhdays.me" or any other domain:
   - Click the **X** or delete button to remove it
   - OR replace it with your desired domain (if you have a new active domain)
5. Save the changes

## Your Site URLs

### Current Configuration (Subdirectory)
- **URL**: https://yys-4.github.io/portofolio-8bit
- This uses the `basePath: '/portofolio-8bit'` setting in `next.config.ts`

### Alternative Option (Root Domain)
If you'd prefer to use the root domain (https://yys-4.github.io), you would need to:
1. Rename this repository from `portofolio-8bit` to `yys-4.github.io`
2. Remove the `basePath` setting from `next.config.ts`
3. The site would then be available at https://yys-4.github.io

## Verification
After merging this PR and the deployment completes:
1. Check that the GitHub Actions workflow succeeds
2. Visit https://yys-4.github.io/portofolio-8bit
3. Verify the site loads correctly

## Future Custom Domain Setup
If you want to use a new custom domain in the future:
1. Make sure the domain is active and properly configured
2. Add a CNAME file to the `public/` directory with your domain name
3. Configure the custom domain in GitHub Pages settings
4. Set up DNS records at your domain registrar (CNAME record pointing to yys-4.github.io)
