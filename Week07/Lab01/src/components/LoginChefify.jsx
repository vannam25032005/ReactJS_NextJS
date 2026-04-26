import RecipeBackdrop from './RecipeBackdrop'

function LoginChefify() {
  return (
    <RecipeBackdrop>
      <div className="modal login-modal">
        <figure className="login-photo">
          <img src="/Image 72.png" alt="Noodle bowl with fried egg" />
          <figcaption>"Embrace the art of cooking, where flavors come alive!"</figcaption>
        </figure>
        <section className="login-content">
          <button type="button" className="close" aria-label="Close">&times;</button>
          <h2>Login</h2>
          <p className="lead">Enter your email to log in.</p>
          <input placeholder="Enter your email" />
          <button type="button" className="continue-btn">Continue</button>
          <div className="divider"><span>OR</span></div>
          <p className="terms">
            By continuing, you agree to the updated <b>Terms of Sale</b>,
            <b> Terms of Service</b>, and <b>Privacy Policy</b>.
          </p>
          <button type="button" className="social-row google">G Continue with Google</button>
          <button type="button" className="social-row facebook">f Continue with Facebook</button>
          <button type="button" className="social-row apple">A Continue with Apple</button>
        </section>
      </div>
    </RecipeBackdrop>
  )
}

export default LoginChefify
