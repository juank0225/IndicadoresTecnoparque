import { Link } from 'react-router-dom'

export default function MainDashboard() {
  const cards = [
    { title: 'Tecnoparque', to: '/tecnoparque', desc: 'Panel principal de indicadores del edificio' },
    { title: 'Tecnoacademia', to: '/tecnoacademia', desc: 'Proyectos, gráficas y seguimiento' },
    { title: 'Laboratorio', to: '/laboratorio', desc: 'Equipos e indicadores del laboratorio' },
    { title: 'Investigación', to: '/investigacion', desc: 'Publicaciones y análisis' },
  ]

  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className="container">
        <h1 className="text-3xl font-bold mb-6 mt-4">Panel general — Sistema de indicadores</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {cards.map((c) => (
            <Link to={c.to} key={c.to} className="block">
              <div className="card hover:shadow-lg transition-shadow h-full flex flex-col justify-between">
                <div>
                  <div className="text-sm text-[var(--tp-muted)]">Sección</div>
                  <div className="text-xl font-semibold mt-2">{c.title}</div>
                  <p className="text-sm text-gray-600 mt-3">{c.desc}</p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-xs text-gray-500">Ir a {c.title}</div>
                  <div className="px-2 py-1 rounded bg-[var(--tp-dark-blue)] text-white text-sm">Ver</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
