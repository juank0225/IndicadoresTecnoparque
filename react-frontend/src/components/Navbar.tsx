import { NavLink, Link } from 'react-router-dom'

const NavItem = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-[var(--tp-dark-blue)] text-white' : 'text-gray-700 hover:bg-gray-100'}`
    }
  >
    {children}
  </NavLink>
)

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-[var(--tp-dark-blue)] flex items-center justify-center text-white font-bold">TP</div>
          <div className="text-lg font-semibold">TecnoParque Bogotá</div>
        </Link>
        <nav className="flex items-center gap-2">
          <NavItem to="/tecnoparque">Tecnoparque</NavItem>
          <NavItem to="/tecnoacademia">Tecnoacademia</NavItem>
          <NavItem to="/laboratorio">Laboratorio</NavItem>
          <NavItem to="/investigacion">Investigación</NavItem>
          <NavItem to="/perfil">Perfil</NavItem>
        </nav>
      </div>
    </header>
  )
}
