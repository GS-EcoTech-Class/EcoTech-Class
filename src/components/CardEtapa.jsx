import React from 'react'

const CardEtapa = ({ icone, titulo, descricao }) => {
  return (
    <div className="bg-[#dce5d8] border-t-4 border-[#f0832c] rounded-2xl p-8 text-center">
      <span className="text-5xl">{icone}</span>

      <h3 className="text-xl font-bold text-[#152b11] mt-5 mb-3">
        {titulo}
      </h3>

      <p className="text-gray-600">
        {descricao}
      </p>
    </div>
  )
}

export default CardEtapa
