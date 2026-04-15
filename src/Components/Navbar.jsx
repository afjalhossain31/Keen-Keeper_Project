import { Link, NavLink } from 'react-router-dom'
import { Home, Clock3, PieChart as PieChartIcon, UserRound } from 'lucide-react'

// Three Label 
export default function Navbar() {
  const navItems = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/timeline', label: 'Timeline', icon: Clock3 },
    { to: '/stats', label: 'Stats', icon: PieChartIcon },
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">

        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Keen-Keeper Logo" className="h-10 w-auto object-contain" />
        </Link>


        <nav className="flex flex-wrap items-center gap-2 rounded-lg bg-slate-100 p-1.5">
          {/* eslint-disable-next-line no-unused-vars */}
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition ${isActive ? 'bg-[#155e52] text-white shadow-sm' : 'text-slate-600 hover:bg-white'
                }`
              }
            >
              <Icon size={16} />
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}