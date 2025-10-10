import { NavLink, Link } from 'react-router-dom'
import './components.css' // <-- importar estilos compartidos
import IndicaSena from '../assets/IndicaSena.jpg' 

const NavItem = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `min-h-[0px] flex items-center px-8 text-lg font-medium text-white ${
        isActive 
          ? 'bg-[#ffffff]' 
          : 'hover:bg-[#ffffff]'
      }`
    }
  >
    {children}
  </NavLink>
)

export default function Navbar() {
  return (
    <header className="components-navbar bg-[#39A900] w-full min-h-[55px] shadow-lg" style={{height: '55px'}}>
      <div className="w-full h-full flex items-stretch justify-between">
        <div className="flex items-stretch h-full">
          <Link to="/" className="flex items-center gap-4 px-8 min-h-[55px]">
            <img
              src={IndicaSena}
              alt="SIRT"
              className="logo-sirt"
              onError={(e) => e.currentTarget.style.display = 'none'}
            />
          </Link>

          <nav className="flex items-stretch h-full gap-6">
            <NavItem to="/">Panel</NavItem>
            <NavItem to="/tecnoparque">Tecnoparque</NavItem>
            <NavItem to="/tecnoacademia">Tecnoacademia</NavItem>
            <NavItem to="/laboratorio">Laboratorio</NavItem>
            <NavItem to="/investigacion">Investigación</NavItem>
          </nav>
        </div>

        <div className="flex items-center px-8">
          <Link
            to="/perfil"
            className="profile-btn"
          >
            Perfil
          </Link>
        </div>
      </div>
    </header>
  )
}