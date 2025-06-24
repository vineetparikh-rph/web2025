# Vercel Deployment Guide for Georgies Pharmacy

## Quick Setup

### 1. Environment Variables Required
Add these to your Vercel project settings:
```
NODE_ENV=production
DATABASE_URL=your_postgres_connection_string
SESSION_SECRET=your_secure_session_secret
```

### 2. Build Configuration
The project uses the existing build scripts:
- `npm run build` - Builds both client and server
- Client assets go to `dist/public`
- Server bundle goes to `dist/index.js`

### 3. Deployment Steps
1. Push your code to GitHub repository
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

## Project Structure for Vercel

```
├── api/
│   └── index.js          # Serverless function entry point
├── dist/
│   ├── public/           # Static client assets
│   └── index.js          # Server bundle
├── vercel.json           # Vercel configuration
└── .vercelignore         # Files to ignore during deployment
```

## Vercel Configuration Explained

The `vercel.json` configures:
- Static build for client assets
- Serverless function for API routes
- Proper routing between static and dynamic content
- 30-second function timeout for complex operations

## Database Setup

1. Create PostgreSQL database (recommended: Neon, Supabase, or Railway)
2. Add connection string to Vercel environment variables
3. Run database migrations if needed

## Post-Deployment

1. Test all pharmacy locations pages
2. Verify prescription management functionality
3. Check testimonials and interactive elements
4. Test form submissions and API endpoints

## Custom Domain (Optional)

1. Add custom domain in Vercel dashboard
2. Update DNS records as instructed
3. SSL certificate automatically provisioned

## Monitoring

Vercel provides:
- Function logs and analytics
- Performance monitoring
- Error tracking
- Deployment history

Your pharmacy website will be live at: `https://your-project.vercel.app`