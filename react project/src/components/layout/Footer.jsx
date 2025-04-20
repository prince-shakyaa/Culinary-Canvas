import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-slate-100 dark:bg-slate-800 py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <span className="text-primary-500 text-2xl">🍽️</span>
              <span className="font-display font-bold text-xl">Culinary Canvas</span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Discover, cook, and share amazing recipes from around the world.
            </p>
          </div>
          
          <div>
            <h3 className="font-display font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/explore" className="text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                  Explore
                </Link>
              </li>
              <li>
                <Link to="/favorites" className="text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                  Favorites
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-semibold mb-4">Categories</h3>
            <div className="flex flex-wrap gap-2">
              <Link 
                to="/explore?category=Breakfast" 
                className="px-3 py-1 bg-white dark:bg-slate-700 rounded-full text-sm hover:bg-primary-50 dark:hover:bg-slate-600 transition-colors"
              >
                Breakfast
              </Link>
              <Link 
                to="/explore?category=Vegetarian" 
                className="px-3 py-1 bg-white dark:bg-slate-700 rounded-full text-sm hover:bg-primary-50 dark:hover:bg-slate-600 transition-colors"
              >
                Vegetarian
              </Link>
              <Link 
                to="/explore?category=Dessert" 
                className="px-3 py-1 bg-white dark:bg-slate-700 rounded-full text-sm hover:bg-primary-50 dark:hover:bg-slate-600 transition-colors"
              >
                Dessert
              </Link>
              <Link 
                to="/explore?category=Seafood" 
                className="px-3 py-1 bg-white dark:bg-slate-700 rounded-full text-sm hover:bg-primary-50 dark:hover:bg-slate-600 transition-colors"
              >
                Seafood
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-200 dark:border-slate-700 mt-8 pt-6 text-center text-slate-500 dark:text-slate-400">
          <p>© {currentYear} Culinary Canvas. All rights reserved.</p>
          <p className="mt-2 text-sm">Built with React and TheMealDB API.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer