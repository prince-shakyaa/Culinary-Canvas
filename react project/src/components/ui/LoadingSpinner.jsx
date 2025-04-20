function LoadingSpinner({ size = 'medium', message = 'Loading...' }) {
  const sizeClass = {
    small: 'w-5 h-5',
    medium: 'w-8 h-8',
    large: 'w-12 h-12',
  }[size] || 'w-8 h-8'
  
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className={`${sizeClass} border-4 border-slate-200 border-t-primary-500 rounded-full animate-spin`}></div>
      {message && <p className="mt-4 text-slate-600 dark:text-slate-400">{message}</p>}
    </div>
  )
}

export default LoadingSpinner