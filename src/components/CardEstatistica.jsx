import React from 'react'

const CardEstatistica = ({ icone, titulo, valor, descricao }) => {
  return (
    <div className="bg-white border-t-4 border-[#f0832c] rounded-2xl p-6 text-center shadow-sm">
      <span className="text-4xl">{icone}</span>
      <h3 className="text-lg font-semibold text-[#4d6c48] mt-4">{titulo}</h3>
      <p className="text-3xl font-bold text-[#152b11] mt-2">{valor}</p>
      <p className="text-sm text-gray-500 mt-2">{descricao}</p>
    </div>
  )
}

export default CardEstatistica