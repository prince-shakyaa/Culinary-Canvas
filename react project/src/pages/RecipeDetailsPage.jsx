import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getRecipeById } from '../services/api'
import { useFavorites } from '../contexts/FavoritesContext'
import LoadingSpinner from '../components/ui/LoadingSpinner'
import ErrorDisplay from '../components/ui/ErrorDisplay'

function RecipeDetailsPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { isFavorite, addFavorite, removeFavorite } = useFavorites()
  
  const [recipe, setRecipe] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        setLoading(true)
        const data = await getRecipeById(id)
        
        if (!data) {
          throw new Error('Recipe not found')
        }
        
        setRecipe(data)
      } catch (err) {
        setError(err.message || 'Failed to load recipe details')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchRecipeDetails()
  }, [id])

  const handleFavoriteToggle = () => {
    if (isFavorite(id)) {
      removeFavorite(id)
    } else if (recipe) {
      addFavorite(recipe)
    }
  }

  const getIngredients = (recipe) => {
    if (!recipe) return []
    
    const ingredients = []
    
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`]
      const measure = recipe[`strMeasure${i}`]
      
      if (ingredient && ingredient.trim()) {
        ingredients.push({
          name: ingredient,
          measure: measure || ''
        })
      }
    }
    
    return ingredients
  }

  if (loading) {
    return <LoadingSpinner message="Loading recipe details..." />
  }

  if (error) {
    return (
      <ErrorDisplay 
        message={error} 
        retry={() => navigate('/explore')}
      />
    )
  }

  const ingredients = getIngredients(recipe)

  return (
    <div className="container-narrow py-8">
      <div className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{recipe.strMeal}</h1>
            <div className="flex flex-wrap gap-2 mb-4">
              {recipe.strCategory && (
                <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 px-3 py-1 rounded-full text-sm">
                  {recipe.strCategory}
                </span>
              )}
              {recipe.strArea && (
                <span className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full text-sm">
                  {recipe.strArea}
                </span>
              )}
            </div>
          </div>
          
          <button
            onClick={handleFavoriteToggle}
            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            <span>{isFavorite(id) ? '❤️' : '🤍'}</span>
            <span>{isFavorite(id) ? 'Saved' : 'Save'}</span>
          </button>
        </div>
      </div>
      
      <div className="rounded-xl overflow-hidden mb-8 shadow-lg">
        <img 
          src={recipe.strMealThumb} 
          alt={recipe.strMeal}
          className="w-full object-cover"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
            <ul className="space-y-3">
              {ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-primary-500">•</span>
                  <span>
                    <span className="font-medium">{ingredient.measure}</span> {ingredient.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Instructions</h2>
            <div className="space-y-4">
              {recipe.strInstructions.split('\r\n\r\n').filter(Boolean).map((step, index) => (
                <p key={index}>{step.trim()}</p>
              ))}
            </div>
            
            {recipe.strYoutube && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-3">Video Tutorial</h3>
                <a 
                  href={recipe.strYoutube} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:underline"
                >
                  <span>Watch on YouTube</span>
                  <span>▶️</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetailsPage