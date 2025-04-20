import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-md mx-auto">
        <div className="text-8xl mb-6">😕</div>
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/"
            className="btn btn-primary"
          >
            Go to Homepage
          </Link>
          <Link 
            to="/explore"
            className="btn btn-outline"
          >
            Explore Recipes
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage