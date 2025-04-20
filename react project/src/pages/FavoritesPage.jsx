import { useFavorites } from '../contexts/FavoritesContext'
import RecipeList from '../components/recipe/RecipeList'
import { Link } from 'react-router-dom'

function FavoritesPage() {
  const { favorites } = useFavorites()
  
  const hasNoFavorites = favorites.length === 0
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">My Favorite Recipes</h1>
      
      {hasNoFavorites ? (
        <div className="text-center py-12 bg-white dark:bg-slate-800 rounded-lg shadow-md">
          <div className="text-5xl mb-4">🍽️</div>
          <h2 className="text-2xl font-semibold mb-4">Your favorites collection is empty</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-8">
            Start exploring recipes and click the heart icon to save your favorites for easy access later.
          </p>
          <Link 
            to="/explore" 
            className="btn btn-primary px-6 py-3"
          >
            Discover Recipes
          </Link>
        </div>
      ) : (
        <RecipeList 
          recipes={favorites}
          title={`Your Favorites (${favorites.length})`}
        />
      )}
    </div>
  )
}

export default FavoritesPage