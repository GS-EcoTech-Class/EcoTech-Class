import { useState } from 'react'

const useCadastro = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [tipoUsuario, setTipoUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')
  const [mensagem, setMensagem] = useState('')

  const handleCadastro = (event) => {
    event.preventDefault()

    if (senha !== confirmarSenha) {
      setMensagem('As senhas não coincidem!')
      return
    }

    setMensagem('Dados validados com sucesso!')
  }

  return {
    nome, setNome,
    email, setEmail,
    tipoUsuario, setTipoUsuario,
    senha, setSenha,
    confirmarSenha, setConfirmarSenha,
    mensagem, handleCadastro
  }
}

export default useCadastro
