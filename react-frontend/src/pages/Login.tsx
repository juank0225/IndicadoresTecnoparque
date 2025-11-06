import React, { useState, useEffect } from "react"
import FotoTecnoparque from "../assets/FotoTecnoparque.jpg"

export default function Login() {
  const [hover, setHover] = useState(false)
  const [visible, setVisible] = useState(false)
  const [focusButton, setFocusButton] = useState(false)

  useEffect(() => {
    // Pequeña animación de entrada
    setTimeout(() => setVisible(true), 100)
  }, [])

  const handleLogin = () => {
    // Navegar a MainDashboard
    window.location.href = "/app"
  }

  return (
    <div
      style={{
        backgroundImage: `url(${FotoTecnoparque})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {/* Capa semitransparente para mejorar contraste */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.25)",
          backdropFilter: "blur(1.5px)",
          zIndex: 0,
        }}
      />

      {/* Caja del login */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(-30px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
          backdropFilter: "blur(20px)",
          background: "rgba(255, 255, 255, 0.35)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          borderRadius: "20px",
          padding: "50px 60px",
          width: "350px",
          boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontFamily: "Poppins, sans-serif",
          zIndex: 1,
        }}
      >
        <h1
          style={{
            color: "#39A900",
            marginBottom: "25px",
            fontWeight: 700,
            fontSize: "1.8rem",
            textShadow: "0 1px 2px rgba(0,0,0,0.15)",
            transform: visible ? "scale(1)" : "scale(0.8)",
            transition: "transform 0.6s ease",
          }}
        >
          Bienvenido 👋
        </h1>

        <div style={{ width: "100%", marginBottom: "20px" }}>
          <label
            style={{
              color: "#222",
              fontWeight: 600,
              fontSize: "0.9rem",
            }}
          >
            Usuario
          </label>
          <input
            type="text"
            placeholder="Ingresa tu usuario"
            style={{
              width: "100%",
              padding: "12px 15px",
              marginTop: "6px",
              borderRadius: "10px",
              border: "2px solid rgba(57,169,0,0.3)",
              backgroundColor: "rgba(255,255,255,0.6)",
              outline: "none",
              fontSize: "1rem",
              color: "#000",
              transition: "all 0.3s ease",
            }}
            onFocus={(e) => (e.target.style.border = "2px solid #39A900")}
            onBlur={(e) =>
              (e.target.style.border = "2px solid rgba(57,169,0,0.3)")
            }
          />
        </div>

        <div style={{ width: "100%", marginBottom: "30px" }}>
          <label
            style={{
              color: "#222",
              fontWeight: 600,
              fontSize: "0.9rem",
            }}
          >
            Contraseña
          </label>
          <input
            type="password"
            placeholder="Ingresa tu contraseña"
            style={{
              width: "100%",
              padding: "12px 15px",
              marginTop: "6px",
              borderRadius: "10px",
              border: "2px solid rgba(57,169,0,0.3)",
              backgroundColor: "rgba(255,255,255,0.6)",
              outline: "none",
              fontSize: "1rem",
              color: "#000",
              transition: "all 0.3s ease",
            }}
            onFocus={(e) => (e.target.style.border = "2px solid #39A900")}
            onBlur={(e) =>
              (e.target.style.border = "2px solid rgba(57,169,0,0.3)")
            }
          />
        </div>

        <button
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onFocus={() => setFocusButton(true)}
          onBlur={() => setFocusButton(false)}
          onClick={handleLogin}
          style={{
            width: "100%",
            backgroundColor: hover ? "#2e8500" : "#39A900",
            color: "white",
            fontWeight: 600,
            fontSize: "1rem",
            border: "none",
            borderRadius: "10px",
            padding: "12px",
            cursor: "pointer",
            boxShadow: hover
              ? "0 5px 15px rgba(57,169,0,0.4)"
              : "0 4px 10px rgba(57,169,0,0.25)",
            outline: focusButton ? "3px solid #D7FFD9" : "none",
            outlineOffset: "2px",
            transition: "all 0.3s ease",
          }}
        >
          Iniciar Sesión
        </button>

        <p
          style={{
            marginTop: "25px",
            fontSize: "0.9rem",
            color: "#222",
          }}
        >
          ¿No tienes cuenta?{" "}
          <span
            style={{
              color: "#39A900",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Regístrate
          </span>
        </p>
      </div>
    </div>
  )
}