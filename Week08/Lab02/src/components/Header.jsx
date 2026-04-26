function Header({ page, onPageChange, searchTerm, onSearchChange }) {
  const submitSearch = (event) => {
    event.preventDefault()
    onPageChange('search')
  }

  return (
    <header className="site-header">
      <button className="brand-button" type="button" onClick={() => onPageChange('search')}>
        <img src="/chefify.png" alt="Chefify" />
      </button>

      <form className="search-bar" onSubmit={submitSearch}>
        <span aria-hidden="true">⌕</span>
        <input
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="What would you like to cook?"
        />
      </form>

      <nav className="main-nav" aria-label="Primary">
        <a href="#cook">What to cook</a>
        <a href="#recipes">Recipes</a>
        <a href="#ingredients">Ingredients</a>
        <a href="#occasions">Occasions</a>
        <a href="#about">About Us</a>
      </nav>

      <button
        className={`recipe-box-button ${page === 'box' ? 'active' : ''}`}
        type="button"
        onClick={() => onPageChange('box')}
      >
        <span aria-hidden="true">▣</span>
        Your Recipe Box
      </button>

      <img className="header-avatar" src="/avatar.png" alt="Emma Gonzalez" />
    </header>
  )
}

export default Header
