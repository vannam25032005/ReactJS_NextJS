import Pagination from '../components/Pagination'
import RecipeCard from '../components/RecipeCard'
import { recipes } from '../data/recipes'

function Breadcrumb() {
  return (
    <div className="breadcrumb">
      <span>Home</span>
      <span aria-hidden="true">›</span>
      <span>Your Recipe Box</span>
    </div>
  )
}

function ProfileIntro() {
  return (
    <section className="profile-intro">
      <h1>Emma Gonzalez's Recipe Box</h1>
      <div className="profile-body">
        <img src="/avatar.png" alt="Emma Gonzalez" />
        <div>
          <p>
            Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former cooking
            editor at The Los Angeles Times. She is also an accomplished author, contributing to
            numerous cookbooks and food publications. Originally from East Los Angeles, Emma now
            resides in New York City, where she explores a wide range of culinary delights.
          </p>
          <div className="profile-actions">
            <span>6.5k Subscribes</span>
            <button type="button">
              Share
              <span aria-hidden="true">↗</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function Tabs() {
  return (
    <div className="tabs" role="tablist">
      <button className="active" type="button">
        Saved Recipes
      </button>
      <button type="button">Folders</button>
      <button type="button">Recipes by Genevieve</button>
    </div>
  )
}

function RecipeBoxPage() {
  return (
    <main className="recipe-box-page">
      <Breadcrumb />
      <ProfileIntro />
      <Tabs />
      <section className="recipe-grid" aria-label="Saved recipes">
        {recipes.map((recipe) => (
          <RecipeCard key={`${recipe.title}-${recipe.time}-${recipe.tone}`} recipe={recipe} />
        ))}
      </section>
      <Pagination />
    </main>
  )
}

export default RecipeBoxPage
