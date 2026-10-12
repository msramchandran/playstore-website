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

      {/* ⚠️ Orange Warning Box */}
      <div className="bg-orange-50 border border-orange-300 rounded-xl p-5 flex gap-4 items-start">
        <div className="text-2xl mt-0.5">⚠️</div>
        <div>
          <p className="font-bold text-orange-800 mb-1 text-sm">முக்கிய குறிப்பு:</p>
          <p className="text-orange-700 text-sm leading-relaxed">
            ஆட்டோ கிளீக்கர் (Auto Clicker) பயன்படுத்தும் பயனர்கள் அதிகமாக சவாரிகளை கேன்சல் செய்ய வேண்டாம். அவ்வாறு செய்தால் உங்கள் ஐடி பிளாக் செய்யப்பட அதிக வாய்ப்புள்ளது. இதை முழுமையாகப் புரிந்துகொண்டு ஆட்டோ கிளீக்கர் ஆப்பை டவுன்லோட் செய்யவும்.
          </p>
        </div>
      </div>

      {/* 📋 Step-by-Step Procedure Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 md:p-10">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-extrabold text-green-800 leading-snug">
            AZHAI AUTO CLICKER &amp; PARTNER APPS
          </h2>
          <p className="text-base md:text-lg font-bold text-green-700 mt-1">
            Download &amp; Login Step-by-Step Procedure!
          </p>
          <span className="inline-block mt-2 bg-green-600 text-white text-xs font-bold px-4 py-1 rounded-full tracking-wide">
            100% FREE
          </span>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Step 1 */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-green-100 flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-600 text-white font-extrabold text-lg flex items-center justify-center shadow">
              1
            </div>
            <div>
              <p className="font-bold text-green-800 mb-1 flex items-center gap-1">
                📸 Instagram Link
              </p>
              <p className="text-sm text-play-gray-700 leading-relaxed">
                Instagram-ல் <span className="font-semibold text-green-700">@azhai_official</span> பக்கத்திற்குச் சென்று Bio-வில் உள்ள லிங்க்கை கிளிக் செய்யவும்.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-green-100 flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-600 text-white font-extrabold text-lg flex items-center justify-center shadow">
              2
            </div>
            <div>
              <p className="font-bold text-green-800 mb-1 flex items-center gap-1">
                📥 Download the Apps
              </p>
              <p className="text-sm text-play-gray-700 leading-relaxed">
                Web Page-ல் இருந்து <span className="font-semibold text-green-700">'Azhai Auto Click APK'</span> (3rd option) டவுன்லோட் செய்யவும். மற்றும் Play Store-ல் இருந்து <span className="font-semibold text-green-700">'Azhai Partner'</span> ஆப்பை டவுன்லோட் செய்யவும்.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-green-100 flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-600 text-white font-extrabold text-lg flex items-center justify-center shadow">
              3
            </div>
            <div>
              <p className="font-bold text-green-800 mb-1 flex items-center gap-1">
                📋 Partner App Registration
              </p>
              <p className="text-sm text-play-gray-700 leading-relaxed">
                Azhai Partner ஆப்பில் மொபைல் எண் மற்றும் OTP கொடுத்து நுழையவும். பின்னர் <span className="font-semibold text-green-700">Vehicle RC</span> மற்றும் <span className="font-semibold text-green-700">Aadhaar Card</span> அப்லோட் செய்து Admin Approval-க்காக காத்திருக்கவும்.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-green-100 flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-600 text-white font-extrabold text-lg flex items-center justify-center shadow">
              4
            </div>
            <div>
              <p className="font-bold text-green-800 mb-1 flex items-center gap-1">
                🔑 ID and Auto Login
              </p>
              <p className="text-sm text-play-gray-700 leading-relaxed">
                Azhai Auto Clicker ID-ஐ (உதாரணமாக <span className="font-semibold text-green-700 font-mono">AZH12345678</span>) காபி செய்து, Azhai Auto Click ஆப்பைத் திறந்து <span className="font-semibold text-green-700">"Enter ID"</span> என்ற இடத்தில் பதிவிட்டு Login செய்யவும்.
              </p>
            </div>
          </div>

        </div>
      </section>

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
