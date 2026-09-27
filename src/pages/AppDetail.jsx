import { Download, Share2, Star, AlertCircle } from 'lucide-react';
import { useParams } from 'react-router-dom';
import MediaGallery from '../components/MediaGallery';
import AboutSection from '../components/AboutSection';
import RatingsReviews from '../components/RatingsReviews';
import customerAppDetails from '../data/customerAppDetails.json';
import driverAppDetails from '../data/driverAppDetails.json';
import mockReviews from '../data/mockReviews.json';

export default function AppDetail() {
  const { appSlug } = useParams();
  const appDetails = appSlug === 'customer' ? customerAppDetails : driverAppDetails;
  const reviews = appSlug === 'customer' ? mockReviews.customerReviews : mockReviews.driverReviews;

  return (
    <div className="space-y-8">
      {/* App Header */}
      <div className="bg-gradient-to-br from-play-gray-50 to-white rounded-xl overflow-hidden border border-play-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 md:p-8">
          {/* App Icon & Basic Info */}
          <div className="md:col-span-1">
            <div className="text-8xl mb-4 text-center md:text-left">{appDetails.icon}</div>
          </div>

          {/* App Info */}
          <div className="md:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-play-gray-900 mb-2">
              {appDetails.name}
            </h1>
            <p className="text-lg text-play-gray-600 mb-4">{appDetails.developer}</p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-lg">
                <Star size={18} className="fill-yellow-500 text-yellow-500" />
                <div>
                  <p className="text-sm font-semibold text-yellow-900">{appDetails.rating}</p>
                  <p className="text-xs text-yellow-700">{appDetails.ratingCount?.toLocaleString()} reviews</p>
                </div>
              </div>

              <div className="bg-blue-50 px-4 py-2 rounded-lg">
                <p className="text-sm font-semibold text-blue-900">📥 {appDetails.downloads}</p>
              </div>

              <div className="bg-green-50 px-4 py-2 rounded-lg">
                <p className="text-sm font-semibold text-green-900">📏 {appDetails.size}</p>
              </div>

              <div className="bg-purple-50 px-4 py-2 rounded-lg">
                <p className="text-sm font-semibold text-purple-900">🎯 {appDetails.contentRating}</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              {appDetails.playStoreLink ? (
                <a href={appDetails.playStoreLink} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1 text-center justify-center flex items-center gap-2">
                  <Download size={20} />
                  Get on Play Store
                </a>
              ) : (
                <a href="/autoclicker.apk" download="autoclicker.apk" className="btn-primary flex-1 text-center justify-center flex items-center gap-2">
                  <Download size={20} />
                  Download APK
                </a>
              )}
              <button className="btn-secondary">
                <Share2 size={20} />
                Share
              </button>
            </div>
          </div>
        </div>

        {/* Version Info Bar */}
        <div className="bg-play-gray-100 px-6 md:px-8 py-3 flex flex-wrap items-center justify-between text-sm">
          <div>
            <span className="text-play-gray-700">
              <strong>Latest Version:</strong> v{appDetails.version} •{' '}
              <strong>Released:</strong>{' '}
              {new Date(appDetails.releaseDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </span>
          </div>
          <div className="flex items-center gap-2 text-play-gray-600 mt-2 sm:mt-0">
            <AlertCircle size={16} />
            <span>Last updated recently</span>
          </div>
        </div>
      </div>

      {/* Media Gallery */}
      <MediaGallery screenshots={appDetails.screenshotUrls} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* About & What's New */}
          <AboutSection appDetails={appDetails} />

          {/* Ratings & Reviews */}
          <RatingsReviews
            appDetails={appDetails}
            reviews={reviews}
            appType={appSlug}
          />
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-4">
          {/* Quick Actions Card */}
          <div className="card p-6 sticky top-24">
            <h3 className="font-bold text-play-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              {appDetails.playStoreLink ? (
                <a href={appDetails.playStoreLink} target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center flex items-center gap-2">
                  <Download size={18} />
                  Get on Play Store
                </a>
              ) : (
                <a href="/autoclicker.apk" download="autoclicker.apk" className="btn-primary w-full justify-center flex items-center gap-2">
                  <Download size={18} />
                  Download APK
                </a>
              )}
              <button className="btn-secondary w-full justify-center">
                <Share2 size={18} />
                Share App
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="card p-6">
            <h3 className="font-bold text-play-gray-900 mb-4">App Information</h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-play-gray-600 mb-1">Version</p>
                <p className="font-semibold text-play-gray-900">{appDetails.version}</p>
              </div>
              <div>
                <p className="text-play-gray-600 mb-1">Size</p>
                <p className="font-semibold text-play-gray-900">{appDetails.size}</p>
              </div>
              <div>
                <p className="text-play-gray-600 mb-1">Category</p>
                <p className="font-semibold text-play-gray-900">{appDetails.category}</p>
              </div>
              <div>
                <p className="text-play-gray-600 mb-1">Developer</p>
                <p className="font-semibold text-play-gray-900">{appDetails.developer}</p>
              </div>
              <div>
                <p className="text-play-gray-600 mb-1">Content Rating</p>
                <p className="font-semibold text-play-gray-900">{appDetails.contentRating}</p>
              </div>
            </div>
          </div>

          {/* Developer Contact */}
          <div className="card p-6">
            <h3 className="font-bold text-play-gray-900 mb-4">Contact Developer</h3>
            <div className="space-y-2 text-sm">
              <a href={`mailto:${appDetails.links.contactEmail}`} className="text-primary-600 hover:underline break-all">
                {appDetails.links.contactEmail}
              </a>
              <p className="text-play-gray-700 pt-2">
                <a href={appDetails.links.website} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                  Visit Website
                </a>
              </p>
            </div>
          </div>

          {/* Legal Links */}
          <div className="card p-6">
            <div className="space-y-2 text-sm">
              <a href={appDetails.links.privacyPolicy} className="text-primary-600 hover:underline block">
                Privacy Policy
              </a>
              <a href={appDetails.links.termsOfService} className="text-primary-600 hover:underline block">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
