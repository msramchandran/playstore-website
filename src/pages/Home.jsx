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

      {/* 🛡️ Trust & Transparency Section */}
      <section className="rounded-2xl overflow-hidden border border-emerald-200 shadow-md">
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-emerald-700 to-green-600 px-6 py-5 flex items-center gap-3">
          <span className="text-4xl">🛡️</span>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-white font-extrabold text-xl md:text-2xl">Trust &amp; Transparency</h2>
              <span className="bg-white text-green-700 text-xs font-bold px-3 py-0.5 rounded-full flex items-center gap-1">
                ✔️ Verified Developer
              </span>
            </div>
            <p className="text-emerald-100 text-sm mt-0.5">நம்பகத்தன்மை மற்றும் வெளிப்படைத்தன்மை</p>
          </div>
        </div>

        {/* Bilingual Content */}
        <div className="bg-white grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-emerald-100">

          {/* Tamil Column */}
          <div className="p-6">
            <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3">🇮🇳 தமிழ்</p>
            <p className="text-play-gray-700 text-sm leading-7">
              சமூக வலைத்தளங்களில் விளம்பரப்படுத்தப்படும் மற்ற ஆட்டோ கிளீக்கர் ஆப்களைப் போல இல்லாமல், மற்ற auto clicker developer யாரும் உங்களுக்கு உத்தரவாதம் தரமாட்டார்கள், உங்களிடம் கருத்தையும் கேட்க மாட்டார்கள். ஆனால் நான் ஒரு Developer மற்றும் Driver — <span className="font-semibold text-emerald-700">உங்களில் ஒருவன்</span>. என்னை முழுவதும் நம்பலாம்.
            </p>
            <p className="text-play-gray-700 text-sm leading-7 mt-3">
              இதை உருவாக்கிய நான் <span className="font-bold text-emerald-700">M.S. ராமச்சந்திரன்</span> எனது முகத்தைக் காட்டி, வீடியோ மூலமாக முழுப் பொறுப்பேற்றுள்ளேன். உங்கள் மொபைல் டேட்டா பாதுகாப்பிற்கும், உங்கள் போனில் வேறு எந்த அத்துமீறிய அக்சஸ் (Access) நடக்காது என்பதற்கும் நான் <span className="font-bold text-emerald-700">100% உத்தரவாதம்</span> அளிக்கிறேன். என்னை முழுமையாக நம்பி நீங்கள் இந்த ஆப்பைத் தைரியமாக டவுன்லோட் செய்யலாம்.
            </p>
          </div>

          {/* English Column */}
          <div className="p-6 bg-emerald-50/40">
            <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3">🇬🇧 English</p>
            <p className="text-play-gray-700 text-sm leading-7">
              Unlike other third-party auto-clicker apps promoted on social media where the developers hide their identities, <span className="font-semibold text-emerald-700">I stand before you openly</span>. I have shown my face in my videos and proudly take ownership of this app.
            </p>
            <p className="text-play-gray-700 text-sm leading-7 mt-3">
              I give you a <span className="font-bold text-emerald-700">100% guarantee</span> for your data security and assure you that there is no unauthorized access to your mobile device. You can completely trust me and download this app with <span className="font-semibold text-emerald-700">peace of mind</span>.
            </p>
          </div>
        </div>

        {/* Signature Footer */}
        <div className="bg-emerald-50 border-t border-emerald-100 px-6 py-3 flex items-center gap-2">
          <span className="text-emerald-500 text-lg">✍️</span>
          <p className="text-sm text-emerald-700 italic font-medium">— M.S. Ramachandran, Auto Driver &amp; Developer</p>
        </div>
      </section>

      {/* ℹ️ Accessibility Service & Banking App Info */}
      <section className="bg-blue-50 border border-blue-200 rounded-2xl overflow-hidden shadow-sm">
        {/* Header */}
        <div className="bg-blue-600 px-6 py-4 flex items-center gap-3">
          <span className="text-3xl">ℹ️</span>
          <div>
            <h2 className="text-white font-extrabold text-lg md:text-xl">Banking Apps பற்றிய முக்கிய தகவல்</h2>
            <p className="text-blue-100 text-xs mt-0.5">Important Note regarding Banking Apps &amp; Accessibility Service</p>
          </div>
        </div>

        {/* Steps Path */}
        <div className="px-6 py-4 bg-white border-b border-blue-100 flex flex-wrap items-center gap-2 text-sm font-semibold">
          <span className="text-blue-600">📱 Settings</span>
          <span className="text-blue-400">→</span>
          <span className="text-blue-600">Accessibility</span>
          <span className="text-blue-400">→</span>
          <span className="text-blue-600">Azhai Auto Click</span>
          <span className="text-blue-400">→</span>
          <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded font-bold">OFF</span>
          <span className="text-play-gray-500 text-xs ml-1">(banking app பயன்படுத்தும்போது)</span>
        </div>

        {/* Bilingual Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-blue-100">

          {/* Tamil Column */}
          <div className="p-6">
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">🇮🇳 தமிழ்</p>
            <p className="text-play-gray-700 text-sm leading-7">
              இந்த ஆட்டோ கிளீக்கர் ஆப் செயல்பட <span className="font-semibold text-blue-700">'Accessibility Service'</span> (அணுகல்தன்மை) அனுமதி தேவைப்படுகிறது. எனவே, நீங்கள் பேங்கிங் (Banking) ஆப்களைத் திறக்கும்போது <span className="font-semibold text-orange-600">பாதுகாப்பு எச்சரிக்கை (Security Warning)</span> வரலாம்.
            </p>
            <p className="text-play-gray-700 text-sm leading-7 mt-3">
              இதைப் பார்த்து <span className="font-bold text-green-700">பயப்பட வேண்டாம்</span>. இது அனைத்து பேங்கிங் ஆப்களிலும் உள்ள ஒரு சாதாரண பாதுகாப்பு முறை மட்டுமே. உங்கள் பேங்கிங் ஆப்பை பயன்படுத்த: <span className="font-semibold text-blue-700">Settings → Accessibility → "Azhai Auto Click"</span> அனுமதியை தற்காலிகமாக <span className="font-bold text-red-600">ஆஃப் (Turn Off)</span> செய்துவிட்டு பயன்படுத்தலாம். மீண்டும் சவாரிக்கு ஆட்டோ கிளீக்கர் தேவைப்படும்போது அதை <span className="font-bold text-green-600">ஆன் (Turn On)</span> செய்து கொள்ளலாம்.
            </p>
          </div>

          {/* English Column */}
          <div className="p-6 bg-blue-50/50">
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">🇬🇧 English</p>
            <p className="text-play-gray-700 text-sm leading-7">
              Since this auto-clicker utilizes the Android <span className="font-semibold text-blue-700">"Accessibility Service"</span> to function, some banking applications might display a <span className="font-semibold text-orange-600">security warning</span> or restrict access.
            </p>
            <p className="text-play-gray-700 text-sm leading-7 mt-3">
              <span className="font-bold text-green-700">Please do not panic.</span> This is a standard security measure by banking apps when accessibility services are active. To use your banking apps smoothly, simply go to <span className="font-semibold text-blue-700">Settings → Accessibility</span>, and temporarily <span className="font-bold text-red-600">turn OFF</span> the permission for <span className="font-semibold text-blue-700">"Azhai Auto Click"</span>. You can easily <span className="font-bold text-green-600">turn it back ON</span> when you need to use the auto-clicker for rides.
            </p>
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
