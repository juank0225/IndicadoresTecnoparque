export default function Dashboard() {
  return (
    <div style={{ paddingTop: '3rem', paddingBottom: '3rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
      <h1 
        style={{ 
          color: '#39a900', 
          fontSize: '2.25rem', 
          fontWeight: 'bold', 
          marginBottom: '3rem', 
          textAlign: 'center' 
        }}
      >
        Indicadores Tecnoparque
      </h1>
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '1.5rem', 
        marginBottom: '3rem',
        flexWrap: 'wrap'
      }}>
        <button 
          style={{ 
            backgroundColor: '#39a900',
            color: 'white',
            paddingLeft: '2rem',
            paddingRight: '2rem',
            paddingTop: '0.75rem',
            paddingBottom: '0.75rem',
            fontSize: '0.875rem',
            fontWeight: '500',
            borderRadius: '0.75rem',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            transition: 'opacity 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'}
          onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
        >
          Proyectos
        </button>
        <button 
          style={{ 
            backgroundColor: '#39a900',
            color: 'white',
            paddingLeft: '2rem',
            paddingRight: '2rem',
            paddingTop: '0.75rem',
            paddingBottom: '0.75rem',
            fontSize: '0.875rem',
            fontWeight: '500',
            borderRadius: '0.75rem',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            transition: 'opacity 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'}
          onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
        >
          Articulaciones
        </button>
        <button 
          style={{ 
            backgroundColor: '#39a900',
            color: 'white',
            paddingLeft: '2rem',
            paddingRight: '2rem',
            paddingTop: '0.75rem',
            paddingBottom: '0.75rem',
            fontSize: '0.875rem',
            fontWeight: '500',
            borderRadius: '0.75rem',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            transition: 'opacity 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'}
          onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
        >
          Visitas
        </button>
        <button 
          style={{ 
            backgroundColor: '#39a900',
            color: 'white',
            paddingLeft: '2rem',
            paddingRight: '2rem',
            paddingTop: '0.75rem',
            paddingBottom: '0.75rem',
            fontSize: '0.875rem',
            fontWeight: '500',
            borderRadius: '0.75rem',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            transition: 'opacity 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'}
          onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
        >
          Giras
        </button>
        <button 
          style={{ 
            backgroundColor: '#39a900',
            color: 'white',
            paddingLeft: '2rem',
            paddingRight: '2rem',
            paddingTop: '0.75rem',
            paddingBottom: '0.75rem',
            fontSize: '0.875rem',
            fontWeight: '500',
            borderRadius: '0.75rem',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            transition: 'opacity 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'}
          onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
        >
          Asesorías
        </button>
      </div>

      <div className="card">
        <div className="text-gray-600 mb-2">Área de gráficos (integrar Recharts/Chart.js aquí)</div>
        <div className="w-full h-64 bg-gray-50 rounded flex items-center justify-center text-gray-300">Gráfico de ejemplo</div>
      </div>
    </div>
  )
}