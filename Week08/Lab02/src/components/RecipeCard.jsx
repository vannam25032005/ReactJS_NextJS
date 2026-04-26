function RecipeCard({ recipe }) {
  return (
    <article className={`recipe-card ${recipe.tone}`}>
      <div className="recipe-photo">
        <img src={recipe.image} alt="" />
      </div>
      <div className="recipe-info">
        <h2>{recipe.title}</h2>
        <button className="save-button" type="button" aria-label={`Save ${recipe.title}`}>
          ♡
        </button>
        <span>{recipe.time}</span>
      </div>
    </article>
  )
}

export default RecipeCard
