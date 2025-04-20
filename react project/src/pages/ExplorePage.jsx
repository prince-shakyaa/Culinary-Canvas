import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { searchRecipes, getRecipesByCategory } from '../services/api'
import SearchForm from '../components/explore/SearchForm'
import RecipeList from '../components/recipe/RecipeList'
import LoadingSpinner from '../components/ui/LoadingSpinner'
import ErrorDisplay from '../components/ui/ErrorDisplay'

function ExplorePage() {
  const [searchParams] = useSearchParams()
  const searchQuery = searchParams.get('search')
  const categoryFilter = searchParams.get('category')

  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true)
        setError(null)
        let results = []

        if (searchQuery) {
          results = await searchRecipes(searchQuery)
        } else if (categoryFilter) {
          results = await getRecipesByCategory(categoryFilter)
        } else {
          results = await searchRecipes('chicken')
        }

        setRecipes(results)
      } catch (err) {
        setError('Failed to load recipes')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchRecipes()
  }, [searchQuery, categoryFilter])

  const getResultsTitle = () => {
    if (searchQuery && categoryFilter) {
      return `Results for "${searchQuery}" in ${categoryFilter}`
    } else if (searchQuery) {
      return `Results for "${searchQuery}"`
    } else if (categoryFilter) {
      return `${categoryFilter} Recipes`
    }
    return 'Popular Recipes'
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Explore Recipes</h1>
      
      {/* Search and Filter Form */}
      <SearchForm />
      
      {/* Results */}
      {loading ? (
        <LoadingSpinner message="Searching for delicious recipes..." />
      ) : error ? (
        <ErrorDisplay message={error} />
      ) : (
        <RecipeList 
          recipes={recipes} 
          title={getResultsTitle()}
          emptyMessage={
            searchQuery || categoryFilter 
              ? "No recipes found. Try another search or category."
              : "No recipes available right now. Try searching for something specific."
          }
        />
      )}
    </div>
  )
}

export default ExplorePage