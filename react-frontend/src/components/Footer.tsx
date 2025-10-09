import './components.css' // <-- importar estilos compartidos

export default function Footer() {
  return (
    <footer className="mt-8 py-6 bg-white border-t w-full">
      <div className="container text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-2 w-full">
        <div>© {new Date().getFullYear()} TecnoParque Bogotá</div>
        <div className="text-xs text-gray-500">Diseñado para el sistema de indicadores</div>
      </div>
    </footer>
  )
}
