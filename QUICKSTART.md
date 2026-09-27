# Quick Start Guide

## 5-Minute Setup

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```
Open http://localhost:3000 in your browser

### Step 3: Explore
- **Home Page**: Featured apps showcase
- **Customer App**: Click "🚗 Customer App" tab or button
- **Driver App**: Click "👨‍💼 Driver App" tab or button
- **Reviews**: Scroll down to see ratings and write a review
- **Download**: Click "Download APK" button (mock)

## Making Your First Changes

### Change App Names
Edit `src/data/appsData.json`:
```json
{
  "id": 1,
  "name": "Your App Name",
  "description": "Your description",
  ...
}
```

### Update App Details
Edit `src/data/customerAppDetails.json`:
```json
{
  "name": "Your App Name",
  "rating": 4.5,
  "description": "Your description",
  "fullDescription": "Detailed description",
  ...
}
```

### Add Screenshots
Update `screenshotUrls` in the app details JSON:
```json
"screenshotUrls": [
  "https://your-cdn.com/screenshot-1.jpg",
  "https://your-cdn.com/screenshot-2.jpg"
]
```

### Customize Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: {
    600: '#your-color',
    700: '#your-darker-color',
  }
}
```

### Update Footer
Edit `src/components/Footer.jsx` to change contact info, social links, etc.

## Production Build

```bash
# Create optimized build
npm run build

# Test production build
npm run preview
```

Output will be in `dist/` folder

## Connect to Real API

### Example: Fetch App Details from API

**Before:**
```jsx
import appDetails from '../data/customerAppDetails.json';
```

**After:**
```jsx
const [appDetails, setAppDetails] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
  fetch('https://api.example.com/apps/customer')
    .then(res => res.json())
    .then(data => {
      setAppDetails(data);
      setLoading(false);
    })
    .catch(err => console.error(err));
}, []);

if (loading) return <div>Loading...</div>;
```

### Example: Fetch Reviews from API

```jsx
const [reviews, setReviews] = useState([]);

useEffect(() => {
  fetch(`https://api.example.com/apps/${appSlug}/reviews`)
    .then(res => res.json())
    .then(data => setReviews(data));
}, [appSlug]);
```

### Example: Submit Review to API

Update `ReviewForm.jsx`:
```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  
  const reviewData = {
    rating,
    title,
    content: review,
    appId: appType === 'customer' ? 1 : 2,
  };

  try {
    const response = await fetch('https://api.example.com/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reviewData),
    });
    
    if (response.ok) {
      setSubmitted(true);
      setTimeout(() => onClose(), 2000);
    }
  } catch (error) {
    console.error('Error submitting review:', error);
  }
};
```

## File Structure Quick Reference

- **Pages**: `src/pages/` - Home and AppDetail pages
- **Components**: `src/components/` - Reusable UI components
- **Data**: `src/data/` - JSON mock data
- **Styles**: `src/index.css` - Global styles
- **Config**: `tailwind.config.js`, `vite.config.js`

## Common Commands

```bash
# Development
npm run dev           # Start dev server

# Production
npm run build         # Create production build
npm run preview       # Preview production build

# Deployment
vercel               # Deploy to Vercel
npm run build && firebase deploy  # Deploy to Firebase
```

## Environment Variables

Create `.env.local`:
```
VITE_API_URL=https://api.example.com
VITE_APP_ID=your-app-id
```

Access in code:
```jsx
const apiUrl = import.meta.env.VITE_API_URL;
```

## Need Help?

1. Check `README.md` for detailed documentation
2. Review component files - they have helpful comments
3. Check the Play Store for UI inspiration

---

**Next Step**: Customize the app details and test locally!
