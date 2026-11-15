import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Etapas from '../components/Etapas'
import Vantagens from '../components/Vantagens'
import Footer from '../components/Footer'

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

export default Home
