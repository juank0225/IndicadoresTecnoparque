import { Link } from "react-router-dom";
import FotoTecnoparque from "../assets/FotoTecnoparque.jpg";

export default function MainDashboard() {
  return (
    <div className="main-wrapper">
      {/* 🔹 Estilos integrados */}
      <style>{`
        :root {
          --tp-dark-blue: #0b2545;
          --tp-green: #39A900;
          --tp-gray: #f3f4f6;
          --tp-muted: #6b7280;
        }

        html, body, #root {
          height: 100%;
          width: 100%;
          overflow-x: hidden;
        }

        body {
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
          background: linear-gradient(180deg, #f8fafc 0%, #eef2f7 100%);
          color: #0f172a;
          min-height: 100vh;
        }

        .main-wrapper {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          width: 100%;
        }

        .main-container {
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
          padding: 2rem 1rem;
        }

        .text-center {
          text-align: center;
          line-height: 1.2;
        }

        .title {
          font-size: 2rem;
          font-weight: bold;
          color: var(--tp-green);
          margin: 0;
        }

        .subtitle {
          font-size: 1.5rem;
          font-weight: 600;
          color: #999999;
          margin-top: 0.5rem;
        }

        /* 🔹 Imagen con sombra */
        .image-shadow-container {
          display: flex;
          justify-content: center;
          margin-top: 1.5rem;
        }

        .image-shadow-wrapper {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          overflow: hidden;
          border-radius: 0.75rem;
          transition: all 0.3s ease-in-out;
        }

        .image-shadow-wrapper:hover {
          transform: scale(1.02);
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.3);
        }

        .tecno-image {
          width: 1101px;
          height: 607px;
          border-radius: 0.75rem;
          object-fit: cover;
          display: block;
        }

        /* 🔹 Cards */
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          justify-content: center;
          max-width: 1200px;
          margin: 3rem auto 0;
          padding: 0 2rem;
        }

        .card {
          background: white;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 10px 20px rgba(0,0,0,0.15);
          text-decoration: none;
          color: inherit;
          transition: all 0.3s ease;
        }

        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.25);
        }

        .card-top {
          background: linear-gradient(90deg, var(--tp-green), #63D471);
          height: 130px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .card-top img {
          width: 70px;
          height: 70px;
          opacity: 0.95;
        }

        .card-content {
          padding: 1.2rem;
          text-align: center;
        }

        .card-content h3 {
          font-size: 1.2rem;
          font-weight: bold;
          color: var(--tp-green);
          margin: 0;
        }

        .card-content p {
          margin: 0.5rem 0 0;
          color: var(--tp-muted);
          font-size: 0.9rem;
          line-height: 1.3rem;
        }

        .card-content .location {
          color: #6b7280;
          font-weight: 600;
          margin-top: 0.3rem;
        }

        /* 🔹 Responsivo */
        @media (max-width: 1200px) {
          .tecno-image {
            width: 100%;
            max-width: 900px;
            height: auto;
            max-height: 500px;
          }
        }

        @media (max-width: 768px) {
          .tecno-image {
            max-width: 100%;
            max-height: 400px;
          }

          .image-shadow-wrapper {
            margin: 0 1rem;
          }
        }
      `}</style>

      {/* 🔹 Contenido principal */}
      <div className="main-container">
        <div className="text-center">
          <h1 className="title">Indicadores Tecnoparque</h1>
          <h2 className="subtitle">Bienvenido/a, Nombre de usuario</h2>

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

        {/* 🔹 Cards */}
        <nav className="cards-grid">
          {[
            {
              title: "Red Tecnoparque",
              desc: "Gestión y seguimiento de proyectos nacionales de innovación y desarrollo.",
              path: "/tecnoparque",
            },
            {
              title: "Red Tecnoacademia",
              desc: "Programas y actividades para fomentar el talento joven.",
              path: "/tecnoacademia",
            },
            {
              title: "Laboratorio",
              desc: "Espacio de experimentación y validación de tecnologías emergentes.",
              path: "/laboratorio",
            },
            {
              title: "Investigación",
              desc: "Impulso a la investigación aplicada e innovación tecnológica.",
              path: "/investigacion",
            },
          ].map((card, i) => (
            <Link key={i} to={card.path} className="card">
              <div className="card-top">
                <img src="/sena_logo.svg" alt="Logo SENA" />
              </div>
              <div className="card-content">
                <h3>{card.title}</h3>
                <p className="location">Colombia</p>
                <p>{card.desc}</p>
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
