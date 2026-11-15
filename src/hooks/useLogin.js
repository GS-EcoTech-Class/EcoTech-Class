import { useState } from 'react'

const useLogin = () => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const handleLogin = (event) => {
    event.preventDefault()
  }

  return {
    email, setEmail,
    senha, setSenha,
    handleLogin
  }
}

export default useLogin
