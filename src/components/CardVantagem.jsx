import React from 'react'

const CardVantagem = ({ icone, titulo, descricao }) => {
  return (
    <div className="bg-white dark:bg-[#344d30] border-t-4 border-[#f0832c] rounded-2xl p-8 text-center shadow-sm transition-colors duration-300">
      <span className="text-5xl">{icone}</span>
      <h3 className="text-xl font-bold text-[#152b11] dark:text-white mt-5 mb-3">{titulo}</h3>
      <p className="text-gray-600 dark:text-gray-300">{descricao}</p>
    </div>
  )
}

export default CardVantagem