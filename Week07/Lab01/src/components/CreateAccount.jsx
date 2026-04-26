function CreateAccount() {
  return (
    <section className="split-card">
      <form className="create-form">
        <h1>Create an account</h1>
        <input className="focused" placeholder="Full name" />
        <input placeholder="Email&#10;example.email@gmail.com" />
        <label className="password-field">
          <input placeholder="Password&#10;Enter at least 8+ characters" type="text" />
          <span>&#8856;</span>
        </label>
        <a href="/login" className="form-action">Sign in</a>
        <p>Or sign in with</p>
        <div className="compact-socials">
          <button type="button" className="g">G</button>
          <button type="button" className="f">f</button>
          <button type="button" className="a">A</button>
        </div>
      </form>
      <div className="pink-illustration" aria-hidden="true">
        <div className="dancer dancer-left"></div>
        <div className="dancer dancer-right"></div>
        <span className="spark s1"></span>
        <span className="spark s2"></span>
        <span className="spark s3"></span>
        <span className="paper p1"></span>
        <span className="paper p2"></span>
      </div>
    </section>
  )
}

export default CreateAccount
