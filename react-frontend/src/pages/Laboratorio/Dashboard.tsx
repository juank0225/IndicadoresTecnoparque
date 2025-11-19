import { useState, useEffect } from "react"

type IndicadorMetaActual = {
  id: string
  titulo: string
  actual: number
  meta: number
  unidad: string
  tipo: "porcentaje" | "moneda"
}

type IndicadorSimple = {
  id: string
  titulo: string
  valor: number
  unidad: string
  detalle: string
}

type IndicadorCualitativo = {
  id: string
  titulo: string
  descripcion: string
  estado: "Cumplido" | "En riesgo" | "Sin dato"
}

export default function Dashboard() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  )
  const [accordionAbierto, setAccordionAbierto] = useState<string | null>(null)
  const [hoverMetaId, setHoverMetaId] = useState<string | null>(null)
  const [hoverCoberturaId, setHoverCoberturaId] = useState<string | null>(null)
  const [hoverKpi, setHoverKpi] = useState<string | null>(null)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const isMobile = windowWidth < 640
  const isTablet = windowWidth >= 640 && windowWidth < 1024

  // ------------------ DATOS DEL LABORATORIO ------------------

  const indicadoresMetaActual: IndicadorMetaActual[] = [
    {
      id: "plazos",
      titulo: "Cumplimiento de plazos",
      actual: 100,
      meta: 95,
      unidad: "%",
      tipo: "porcentaje",
    },
    {
      id: "satisfaccion",
      titulo: "Satisfacción del cliente",
      actual: 0,
      meta: 90,
      unidad: "%",
      tipo: "porcentaje",
    },
    {
      id: "capacitacion",
      titulo: "Capacitación del personal",
      actual: 0,
      meta: 90,
      unidad: "%",
      tipo: "porcentaje",
    },
    {
      id: "competencias",
      titulo: "Competencias del personal",
      actual: 90,
      meta: 100,
      unidad: "%",
      tipo: "porcentaje",
    },
    {
      id: "ventas",
      titulo: "Ventas centro de costos",
      actual: 9_082_100,
      meta: 29_000_000,
      unidad: "COP",
      tipo: "moneda",
    },
  ]

  const indicadoresCobertura: IndicadorSimple[] = [
    {
      id: "aprendices_porcentaje",
      titulo: "Aprendices atendidos",
      valor: 16.64,
      unidad: "%",
      detalle: "Meta mínima 15% de los aprendices matriculados.",
    },
    {
      id: "aprendices_practicas",
      titulo: "Prácticas y proyectos de formación",
      valor: 165,
      unidad: "aprendices",
      detalle:
        "Aprendices atendidos en prácticas de laboratorio y aseguramiento metrológico.",
    },
    {
      id: "usuarios_externos",
      titulo: "Usuarios externos atendidos",
      valor: 15,
      unidad: "usuarios",
      detalle: "Personas, empresas y asociaciones atendidas en el laboratorio.",
    },
    {
      id: "apoyo_emprendedores",
      titulo: "Apoyo a emprendedores",
      valor: 1,
      unidad: "proyecto",
      detalle:
        "Colaboración con FENAVI en aseguramiento metrológico para el sector avícola.",
    },
  ]

  const indicadoresCualitativos: IndicadorCualitativo[] = [
    {
      id: "confidencialidad",
      titulo: "Confidencialidad e imparcialidad",
      descripcion:
        "Garantizar la confidencialidad, integridad, imparcialidad e independencia en los servicios prestados. No se han presentado situaciones que comprometan estos principios.",
      estado: "Cumplido",
    },
    {
      id: "competencias_detalle",
      titulo: "Gestión de competencias del personal",
      descripcion:
        "Se evalúan los requisitos de competencia para cada función que influye en los resultados del laboratorio, incluyendo educación, calificación, formación, conocimiento técnico, habilidades y experiencia.",
      estado: "En riesgo",
    },
    {
      id: "mantenimiento",
      titulo: "Mantenimiento y equipos",
      descripcion:
        "Mantener las instalaciones y el equipo requerido para satisfacer los requisitos del cliente dentro del alcance del laboratorio. Se asignaron $41.000.000 para mantenimiento y calibración de equipos en 2025.",
      estado: "Cumplido",
    },
    {
      id: "mejoras",
      titulo: "Proyectos de mejora 2026",
      descripcion:
        "Se proyecta para 2026 una mejora en la incertidumbre de medida para temperatura y presión como parte de los proyectos de mejora del laboratorio.",
      estado: "Sin dato",
    },
  ]

  // ------------------ HELPERS ------------------

  const formatearValor = (indicador: IndicadorMetaActual | IndicadorSimple) => {
    if ("tipo" in indicador && indicador.tipo === "moneda") {
      return indicador.actual.toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0,
      })
    }

    if ("unidad" in indicador && indicador.unidad === "%") {
      const valor =
        "tipo" in indicador ? indicador.actual : (indicador as IndicadorSimple).valor
      return `${valor.toFixed(2)}%`
    }

    const valor =
      "tipo" in indicador ? indicador.actual : (indicador as IndicadorSimple).valor
    return `${valor.toLocaleString("es-CO")} ${indicador.unidad}`
  }

  const calcularEstadoBarra = (indicador: IndicadorMetaActual) => {
    const ratio = indicador.meta > 0 ? indicador.actual / indicador.meta : 0

    if (ratio >= 1) {
      return {
        etiqueta: "Meta cumplida",
        color: "#39a900",
        fondo: "#e8f5e9",
      }
    }

    if (ratio >= 0.7) {
      return {
        etiqueta: "En progreso",
        color: "#f9a825",
        fondo: "#fff8e1",
      }
    }

    if (indicador.actual === 0) {
      return {
        etiqueta: "Sin medición / sin avance",
        color: "#b0bec5",
        fondo: "#eceff1",
      }
    }

    return {
      etiqueta: "Bajo cumplimiento",
      color: "#e53935",
      fondo: "#ffebee",
    }
  }

  const colorEstadoCualitativo = (estado: IndicadorCualitativo["estado"]) => {
    switch (estado) {
      case "Cumplido":
        return {
          bg: "#e8f5e9",
          color: "#1b5e20",
          border: "#c8e6c9",
        }
      case "En riesgo":
        return {
          bg: "#fff3e0",
          color: "#e65100",
          border: "#ffe0b2",
        }
      case "Sin dato":
      default:
        return {
          bg: "#eceff1",
          color: "#37474f",
          border: "#cfd8dc",
        }
    }
  }

  const toggleAccordion = (id: string) => {
    setAccordionAbierto((prev) => (prev === id ? null : id))
  }

  // ------------------ COMPONENTES UI ------------------

  const KpiCards = () => {
    const kpis = [
      {
        id: "kpi_plazos",
        titulo: "Cumplimiento de plazos",
        valor: "100%",
        detalle: "Servicios entregados en los plazos pactados",
      },
      {
        id: "kpi_aprendices",
        titulo: "Aprendices atendidos",
        valor: "16,64%",
        detalle: "Por encima de la meta del 15%",
      },
      {
        id: "kpi_ventas",
        titulo: "Ventas 2025",
        valor: "$9.082.100",
        detalle: "De una meta de $29.000.000",
      },
      {
        id: "kpi_mantenimiento",
        titulo: "Presupuesto mantenimiento",
        valor: "$41.000.000",
        detalle: "Asignado para 2025",
      },
    ]

    return (
      <section
        style={{
          marginBottom: isMobile ? 18 : 26,
        }}
      >
        <h2
          style={{
            fontSize: isMobile ? 16 : 18,
            fontWeight: 700,
            marginBottom: 10,
            color: "#043804",
          }}
        >
          Resumen general
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
            gap: isMobile ? 10 : 14,
          }}
        >
          {kpis.map((kpi) => {
            const isHover = hoverKpi === kpi.id
            return (
              <div
                key={kpi.id}
                onMouseEnter={() => !isMobile && setHoverKpi(kpi.id)}
                onMouseLeave={() => setHoverKpi(null)}
                style={{
                  background: "#ffffff",
                  borderRadius: 16,
                  padding: isMobile ? "10px 12px" : "14px 16px",
                  border: "1px solid #e0f2e9",
                  boxShadow: isHover
                    ? "0 6px 14px rgba(0,0,0,0.08)"
                    : "0 3px 8px rgba(0,0,0,0.04)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  transform: isHover ? "translateY(-2px)" : "translateY(0)",
                  transition:
                    "transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease",
                  borderColor: isHover ? "#c5e8d1" : "#e0f2e9",
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#4a6a48",
                  }}
                >
                  {kpi.titulo}
                </span>
                <span
                  style={{
                    fontSize: isMobile ? 18 : 22,
                    fontWeight: 800,
                    color: "#39a900",
                  }}
                >
                  {kpi.valor}
                </span>
                <span
                  style={{
                    fontSize: 11,
                    color: "#607d8b",
                  }}
                >
                  {kpi.detalle}
                </span>
              </div>
            )
          })}
        </div>
      </section>
    )
  }

  const SeccionMetaVsActual = () => {
    return (
      <section
        style={{
          marginBottom: isMobile ? 20 : 30,
        }}
      >
        <h2
          style={{
            fontSize: isMobile ? 16 : 18,
            fontWeight: 700,
            marginBottom: 10,
            color: "#043804",
          }}
        >
          Cumplimiento de metas
        </h2>
        <div
          style={{
            background: "#ffffff",
            borderRadius: 16,
            padding: isMobile ? "12px 12px" : "18px 20px",
            boxShadow: "0 3px 10px rgba(0,0,0,0.05)",
            border: "1px solid #e0f2e9",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1.4fr 1fr",
              gap: isMobile ? 10 : 18,
              alignItems: "flex-start",
            }}
          >
            <div>
              {indicadoresMetaActual.map((ind) => {
                const ratio = ind.meta > 0 ? ind.actual / ind.meta : 0
                const porcentaje = ind.tipo === "moneda" ? ratio * 100 : ind.actual
                const estado = calcularEstadoBarra(ind)
                const anchoBarra = Math.min(ratio * 100, 130)
                const isHover = hoverMetaId === ind.id

                return (
                  <div
                    key={ind.id}
                    onMouseEnter={() => !isMobile && setHoverMetaId(ind.id)}
                    onMouseLeave={() => setHoverMetaId(null)}
                    style={{
                      marginBottom: isMobile ? 10 : 12,
                      padding: isMobile ? "6px 6px" : "8px 8px",
                      borderRadius: 12,
                      background: isHover ? "#f5fbf7" : "transparent",
                      transition:
                        "background 0.18s ease, transform 0.18s ease, box-shadow 0.18s ease",
                      boxShadow: isHover
                        ? "0 4px 10px rgba(0,0,0,0.05)"
                        : "none",
                      transform: isHover ? "translateY(-1px)" : "translateY(0)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        marginBottom: 4,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: "#37474f",
                        }}
                      >
                        {ind.titulo}
                      </span>
                      <span
                        style={{
                          fontSize: 11,
                          color: "#607d8b",
                        }}
                      >
                        Meta:{" "}
                        {ind.tipo === "moneda"
                          ? ind.meta.toLocaleString("es-CO", {
                            style: "currency",
                            currency: "COP",
                            maximumFractionDigits: 0,
                          })
                          : `${ind.meta}${ind.unidad}`}
                      </span>
                    </div>

                    <div
                      style={{
                        background: "#f1f8f4",
                        borderRadius: 999,
                        overflow: "hidden",
                        height: 16,
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          width: `${anchoBarra}%`,
                          maxWidth: "130%",
                          height: "100%",
                          background: estado.color,
                          transition: "width 0.4s ease",
                        }}
                      />
                      <span
                        style={{
                          position: "absolute",
                          right: 8,
                          top: "50%",
                          transform: "translateY(-50%)",
                          fontSize: 11,
                          fontWeight: 600,
                          color: "#ffffff",
                          textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                        }}
                      >
                        {ind.tipo === "moneda"
                          ? `${porcentaje.toFixed(1)}%`
                          : `${porcentaje.toFixed(1)}${ind.unidad}`}
                      </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        marginTop: 4,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 11,
                          padding: "2px 8px",
                          borderRadius: 999,
                          background: estado.fondo,
                          color: estado.color,
                          border: `1px solid ${estado.color}20`,
                          fontWeight: 600,
                        }}
                      >
                        {estado.etiqueta}
                      </span>
                      <span
                        style={{
                          fontSize: 11,
                          color: "#90a4ae",
                        }}
                      >
                        Actual: {formatearValor(ind as IndicadorMetaActual)}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>

            <div
              style={{
                borderLeft: isMobile ? "none" : "1px dashed #cfd8dc",
                paddingLeft: isMobile ? 0 : 14,
                marginLeft: isMobile ? 0 : 6,
              }}
            >
              <p
                style={{
                  fontSize: 12,
                  color: "#546e7a",
                  marginBottom: 10,
                }}
              >
                Esta sección resume el desempeño del laboratorio frente a las
                metas definidas en el sistema de gestión. Se destacan:
              </p>
              <ul
                style={{
                  paddingLeft: 16,
                  margin: 0,
                  fontSize: 12,
                  color: "#455a64",
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <li>Plazos de servicio totalmente cumplidos.</li>
                <li>
                  Satisfacción y capacitación aún sin medición / ejecución en el
                  periodo.
                </li>
                <li>
                  Competencias del personal cercanas al 100%, con oportunidad de
                  mejora.
                </li>
                <li>
                  Ventas del centro de costos en progreso frente a la meta anual.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }

  const SeccionCobertura = () => {
    return (
      <section
        style={{
          marginBottom: isMobile ? 20 : 30,
        }}
      >
        <h2
          style={{
            fontSize: isMobile ? 16 : 18,
            fontWeight: 700,
            marginBottom: 10,
            color: "#043804",
          }}
        >
          Cobertura y usuarios
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: isMobile ? 10 : 14,
          }}
        >
          {indicadoresCobertura.map((ind) => {
            const esPorcentaje = ind.unidad === "%"
            const isHover = hoverCoberturaId === ind.id

            return (
              <div
                key={ind.id}
                onMouseEnter={() => !isMobile && setHoverCoberturaId(ind.id)}
                onMouseLeave={() => setHoverCoberturaId(null)}
                style={{
                  background: "#ffffff",
                  borderRadius: 16,
                  padding: isMobile ? "12px 12px" : "16px 18px",
                  boxShadow: isHover
                    ? "0 5px 14px rgba(0,0,0,0.07)"
                    : "0 3px 10px rgba(0,0,0,0.05)",
                  border: "1px solid #e0f2e9",
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  transform: isHover ? "translateY(-1px)" : "translateY(0)",
                  transition:
                    "transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease",
                  borderColor: isHover ? "#c5e8d1" : "#e0f2e9",
                }}
              >
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#37474f",
                  }}
                >
                  {ind.titulo}
                </span>

                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    gap: 8,
                  }}
                >
                  <span
                    style={{
                      fontSize: isMobile ? 20 : 24,
                      fontWeight: 800,
                      color: "#39a900",
                    }}
                  >
                    {esPorcentaje
                      ? `${ind.valor.toFixed(2)}%`
                      : ind.valor.toLocaleString("es-CO")}
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      color: "#78909c",
                    }}
                  >
                    {ind.unidad !== "%" && ind.unidad}
                  </span>
                </div>

                {esPorcentaje && (
                  <div
                    style={{
                      background: "#f1f8f4",
                      borderRadius: 999,
                      height: 12,
                      overflow: "hidden",
                      marginTop: 2,
                    }}
                  >
                    <div
                      style={{
                        width: `${Math.min(ind.valor, 120)}%`,
                        height: "100%",
                        background: "#39a900",
                        transition: "width 0.4s ease",
                      }}
                    />
                  </div>
                )}

                <p
                  style={{
                    fontSize: 11,
                    color: "#607d8b",
                    margin: 0,
                    marginTop: 4,
                  }}
                >
                  {ind.detalle}
                </p>
              </div>
            )
          })}
        </div>
      </section>
    )
  }

  const SeccionCualitativos = () => {
    return (
      <section
        style={{
          marginBottom: isMobile ? 16 : 24,
        }}
      >
        <h2
          style={{
            fontSize: isMobile ? 16 : 18,
            fontWeight: 700,
            marginBottom: 10,
            color: "#043804",
          }}
        >
          Gestión interna y calidad
        </h2>
        <div
          style={{
            background: "#ffffff",
            borderRadius: 16,
            padding: isMobile ? "10px 10px" : "14px 16px",
            boxShadow: "0 3px 10px rgba(0,0,0,0.05)",
            border: "1px solid #e0f2e9",
          }}
        >
          {indicadoresCualitativos.map((ind) => {
            const estilos = colorEstadoCualitativo(ind.estado)
            const abierto = accordionAbierto === ind.id

            return (
              <div
                key={ind.id}
                style={{
                  borderRadius: 12,
                  border: `1px solid ${estilos.border}`,
                  background: abierto ? estilos.bg : "#ffffff",
                  marginBottom: 8,
                  transition:
                    "background 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease",
                  boxShadow: abierto
                    ? "0 4px 12px rgba(0,0,0,0.06)"
                    : "none",
                  overflow: "hidden",
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(ind.id)}
                  style={{
                    width: "100%",
                    padding: isMobile ? "8px 10px" : "10px 12px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      textAlign: "left",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: estilos.color,
                      }}
                    >
                      {ind.titulo}
                    </span>
                    <span
                      style={{
                        fontSize: 11,
                        color: "#78909c",
                      }}
                    >
                      Estado: {ind.estado}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: 18,
                      color: "#78909c",
                      transform: abierto
                        ? "rotate(90deg)"
                        : "rotate(0deg)",
                      transition: "transform 0.2s ease",
                    }}
                  >
                    ›
                  </span>
                </button>

                {abierto && (
                  <div
                    style={{
                      padding: isMobile ? "0 10px 10px" : "0 12px 12px",
                      borderTop: "1px solid #eceff1",
                    }}
                  >
                    <p
                      style={{
                        fontSize: 12,
                        color: "#455a64",
                        margin: 0,
                        textAlign: "justify",
                      }}
                    >
                      {ind.descripcion}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>
    )
  }

  // ------------------ RENDER PRINCIPAL ------------------

  return (
    <div
      style={{
        padding: isMobile ? "1rem 0.5rem" : isTablet ? "1.5rem 1.25rem" : "2rem 1.75rem",
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, rgba(215,255,217,0.3), #ffffff 40%, #ffffff 100%)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <header
          style={{
            marginBottom: isMobile ? 16 : 22,
          }}
        >
          <h1
            style={{
              color: "#39a900",
              fontSize: isMobile ? "1.6rem" : isTablet ? "1.9rem" : "2.1rem",
              fontWeight: 800,
              marginBottom: 4,
              textAlign: isMobile ? "center" : "left",
            }}
          >
            Indicadores Laboratorio
          </h1>
          <p
            style={{
              fontSize: 13,
              color: "#607d8b",
              margin: 0,
              textAlign: isMobile ? "center" : "left",
            }}
          >
            Vista prototipo para el seguimiento de políticas, objetivos y resultados
            del laboratorio.
          </p>
        </header>

        <KpiCards />
        <SeccionMetaVsActual />
        <SeccionCobertura />
        <SeccionCualitativos />
      </div>
    </div>
  )
}
