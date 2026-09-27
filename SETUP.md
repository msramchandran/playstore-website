# Play Store Website - Setup Instructions

## Step 1: Initialize the Vite + React Project
```bash
npm create vite@latest . -- --template react
```

## Step 2: Install Dependencies
```bash
npm install
npm install -D tailwindcss postcss autoprefixer
npm install react-router-dom lucide-react
```

## Step 3: Initialize Tailwind CSS
```bash
npx tailwindcss init -p
```

## Step 4: Project Structure
Run these commands to create the folder structure:
```bash
mkdir -p src/components src/pages src/data src/assets/screenshots
mkdir -p src/assets/icons src/layouts
```

## Step 5: Copy all component files from this repository

## Step 6: Update Configuration Files
- Copy `tailwind.config.js`
- Copy `vite.config.js`
- Copy `src/index.css`

## Step 7: Run Development Server
```bash
npm run dev
```

## Folder Structure
```
my-play-store-website/
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   └── screenshots/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── AppCard.jsx
│   │   ├── MediaGallery.jsx
│   │   ├── AboutSection.jsx
│   │   ├── RatingsReviews.jsx
│   │   ├── Footer.jsx
│   │   └── ReviewForm.jsx
│   ├── pages/
│   │   ├── AppDetail.jsx
│   │   └── Home.jsx
│   ├── layouts/
│   │   └── MainLayout.jsx
│   ├── data/
│   │   ├── appsData.json
│   │   ├── customerAppDetails.json
│   │   ├── driverAppDetails.json
│   │   └── mockReviews.json
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Next Steps
1. Create all component files
2. Add mock data to `src/data/`
3. Configure routing in `src/App.jsx`
4. Update `src/index.css` with Tailwind directives
5. Test responsive design on mobile
