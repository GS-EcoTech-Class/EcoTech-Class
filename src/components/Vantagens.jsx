import React from 'react'

const Vantagens = () => {
  return (
    <section id="vantagens" className="w-full bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* título da seção */}
        <div className="text-center mb-14">
          <span className="text-green-700 font-semibold">Por que participar?</span>
          <h2 className="text-3xl md:text-4xl font-bold text-green-950 mt-3 mb-4">Mais benefícios para todos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Além de contribuir com o meio ambiente, a plataforma incentiva a participação e o aprendizado.</p>
        </div>

        {/* cards de vantagens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-green-100 rounded-2xl p-8 text-center shadow-sm">
            <span className="text-5xl">🌎</span>
            <h3 className="text-xl font-bold text-green-900 mt-5 mb-3">Impacto ambiental</h3>
            <p className="text-gray-600">Incentive o descarte correto de eletrônicos e ajude a reduzir os impactos ambientais.</p>
          </div>

          <div className="bg-green-100 rounded-2xl p-8 text-center shadow-sm">
            <span className="text-5xl">🏆</span>
            <h3 className="text-xl font-bold text-green-900 mt-5 mb-3">Gamificação</h3>
            <p className="text-gray-600">Ganhe pontos pelas suas contribuições e acompanhe sua posição no ranking.</p>
          </div>
          
          <div className="bg-green-100 rounded-2xl p-8 text-center shadow-sm">
            <span className="text-5xl">🎓</span>
            <h3 className="text-xl font-bold text-green-900 mt-5 mb-3">Educação sustentável</h3>
            <p className="text-gray-600">Aprenda sobre sustentabilidade por meio de atitudes práticas dentro da instituição.</p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Vantagens
