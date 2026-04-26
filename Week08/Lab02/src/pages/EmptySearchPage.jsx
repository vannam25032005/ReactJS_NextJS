import FilterSidebar from '../components/FilterSidebar'

function EmptySearchPage({ term }) {
  return (
    <main className="search-page">
      <FilterSidebar />
      <section className="empty-state">
        <h1>Sorry, no results were found for "{term}"</h1>
        <img src="/nothing.png" alt="" />
        <p>We have all your Independence Day sweets covered.</p>
        <div className="tag-list">
          <span>Sweet Cake</span>
          <span>Black Cake</span>
          <span>Pozole Verde</span>
          <span>Healthy food</span>
        </div>
      </section>
    </main>
  )
}

export default EmptySearchPage
