import { Search, User, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleAppSwitch = (app) => {
    navigate(`/app/${app}`);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-play-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between px-4 py-3">
          <div className="flex flex-col cursor-pointer" onClick={() => navigate('/')}>
            <span className="font-bold text-xl text-primary-600">▶ MS Ramachandran App Store</span>
            <span className="text-xs text-play-gray-500 italic mt-0.5">ஆட்டோ ஓட்டுநரால் உருவாக்கப்பட்ட ஆப்</span>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-play-gray-100 rounded-lg"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-between px-6 py-4">
          <div className="flex flex-col cursor-pointer" onClick={() => navigate('/')}>
            <span className="font-bold text-2xl text-primary-600">▶ MS Ramachandran App Store</span>
            <span className="text-xs text-play-gray-500 italic mt-0.5">ஆட்டோ ஓட்டுநரால் உருவாக்கப்பட்ட ஆப்</span>
            <span className="text-xs text-primary-700 font-medium mt-0.5">உங்களுடைய டேட்டாவுக்கு நான் முழுவதும் கேரண்டி.</span>
            <span className="text-xs text-play-gray-400 italic mt-0.5">— எம். எஸ். ராமச்சந்திரன், உங்களில் ஒரு ஆட்டோ ஓட்டுநர்.</span>
          </div>

          <div className="flex-1 mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search apps..."
                className="w-full px-4 py-2 pl-4 pr-10 border border-play-gray-300 rounded-full focus:outline-none focus:border-primary-600"
              />
              <Search size={20} className="absolute right-3 top-2.5 text-play-gray-500" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-play-gray-100 rounded-full transition">
              <User size={24} className="text-play-gray-700" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-play-gray-100 p-4 bg-white">
            <div className="mb-4">
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search apps..."
                  className="w-full px-4 py-2 pl-4 pr-10 border border-play-gray-300 rounded-full focus:outline-none focus:border-primary-600"
                />
                <Search size={20} className="absolute right-3 top-2.5 text-play-gray-500" />
              </div>
            </div>
            <nav className="space-y-2">
              <button
                onClick={() => { handleAppSwitch('driver'); setIsMenuOpen(false); }}
                className="block w-full text-left px-4 py-2 hover:bg-play-gray-100 rounded-lg font-medium text-play-gray-900"
              >
                👨‍💼 Driver App
              </button>
              <button className="block w-full text-left px-4 py-2 hover:bg-play-gray-100 rounded-lg flex items-center gap-2 text-play-gray-900">
                <User size={20} /> Profile
              </button>
            </nav>
          </div>
        )}

        {/* Desktop Navigation Tabs */}
        <div className="hidden md:flex border-t border-play-gray-100">
          <nav className="flex items-center gap-8 px-6">
            <button
              onClick={() => navigate('/')}
              className="py-4 font-medium text-play-gray-900 hover:text-primary-600 border-b-2 border-transparent hover:border-primary-600 transition"
            >
              Home
            </button>
            <button
              onClick={() => handleAppSwitch('driver')}
              className="py-4 font-medium text-play-gray-700 hover:text-primary-600 border-b-2 border-transparent hover:border-primary-600 transition"
            >
              👨‍💼 Driver App
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
