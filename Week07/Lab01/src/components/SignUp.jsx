function SignUp() {
  return (
    <section className="signup-board">
      <form className="signup-card">
        <h2>Sign up</h2>
        <div className="two-cols">
          <label>
            First name
            <input placeholder="Input first name" />
          </label>
          <label>
            Last name
            <input placeholder="Input last name" />
          </label>
        </div>
        <label>
          Email
          <input placeholder="example.email@gmail.com" />
        </label>
        <label>
          Password
          <span className="password-field">
            <input placeholder="Enter at least 8+ characters" />
            <span>&#8856;</span>
          </span>
        </label>
        <label className="agree">
          <input type="checkbox" defaultChecked />
          <span>
            By signing up, I agree with the <a href="#terms">Terms of Use</a> &amp;{' '}
            <a href="#privacy">Privacy Policy</a>
          </span>
        </label>
        <button type="button" className="signup-btn">Sign up</button>
        <p className="login-link">Already have an account? <a href="/login">Log in</a></p>
        <div className="divider"><span>OR</span></div>
        <div className="round-socials">
          <button type="button" className="google">G</button>
          <button type="button" className="facebook">f</button>
          <button type="button" className="apple">A</button>
        </div>
      </form>
    </section>
  )
}

export default SignUp
