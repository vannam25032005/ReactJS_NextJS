import './App.css'

const recipes = [
  {
    title: 'Cucumber salad, cherry tomatoes',
    image: '/cucumber_salad_charry_tomatoes.png',
  },
  {
    title: 'Italian-style tomato salad',
    image: '/italian_style_tomato_salad.png',
  },
  {
    title: 'Potato Salad',
    image: '/Potato Salad.png',
  },
  {
    title: 'Salad with cabbage and shrimp',
    image: '/salad_with_cabbage_and_shrimp.png',
  },
  {
    title: 'Five-color salad',
    image: '/five_color_salad.png',
  },
  {
    title: 'Corn Salad',
    image: '/corn_salad.png',
  },
  {
    title: 'Salad with cabbage and shrimp',
    image: '/Salad with cabbage.png',
  },
  {
    title: 'Lotus delight salad',
    image: '/lotus_delight_salad.png',
  },
  {
    title: 'Avocado Salad',
    image: '/avacador_salad.png',
  },
]

const typeFilters = [
  ['Pan-fried', false],
  ['Stir-fried', false],
  ['Grilled', true],
  ['Roasted', true],
  ['Sauteed', false],
  ['Baked', false],
  ['Steamed', false],
  ['Stewed', false],
]

const ratings = [5, 4, 3, 2, 1]

function Logo({ light = false }) {
  return (
    <div className={`logo ${light ? 'logo-light' : ''}`}>
      <span className="logo-mark" aria-hidden="true">
        <span></span>
      </span>
      <span>Cheffy</span>
    </div>
  )
}

function Checkbox({ checked = false }) {
  return <span className={`checkbox ${checked ? 'checked' : ''}`}>{checked ? '✓' : ''}</span>
}

function Stars({ count }) {
  return (
    <span className="stars" aria-label={`${count} star rating`}>
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} className={index < count ? 'star active' : 'star'}>
          ★
        </span>
      ))}
    </span>
  )
}

function FilterPanel() {
  return (
    <aside className="filters">
      <h2>
        <span className="hamburger" aria-hidden="true"></span>
        FILTERS
      </h2>

      <section className="filter-section">
        <div className="section-title">
          <h3>Type</h3>
          <span>⌃</span>
        </div>
        <div className="type-grid">
          {typeFilters.map(([label, checked]) => (
            <label key={label} className="check-row">
              <Checkbox checked={checked} />
              {label}
            </label>
          ))}
        </div>
      </section>

      <section className="filter-section">
        <div className="section-title">
          <h3>Time</h3>
          <span>⌃</span>
        </div>
        <div className="range-labels">
          <span>30 minutes</span>
          <span>50 minutes</span>
        </div>
        <div className="range-track">
          <span className="range-fill"></span>
          <span className="range-thumb range-left"></span>
          <span className="range-thumb range-right"></span>
        </div>
      </section>

      <section className="filter-section">
        <div className="section-title">
          <h3>Rating</h3>
          <span>⌃</span>
        </div>
        <div className="rating-list">
          {ratings.map((rating) => (
            <label key={rating} className="rating-row">
              <Checkbox checked={rating <= 3} />
              <Stars count={rating} />
            </label>
          ))}
        </div>
      </section>

      <button className="apply-button">Apply</button>
    </aside>
  )
}

function RecipeCard({ recipe }) {
  return (
    <article className="recipe-card">
      <img src={recipe.image} alt={recipe.title} />
      <div className="card-body">
        <div>
          <h3>{recipe.title}</h3>
          <span className="time-pill">32 minutes</span>
        </div>
        <button className="save-button" aria-label={`Save ${recipe.title}`}>
          <span></span>
        </button>
      </div>
    </article>
  )
}

function App() {
  return (
    <div className="page">
      <header className="site-header">
        <Logo />
        <label className="search">
          <span aria-hidden="true">⌕</span>
          <input defaultValue="Salad" aria-label="Search recipes" />
        </label>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#">What to cook</a>
          <a href="#">Recipes</a>
          <a href="#">Ingredients</a>
          <a href="#">Occasions</a>
          <a href="#">About Us</a>
        </nav>
        <button className="recipe-box">
          <span aria-hidden="true">▣</span>
          Your Recipe Box
        </button>
        <img className="avatar" src="/avatar (1).png" alt="User avatar" />
      </header>

      <main className="content">
        <FilterPanel />
        <section className="results" aria-labelledby="results-title">
          <div className="results-head">
            <h1 id="results-title">Salad (32)</h1>
            <select aria-label="Sort recipes" defaultValue="A-Z">
              <option>A-Z</option>
              <option>Z-A</option>
              <option>Newest</option>
            </select>
          </div>

          <div className="recipe-grid">
            {recipes.map((recipe, index) => (
              <RecipeCard key={`${recipe.title}-${index}`} recipe={recipe} />
            ))}
          </div>

          <nav className="pagination" aria-label="Recipe pages">
            <button aria-label="Previous page">‹</button>
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>...</button>
            <button>10</button>
            <button>11</button>
            <button aria-label="Next page">›</button>
          </nav>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-about">
          <h3>About Us</h3>
          <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
          <form className="subscribe">
            <input type="email" placeholder="Enter your email" aria-label="Email" />
            <button>Send</button>
          </form>
        </div>

        <div className="footer-links">
          <div>
            <h3>Learn More</h3>
            <a href="#">Our Cooks</a>
            <a href="#">See Our Features</a>
            <a href="#">FAQ</a>
          </div>
          <div>
            <h3>Shop</h3>
            <a href="#">Gift Subscription</a>
            <a href="#">Send Us Feedback</a>
          </div>
        </div>

        <div className="footer-recipes">
          <h3>Recipes</h3>
          <a href="#">What to Cook This Week</a>
          <a href="#">Pasta</a>
          <a href="#">Dinner</a>
          <a href="#">Healthy</a>
          <a href="#">Vegetarian</a>
          <a href="#">Vegan</a>
          <a href="#">Christmas</a>
        </div>

        <div className="footer-brand">
          <Logo light />
          <span>2023 Cheffy Company</span>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </div>
      </footer>
    </div>
  )
}

export default App
