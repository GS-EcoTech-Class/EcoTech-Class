import { useEffect } from 'react'
import useLocalStorage from './useLocalStorage'

const useTema = () => {
  const [tema, setTema] = useLocalStorage('tema', 'claro')

  useEffect(() => {
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
