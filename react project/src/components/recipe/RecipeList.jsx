import RecipeCard from './RecipeCard'

function RecipeList({ recipes, title, emptyMessage = "No recipes found" }) {
  if (!recipes || recipes.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-xl text-slate-500 dark:text-slate-400">{emptyMessage}</p>
      </div>
    )
  }

  return (
    <section className="my-8">
      {title && <h2 className="mb-6">{title}</h2>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {recipes.map(recipe => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
    </section>
  )
}

export default RecipeList