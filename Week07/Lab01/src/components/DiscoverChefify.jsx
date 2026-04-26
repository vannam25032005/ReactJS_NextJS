import RecipeBackdrop from './RecipeBackdrop'

function DiscoverChefify() {
  return (
    <RecipeBackdrop>
      <div className="modal discover-modal">
        <button type="button" className="close" aria-label="Close">&times;</button>
        <img src="/Discover Chefify.png" className="discover-title" alt="Discover Chefify" />
        <p>Easy and delicious cooking instructions right here. Start exploring now!</p>
        <img src="/Image 93.png" className="discover-food" alt="Assorted plated dishes" />
        <div className="dots" aria-label="Slide 1 of 3">
          <span className="active"></span>
          <span></span>
          <span></span>
        </div>
        <a href="/login" className="next-btn">Next</a>
        <a href="/" className="skip-btn">Skip</a>
      </div>
    </RecipeBackdrop>
  )
}

export default DiscoverChefify
