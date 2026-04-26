import './App.css'
import CreateAccount from './components/CreateAccount'
import DiscoverChefify from './components/DiscoverChefify'
import LoginChefify from './components/LoginChefify'
import SignUp from './components/SignUp'

const pages = {
  '/': <DiscoverChefify />,
  '/create-account': <CreateAccount />,
  '/login': <LoginChefify />,
  '/signup': <SignUp />,
}

function App() {
  const currentPath = window.location.pathname
  const currentPage = pages[currentPath] || pages['/']

  return (
    <main>
      {currentPage}
    </main>
  )
}

export default App
