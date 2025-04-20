const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1'

export const getRandomRecipes = async () => {
  try {
    const promises = Array(8).fill().map(() => 
      fetch(`${API_BASE_URL}/random.php`).then(res => res.json())
    )
    
    const results = await Promise.all(promises)
    const meals = results.flatMap(result => result.meals || [])
    
    const uniqueMeals = meals.filter((meal, index, self) => 
      index === self.findIndex(m => m.idMeal === meal.idMeal)
    )
    
    return uniqueMeals
  } catch (error) {
    console.error('Error fetching random recipes:', error)
    throw error
  }
}

export const getCategories = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/categories.php`)
    const data = await response.json()
    return data.categories || []
  } catch (error) {
    console.error('Error fetching categories:', error)
    throw error
  }
}

export const searchRecipes = async (query) => {
  try {
    const response = await fetch(`${API_BASE_URL}/search.php?s=${query}`)
    const data = await response.json()
    return data.meals || []
  } catch (error) {
    console.error('Error searching recipes:', error)
    throw error
  }
}

export const getRecipesByCategory = async (category) => {
  try {
    const response = await fetch(`${API_BASE_URL}/filter.php?c=${category}`)
    const data = await response.json()
    return data.meals || []
  } catch (error) {
    console.error(`Error fetching recipes by category ${category}:`, error)
    throw error
  }
}

export const getRecipeById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/lookup.php?i=${id}`)
    const data = await response.json()
    return data.meals?.[0] || null
  } catch (error) {
    console.error(`Error fetching recipe details for ID ${id}:`, error)
    throw error
  }
}