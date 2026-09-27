import { Star, ThumbsUp } from 'lucide-react';
import { useState } from 'react';
import ReviewForm from './ReviewForm';

export default function RatingsReviews({ appDetails, reviews, appType }) {
  const [showReviewForm, setShowReviewForm] = useState(false);

  const ratingBreakdown = appDetails.ratingBreakdown || {
    5: 60,
    4: 25,
    3: 10,
    2: 3,
    1: 2
  };

  const total = Object.values(ratingBreakdown).reduce((a, b) => a + b, 0);

  return (
    <div className="space-y-6">
      {/* Rating Summary */}
      <div className="card p-6">
        <h3 className="section-title">Ratings and reviews</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Overall Rating */}
          <div className="flex flex-col items-center justify-center py-4">
            <div className="text-5xl font-bold text-play-gray-900 mb-2">
              {appDetails.rating}
            </div>
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={i < Math.round(appDetails.rating) ? 'fill-yellow-500 text-yellow-500' : 'text-play-gray-300'}
                />
              ))}
            </div>
            <p className="text-sm text-play-gray-600">
              {appDetails.ratingCount?.toLocaleString()} reviews
            </p>
          </div>

          {/* Rating Breakdown */}
          <div className="md:col-span-2 space-y-3">
            {[5, 4, 3, 2, 1].map((stars) => {
              const count = ratingBreakdown[stars] || 0;
              const percentage = total > 0 ? (count / total) * 100 : 0;

              return (
                <div key={stars} className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-sm font-medium text-play-gray-700 min-w-fit">
                    {stars}
                    <Star size={14} className="fill-yellow-500 text-yellow-500" />
                  </span>
                  <div className="flex-1 h-2 bg-play-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-500 rounded-full transition-all"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-play-gray-600 min-w-fit">
                    {count.toLocaleString()}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <button
          onClick={() => setShowReviewForm(true)}
          className="btn-primary w-full mt-6"
        >
          Write a review
        </button>
      </div>

      {/* Reviews List */}
      <div className="card p-6">
        <h4 className="text-lg font-bold text-play-gray-900 mb-4">Top reviews</h4>

        <div className="space-y-4">
          {reviews?.slice(0, 5).map((review) => (
            <div key={review.id} className="pb-4 border-b border-play-gray-100 last:border-b-0">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h5 className="font-semibold text-play-gray-900">{review.author}</h5>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={i < review.rating ? 'fill-yellow-500 text-yellow-500' : 'text-play-gray-300'}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-play-gray-600">
                      {new Date(review.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                </div>
              </div>

              <h6 className="font-medium text-play-gray-900 mb-1">{review.title}</h6>
              <p className="text-sm text-play-gray-700 mb-3 line-clamp-3">{review.content}</p>

              <button className="flex items-center gap-2 text-sm text-play-gray-600 hover:text-play-gray-900 transition">
                <ThumbsUp size={16} />
                Helpful ({review.helpful})
              </button>
            </div>
          ))}
        </div>

        <button className="text-primary-600 font-semibold mt-4 hover:text-primary-700 transition">
          See all reviews →
        </button>
      </div>

      {showReviewForm && (
        <ReviewForm onClose={() => setShowReviewForm(false)} appType={appType} />
      )}
    </div>
  );
}
