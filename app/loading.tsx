export default function PageLoading() {
  return (
    <div className="min-h-screen bg-background-dark flex items-center justify-center">
      <div className="text-center space-y-6 animate-pulse">
        {/* Skeleton Logo */}
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-xl bg-surface-dark" />
        </div>

        {/* Skeleton Content */}
        <div className="space-y-3 max-w-md mx-auto px-6">
          <div className="h-8 bg-surface-dark rounded-lg w-3/4 mx-auto" />
          <div className="h-4 bg-surface-dark rounded w-1/2 mx-auto" />
          
          <div className="pt-8 space-y-2">
            <div className="h-4 bg-surface-dark rounded" />
            <div className="h-4 bg-surface-dark rounded w-5/6" />
            <div className="h-4 bg-surface-dark rounded w-4/6" />
          </div>
        </div>

        {/* Loading Indicator */}
        <div className="flex justify-center gap-2 pt-6">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-primary rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
