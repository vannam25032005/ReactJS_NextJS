function Header() {
  return (
    <header className="chefify-header">
      <img src="/Group 9.png" className="brand" alt="Chefify" />
      <label className="search">
        <span aria-hidden="true">Q</span>
        <input placeholder="What would you like to cook?" />
      </label>
      <nav>
        <a href="#cook">What to cook</a>
        <a href="#recipes">Recipes</a>
        <a href="#ingredients">Ingredients</a>
        <a href="#occasions">Occasions</a>
        <a href="#about">About Us</a>
      </nav>
      <div className="header-actions">
        <a href="/login" className="ghost-btn">Login</a>
        <a href="/signup" className="solid-btn">Subscribe</a>
      </div>
    </header>
  )
}

function RecipeBackdrop({ children }) {
  return (
    <section className="kitchen-board">
      <Header />
      <div className="kitchen-scene">
        <img src="/Image 73.png" alt="" />
        <div className="scene-overlay"></div>
        <article className="recipe-card">
          <span>Recipe of the day</span>
          <h3>Salad Caprese</h3>
          <p>
            Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella,
            herbs, olive oil, and balsamic vinegar create a refreshing dish.
          </p>
          <div className="avatar"></div>
          <strong>Salad Caprese</strong>
          <button type="button">View now</button>
        </article>
        {children}
      </div>
    </section>
  )
}

export default RecipeBackdrop
