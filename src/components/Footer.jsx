import { Mail, Phone, MapPin, Heart, Share2, Share, Zap } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-play-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-6 md:p-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">▶ RideHub</h3>
            <p className="text-play-gray-400 text-sm mb-4">
              Modern ride-hailing platform connecting riders and drivers.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-play-gray-400">
                <Mail size={16} />
                <span>hello@ridehub.com</span>
              </div>
              <div className="flex items-center gap-2 text-play-gray-400">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-play-gray-400">
                <MapPin size={16} />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-play-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Features</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Careers</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Blog</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-play-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Cookie Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Accessibility</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Contact Support</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="p-2 bg-play-gray-800 rounded-lg hover:bg-primary-600 transition" title="Facebook">
                <Heart size={20} />
              </a>
              <a href="#" className="p-2 bg-play-gray-800 rounded-lg hover:bg-primary-600 transition" title="Twitter">
                <Share size={20} />
              </a>
              <a href="#" className="p-2 bg-play-gray-800 rounded-lg hover:bg-primary-600 transition" title="LinkedIn">
                <Zap size={20} />
              </a>
              <a href="#" className="p-2 bg-play-gray-800 rounded-lg hover:bg-primary-600 transition" title="GitHub">
                <Share2 size={20} />
              </a>
            </div>

            <div className="bg-play-gray-800 rounded-lg p-4">
              <p className="text-sm font-semibold mb-2">Subscribe to updates</p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-1 rounded bg-play-gray-700 text-white placeholder-play-gray-500 focus:outline-none focus:bg-play-gray-600"
                />
                <button type="submit" className="px-3 py-1 bg-primary-600 rounded font-medium hover:bg-primary-700 transition">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-play-gray-800 px-6 md:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-play-gray-400">
            <p>© {currentYear} RideHub Tech Solutions. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">Status</a>
              <a href="#" className="hover:text-white transition">API Documentation</a>
              <a href="#" className="hover:text-white transition">Help Center</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
