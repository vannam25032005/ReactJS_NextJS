import { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import EmptySearchPage from './pages/EmptySearchPage'
import RecipeBoxPage from './pages/RecipeBoxPage'
import './App.css'

function App() {
  const [page, setPage] = useState('box')
  const [searchTerm, setSearchTerm] = useState('cakescascsa')

  return (
    <div className="app-shell">
      <Header
        page={page}
        onPageChange={setPage}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      {page === 'box' ? <RecipeBoxPage /> : <EmptySearchPage term={searchTerm || 'cakescascsa'} />}
      <Footer />
    </div>
  )
}

export default App
