import { Link } from 'react-router-dom'
import FotoTecnoparque from '../assets/FotoTecnoparque.jpg'

export default function MainDashboard() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className="main-container">
        <div className="text-center leading-none">
          <h1 className="text-3xl font-bold text-[#39A900] m-0 p-0">
            Indicadores Tecnoparque
          </h1>
          <h1 className="text-2xl font-semibold text-[#999999] m-0 p-0 mt-2">
            Bienvenido/a, Nombre de usuario
          </h1>

          {/* Imagen con estilos CSS puros */}
          <div className="image-shadow-container">
            <div className="image-shadow-wrapper">
              <img
                src={FotoTecnoparque}
                alt="Foto del edificio Tecnoparque"
                className="tecno-image"
              />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <nav className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/tecnoparque" className="nav-button">
              Tecnoparque
            </Link>
            <Link to="/tecnoacademia" className="nav-button">
              Tecnoacademia
            </Link>
            <Link to="/laboratorio" className="nav-button">
              Laboratorio
            </Link>
            <Link to="/investigacion" className="nav-button">
              Investigación
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}