# API Integration Guide

This guide shows how to replace mock JSON data with real API calls.

## Overview

The app uses JSON files in `src/data/` for mock data. To connect to a real backend, follow this pattern:

## Environment Setup

Create `.env.local` in project root:

```env
VITE_API_URL=https://api.yourdomain.com
VITE_API_KEY=your-api-key-here
```

Access in components:

```jsx
const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
```

## 1. App Details API

### Current Implementation (Mock)

```jsx
import customerAppDetails from "../data/customerAppDetails.json";
```

### New Implementation (API)

```jsx
import { useEffect, useState } from 'react';

export default function AppDetail() {
  const [appDetails, setAppDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAppDetails = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/apps/customer`
        );

        if (!response.ok) throw new Error('Failed to fetch');

        const data = await response.json();
        setAppDetails(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAppDetails();
  }, []);

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-600">Error: {error}</div>;
  if (!appDetails) return null;

  return (
    // Your JSX using appDetails
  );
}
```

## 2. Reviews API

### Fetch Reviews

```jsx
const [reviews, setReviews] = useState([]);

useEffect(() => {
  fetch(`${import.meta.env.VITE_API_URL}/apps/customer/reviews`)
    .then((res) => res.json())
    .then((data) => setReviews(data));
}, []);
```

### Submit Review

Update `ReviewForm.jsx`:

```jsx
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
      body: JSON.stringify({
        appId: appType === "customer" ? 1 : 2,
        rating,
        title,
        content: review,
        author: "Guest", // Get from user auth if available
        date: new Date().toISOString(),
      }),
    });

    if (!response.ok) throw new Error("Failed to submit");

    setSubmitted(true);
    setTimeout(() => onClose(), 2000);
  } catch (error) {
    console.error("Error:", error);
    alert("Failed to submit review");
  }
};
```

## 3. Download APK

### Update Download Button

```jsx
const handleDownload = () => {
  // Option 1: Direct download link from API
  window.location.href = appDetails.versions[0].apkUrl;

  // Option 2: Track download with analytics
  fetch(`${import.meta.env.VITE_API_URL}/apps/download`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      appId: appDetails.id,
      version: appDetails.version,
      timestamp: new Date(),
    }),
  });

  // Then download
  window.location.href = appDetails.versions[0].apkUrl;
};
```

## 4. Complete AppDetail.jsx with API

```jsx
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MediaGallery from "../components/MediaGallery";
import AboutSection from "../components/AboutSection";
import RatingsReviews from "../components/RatingsReviews";

const API_URL = import.meta.env.VITE_API_URL;

export default function AppDetail() {
  const { appSlug } = useParams();
  const [appDetails, setAppDetails] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch app details
        const appResponse = await fetch(`${API_URL}/apps/${appSlug}`);
        if (!appResponse.ok) throw new Error("Failed to fetch app");
        const appData = await appResponse.json();
        setAppDetails(appData);

        // Fetch reviews
        const reviewsResponse = await fetch(
          `${API_URL}/apps/${appSlug}/reviews`,
        );
        if (!reviewsResponse.ok) throw new Error("Failed to fetch reviews");
        const reviewsData = await reviewsResponse.json();
        setReviews(reviewsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (appSlug) {
      fetchData();
    }
  }, [appSlug]);

  if (loading) return <div className="p-8 text-center">Loading...</div>;
  if (error)
    return <div className="p-8 text-center text-red-600">Error: {error}</div>;
  if (!appDetails) return null;

  return (
    <div className="space-y-8">
      {/* Your JSX */}
      <MediaGallery screenshots={appDetails.screenshotUrls} />
      <AboutSection appDetails={appDetails} />
      <RatingsReviews
        appDetails={appDetails}
        reviews={reviews}
        appType={appSlug}
      />
    </div>
  );
}
```

## 5. Expected API Response Formats

### GET /apps/{appSlug}

```json
{
  "id": 1,
  "name": "RideHub - Customer",
  "rating": 4.5,
  "ratingCount": 2534,
  "version": "2.1.0",
  "releaseDate": "2024-06-15",
  "description": "...",
  "fullDescription": "...",
  "downloads": "10K+",
  "size": "42 MB",
  "screenshotUrls": ["..."],
  "versions": [
    {
      "version": "2.1.0",
      "releaseDate": "2024-06-15",
      "releaseNotes": "...",
      "apkUrl": "https://cdn.example.com/ridehub-2.1.0.apk"
    }
  ],
  "ratingBreakdown": { "5": 60, "4": 25, "3": 10, "2": 3, "1": 2 },
  "permissions": ["..."],
  "links": { "..." }
}
```

### GET /apps/{appSlug}/reviews

```json
{
  "total": 2534,
  "reviews": [
    {
      "id": 1,
      "author": "Priya Sharma",
      "rating": 5,
      "date": "2024-06-14",
      "title": "Best ride app!",
      "content": "...",
      "helpful": 324
    }
  ]
}
```

### POST /reviews

Request:

```json
{
  "appId": 1,
  "rating": 5,
  "title": "Great app",
  "content": "Loved using it",
  "author": "User Name",
  "date": "2024-06-21T10:30:00Z"
}
```

Response:

```json
{
  "success": true,
  "id": 12345,
  "message": "Review submitted successfully"
}
```

## 6. Error Handling

Add error handling to all API calls:

```jsx
const fetchWithErrorHandling = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

// Usage
try {
  const data = await fetchWithErrorHandling(`${API_URL}/apps/customer`);
} catch (error) {
  setError("Failed to load app details. Please try again later.");
}
```

## 7. Loading & Error States

Add proper UI for loading and errors:

```jsx
if (loading) {
  return (
    <div className="p-8 text-center">
      <div className="spinner"></div>
      <p>Loading app details...</p>
    </div>
  );
}

if (error) {
  return (
    <div className="card p-8 text-center">
      <p className="text-red-600 font-semibold">⚠️ {error}</p>
      <button
        onClick={() => window.location.reload()}
        className="btn-primary mt-4"
      >
        Retry
      </button>
    </div>
  );
}
```

## 8. Caching (Optional)

```jsx
const [cache, setCache] = useState({});

const fetchWithCache = async (key, url) => {
  if (cache[key]) {
    return cache[key];
  }

  const data = await fetch(url).then((r) => r.json());
  setCache((prev) => ({ ...prev, [key]: data }));
  return data;
};
```

## 9. Testing API Calls

### Using Mock Server (Recommended for Development)

```bash
npm install -D json-server
```

Create `db.json` with mock data, then run:

```bash
json-server --watch db.json --port 3001
```

Update .env:

```env
VITE_API_URL=http://localhost:3001
```

## 10. Authentication

If API requires authentication:

```jsx
const fetchWithAuth = async (url, options = {}) => {
  const token = localStorage.getItem("authToken");

  return fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...options.headers,
    },
  });
};
```

---

**Next Steps:**

1. Set up your backend API with endpoints matching the format above
2. Update `.env.local` with your API URL
3. Replace mock data imports with API calls
4. Test thoroughly in development
5. Deploy to production

Happy coding! 🚀
