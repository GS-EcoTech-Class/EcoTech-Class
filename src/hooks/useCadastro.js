import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../services/api'

const useCadastro = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [tipoUsuario, setTipoUsuario] = useState('')
  const [turma, setTurma] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [carregando, setCarregando] = useState(false)

  const navigate = useNavigate()

  const handleCadastro = async (event) => {
    event.preventDefault()

    if (senha !== confirmarSenha) {
      setMensagem('As senhas não coincidem!')
      return
    }

    try {
      setCarregando(true)
      setMensagem('')

      const usuariosExistentes = await api.listarUsuarios()
      const jaExiste = usuariosExistentes.some((u) => u.email === email)

      if (jaExiste) {
        setMensagem('Este e-mail já está cadastrado!')
        return
      }

      await api.cadastrarUsuario({
        nome,
        email,
        senha,
        tipoUsuario,
        turma: tipoUsuario === 'estudante' ? turma : 'Administração'
      })

      setMensagem('Conta criada com sucesso! Redirecionando...')
      setTimeout(() => {
        navigate('/login')
      }, 1200)
    } catch (erro) {
      setMensagem('Erro ao conectar com o servidor. Tente novamente.')
    } finally {
      setCarregando(false)
    }
  }

  return {
    nome, setNome,
    email, setEmail,
    tipoUsuario, setTipoUsuario,
    turma, setTurma,
    senha, setSenha,
    confirmarSenha, setConfirmarSenha,
    mensagem, carregando, handleCadastro
  }
}

export default useCadastro