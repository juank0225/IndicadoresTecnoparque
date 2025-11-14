import { useState, useMemo, useEffect } from 'react';
import './estilosTecnoacademia.css';

export default function Dashboard() {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [selectedIndicador, setSelectedIndicador] = useState<{ label: string; segments: { label: string; value: number; color: string }[] } | null>(null);
  const [animated, setAnimated] = useState(false);

  const primaryColor = "#39a900";
  const accentColor = "#e8f5e0";

  const items = [
    {
      label: "Número de instituciones educativas",
      segments: [
        { label: "Urbanas", value: 98, color: "#39a900" },
        { label: "Rurales", value: 58, color: "#5bc41a" }
      ]
    },
    {
      label: "Instituciones educativas articuladas",
      segments: [
        { label: "Técnicas", value: 74, color: "#39a900" },
        { label: "Tecnológicas", value: 50, color: "#7ed957" }
      ]
    },
    {
      label: "Número de estudiantes matriculados",
      segments: [
        { label: "Técnicos", value: 1523, color: "#39a900" },
        { label: "Tecnólogos", value: 894, color: "#5bc41a" },
        { label: "Auxiliares", value: 430, color: "#9de67f" }
      ]
    },
    {
      label: "Aprendices certificados",
      segments: [
        { label: "2024", value: 1124, color: "#39a900" },
        { label: "2023", value: 732, color: "#7ed957" }
      ]
    },
    {
      label: "Proyectos de investigación",
      segments: [
        { label: "En curso", value: 52, color: "#39a900" },
        { label: "Finalizados", value: 35, color: "#5bc41a" }
      ]
    },
    {
      label: "Aprendices en cadena formativa",
      segments: [
        { label: "Nivel 1", value: 678, color: "#39a900" },
        { label: "Nivel 2", value: 534, color: "#5bc41a" },
        { label: "Nivel 3", value: 422, color: "#9de67f" }
      ]
    },
    {
      label: "EDTS",
      segments: [
        { label: "Activos", value: 187, color: "#39a900" },
        { label: "Pendientes", value: 47, color: "#7ed957" }
      ]
    },
    {
      label: "Número de proyectos tecnológicos fomentando el aprendizaje basado en proyectos en estudiantes",
      segments: [
        { label: "Desarrollo", value: 156, color: "#39a900" },
        { label: "Implementación", value: 98, color: "#5bc41a" },
        { label: "Evaluación", value: 58, color: "#9de67f" }
      ]
    },
    {
      label: "Estudiantes destacados",
      segments: [
        { label: "Excelencia", value: 234, color: "#39a900" },
        { label: "Sobresaliente", value: 194, color: "#7ed957" }
      ]
    },
    {
      label: "Estrategia de fortalecimiento y mentorías para fortalecer el talento de los estudiantes",
      segments: [
        { label: "Individual", value: 312, color: "#39a900" },
        { label: "Grupal", value: 255, color: "#5bc41a" }
      ]
    },
    {
      label: "Participación en ferias",
      segments: [
        { label: "Nacionales", value: 54, color: "#39a900" },
        { label: "Regionales", value: 38, color: "#7ed957" }
      ]
    },
    {
      label: "Visitas a centros de formación",
      segments: [
        { label: "Programadas", value: 134, color: "#39a900" },
        { label: "Realizadas", value: 44, color: "#5bc41a" }
      ]
    },
    {
      label: "Participación en eventos y actividades de innovación tecnológica",
      segments: [
        { label: "Workshops", value: 67, color: "#39a900" },
        { label: "Conferencias", value: 48, color: "#5bc41a" },
        { label: "Hackathons", value: 30, color: "#9de67f" }
      ]
    },
    {
      label: "Número de talleres",
      segments: [
        { label: "Prácticos", value: 167, color: "#39a900" },
        { label: "Teóricos", value: 122, color: "#7ed957" }
      ]
    },
    {
      label: "Proyectos integrados",
      segments: [
        { label: "Multidisciplinarios", value: 124, color: "#39a900" },
        { label: "Especializados", value: 79, color: "#5bc41a" }
      ]
    }
  ];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((it) => it.label.toLowerCase().includes(q));
  }, [query]);

  useEffect(() => {
    if (selectedIndex !== null) {
      setAnimated(false);
      const timer = setTimeout(() => setAnimated(true), 50);
      return () => clearTimeout(timer);
    }
  }, [selectedIndex]);

  const handleSelect = (item: { label: string; segments: { label: string; value: number; color: string }[] }, index: number) => {
    setSelectedIndex(index);
    setSelectedIndicador(item);
  };

  const handleClear = () => {
    setQuery("");
    setSelectedIndex(null);
    setSelectedIndicador(null);
    setAnimated(false);
  };

  const Donut = ({ segments = [], size = 380, thickness = 70 }: { segments?: { label: string; value: number; color: string }[]; size?: number; thickness?: number }) => {
    const total = segments.reduce((s, it) => s + (it.value || 0), 0) || 1;
    const radius = (size - thickness) / 2;
    const circumference = 2 * Math.PI * radius;
    const centerFont = Math.max(32, Math.round(size * 0.12));

    let acc = 0;
    return (
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="donut-svg">
        <defs>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
            <feOffset dx="0" dy="2" result="offsetblur"/>
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3"/>
            </feComponentTransfer>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Círculo de fondo */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#e8e8e8"
          strokeWidth={thickness}
        />
        
        {/* Segmentos del donut */}
        <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
          {segments.map((s, i) => {
            const pct = (s.value || 0) / total;
            const dashLength = pct * circumference;
            const dashOffset = -acc * circumference;
            acc += pct;
            
            return (
              <circle
                key={i}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke={s.color}
                strokeWidth={thickness}
                strokeLinecap="round"
                strokeDasharray={`${dashLength} ${circumference - dashLength}`}
                strokeDashoffset={dashOffset}
                filter="url(#shadow)"
                className={animated ? 'donut-segment' : ''}
                style={{
                  animationDelay: `${i * 0.2}s`,
                  transition: 'all 0.3s ease'
                }}
              />
            );
          })}
        </g>

        {/* Texto central */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={centerFont}
          fontWeight="700"
          fill={primaryColor}
          className={animated ? 'donut-center-text' : ''}
        >
          {total}
        </text>
      </svg>
    );
  };

  const SingleDonutStat = ({ title = "Matriculados", segments = [] }: { title?: string; segments?: { label: string; value: number; color: string }[] }) => {
    const total = segments.reduce((s, it) => s + it.value, 0);

    return (
      <div className="stat-container">
        <div className="stat-wrapper">
          <div className="donut-container">
            <Donut segments={segments} size={380} thickness={70} />
          </div>

          <div className="stat-content">
            <div className="stat-header">
              <div className="stat-title-section">
                <div className={`stat-title ${animated ? 'slide-in-left' : ''}`}>
                  {title}
                </div>
                <div className="stat-subtitle">
                  Resumen rápido del desglose por categoría
                </div>
              </div>

              <div className="stat-total-section">
                <div 
                  className={`stat-total ${animated ? 'scale-in' : ''}`}
                  style={{ color: primaryColor }}
                >
                  {total}
                </div>
                <div className="stat-total-label">Total</div>
              </div>
            </div>

            <div className="stat-legend">
              {segments.map((s, i) => {
                const pct = Math.round((s.value / total) * 100);
                return (
                  <div
                    key={i}
                    className={`legend-item ${animated ? 'slide-in-right' : ''}`}
                    style={{ animationDelay: `${i * 0.15}s` }}
                  >
                    <div className="legend-left">
                      <span
                        className="legend-color"
                        style={{
                          background: s.color,
                          boxShadow: `0 2px 8px ${s.color}40`
                        }}
                      />
                      <div className="legend-label">{s.label}</div>
                    </div>

                    <div className="legend-right">
                      <div className="legend-value">{s.value}</div>
                      <div className="legend-percentage">{pct}%</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title" style={{ color: '#39a900', 
          fontWeight: 'bold', 
          textAlign: 'center',
          padding: '0 0.5rem' }}>
        Indicadores Tecnoacademia
      </h1>
      
      <div className="dashboard-content">
        {/* Panel lateral de indicadores */}
        <div className="sidebar-panel">
          {/* Header */}
          <div className="sidebar-header">
            <div className="sidebar-header-left">
              <div 
                className="sidebar-icon"
                style={{
                  background: primaryColor,
                  boxShadow: `0 6px 18px ${primaryColor}30`
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M3 12h18" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M6 6l3 6" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </div>

              <div>
                <div className="sidebar-title">Indicadores</div>
                <div className="sidebar-subtitle">Selecciona un indicador</div>
              </div>
            </div>

            <div 
              className="sidebar-badge"
              style={{ 
                color: primaryColor,
                background: accentColor 
              }}
            >
              {filtered.length} items
            </div>
          </div>

          {/* Search box */}
          <div className="search-box">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M21 21l-4.35-4.35" stroke="#6b6b6b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="11" cy="11" r="6" stroke="#6b6b6b" strokeWidth="1.6" />
            </svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar indicador..."
              className="search-input"
            />
            {query && (
              <button onClick={() => setQuery("")} className="search-clear">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18" stroke="#6b6b6b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 6l12 12" stroke="#6b6b6b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            )}
          </div>

          {/* Lista scrollable */}
          <div className="indicators-list">
            <div className="indicators-wrapper">
              {filtered.map((item, index) => {
                const isSelected = selectedIndex === index;
                const total = item.segments.reduce((s, seg) => s + seg.value, 0);
                return (
                  <div
                    key={index}
                    onClick={() => handleSelect(item, index)}
                    className={`indicator-item ${isSelected ? 'selected' : ''}`}
                    style={{
                      borderColor: isSelected ? primaryColor : undefined,
                      boxShadow: isSelected ? `0 8px 24px ${primaryColor}20` : undefined
                    }}
                  >
                    <div
                      className="indicator-badge"
                      style={{
                        background: isSelected ? primaryColor : 'rgba(57,169,0,0.08)',
                        color: isSelected ? '#fff' : primaryColor,
                        boxShadow: isSelected ? `0 6px 18px ${primaryColor}30` : 'none'
                      }}
                    >
                      {total}
                    </div>

                    <div className="indicator-content">
                      <div className="indicator-title">{item.label}</div>
                      <div className="indicator-meta">
                        {item.segments.length} categorías • Total: {total}
                      </div>
                    </div>
                  </div>
                );
              })}

              {filtered.length === 0 && (
                <div className="no-results">
                  No se encontraron indicadores.
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="sidebar-footer">
            <div className="footer-text">
              Mostrar {filtered.length} de {items.length}
            </div>

            <button
              onClick={handleClear}
              className="clear-button"
              style={{
                background: primaryColor,
                boxShadow: `0 10px 30px ${primaryColor}20`
              }}
            >
              Limpiar selección
            </button>
          </div>
        </div>

        {/* Panel derecho - Estadísticas */}
        <div className="stats-panel">
          {selectedIndicador ? (
            <SingleDonutStat title={selectedIndicador.label} segments={selectedIndicador.segments} />
          ) : (
            <div className="empty-state">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" className="empty-icon">
                <circle cx="12" cy="12" r="10" stroke="#e0e0e0" strokeWidth="2" />
                <path d="M12 8v4M12 16h.01" stroke="#e0e0e0" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <h3 className="empty-title">Selecciona un indicador</h3>
              <p className="empty-text">
                Elige un indicador de la lista para ver sus estadísticas detalladas
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}