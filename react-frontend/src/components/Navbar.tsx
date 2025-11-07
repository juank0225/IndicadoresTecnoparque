import { NavLink, Link } from 'react-router-dom'
import './components.css'
import IndicaSena from '../assets/IndicaSena.jpg'

const NavItem = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `min-h-[0px] flex items-center px-8 text-lg font-medium text-white ${
        isActive
          ? 'bg-[#ffffff] text-[#39A900]'
          : 'hover:bg-[#ffffff] hover:text-[#39A900]'
      }`
    }
  >
    {children}
  </NavLink>
)

export default function Navbar() {
  return (
    <header
      className="components-navbar bg-[#39A900] w-full min-h-[55px] shadow-lg"
      style={{ height: '55px' }}
    >
      <div className="w-full h-full flex items-stretch justify-between">
        <div className="flex items-stretch h-full">
          <Link to="/app" className="flex items-center gap-4 px-8 min-h-[55px]">
            <img
              src={IndicaSena}
              alt="SIRT"
              className="logo-sirt"
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
          </Link>

          <nav className="flex items-stretch h-full gap-6">
            <NavItem to="/app">Panel</NavItem>
            <NavItem to="/app/tecnoparque">Tecnoparque</NavItem>
            <NavItem to="/app/tecnoacademia">Tecnoacademia</NavItem>
            <NavItem to="/app/laboratorio">Laboratorio</NavItem>
            <NavItem to="/app/investigacion">Investigación</NavItem>
          </nav>
        </div>

        <div className="flex items-center px-8">
          <Link to="/app/perfil" className="profile-btn">
            Perfil
          </Link>
        </div>
      </div>
    </header>
  )
}
