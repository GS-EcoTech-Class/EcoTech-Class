import React from 'react'

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* logo */}
        <div className="flex items-center gap-2">
          <span className="text-3xl">♻️</span>
          <h1 className="text-2xl font-bold text-green-800">EcoTech Class</h1>
        </div>

        {/* menu de navegação */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#inicio" className="text-gray-700 hover:text-green-700 transition">Início</a>
          <a href="#etapas" className="text-gray-700 hover:text-green-700 transition">Como funciona</a>
          <a href="#vantagens" className="text-gray-700 hover:text-green-700 transition">Vantagens</a>
        </nav>
        {/* botoes */}
        <div className="flex items-center gap-3">
          <a href="/login" className="text-green-800 font-semibold hover:text-green-600 transition">Entrar</a>
          <a href="/cadastro" className="bg-green-700 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-green-800 transition">Começar agora</a>
        </div>

      </div>
    </header>
  )
}

export default Header
