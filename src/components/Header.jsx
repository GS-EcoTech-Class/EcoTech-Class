import React from 'react'

const Header = () => {
  return (
    <header className="w-full bg-white border-b-2 border-[#f0832c] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* logo */}
        <div className="flex items-center gap-2">
          <span className="text-3xl">♻️</span>
          <h1 className="text-2xl font-bold text-[#152b11]">EcoTech <span className="text-[#152b11]">Class</span></h1>
        </div>

        {/* menu de navegação */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#inicio" className="text-[#152b11] font-medium hover:text-[#f0832c] transition">Início</a>
          <a href="#etapas" className="text-[#152b11] font-medium hover:text-[#f0832c] transition">Como funciona</a>
          <a href="#vantagens" className="text-[#152b11] font-medium hover:text-[#f0832c] transition">Vantagens</a>
        </nav>

        {/* botões */}
        <div className="flex items-center gap-4">
          <a href="/login" className="text-[#4d6c48] font-semibold hover:text-[#f0832c] transition">Entrar</a>
          <a href="/cadastro" className="bg-[#f0832c] text-white px-5 py-2.5 rounded-full font-semibold hover:bg-[#d96b1e] transition shadow-sm">Começar agora</a>
        </div>
      </div>
    </header>
  )
}

export default Header
