import './App.css'

const benefits = [
  '20,000+ recipes to suit all tastes and skill levels',
  'Filter for diets, cook times, and more',
  'Personal Recipe Box for favorites',
  'Gain exclusive access to our subscriber-only mobile app.',
]

const accessPlans = [
  {
    title: 'Cooking',
    text: 'Enjoy recipes, advice and inspiration for any occasion.',
  },
  {
    title: 'Wirecutter',
    text: 'Explore independent reviews for thousands of products.',
  },
  {
    title: 'Games',
    text: 'Unwind with Spelling Bee, Wordle, The Crossword',
  },
  {
    title: 'The Athletic',
    text: 'Discover in-depth, personalized sports journalism.',
  },
]

const recipeLinks = [
  'What to Cook This Week',
  'Pasta',
  'Dinner',
  'Healthy',
  'Vegetarian',
  'Vegan',
  'Christmas',
]

function App() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="brand" href="#" aria-label="Cheffy home">
          <img src="/chefify.png" alt="Cheffy" />
        </a>

        <label className="search-box" aria-label="Search recipes">
          <span aria-hidden="true">⌕</span>
          <input type="search" placeholder="What would you like to cook?" />
        </label>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#">What to cook</a>
          <a href="#">Recipes</a>
          <a href="#">Ingredients</a>
          <a href="#">Occasions</a>
          <a href="#">About Us</a>
        </nav>

        <a className="recipe-box" href="#">
          <img src="/archive_check.png" alt="" />
          Your Recipe Box
        </a>

        <img className="avatar" src="/avatar.png" alt="User profile" />
      </header>

      <main>
        <div className="breadcrumb">
          <a href="#">Recipes</a>
          <span aria-hidden="true">›</span>
          <a href="#">Subscribe</a>
        </div>

        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">This recipe is exclusively available to subscribers</p>
            <h1 id="hero-title">Join now to access effortless, hassle-free recipes</h1>

            <ul className="benefits">
              {benefits.map((benefit) => (
                <li key={benefit}>
                  <span className="benefit-check" aria-hidden="true"></span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="price">0.25USD / Week</div>
            <p className="billing">Billed as $1 every 4 weeks for the first year</p>
            <button className="primary-button" type="button">
              <img src="/wallet.png" alt="" />
              Subscribe Now
            </button>
            <a className="cancel-link" href="#">Cancel or Pause anytime</a>
          </div>

          <div className="hero-image">
            <img src="/dish.png" alt="Assorted Cheffy dishes" />
          </div>
        </section>

        <section className="access-section" aria-labelledby="access-title">
          <h2 id="access-title">An All Access subscription includes</h2>
          <div className="access-grid">
            {accessPlans.map((plan) => (
              <article className="access-card" key={plan.title}>
                <h3>{plan.title}</h3>
                <p>{plan.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="subscribe-section" aria-labelledby="subscribe-title">
          <img className="section-logo" src="/chefify.png" alt="Cheffy" />
          <h2 id="subscribe-title">Subscribe to Cheffy Cooking only</h2>
          <p>
            Enjoy thousands of delicious recipes for every taste, plus advice and
            inspiration daily.
          </p>

          <form className="plan-form">
            <label className="plan-option">
              <input type="radio" name="plan" defaultChecked />
              <span>$2/month (Billed every 4 weeks)</span>
            </label>
            <label className="plan-option">
              <input type="radio" name="plan" />
              <span>$20/year (Billed one annually)</span>
            </label>
            <button className="primary-button" type="button">
              <img src="/wallet.png" alt="" />
              Subscribe Now
            </button>
          </form>

          <a className="cancel-link" href="#">Cancel or Pause anytime</a>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-column about-column">
          <h2>About Us</h2>
          <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
          <form className="email-form">
            <input type="email" placeholder="Enter your email" aria-label="Email address" />
            <button type="button">Send</button>
          </form>

          <div className="footer-brand">
            <img src="/white_chefify.png" alt="Cheffy" />
            <span>2023 Cheffy Company</span>
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>

        <div className="footer-column">
          <h2>Learn More</h2>
          <a href="#">Our Cooks</a>
          <a href="#">See Our Features</a>
          <a href="#">FAQ</a>

          <h2 className="footer-subtitle">Shop</h2>
          <a href="#">Gift Subscription</a>
          <a href="#">Send Us Feedback</a>
        </div>

        <div className="footer-column">
          <h2>Recipes</h2>
          {recipeLinks.map((link) => (
            <a href="#" key={link}>{link}</a>
          ))}
        </div>
      </footer>
    </div>
  )
}

export default App
