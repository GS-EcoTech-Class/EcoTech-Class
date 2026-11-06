import React from 'react'

const Etapas = () => {
  return (
    <section id="etapas" className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* título da seção */}
        <div className="text-center mb-14">
          <span className="text-green-700 font-semibold">Simples e sustentável</span>
          <h2 className="text-3xl md:text-4xl font-bold text-green-950 mt-3 mb-4">Como funciona?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Transformar resíduos eletrônicos em atitudes sustentáveis pode ser mais simples do que você imagina.</p>
        </div>

        {/* etapas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* etapa 1 */}
          <div className="bg-green-100 rounded-2xl p-8 text-center">
            <span className="text-5xl">📱</span>
            <h3 className="text-xl font-bold text-green-900 mt-5 mb-3">1. Entregue</h3>
            <p className="text-gray-600">Leve seus resíduos eletrônicos até um ponto de coleta participante.</p>
          </div>
          {/* etapa 2 */}
          <div className="bg-green-100 rounded-2xl p-8 text-center">
            <span className="text-5xl">⭐</span>
            <h3 className="text-xl font-bold text-green-900 mt-5 mb-3">2. Acumule pontos</h3>
            <p className="text-gray-600">Sua contribuição é registrada e convertida em pontos na plataforma.</p>
          </div>

          {/* etapa 3 */}
          <div className="bg-green-100 rounded-2xl p-8 text-center">
            <span className="text-5xl">♻️</span>
            <h3 className="text-xl font-bold text-green-900 mt-5 mb-3">3. Faça a diferença</h3>
            <p className="text-gray-600">Os materiais são encaminhados para a destinação ambientalmente adequada.</p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Etapas
