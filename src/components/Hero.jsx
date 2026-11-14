import React from 'react'

const Hero = () => {
  return (
    <section id="inicio" className="w-full min-h-[80vh] bg-[#e3e9df] dark:bg-[#1b2b19] flex items-center justify-center transition-colors duration-300">
      <div className="w-full max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-center gap-12">

        {/* Texto principal */}
        <div className="max-w-xl text-center">
          <span className="inline-block bg-[#dce5d8] dark:bg-[#30452d] text-[#4d6c48] dark:text-[#c5d9bd] px-4 py-2 rounded-full text-sm font-semibold mb-6">Sustentabilidade e tecnologia</span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#152b11] dark:text-white leading-tight mb-6">Transforme o descarte eletrônico em{' '}
            <span className="text-[#f0832c]">impacto positivo.</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">Conectamos estudantes, instituições de ensino e sustentabilidade por meio da coleta de resíduos eletrônicos e da gamificação.</p>
          <a href="/cadastro" className="inline-block bg-[#f0832c] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#d96b1e] transition shadow-sm">Comece agora</a>
        </div>

        {/* Destaque visual */}
        <div className="w-full max-w-md bg-white dark:bg-[#263b23] border-t-4 border-[#f0832c] rounded-3xl shadow-lg p-10 text-center transition-colors duration-300">
          <span className="text-8xl">🌱</span>
          <h2 className="text-2xl font-bold text-[#4d6c48] dark:text-[#c5d9bd] mt-6 mb-3">Pequenas atitudes, grandes mudanças.</h2>
          <p className="text-gray-600 dark:text-gray-300">Cada eletrônico destinado corretamente contribui para um futuro mais sustentável.</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
