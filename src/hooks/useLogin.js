import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../services/api'

const useLogin = () => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')
  const [carregando, setCarregando] = useState(false)

  const navigate = useNavigate()

  const handleLogin = async (event) => {
    event.preventDefault()
    setErro('')

    try {
      setCarregando(true)
      const usuarios = await api.listarUsuarios()

      const usuarioEncontrado = usuarios.find(
        (u) => u.email === email && u.senha === senha
      )

      if (!usuarioEncontrado) {
        setErro('E-mail ou senha inválidos!')
        return
      }

      // Salva os dados do usuário logado no navegador
      localStorage.setItem('usuarioLogado', JSON.stringify(usuarioEncontrado))

      // Redireciona conforme o perfil cadastrado
      if (usuarioEncontrado.tipoUsuario === 'instituicao') {
        navigate('/admin')
      } else {
        navigate('/dashboard')
      }
    } catch (err) {
      setErro('Erro ao conectar com a API. Verifique sua conexão.')
    } finally {
      setCarregando(false)
    }
  }

  return {
    email, setEmail,
    senha, setSenha,
    erro, carregando,
    handleLogin
  }
}

export default useLogin