import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Dashboard from './pages/Dashboard'
import Admin from './pages/Admin'
import useTema from './hooks/useTema'

const App = () => {
  const { tema, alternarTema } = useTema()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home tema={tema} alternarTema={alternarTema} />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
