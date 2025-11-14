import React from 'react'
import userDefault from "@/assets/user-default.svg"

export default function PerfilUsuario() {
  // Datos de ejemplo
  const perfil = {
    nombre: "Juan Cardenas",
    apellido: "Pérez",
    email: "JuanC@example.com",
    rol: "Administrator",
    ubicacion: "Bogotá, Colombia",
    fotoPerfil: userDefault,
    tipoDocumento: "CC",
    numeroDocumento: "1234567890",
    celular: "+57 300 1234567",
    estado: "Activo"
  }

  return (
    <div style={{ padding: '24px', fontFamily: 'Inter, sans-serif', backgroundColor: '#f9fafb', minHeight: '100vh' }}>
      {/* Título principal */}
      <h1 style={{ 
        fontSize: '32px', 
        fontWeight: '700', 
        marginBottom: '32px',
        color: '#39a900',
        margin: '0 0 32px 0',
        textAlign: 'center'
      }}>
        Tu perfil y Datos Personales
      </h1>

      {/* Contenedor principal centrado */}
      <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', justifyContent: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Columna izquierda - Tarjeta de perfil */}
        <div style={{
          width: '280px',
          minHeight: '500px',
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          padding: '32px 24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        }}>
          {/* Avatar circular grande */}
          <div style={{
            width: '160px',
            height: '160px',
            borderRadius: '50%',
            overflow: 'hidden',
            marginBottom: '24px',
            backgroundColor: '#e5e7eb'
          }}>
            <img
              src={userDefault}
              alt={perfil.nombre}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>

          {/* Información del perfil */}
          <h3 style={{ 
            margin: '0 0 8px 0', 
            fontSize: '18px', 
            fontWeight: '600',
            color: '#1f2937',
            textAlign: 'center'
          }}>
            {perfil.nombre}
          </h3>
          
          <p style={{ 
            margin: '0 0 8px 0', 
            fontSize: '14px', 
            color: '#6b7280',
            textAlign: 'center'
          }}>
            {perfil.email}
          </p>
          
          <p style={{ 
            margin: '0 0 8px 0', 
            fontSize: '14px',
            color: '#1f2937',
            textAlign: 'center'
          }}>
            {perfil.rol}
          </p>
          
          <p style={{ 
            margin: '0 0 32px 0', 
            fontSize: '14px', 
            color: '#6b7280',
            textAlign: 'center'
          }}>
            {perfil.ubicacion}
          </p>

          {/* Botones */}
          <button style={{
            width: '100%',
            padding: '12px 0',
            borderRadius: '8px',
            backgroundColor: '#39a900',
            color: '#ffffff',
            border: 'none',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            marginBottom: '12px',
            fontFamily: 'Inter, sans-serif'
          }}>
            Editar perfil
          </button>

          <button style={{
            width: '100%',
            padding: '12px 0',
            borderRadius: '8px',
            backgroundColor: '#f3f4f6',
            color: '#1f2937',
            border: 'none',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            fontFamily: 'Inter, sans-serif'
          }}>
            Configuración
          </button>
        </div>

        {/* Columna derecha - Datos Personales */}
        <div style={{
          flex: '1',
          minHeight: '500px',
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          padding: '32px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        }}>
          <h2 style={{ 
            fontSize: '20px', 
            fontWeight: '600', 
            color: '#1f2937',
            margin: '0 0 40px 0'
          }}>
            Datos Personales
          </h2>

          {/* Grid de datos */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '32px',
            rowGap: '32px'
          }}>
            {/* Nombre */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'baseline' }}>
              <span style={{ 
                color: '#39a900', 
                fontWeight: '600', 
                fontSize: '17px',
                minWidth: '110px'
              }}>
                Nombre:
              </span>
              <span style={{ 
                color: '#1f2937', 
                fontSize: '17px'
              }}>
                {perfil.nombre}
              </span>
            </div>

            {/* Correo */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'baseline' }}>
              <span style={{ 
                color: '#39a900', 
                fontWeight: '600', 
                fontSize: '17px',
                minWidth: '110px'
              }}>
                Correo:
              </span>
              <span style={{ 
                color: '#1f2937', 
                fontSize: '17px'
              }}>
                {perfil.email}
              </span>
            </div>

            {/* Apellido */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'baseline' }}>
              <span style={{ 
                color: '#39a900', 
                fontWeight: '600', 
                fontSize: '17px',
                minWidth: '110px'
              }}>
                Apellido:
              </span>
              <span style={{ 
                color: '#1f2937', 
                fontSize: '17px'
              }}>
                {perfil.apellido}
              </span>
            </div>

            {/* Celular */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'baseline' }}>
              <span style={{ 
                color: '#39a900', 
                fontWeight: '600', 
                fontSize: '17px',
                minWidth: '110px'
              }}>
                Celular:
              </span>
              <span style={{ 
                color: '#1f2937', 
                fontSize: '17px'
              }}>
                {perfil.celular}
              </span>
            </div>

            {/* Tipo doc */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'baseline' }}>
              <span style={{ 
                color: '#39a900', 
                fontWeight: '600', 
                fontSize: '17px',
                minWidth: '110px'
              }}>
                Tipo doc:
              </span>
              <span style={{ 
                color: '#1f2937', 
                fontSize: '17px'
              }}>
                {perfil.tipoDocumento}
              </span>
            </div>

            {/* Estado */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'baseline' }}>
              <span style={{ 
                color: '#39a900', 
                fontWeight: '600', 
                fontSize: '17px',
                minWidth: '110px'
              }}>
                Estado:
              </span>
              <span style={{ 
                color: '#1f2937', 
                fontSize: '17px'
              }}>
                {perfil.estado}
              </span>
            </div>

            {/* N° doc */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'baseline' }}>
              <span style={{ 
                color: '#39a900', 
                fontWeight: '600', 
                fontSize: '17px',
                minWidth: '110px'
              }}>
                N° doc:
              </span>
              <span style={{ 
                color: '#1f2937', 
                fontSize: '17px'
              }}>
                {perfil.numeroDocumento}
              </span>
            </div>

            {/* Ubicación */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'baseline' }}>
              <span style={{ 
                color: '#39a900', 
                fontWeight: '600', 
                fontSize: '17px',
                minWidth: '110px'
              }}>
                Ubicación:
              </span>
              <span style={{ 
                color: '#1f2937', 
                fontSize: '17px'
              }}>
                {perfil.ubicacion}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}