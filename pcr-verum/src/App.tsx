import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import ToolA from './pages/ToolA'
import './App.css'

type Page = 'home' | 'tool-a'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')

  return (
    <div className="app">
      <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="main-content">
        {currentPage === 'home' && <Home />}
        {currentPage === 'tool-a' && <ToolA />}
      </main>
    </div>
  )
}

export default App
