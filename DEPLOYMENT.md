# Deployment Guide

Deploy your Play Store website to various platforms.

## Build the Project

```bash
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

## Option 1: Vercel (Recommended - Easiest)

### Setup
```bash
npm install -g vercel
vercel login
```

### Deploy
```bash
vercel
```

Follow prompts. Your site goes live immediately with:
- Free HTTPS & custom domain
- Automatic deployments on git push
- Environment variables support

### Setup Custom Domain
```bash
vercel domains add yourdomain.com
```

---

## Option 2: Netlify

### Method A: CLI
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=dist
```

### Method B: Drag & Drop
1. Go to [netlify.com](https://netlify.com)
2. Sign up/login
3. Drag & drop `dist` folder
4. Boom! Live in 30 seconds

### Method C: GitHub Integration
1. Push code to GitHub
2. Connect repo to Netlify
3. Auto-deploy on every push

---

## Option 3: GitHub Pages

### Setup
```bash
# Update vite.config.js
# Change base: '/' to base: '/my-play-store-website/'
```

### Deploy
```bash
npm run build
npx gh-pages -d dist
```

Visit: `https://yourusername.github.io/my-play-store-website/`

---

## Option 4: Firebase Hosting

### Setup
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
```

### Deploy
```bash
npm run build
firebase deploy
```

---

## Option 5: AWS S3 + CloudFront

### Setup
```bash
npm install -g aws-cli
aws configure
```

### Deploy
```bash
# Create S3 bucket
aws s3 mb s3://my-play-store-website

# Upload files
npm run build
aws s3 sync dist/ s3://my-play-store-website --delete

# Optional: Setup CloudFront for CDN
```

---

## Option 6: Docker

### Create Dockerfile
```dockerfile
# Build stage
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
```

### Build & Run
```bash
docker build -t play-store-website .
docker run -p 3000:3000 play-store-website
```

---

## Environment-Specific Configuration

### Production API
Update `.env.production`:
```env
VITE_API_URL=https://api.yourdomain.com
VITE_APP_NAME=RideHub
```

### Staging API
Update `.env.staging`:
```env
VITE_API_URL=https://staging-api.yourdomain.com
VITE_APP_NAME=RideHub (Staging)
```

### Build with specific env
```bash
npm run build --mode staging
```

---

## Performance Optimization

### Check Build Size
```bash
npm install -g bundlesize
```

### Enable Gzip Compression
Most hosting platforms do this automatically. If not:

**Nginx:**
```nginx
gzip on;
gzip_types text/plain text/css text/javascript application/json;
```

**Apache:**
```apache
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/css text/javascript
</IfModule>
```

### Enable Caching
Set these headers on your server:

```
Cache-Control: public, max-age=31536000, immutable  # JS/CSS
Cache-Control: no-cache, must-revalidate  # HTML
```

---

## SSL Certificate

Most modern hosting (Vercel, Netlify, GitHub Pages) provide free HTTPS.

For self-hosted, use Let's Encrypt:
```bash
# Using Certbot
certbot certonly --standalone -d yourdomain.com
```

---

## CI/CD Pipeline

### GitHub Actions Example
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - run: npm install
      - run: npm run build
      
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

Auto-deploy on every push to main!

---

## Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] Navigation works (Home, Customer, Driver)
- [ ] Responsive on mobile
- [ ] Images load properly
- [ ] Links work
- [ ] API calls successful (if connected)
- [ ] Reviews form works
- [ ] Download button works
- [ ] Footer links functional
- [ ] Performance good (use Chrome DevTools)
- [ ] SEO meta tags present
- [ ] Analytics configured (Google Analytics, etc.)

---

## Monitoring

### Google Analytics
Add to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Error Tracking
Use Sentry for error monitoring:
```bash
npm install @sentry/react @sentry/tracing
```

---

## Domain Management

### Point Custom Domain to Vercel
1. Update domain DNS records
2. Add your domain in Vercel dashboard
3. Vercel guides you through setup

### Common DNS Records
```
Type: A
Name: @
Value: 76.76.19.165

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## Troubleshooting

### Build Fails
```bash
rm -rf node_modules dist
npm install
npm run build
```

### Blank Page After Deploy
- Check browser console for errors
- Verify API URL in .env
- Check if all assets loaded

### Routes Not Working
Make sure server redirects all traffic to index.html:

**Vercel**: Auto-configured ✓
**Netlify**: Configure redirects:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**GitHub Pages**: Add 404.html:
```html
<!-- 404.html - same as index.html -->
```

---

## Cost Comparison

| Platform | Free Tier | Custom Domain |
|----------|-----------|---------------|
| Vercel   | Yes       | Yes           |
| Netlify  | Yes       | Yes           |
| GitHub Pages | Yes   | Yes           |
| Firebase | Yes (limited) | Yes        |
| AWS S3   | No        | Yes           |

**Recommendation**: Start with **Vercel** or **Netlify** (both free!)

---

## Support

- **Vercel**: vercel.com/docs
- **Netlify**: docs.netlify.com
- **GitHub Pages**: docs.github.com/pages
- **Firebase**: firebase.google.com/docs

---

**Happy Deploying! 🚀**

Your app is now live on the internet!
