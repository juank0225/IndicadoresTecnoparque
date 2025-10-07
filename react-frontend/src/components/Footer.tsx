export default function Footer() {
  return (
    <footer className="mt-8 py-6 bg-white border-t">
      <div className="container text-sm text-gray-600 flex items-center justify-between">
        <div>© {new Date().getFullYear()} TecnoParque Bogotá</div>
        <div className="text-xs text-gray-500">Diseñado para el sistema de indicadores</div>
      </div>
    </footer>
  )
}
