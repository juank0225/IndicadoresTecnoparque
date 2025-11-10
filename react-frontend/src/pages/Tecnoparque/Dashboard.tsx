import { useState, type Key } from 'react';

type DatosPeriodo = {
  labels: string[];
  valores: number[];
};

type CategoriaData = {
  Mes: DatosPeriodo;
  Año: DatosPeriodo;
  Semana: DatosPeriodo;
};

type DatosVista = {
  Proyectos: CategoriaData;
  Articulaciones: CategoriaData;
  Visitas: CategoriaData;
  Giras: CategoriaData;
  Asesorías: CategoriaData;
};

export default function Dashboard() {
  const [vista, setVista] = useState('Año'); // Mes, Año, Semana
  const [tipoGrafico, setTipoGrafico] = useState('Gráfico de línea');
  const [categoriaActiva, setCategoriaActiva] = useState('Proyectos');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [animacionKey, setAnimacionKey] = useState(0);

  // Datos para cada vista y categoría
  const datosVista: DatosVista = {
    Proyectos: {
      Mes: {
        labels: ['Día 1', 'Día 5', 'Día 10', 'Día 15', 'Día 20', 'Día 25', 'Día 30'],
        valores: [45, 52, 48, 65, 70, 68, 75]
      },
      Año: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        valores: [10, 20, 15, 30, 60, 86, 70, 80, 95, 100, 80, 70]
      },
      Semana: {
        labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
        valores: [65, 75, 70, 85, 90, 60, 55]
      }
    },
    Articulaciones: {
      Mes: {
        labels: ['Día 1', 'Día 5', 'Día 10', 'Día 15', 'Día 20', 'Día 25', 'Día 30'],
        valores: [30, 35, 40, 50, 55, 60, 65]
      },
      Año: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        valores: [25, 30, 28, 35, 50, 65, 60, 70, 80, 85, 75, 70]
      },
      Semana: {
        labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
        valores: [45, 55, 50, 65, 70, 40, 35]
      }
    },
    Visitas: {
      Mes: {
        labels: ['Día 1', 'Día 5', 'Día 10', 'Día 15', 'Día 20', 'Día 25', 'Día 30'],
        valores: [80, 85, 90, 95, 100, 105, 110]
      },
      Año: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        valores: [60, 65, 70, 75, 85, 90, 95, 100, 95, 90, 85, 80]
      },
      Semana: {
        labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
        valores: [80, 85, 90, 95, 100, 70, 60]
      }
    },
    Giras: {
      Mes: {
        labels: ['Día 1', 'Día 5', 'Día 10', 'Día 15', 'Día 20', 'Día 25', 'Día 30'],
        valores: [20, 25, 30, 35, 40, 38, 42]
      },
      Año: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        valores: [15, 18, 20, 25, 35, 45, 40, 50, 55, 60, 50, 45]
      },
  Semana: {
    labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
    valores: [65, 75, 70, 85, 90, 60, 55]
  }
    },
    Asesorías: {
      Mes: {
        labels: ['Día 1', 'Día 5', 'Día 10', 'Día 15', 'Día 20', 'Día 25', 'Día 30'],
        valores: [55, 60, 58, 70, 75, 72, 80]
      },
      Año: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        valores: [40, 45, 42, 50, 65, 75, 70, 80, 85, 90, 85, 80]
      },
      Semana: {
        labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
        valores: [60, 70, 65, 80, 85, 50, 45]
      }
    }
  };

  const datos = datosVista[categoriaActiva as keyof DatosVista][vista as keyof CategoriaData];
  const opcionesGrafico = ['Gráfico de línea', 'Gráfico de barras', 'Gráfico circular'];
  const categorias = ['Proyectos', 'Articulaciones', 'Visitas', 'Giras', 'Asesorías'];

  const cambiarVista = (nuevaVista: string) => {
    setVista(nuevaVista);
    setAnimacionKey(prev => prev + 1);
  };

  const cambiarTipoGrafico = (nuevoTipo: string) => {
    setTipoGrafico(nuevoTipo);
    setDropdownOpen(false);
    setAnimacionKey(prev => prev + 1);
  };

  const cambiarCategoria = (categoria: string) => {
    setCategoriaActiva(categoria);
    setAnimacionKey(prev => prev + 1);
  };

  const GraficoLinea = ({ labels, valores }: { labels: string[]; valores: number[] }) => {
    const width = 1000;
    const height = 500;
    const padding = 80;
    const maxY = Math.max(...valores);
    const stepX = (width - padding * 2) / (labels.length - 1);

    const points = valores.map((valor, i) => {
      const x = padding + i * stepX;
      const y = height - padding - (valor / maxY) * (height - padding * 2);
      return [x, y];
    });

    const pathD = points.reduce((acc, [x, y], i) => {
      return i === 0 ? `M ${x},${y}` : `${acc} L ${x},${y}`;
    }, '');

    return (
      <svg width={width} height={height} key={animacionKey}>
        <style>{`
          @keyframes drawLine {
            from { stroke-dashoffset: 2000; }
            to { stroke-dashoffset: 0; }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0); }
            to { opacity: 1; transform: scale(1); }
          }
          .line-path {
            stroke-dasharray: 2000;
            stroke-dashoffset: 2000;
            animation: drawLine 1.5s ease forwards;
          }
          .point-circle {
            opacity: 0;
            animation: fadeIn 0.3s ease forwards;
          }
        `}</style>

        {[0.25, 0.5, 0.75, 1].map((f, i) => (
          <line
            key={i}
            x1={padding}
            x2={width - padding}
            y1={height - padding - f * (height - padding * 2)}
            y2={height - padding - f * (height - padding * 2)}
            stroke="#e0e0e0"
            strokeDasharray="4"
          />
        ))}

        {labels.map((label: string, i: number) => {
          const x = padding + i * stepX;
          return (
            <text key={i} x={x} y={height - 25} fontSize={12} textAnchor="middle" fill="#666">
              {label}
            </text>
          );
        })}

        {[0, 25, 50, 75, 100].map((valor, i) => {
          const y = height - padding - (valor / maxY) * (height - padding * 2);
          return (
            <text key={i} x={20} y={y + 5} fontSize={12} fill="#666">
              {valor}
            </text>
          );
        })}

        <path
          d={pathD}
          fill="none"
          stroke="#39a900"
          strokeWidth="3"
          className="line-path"
        />

        {points.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={5}
            fill="#39a900"
            className="point-circle"
            style={{ animationDelay: `${i * 0.1 + 1}s` }}
          />
        ))}

        <text x={width / 2} y={25} textAnchor="middle" fontSize={18} fontWeight="bold" fill="#333">
          {categoriaActiva} por {vista}
        </text>
      </svg>
    );
  };

  const GraficoBarras = ({ labels, valores }: { labels: string[], valores: number[] }) => {
    const width = 1000;
    const height = 500;
    const padding = 80;
    const maxY = Math.max(...valores);
    const barWidth = (width - padding * 2) / labels.length - 20;

    return (
      <svg width={width} height={height} key={animacionKey}>
        <style>{`
          @keyframes growBar {
            from { transform: scaleY(0); }
            to { transform: scaleY(1); }
          }
          .bar-rect {
            transform-origin: bottom;
            animation: growBar 0.8s ease forwards;
          }
        `}</style>

        {[0.25, 0.5, 0.75, 1].map((f, i) => (
          <line
            key={i}
            x1={padding}
            x2={width - padding}
            y1={height - padding - f * (height - padding * 2)}
            y2={height - padding - f * (height - padding * 2)}
            stroke="#e0e0e0"
            strokeDasharray="4"
          />
        ))}

        <g>
          {valores.map((valor, i) => {
            const x = padding + i * ((width - padding * 2) / labels.length) + 10;
            const barHeight = (valor / maxY) * (height - padding * 2);
            const y = height - padding - barHeight;

            return (
              <rect
                key={i}
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                fill="#39a900"
                className="bar-rect"
                style={{ 
                  animationDelay: `${i * 0.1}s`
                }}
              />
            );
          })}
        </g>

        {labels.map((label, i) => {
          const x = padding + i * ((width - padding * 2) / labels.length) + barWidth / 2 + 10;
          return (
            <text key={i} x={x} y={height - 25} fontSize={12} textAnchor="middle" fill="#666">
              {label}
            </text>
          );
        })}

        {[0, 25, 50, 75, 100].map((valor, i) => {
          const y = height - padding - (valor / maxY) * (height - padding * 2);
          return (
            <text key={i} x={20} y={y + 5} fontSize={12} fill="#666">
              {valor}
            </text>
          );
        })}

        <text x={width / 2} y={25} textAnchor="middle" fontSize={18} fontWeight="bold" fill="#333">
          {categoriaActiva} por {vista}
        </text>
      </svg>
    );
  };

  const GraficoCircular = ({ labels, valores }: { labels: string[], valores: number[] }) => {
    const width = 1000;
    const height = 500;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = 150;
    const total = valores.reduce((sum, val) => sum + val, 0);
    
    let currentAngle = -90;
    const colores = ['#39a900', '#4db821', '#61c73a', '#75d653', '#89e56c', '#9df485', '#b1ff9e', '#76b947', '#5a9e2f', '#3e8317', '#226800'];

    return (
      <svg width={width} height={height} key={animacionKey}>
        <style>{`
          @keyframes fadeInScale {
            from { opacity: 0; transform: scale(0); }
            to { opacity: 1; transform: scale(1); }
          }
          .slice-path {
            opacity: 0;
            animation: fadeInScale 0.5s ease forwards;
            transform-origin: ${centerX}px ${centerY}px;
          }
        `}</style>

        {valores.map((valor: number, i: number) => {
          const angle = (valor / total) * 360;
          const startAngle = currentAngle;
          const endAngle = currentAngle + angle;
          currentAngle = endAngle;

          const startRad = (startAngle * Math.PI) / 180;
          const endRad = (endAngle * Math.PI) / 180;

          const x1 = centerX + radius * Math.cos(startRad);
          const y1 = centerY + radius * Math.sin(startRad);
          const x2 = centerX + radius * Math.cos(endRad);
          const y2 = centerY + radius * Math.sin(endRad);

          const largeArc = angle > 180 ? 1 : 0;

          const pathData = [
            `M ${centerX} ${centerY}`,
            `L ${x1} ${y1}`,
            `A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`,
            'Z'
          ].join(' ');

          return (
            <path
              key={i}
              d={pathData}
              fill={colores[i % colores.length]}
              className="slice-path"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          );
        })}

        <text x={centerX} y={50} textAnchor="middle" fontSize={18} fontWeight="bold" fill="#333">
          {categoriaActiva} por {vista}
        </text>

        {labels.map((label, i) => (
          <g key={i}>
            <rect x={width - 150} y={80 + i * 25} width={15} height={15} fill={colores[i % colores.length]} />
            <text x={width - 130} y={92 + i * 25} fontSize={12} fill="#666">
              {label}: {valores[i]}
            </text>
          </g>
        ))}
      </svg>
    );
  };

  const renderGrafico = () => {
    switch (tipoGrafico) {
      case 'Gráfico de barras':
        return <GraficoBarras labels={datos.labels} valores={datos.valores} />;
      case 'Gráfico circular':
        return <GraficoCircular labels={datos.labels} valores={datos.valores} />;
      default:
        return <GraficoLinea labels={datos.labels} valores={datos.valores} />;
    }
  };

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
        {categorias.map((categoria) => (
          <button
            key={categoria}
            onClick={() => cambiarCategoria(categoria)}
            style={{ 
              backgroundColor: categoriaActiva === categoria ? '#39a900' : '#e8f5e9',
              color: categoriaActiva === categoria ? 'white' : '#39a900',
              paddingLeft: '2rem',
              paddingRight: '2rem',
              paddingTop: '0.75rem',
              paddingBottom: '0.75rem',
              fontSize: '0.875rem',
              fontWeight: '500',
              borderRadius: '0.75rem',
              border: categoriaActiva === categoria ? 'none' : '2px solid #39a900',
              cursor: 'pointer',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.2s',
              transform: 'scale(1)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.opacity = '0.9';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            {categoria}
          </button>
        ))}
      </div>

      <div style={{ 
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px',
        backgroundColor: '#fff',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          {renderGrafico()}
        </div>

        <div style={{ 
          display: 'flex', 
          gap: '40px', 
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          flexWrap: 'wrap'
        }}>
          <div style={{ minWidth: '280px' }}>
            <div
              onClick={() => setDropdownOpen(!dropdownOpen)}
              style={{
                padding: '16px 20px',
                border: '2px solid #39a900',
                borderRadius: '8px',
                backgroundColor: '#fff',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '16px',
                fontWeight: '500',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e8f5e9'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff'}
            >
              <span>{tipoGrafico}</span>
              <span style={{ 
                transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0)', 
                transition: '0.2s',
                display: 'inline-block'
              }}>
                ▾
              </span>
            </div>
            {dropdownOpen && (
              <div style={{
                marginTop: '4px',
                border: '2px solid #39a900',
                borderRadius: '8px',
                backgroundColor: '#fff',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
              }}>
                {opcionesGrafico.map((opcion, index) => (
                  <div
                    key={index}
                    onClick={() => cambiarTipoGrafico(opcion)}
                    style={{
                      padding: '14px 20px',
                      cursor: 'pointer',
                      backgroundColor: opcion === tipoGrafico ? '#e8f5e9' : 'transparent',
                      fontSize: '16px',
                      transition: 'background-color 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      if (opcion !== tipoGrafico) {
                        e.currentTarget.style.backgroundColor = '#f5f5f5';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (opcion !== tipoGrafico) {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    {opcion}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div style={{ display: 'flex', gap: '16px' }}>
            {['Mes', 'Año', 'Semana'].map((texto) => (
              <button
                key={texto}
                onClick={() => cambiarVista(texto)}
                style={{
                  padding: '18px 32px',
                  borderRadius: '8px',
                  border: '2px solid #39a900',
                  backgroundColor: vista === texto ? '#39a900' : '#fff',
                  color: vista === texto ? '#fff' : '#333',
                  fontWeight: '600',
                  fontSize: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  transform: 'scale(1)',
                  minWidth: '120px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  if (vista !== texto) {
                    e.currentTarget.style.backgroundColor = '#e8f5e9';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  if (vista !== texto) {
                    e.currentTarget.style.backgroundColor = '#fff';
                  }
                }}
                onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
                onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              >
                {texto}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}