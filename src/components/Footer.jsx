import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-[#152b11] border-t-4 border-[#f0832c] text-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* logo e descrição */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">♻️</span>
              <h2 className="text-2xl font-bold">EcoTech <span className="text-[#f0832c]">Class</span></h2>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-sm">Transformando o descarte eletrônico em atitudes sustentáveis por meio da educação e da tecnologia.</p>
          </div>
          {/* links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Navegação</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#inicio" className="text-gray-300 hover:text-[#f0832c] transition">Início</a>
              </li>
              <li>
                <a href="#etapas" className="text-gray-300 hover:text-[#f0832c] transition">Como funciona</a>
              </li>
              <li>
                <a href="#vantagens" className="text-gray-300 hover:text-[#f0832c] transition">Vantagens</a>
              </li>
            </ul>
          </div>
          {/* propósito */}
          <div>
            <h3 className="text-lg font-bold mb-4">Nosso propósito</h3>
            <p className="text-gray-300 leading-relaxed">Incentivar a conscientização ambiental e tornar as instituições de ensino protagonistas de um futuro mais sustentável.</p>
          </div>
        </div>

        {/* direitos reservados */}
        <div className="border-t border-[#4d6c48] mt-12 pt-6 text-center">
          <p className="text-gray-400 text-sm">&copy; 2026 - Direitos Reservados</p>
        </div>

      </div>
      
    </footer>
  )
}

export default Footer
