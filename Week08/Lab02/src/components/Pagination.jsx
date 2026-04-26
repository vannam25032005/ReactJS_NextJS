function Pagination() {
  return (
    <nav className="pagination" aria-label="Recipe pages">
      <button type="button">‹</button>
      <button className="active" type="button">
        1
      </button>
      <button type="button">2</button>
      <button type="button">3</button>
      <button type="button">4</button>
      <button type="button">...</button>
      <button type="button">10</button>
      <button type="button">11</button>
      <button type="button">›</button>
    </nav>
  )
}

export default Pagination
