
import React from 'react'

const Hero = () => {
  return (
    <section id="inicio" className="w-full min-h-[80vh] bg-green-50 flex items-center justify-center">

      <div className="w-full max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-center gap-12">

        {/* Texto principal */}
        <div className="max-w-xl text-center">
          <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Sustentabilidade e tecnologia
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-green-950 leading-tight mb-6">Transforme o descarte eletrônico em impacto positivo.</h1>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">Conectamos estudantes, instituições de ensino e sustentabilidade por meio da coleta de resíduos eletrônicos e da gamificação.</p>

          <a href="/cadastro" className="inline-block bg-green-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-800 transition">Comece agora</a>
        </div>

        {/* Destaque visual */}
        <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-10 text-center">
          <span className="text-8xl">🌱</span>

          <h2 className="text-2xl font-bold text-green-800 mt-6 mb-3">Pequenas atitudes, grandes mudanças.</h2>

          <p className="text-gray-600">Cada eletrônico destinado corretamente contribui para um futuro mais sustentável.</p>
        </div>

      </div>
    </section>
  )
}

export default Hero
