function Footer() {
  return (
    <footer className="site-footer" id="about">
      <section className="footer-about">
        <h2>About Us</h2>
        <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
        <form className="footer-form">
          <input placeholder="Enter your email" />
          <button type="button">Send</button>
        </form>
      </section>

      <section className="footer-links">
        <div>
          <h2>Learn More</h2>
          <a href="#cooks">Our Cooks</a>
          <a href="#features">See Our Features</a>
          <a href="#faq">FAQ</a>
        </div>
        <div>
          <h2>Shop</h2>
          <a href="#gift">Gift Subscription</a>
          <a href="#feedback">Send Us Feedback</a>
        </div>
      </section>

      <section className="footer-links">
        <div>
          <h2>Recipes</h2>
          <a href="#week">What to Cook This Week</a>
          <a href="#pasta">Pasta</a>
          <a href="#dinner">Dinner</a>
          <a href="#healthy">Healthy</a>
          <a href="#vegetarian">Vegetarian</a>
          <a href="#vegan">Vegan</a>
          <a href="#christmas">Christmas</a>
        </div>
      </section>

      <section className="footer-brand">
        <img src="/chefifywhite.png" alt="Chefify" />
        <span>2023 Chefify Company</span>
        <a href="#terms">Terms of Service</a>
        <span>|</span>
        <a href="#privacy">Privacy Policy</a>
      </section>
    </footer>
  )
}

export default Footer
