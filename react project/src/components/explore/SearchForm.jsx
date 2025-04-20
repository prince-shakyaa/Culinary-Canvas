import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { getCategories } from '../../services/api'

function SearchForm() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  
  const [search, setSearch] = useState(searchParams.get('search') || '')
  const [category, setCategory] = useState(searchParams.get('category') || '')
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true)
        const categoriesData = await getCategories()
        setCategories(categoriesData)
      } catch (err) {
        setError('Failed to load categories')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const params = new URLSearchParams()
    if (search.trim()) params.append('search', search.trim())
    if (category) params.append('category', category)
    
    navigate(`/explore?${params.toString()}`)
  }

  const handleReset = () => {
    setSearch('')
    setCategory('')
    navigate('/explore')
  }
  
  const isValid = search.trim().length || category

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="search" className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-200">
            Search Recipes
          </label>
          <input
            type="text"
            id="search"
            placeholder="Enter keywords..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md 
                     dark:bg-slate-700 focus:border-primary-500"
          />
        </div>
        
        <div>
          <label htmlFor="category" className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-200">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md
                     dark:bg-slate-700 focus:border-primary-500"
            disabled={loading}
          >
            <option value="">All Categories</option>
            {categories.map(cat => (
              <option key={cat.idCategory} value={cat.strCategory}>
                {cat.strCategory}
              </option>
            ))}
          </select>
          {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
        </div>
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={handleReset}
          className="btn btn-outline"
        >
          Reset
        </button>
        <button
          type="submit"
          disabled={!isValid}
          className={`btn btn-primary ${!isValid ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Search
        </button>
      </div>
    </form>
  )
}

export default SearchForm