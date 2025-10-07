import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from '@/components/Layout'

// Pages (lazy loading could be added later)
import TecnoparqueDashboard from '@/pages/Tecnoparque/Dashboard'
import TecnoparqueEstadisticas from '@/pages/Tecnoparque/Estadisticas'
import TecnoparqueReportes from '@/pages/Tecnoparque/Reportes'

import TecnoacademiaDashboard from '@/pages/Tecnoacademia/Dashboard'
import TecnoacademiaProyectos from '@/pages/Tecnoacademia/Proyectos'
import TecnoacademiaGraficas from '@/pages/Tecnoacademia/Graficas'

import LaboratorioDashboard from '@/pages/Laboratorio/Dashboard'
import LaboratorioEquipos from '@/pages/Laboratorio/Equipos'
import LaboratorioIndicadores from '@/pages/Laboratorio/Indicadores'

import InvestigacionDashboard from '@/pages/Investigacion/Dashboard'
import InvestigacionPublicaciones from '@/pages/Investigacion/Publicaciones'
import InvestigacionAnalisis from '@/pages/Investigacion/Analisis'

import PerfilUsuario from '@/pages/Perfil/PerfilUsuario'
import PerfilConfiguracion from '@/pages/Perfil/Configuracion'
import PerfilNotificaciones from '@/pages/Perfil/Notificaciones'
import MainDashboard from '@/pages/MainDashboard'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}> 
          <Route index element={<MainDashboard />} />

          <Route path="tecnoparque">
            <Route index element={<TecnoparqueDashboard />} />
            <Route path="estadisticas" element={<TecnoparqueEstadisticas />} />
            <Route path="reportes" element={<TecnoparqueReportes />} />
          </Route>

          <Route path="tecnoacademia">
            <Route index element={<TecnoacademiaDashboard />} />
            <Route path="proyectos" element={<TecnoacademiaProyectos />} />
            <Route path="graficas" element={<TecnoacademiaGraficas />} />
          </Route>

          <Route path="laboratorio">
            <Route index element={<LaboratorioDashboard />} />
            <Route path="equipos" element={<LaboratorioEquipos />} />
            <Route path="indicadores" element={<LaboratorioIndicadores />} />
          </Route>

          <Route path="investigacion">
            <Route index element={<InvestigacionDashboard />} />
            <Route path="publicaciones" element={<InvestigacionPublicaciones />} />
            <Route path="analisis" element={<InvestigacionAnalisis />} />
          </Route>

          <Route path="perfil">
            <Route index element={<PerfilUsuario />} />
            <Route path="configuracion" element={<PerfilConfiguracion />} />
            <Route path="notificaciones" element={<PerfilNotificaciones />} />
          </Route>

          <Route path="*" element={<div className="container">Página no encontrada</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
