# RideHub Play Store Website

A professional, fully responsive Play Store-style landing page for ride-hailing apps (Customer & Driver). Built with React, Vite, Tailwind CSS, and React Router.

## 🚀 Project Overview

This is a complete Play Store replica featuring:
- **Dual App Showcase**: Customer and Driver app pages
- **Play Store Design**: Authentic Google Play Store-inspired UI
- **Fully Responsive**: Mobile-first, works on all devices
- **Dynamic Content**: Mock JSON data for easy API integration
- **Rich Features**: Screenshots gallery, ratings, reviews, version history

## 📋 Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 5.0.0
- **Styling**: Tailwind CSS 3.4.1
- **Routing**: React Router 7
- **Icons**: Lucide React
- **Node.js**: v18.18.0 or higher

## 📁 Project Structure

```
my-play-store-website/
├── src/
│   ├── assets/
│   │   ├── icons/               # App icons (placeholder)
│   │   └── screenshots/         # App screenshots (placeholder)
│   ├── components/
│   │   ├── Header.jsx          # Navigation header with search
│   │   ├── AppCard.jsx         # Featured app card component
│   │   ├── MediaGallery.jsx    # Scrollable screenshots gallery
│   │   ├── AboutSection.jsx    # About & What's New section
│   │   ├── RatingsReviews.jsx  # Ratings breakdown & reviews
│   │   ├── ReviewForm.jsx      # Write review modal
│   │   └── Footer.jsx          # Professional footer
│   ├── layouts/
│   │   └── MainLayout.jsx      # Main layout wrapper
│   ├── pages/
│   │   ├── Home.jsx            # Home page
│   │   └── AppDetail.jsx       # App detail page (customer/driver)
│   ├── data/
│   │   ├── appsData.json       # Apps list
│   │   ├── customerAppDetails.json  # Customer app metadata
│   │   ├── driverAppDetails.json    # Driver app metadata
│   │   └── mockReviews.json    # Mock reviews data
│   ├── App.jsx                 # Main app with routing
│   ├── main.jsx                # Entry point
│   └── index.css               # Tailwind & global styles
├── public/                     # Static assets
├── index.html                  # HTML template
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
└── package.json               # Dependencies & scripts
```

## 🛠️ Installation & Setup

### 1. Initialize the Project
```bash
# Clone or navigate to project directory
cd my-play-store-website

# Install dependencies
npm install
```

### 2. Development Server
```bash
# Start development server (runs on http://localhost:3000)
npm run dev
```

### 3. Build for Production
```bash
# Create optimized production build
npm run build

# Preview production build
npm run preview
```

## ✨ Core Features

### 1. **Navigation & Routing**
- Clean, sticky header with search bar
- Mobile-responsive hamburger menu
- Seamless navigation between Home and App pages
- Tab-based navigation for Customer/Driver apps

**Files**: `src/components/Header.jsx`, `src/App.jsx`

### 2. **Home Page**
- Hero section with CTA button
- Featured apps grid
- "Why Choose RideHub" benefits section
- Statistics cards

**File**: `src/pages/Home.jsx`

### 3. **App Detail Pages**
- Professional app header with icon, rating, downloads
- Quick action buttons (Download APK, Share)
- Version information bar

**File**: `src/pages/AppDetail.jsx`

### 4. **Media Gallery**
- Horizontal scrollable screenshots gallery
- Smooth scroll animations
- Desktop hover controls
- Mobile-friendly touch scrolling

**File**: `src/components/MediaGallery.jsx`

### 5. **About & What's New**
- Expandable "About this app" section with full description
- "What's New" section with version history
- App permissions and metadata
- Designed for easy database integration

**File**: `src/components/AboutSection.jsx`

### 6. **Ratings & Reviews**
- 5-star rating breakdown with progress bars
- Overall rating display
- Top reviews showcase
- "Write a Review" modal with star rating
- Helpful count on each review

**Files**: `src/components/RatingsReviews.jsx`, `src/components/ReviewForm.jsx`

### 7. **Professional Footer**
- Company information with contact details
- Quick links section
- Legal/Policy links
- Social media integration points
- Email subscription form
- Responsive layout

**File**: `src/components/Footer.jsx`

## 📊 Mock Data Structure

### Apps Data (`appsData.json`)
```json
[
  {
    "id": 1,
    "name": "RideHub - Customer",
    "rating": 4.5,
    "downloads": "10K+",
    "description": "...",
    // ... more fields
  }
]
```

### App Details (`customerAppDetails.json`, `driverAppDetails.json`)
```json
{
  "id": 1,
  "name": "RideHub - Customer",
  "fullDescription": "...",
  "versions": [
    {
      "version": "2.1.0",
      "releaseDate": "2024-06-15",
      "releaseNotes": "...",
      "apkUrl": "..."  // Easy to integrate with backend API
    }
  ],
  "ratingBreakdown": { "5": 60, "4": 25, ... },
  "links": {
    "contactEmail": "support@ridehub.com",
    "privacyPolicy": "...",
    "termsOfService": "..."
  }
}
```

### Reviews Data (`mockReviews.json`)
```json
{
  "customerReviews": [
    {
      "id": 1,
      "author": "Priya Sharma",
      "rating": 5,
      "date": "2024-06-14",
      "title": "Best ride app I've used!",
      "content": "...",
      "helpful": 324
    }
  ]
}
```

## 🎨 Customization Guide

### Change App Information
1. Update `src/data/customerAppDetails.json` and `src/data/driverAppDetails.json`
2. Modify app names, descriptions, versions, and download links
3. Update rating breakdowns and mock reviews

### Update Screenshots
1. Replace placeholder URLs in app details JSON:
   ```json
   "screenshotUrls": [
     "your-actual-image-url-1.jpg",
     "your-actual-image-url-2.jpg"
   ]
   ```

### Customize Colors & Styling
1. Primary color: `tailwind.config.js` → `colors.primary`
2. Gray scale: Modify `colors.play-gray`
3. Custom CSS: Edit `src/index.css`

### API Integration
The JSON structure is designed for easy API swapping:

**Before (Mock Data)**:
```jsx
import customerAppDetails from '../data/customerAppDetails.json';
```

**After (Real API)**:
```jsx
const [appDetails, setAppDetails] = useState(null);

useEffect(() => {
  fetch('/api/apps/customer')
    .then(res => res.json())
    .then(data => setAppDetails(data));
}, []);
```

### Add More Apps
1. Add new app entry to `appsData.json`
2. Create new detail JSON file (e.g., `premiumAppDetails.json`)
3. Update routing in `App.jsx` if needed

## 🔧 Development Tips

### Add New Components
```bash
mkdir src/components/YourComponent
# Create YourComponent.jsx
```

### Extend JSON Data
- Add new fields to existing JSON files
- Update component props/destructuring
- No rebuild needed (hot reload works)

### Responsive Breakpoints (Tailwind)
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

Use `md:`, `lg:` prefixes for responsive classes.

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag & drop `dist` folder to Netlify
```

### Deploy to GitHub Pages
```bash
# Update vite.config.js with correct base path
npm run build
# Upload dist folder to gh-pages branch
```

## 📝 Environment Variables

Create `.env.local` if needed:
```
VITE_API_URL=https://your-api.com
VITE_APP_NAME=RideHub
```

Use in components:
```jsx
const apiUrl = import.meta.env.VITE_API_URL;
```

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
npm run dev -- --port 3001
```

### Build Errors
```bash
# Clear cache
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Hot Reload Not Working
- Ensure Vite server is running: `npm run dev`
- Check firewall settings
- Try different browser

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [React Router](https://reactrouter.com)
- [Lucide Icons](https://lucide.dev)

## 📄 License

MIT - Feel free to use for personal and commercial projects

## 🤝 Support

For questions or issues:
1. Check this README
2. Review the code comments
3. Check component documentation

---

**Built with ❤️ for Modern Ride-Hailing Apps**

Happy coding! 🚀
