function Checkbox({ label, checked }) {
  return (
    <label className="check-row">
      <input type="checkbox" defaultChecked={checked} />
      <span>{label}</span>
    </label>
  )
}

function FilterSection({ title, children }) {
  return (
    <section className="filter-section">
      <div className="filter-title">
        <h3>{title}</h3>
        <span aria-hidden="true">⌃</span>
      </div>
      {children}
    </section>
  )
}

function Stars({ active }) {
  return (
    <span className="stars" aria-label={`${active} star rating`}>
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} className={index < active ? 'star-on' : 'star-off'}>
          ★
        </span>
      ))}
    </span>
  )
}

function FilterSidebar() {
  return (
    <aside className="filters">
      <h2>
        <span aria-hidden="true">☰</span>
        FILTERS
      </h2>

      <FilterSection title="Type">
        <div className="check-grid">
          <Checkbox label="Pan-fried" />
          <Checkbox label="Stir-fried" />
          <Checkbox label="Grilled" checked />
          <Checkbox label="Roasted" checked />
          <Checkbox label="Sauteed" />
          <Checkbox label="Baked" />
          <Checkbox label="Steamed" />
          <Checkbox label="Stewed" />
        </div>
      </FilterSection>

      <FilterSection title="Time">
        <div className="range-labels">
          <span>30 minutes</span>
          <span>50 minutes</span>
        </div>
        <div className="range-track">
          <span className="range-fill"></span>
          <span className="range-dot left"></span>
          <span className="range-dot right"></span>
        </div>
      </FilterSection>

      <FilterSection title="Rating">
        <div className="rating-list">
          {[5, 4, 3, 2, 1].map((rating) => (
            <label className="rating-row" key={rating}>
              <input type="checkbox" defaultChecked={rating <= 3} />
              <Stars active={rating} />
            </label>
          ))}
        </div>
      </FilterSection>

      <button className="apply-button" type="button">
        Apply
      </button>
    </aside>
  )
}

export default FilterSidebar
