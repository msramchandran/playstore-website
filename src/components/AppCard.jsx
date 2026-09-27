import { Star, Download } from 'lucide-react';

export default function AppCard({ app }) {
  return (
    <div className="card hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="text-5xl mb-4">{app.icon}</div>
        <h2 className="text-xl font-bold text-play-gray-900 mb-1">{app.name}</h2>
        <p className="text-sm text-play-gray-600 mb-4">{app.developer}</p>

        <div className="flex items-center gap-4 mb-4 flex-wrap">
          <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full">
            <Star size={16} className="text-yellow-500 fill-yellow-500" />
            <span className="font-semibold text-sm">{app.rating}</span>
          </div>
          <span className="text-xs text-play-gray-600 bg-play-gray-100 px-3 py-1 rounded-full">
            {app.downloads}
          </span>
          <span className="text-xs text-play-gray-600 bg-play-gray-100 px-3 py-1 rounded-full">
            {app.size}
          </span>
        </div>

        <p className="text-sm text-play-gray-700 mb-4 line-clamp-2">{app.description}</p>

        {app.playStoreLink ? (
          <a href={app.playStoreLink} target="_blank" rel="noopener noreferrer" className="btn-primary w-full flex items-center justify-center gap-2">
            <Download size={18} />
            Get on Play Store
          </a>
        ) : (
          <a href={`/${app.apkFileName || 'app.apk'}`} download={app.apkFileName || 'app.apk'} className="btn-primary w-full flex items-center justify-center gap-2">
            <Download size={18} />
            Download APK
          </a>
        )}
      </div>
    </div>
  );
}
