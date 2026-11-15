import React from 'react'
import CardEtapa from './CardEtapa'
import etapas from '../data/etapas'

const Etapas = () => {
  return (
    <section id="etapas" className="w-full bg-white dark:bg-[#263b23] py-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">


        <div className="text-center mb-14">
          <span className="text-[#4d6c48] dark:text-[#c5d9bd] font-semibold">Simples e sustentável</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#152b11] dark:text-white mt-3 mb-4">Como funciona?</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Transformar resíduos eletrônicos em atitudes sustentáveis pode ser mais simples do que você imagina.</p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {etapas.map((etapa) => (
            <CardEtapa key={etapa.titulo} icone={etapa.icone} titulo={etapa.titulo} descricao={etapa.descricao}/>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Etapas
