import { useState, useEffect } from 'react'

const useTema = () => {
  const [tema, setTema] = useState(() => {
    return localStorage.getItem('tema') || 'claro'
  })

  useEffect(() => {
    localStorage.setItem('tema', tema)
    document.documentElement.setAttribute('data-tema', tema)
  }, [tema])

  const alternarTema = () => {
    setTema((temaAtual) =>
      temaAtual === 'claro' ? 'escuro' : 'claro'
    )
  }

  return { tema, alternarTema }
}

export default useTema