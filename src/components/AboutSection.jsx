import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function AboutSection({ appDetails }) {
  const [expandedAbout, setExpandedAbout] = useState(false);
  const [expandedWhatsNew, setExpandedWhatsNew] = useState(false);

  const latestVersion = appDetails.versions?.[0];

  return (
    <div className="space-y-4">
      {/* About This App */}
      <div className="card">
        <button
          onClick={() => setExpandedAbout(!expandedAbout)}
          className="w-full p-6 flex items-center justify-between hover:bg-play-gray-50 transition"
        >
          <h3 className="text-xl font-bold text-play-gray-900">About this app</h3>
          <ChevronDown
            size={24}
            className={`text-play-gray-600 transition-transform ${expandedAbout ? 'rotate-180' : ''}`}
          />
        </button>

        {expandedAbout && (
          <div className="px-6 pb-6 border-t border-play-gray-100">
            <p className="text-play-gray-700 leading-relaxed whitespace-pre-line mb-4">
              {appDetails.fullDescription}
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <h4 className="font-semibold text-play-gray-900 mb-2">Permissions Required:</h4>
                <div className="flex flex-wrap gap-2">
                  {appDetails.permissions?.map((permission, idx) => (
                    <span key={idx} className="bg-play-gray-100 text-play-gray-700 px-3 py-1 rounded-full text-sm">
                      {permission}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-play-gray-900 mb-2">App Information:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-play-gray-600">Size</p>
                    <p className="font-semibold text-play-gray-900">{appDetails.size}</p>
                  </div>
                  <div>
                    <p className="text-play-gray-600">Category</p>
                    <p className="font-semibold text-play-gray-900">{appDetails.category}</p>
                  </div>
                  <div>
                    <p className="text-play-gray-600">Rating</p>
                    <p className="font-semibold text-play-gray-900">{appDetails.contentRating}</p>
                  </div>
                  <div>
                    <p className="text-play-gray-600">Version</p>
                    <p className="font-semibold text-play-gray-900">{appDetails.version}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* What's New */}
      <div className="card">
        <button
          onClick={() => setExpandedWhatsNew(!expandedWhatsNew)}
          className="w-full p-6 flex items-center justify-between hover:bg-play-gray-50 transition"
        >
          <div>
            <h3 className="text-xl font-bold text-play-gray-900">What's New</h3>
            <p className="text-sm text-play-gray-600">Version {latestVersion?.version}</p>
          </div>
          <ChevronDown
            size={24}
            className={`text-play-gray-600 transition-transform ${expandedWhatsNew ? 'rotate-180' : ''}`}
          />
        </button>

        {expandedWhatsNew && (
          <div className="px-6 pb-6 border-t border-play-gray-100">
            <p className="text-sm text-play-gray-600 mb-3">
              Released on {new Date(latestVersion?.releaseDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
            <p className="text-play-gray-700 leading-relaxed whitespace-pre-line text-sm">
              {latestVersion?.releaseNotes}
            </p>

            <div className="mt-6 pt-6 border-t border-play-gray-100">
              <h4 className="font-semibold text-play-gray-900 mb-4">Version History</h4>
              <div className="space-y-3">
                {appDetails.versions?.slice(1).map((version, idx) => (
                  <div key={idx} className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-play-gray-900">v{version.version}</p>
                      <p className="text-xs text-play-gray-600">
                        {new Date(version.releaseDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
