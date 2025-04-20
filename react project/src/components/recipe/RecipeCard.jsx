import { Link } from 'react-router-dom'
import { useFavorites } from '../../contexts/FavoritesContext'

function RecipeCard({ recipe, featured = false }) {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites()
  const isFav = isFavorite(recipe.idMeal)

  const toggleFavorite = (e) => {
    e.preventDefault() // Prevent navigating to detail page
    e.stopPropagation() // Stop event propagation
    
    if (isFav) {
      removeFavorite(recipe.idMeal)
    } else {
      addFavorite(recipe)
    }
  }
  
  const truncateText = (text, maxLength) => {
    if (!text) return ''
    return text.length > maxLength 
      ? `${text.substring(0, maxLength)}...` 
      : text
  }

  return (
    <Link 
      to={`/recipe/${recipe.idMeal}`}
      className={`card group hover:translate-y-[-4px] ${featured ? 'col-span-2 md:col-span-1' : ''}`}
    >
      <div className="relative overflow-hidden">
        {/* Recipe Image */}
        <div className="aspect-[4/3] overflow-hidden">
          <img 
            src={recipe.strMealThumb} 
            alt={recipe.strMeal}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Favorite Button */}
        <button
          onClick={toggleFavorite}
          className="absolute top-3 right-3 p-2 bg-white/80 dark:bg-slate-800/80 rounded-full shadow hover:bg-white dark:hover:bg-slate-800 transition-colors"
          aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
        >
          {isFav ? '❤️' : '🤍'}
        </button>
        
        {/* Category Tag */}
        {recipe.strCategory && (
          <span className="absolute bottom-3 left-3 px-2 py-1 bg-primary-500/90 text-white text-xs rounded-full">
            {recipe.strCategory}
          </span>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {truncateText(recipe.strMeal, 40)}
        </h3>
        
        <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
          {recipe.strArea && (
            <span className="flex items-center">
              <span className="mr-1">🌍</span> {recipe.strArea}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}

export default RecipeCard