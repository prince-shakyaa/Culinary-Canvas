import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext'

function Header() {
  const { darkMode, toggleTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/explore?search=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery('')
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className="bg-white dark:bg-slate-800 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-primary-500 text-2xl">🍽️</span>
            <span className="font-display font-bold text-xl">Culinary Canvas</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/"
              className={({ isActive }) => 
                isActive 
                  ? "text-primary-600 dark:text-primary-400 font-medium"
                  : "text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/explore"
              className={({ isActive }) => 
                isActive 
                  ? "text-primary-600 dark:text-primary-400 font-medium"
                  : "text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              }
            >
              Explore
            </NavLink>
            <NavLink 
              to="/favorites"
              className={({ isActive }) => 
                isActive 
                  ? "text-primary-600 dark:text-primary-400 font-medium"
                  : "text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              }
            >
              Favorites
            </NavLink>
          </nav>

          {/* Search, Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Search Bar (Desktop) */}
            <form onSubmit={handleSearch} className="hidden md:flex items-center">
              <input
                type="text"
                placeholder="Search recipes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border border-slate-300 dark:border-slate-600 dark:bg-slate-700 rounded-l-md py-1 px-3 focus:border-primary-400 w-40 lg:w-60"
              />
              <button 
                type="submit"
                className="bg-primary-500 text-white p-1 px-3 rounded-r-md hover:bg-primary-600 transition"
              >
                🔍
              </button>
            </form>

            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4 mb-4">
              <NavLink 
                to="/"
                className={({ isActive }) => 
                  isActive 
                    ? "text-primary-600 dark:text-primary-400 font-medium"
                    : "text-slate-600 dark:text-slate-300"
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink 
                to="/explore"
                className={({ isActive }) => 
                  isActive 
                    ? "text-primary-600 dark:text-primary-400 font-medium"
                    : "text-slate-600 dark:text-slate-300"
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Explore
              </NavLink>
              <NavLink 
                to="/favorites"
                className={({ isActive }) => 
                  isActive 
                    ? "text-primary-600 dark:text-primary-400 font-medium"
                    : "text-slate-600 dark:text-slate-300"
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Favorites
              </NavLink>
            </nav>
            
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                type="text"
                placeholder="Search recipes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border border-slate-300 dark:border-slate-600 dark:bg-slate-700 rounded-l-md py-2 px-3 focus:border-primary-400 flex-grow"
              />
              <button 
                type="submit"
                className="bg-primary-500 text-white p-2 px-3 rounded-r-md hover:bg-primary-600 transition"
              >
                🔍
              </button>
            </form>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header