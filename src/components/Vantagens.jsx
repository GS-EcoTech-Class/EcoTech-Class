import React from 'react'
import CardVantagem from './CardVantagem'

const Vantagens = () => {
  return (
    <section id="vantagens" className="w-full bg-[#e3e9df] py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* título da seção */}
        <div className="text-center mb-14">
          <span className="text-[#4d6c48] font-semibold">Por que participar?</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#152b11] mt-3 mb-4">Mais benefícios para todos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Além de contribuir com o meio ambiente, a plataforma incentiva a participação e o aprendizado.</p>
        </div>

        {/* cards de vantagens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <CardVantagem icone="🌎" titulo="Impacto ambiental" descricao="Incentive o descarte correto de eletrônicos e ajude a reduzir os impactos ambientais."/>
          <CardVantagem icone="🏆" titulo="Gamificação" descricao="Ganhe pontos pelas suas contribuições e acompanhe sua posição no ranking."/>
          <CardVantagem icone="🎓" titulo="Educação sustentável" descricao="Aprenda sobre sustentabilidade por meio de atitudes práticas dentro da instituição."/>

        </div>

      </div>
    </section>
  )
}

export default Vantagens
