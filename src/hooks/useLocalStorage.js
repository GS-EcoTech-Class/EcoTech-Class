import { useState, useEffect } from 'react'

const useLocalStorage = (chave, valorInicial) => {
  const [valor, setValor] = useState(() => {
    const valorSalvo = localStorage.getItem(chave)

    if (valorSalvo !== null) {
      try {
        return JSON.parse(valorSalvo)
      } catch {
        return valorSalvo
      }
    }

    return valorInicial
  })

  useEffect(() => {
    localStorage.setItem(chave, JSON.stringify(valor))
  }, [chave, valor])

  return [valor, setValor]
}

export default useLocalStorage
