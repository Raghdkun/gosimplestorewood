export default function ProductLoading() {
  return (
    <div className="min-h-screen bg-background-dark">
      {/* Header Skeleton */}
      <div className="h-20 bg-surface-dark/30 border-b border-white/5" />

      <div className="max-w-[1440px] mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 animate-pulse">
          {/* Gallery Skeleton */}
          <div className="space-y-4">
            <div className="aspect-square bg-surface-dark rounded-2xl" />
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-surface-dark rounded-lg" />
              ))}
            </div>
          </div>

          {/* Info Skeleton */}
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="h-10 bg-surface-dark rounded w-3/4" />
              <div className="h-6 bg-surface-dark rounded w-1/2" />
              <div className="h-12 bg-surface-dark rounded w-1/3" />
            </div>

            <div className="space-y-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-4 bg-surface-dark rounded" />
              ))}
            </div>

            <div className="space-y-4 pt-6">
              <div className="h-12 bg-surface-dark rounded" />
              <div className="h-14 bg-primary/20 rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
