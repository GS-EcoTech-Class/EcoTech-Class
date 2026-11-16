import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Dashboard from './pages/Dashboard'
import Admin from './pages/Admin'
import RotaProtegida from './components/RotaProtegida'
import useTema from './hooks/useTema'

const App = () => {
  const { tema, alternarTema } = useTema()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home tema={tema} alternarTema={alternarTema} />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        
        {/* Rota protegida para estudantes */}
        <Route
          path="/dashboard"
          element={
            <RotaProtegida tipoPermitido="estudante">
              <Dashboard />
            </RotaProtegida>
          }
        />

        {/* Rota protegida exclusivamente para a instituição (admin) */}
        <Route
          path="/admin"
          element={
            <RotaProtegida tipoPermitido="instituicao">
              <Admin />
            </RotaProtegida>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App