import React from 'react'
import CardVantagem from './CardVantagem'
import vantagens from '../data/vantagens'

const Vantagens = () => {
  return (
    <section className="w-full bg-[#e3e9df] dark:bg-[#1b2b19] py-20 transition-colors duration-300" id="vantagens">
      <div className="max-w-6xl mx-auto px-6">


        <div className="text-center mb-14">
          <span className="text-[#4d6c48] dark:text-[#c5d9bd] font-semibold">Por que participar?</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#152b11] dark:text-white mt-3 mb-4">Mais benefícios para todos</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Além de contribuir com o meio ambiente, a plataforma incentiva a participação e o aprendizado.</p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vantagens.map((vantagem) => (
            <CardVantagem key={vantagem.titulo} icone={vantagem.icone} titulo={vantagem.titulo} descricao={vantagem.descricao}/>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Vantagens
