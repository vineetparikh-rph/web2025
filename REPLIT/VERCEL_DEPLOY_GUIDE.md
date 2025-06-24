# Deploy Georgies Pharmacy to Vercel

## Quick Deploy Steps

### 1. Create GitHub Repository
1. Go to [github.com](https://github.com) and create new repository
2. Name it: `georgies-pharmacy-website`
3. Set to Public
4. Don't initialize with README (we have files already)

### 2. Upload Project Files
**Option A: GitHub Web Interface**
1. Click "uploading an existing file"
2. Drag and drop these files from your Replit:
   - All files in the project root
   - client/ folder contents
   - server/ folder contents  
   - shared/ folder contents

**Option B: Download and Git Push**
1. Download project as ZIP from Replit
2. Extract and push to GitHub repository

### 3. Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Click "New Project"
4. Import your `georgies-pharmacy-website` repository
5. Vercel will auto-detect the configuration

### 4. Environment Variables
In Vercel dashboard, add these:
```
NODE_ENV=production
DATABASE_URL=postgresql://username:password@host:port/database
SESSION_SECRET=super-secure-random-32-character-string
```

### 5. Database Setup (Recommended: Neon)
1. Visit [neon.tech](https://neon.tech)
2. Create free PostgreSQL database
3. Copy connection string to `DATABASE_URL`

### 6. Deploy
1. Click "Deploy" in Vercel
2. Wait 2-3 minutes for build
3. Your site will be live at: `https://georgies-pharmacy-website.vercel.app`

## Project is Ready
- Complete pharmacy management system
- 4 authentic locations with real data
- Responsive design with adaptive fonts
- SEO optimized
- 105+ patient testimonials
- Professional awards integration

## Custom Domain (Optional)
1. Add domain in Vercel dashboard
2. Update DNS records as instructed
3. SSL automatically configured

Your professional pharmacy website will be live on Vercel with global CDN and automatic scaling.