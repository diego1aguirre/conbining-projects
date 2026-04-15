import './Sidebar.css'

type Page = 'home' | 'tool-a'

interface SidebarProps {
  currentPage: Page
  onNavigate: (page: Page) => void
}

export default function Sidebar({ currentPage, onNavigate }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span>PCR VERUM</span>
      </div>
      <nav className="sidebar-nav">
        <button
          className={`nav-item ${currentPage === 'home' ? 'active' : ''}`}
          onClick={() => onNavigate('home')}
        >
          Home
        </button>
        <button
          className={`nav-item ${currentPage === 'tool-a' ? 'active' : ''}`}
          onClick={() => onNavigate('tool-a')}
        >
          Tool A
        </button>
      </nav>
    </aside>
  )
}
