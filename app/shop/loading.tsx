export default function ShopLoading() {
  return (
    <div className="min-h-screen bg-background-dark">
      {/* Header Skeleton */}
      <div className="h-20 bg-surface-dark/30 border-b border-white/5" />

      <div className="max-w-[1440px] mx-auto px-6 py-12">
        {/* Hero Skeleton */}
        <div className="mb-12 space-y-4 animate-pulse">
          <div className="h-12 bg-surface-dark rounded-lg w-1/3" />
          <div className="h-6 bg-surface-dark rounded w-1/2" />
        </div>

        <div className="flex gap-8">
          {/* Sidebar Skeleton */}
          <div className="w-72 space-y-6 animate-pulse hidden lg:block">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-3">
                <div className="h-6 bg-surface-dark rounded w-1/2" />
                <div className="space-y-2">
                  {[1, 2, 3, 4].map((j) => (
                    <div key={j} className="h-4 bg-surface-dark rounded" />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Products Grid Skeleton */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="space-y-4 animate-pulse">
                  <div className="aspect-square bg-surface-dark rounded-2xl" />
                  <div className="space-y-2">
                    <div className="h-4 bg-surface-dark rounded w-3/4" />
                    <div className="h-6 bg-surface-dark rounded w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
