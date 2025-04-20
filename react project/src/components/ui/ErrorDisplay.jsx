function ErrorDisplay({ message, retry = null }) {
  return (
    <div className="text-center py-10">
      <div className="text-4xl mb-4">😕</div>
      <h3 className="text-xl font-semibold mb-2">Something went wrong</h3>
      <p className="text-slate-600 dark:text-slate-400 mb-6">{message || 'An error occurred while loading data'}</p>
      
      {retry && (
        <button 
          onClick={retry}
          className="btn btn-primary"
        >
          Try Again
        </button>
      )}
    </div>
  )
}

export default ErrorDisplay