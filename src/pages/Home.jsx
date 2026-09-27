import { Download, TrendingUp } from 'lucide-react';
import AppCard from '../components/AppCard';
import appsData from '../data/appsData.json';

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to MS Ramachandran Apps</h1>
        <p className="text-lg md:text-xl mb-6 text-white/90 max-w-2xl">
          Experience the future of urban mobility. Download our app and start your journey today!
        </p>
        <button className="bg-white text-primary-600 font-bold px-8 py-3 rounded-lg hover:bg-play-gray-50 transition-colors flex items-center gap-2">
          <Download size={20} />
          Get Started
        </button>
      </div>

      {/* Featured Apps */}
      <section>
        <div className="flex items-center gap-2 mb-8">
          <TrendingUp size={28} className="text-primary-600" />
          <h2 className="text-3xl font-bold text-play-gray-900">Featured Apps</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {appsData.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="card p-8 md:p-12">
        <h2 className="text-3xl font-bold text-play-gray-900 mb-6">Why Choose RideHub?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-play-gray-900 mb-3">🚀 Fast & Reliable</h3>
            <p className="text-play-gray-700">
              Book rides in seconds with our streamlined interface. Get matched with drivers instantly.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-play-gray-900 mb-3">💰 Transparent Pricing</h3>
            <p className="text-play-gray-700">
              See exact fares before booking. No hidden charges or surprise costs. Pay securely online or in cash.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-play-gray-900 mb-3">🛡️ Safety First</h3>
            <p className="text-play-gray-700">
              All drivers are verified and background-checked. Share your trip with family for peace of mind.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-play-gray-900 mb-3">⭐ Quality Service</h3>
            <p className="text-play-gray-700">
              Rate every driver and help us maintain the highest standards of service. Average rating: 4.5+
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card p-6 text-center">
          <div className="text-4xl font-bold text-primary-600 mb-2">50K+</div>
          <p className="text-play-gray-700 font-medium">Active Drivers</p>
        </div>
        <div className="card p-6 text-center">
          <div className="text-4xl font-bold text-primary-600 mb-2">100K+</div>
          <p className="text-play-gray-700 font-medium">Happy Riders</p>
        </div>
        <div className="card p-6 text-center">
          <div className="text-4xl font-bold text-primary-600 mb-2">1M+</div>
          <p className="text-play-gray-700 font-medium">Rides Completed</p>
        </div>
        <div className="card p-6 text-center">
          <div className="text-4xl font-bold text-primary-600 mb-2">4.5★</div>
          <p className="text-play-gray-700 font-medium">Average Rating</p>
        </div>
      </section>
    </div>
  );
}
