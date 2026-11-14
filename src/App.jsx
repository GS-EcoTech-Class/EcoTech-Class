import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Etapas from './components/Etapas'
import Vantagens from './components/Vantagens'
import Footer from './components/Footer'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Dashboard from './pages/Dashboard'
import Admin from './pages/Admin'
import useTema from './hooks/useTema'

const Home = ({ tema, alternarTema }) => {
  return (
    <div>
      <Header tema={tema} alternarTema={alternarTema} />
      <Hero />
      <Etapas />
      <Vantagens />
      <Footer />
    </div>
  )
}

const App = () => {
  const { tema, alternarTema } = useTema()
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
