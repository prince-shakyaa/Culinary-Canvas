import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getRandomRecipes, getCategories } from '../services/api'
import RecipeCard from '../components/recipe/RecipeCard'
import LoadingSpinner from '../components/ui/LoadingSpinner'
import ErrorDisplay from '../components/ui/ErrorDisplay'

function HomePage() {
  const [featuredRecipes, setFeaturedRecipes] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        
        const [recipesData, categoriesData] = await Promise.all([
          getRandomRecipes(),
          getCategories()
        ])
        
        setFeaturedRecipes(recipesData.slice(0, 6))
        setCategories(categoriesData.slice(0, 6))
      } catch (err) {
        setError('Failed to load homepage data')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const retryFetch = () => {
    setError(null)
    setFeaturedRecipes([])
    setCategories([])
    setLoading(true)
  }

  if (loading) {
    return <LoadingSpinner message="Preparing delicious recipes..." />
  }

  if (error) {
    return <ErrorDisplay message={error} retry={retryFetch} />
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-2xl p-8 md:p-12 mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Culinary Excellence</h1>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Explore thousands of recipes, save your favorites, and become a master chef in your own kitchen.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/explore" className="btn bg-white text-primary-600 hover:bg-white/90 px-6 py-3 font-semibold rounded-md transition-colors">
              Explore Recipes
            </Link>
            <Link to="/favorites" className="btn bg-primary-700 hover:bg-primary-800 text-white px-6 py-3 font-semibold rounded-md transition-colors">
              My Favorites
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Recipes</h2>
          <Link 
            to="/explore" 
            className="text-primary-500 hover:text-primary-600 font-medium transition-colors"
          >
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredRecipes.map(recipe => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      </section>

      {/* Browse by Category */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map(category => (
            <Link
              key={category.idCategory}
              to={`/explore?category=${encodeURIComponent(category.strCategory)}`}
              className="group"
            >
              <div className="relative rounded-lg overflow-hidden aspect-square">
                <img 
                  src={category.strCategoryThumb} 
                  alt={category.strCategory}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white font-semibold p-4 w-full text-center">
                    {category.strCategory}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage