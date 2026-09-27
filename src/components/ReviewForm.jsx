import { Star, X } from 'lucide-react';
import { useState } from 'react';

export default function ReviewForm({ onClose, appType }) {
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState('');
  const [review, setReview] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating && title && review) {
      setSubmitted(true);
      setTimeout(() => {
        onClose();
      }, 2000);
    }
  };

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="card max-w-md w-full text-center p-8">
          <div className="text-5xl mb-4">✅</div>
          <h3 className="text-xl font-bold text-play-gray-900 mb-2">Thank You!</h3>
          <p className="text-play-gray-700 mb-4">Your review has been submitted successfully.</p>
          <p className="text-sm text-play-gray-600">Thank you for helping other users make informed decisions.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="card max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white flex items-center justify-between p-6 border-b border-play-gray-100">
          <h3 className="text-2xl font-bold text-play-gray-900">Write a review</h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-play-gray-100 rounded-lg transition"
          >
            <X size={24} className="text-play-gray-600" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Rating */}
          <div>
            <label className="block font-semibold text-play-gray-900 mb-3">Rating</label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="p-1 transition-transform hover:scale-110"
                >
                  <Star
                    size={32}
                    className={star <= rating ? 'fill-yellow-500 text-yellow-500' : 'text-play-gray-300'}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Title */}
          <div>
            <label className="block font-semibold text-play-gray-900 mb-2">Review Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Summarize your experience"
              className="w-full px-4 py-2 border border-play-gray-300 rounded-lg focus:outline-none focus:border-primary-600"
              maxLength={80}
            />
            <p className="text-xs text-play-gray-600 mt-1">{title.length}/80</p>
          </div>

          {/* Review Text */}
          <div>
            <label className="block font-semibold text-play-gray-900 mb-2">Review</label>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Share your detailed experience with this app..."
              className="w-full px-4 py-2 border border-play-gray-300 rounded-lg focus:outline-none focus:border-primary-600 resize-none"
              rows={6}
              maxLength={500}
            />
            <p className="text-xs text-play-gray-600 mt-1">{review.length}/500</p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary flex-1"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!rating || !title || !review}
              className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
