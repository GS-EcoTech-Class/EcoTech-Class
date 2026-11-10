
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ilustracaoEco from '../assets/ilustracao-eco.png'

const Cadastro = () => {
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

  return (
    <div className="min-h-screen flex flex-col md:flex-row">

      {/* lado esquerdo */}
      <div className="w-full md:w-1/2 bg-[#114217] text-white flex flex-col justify-center items-center px-10 py-14">
        <div className="max-w-md">

          <Link to="/" className="flex items-center gap-3 mb-16">
            <span className="text-5xl">♻️</span>
            <h1 className="text-3xl font-bold">EcoTech <span className="text-[#f0832c]">Class</span></h1>
          </Link>

          <h2 className="text-4xl font-bold leading-tight mb-6">Faça parte dessa transformação!</h2>
          <p className="text-gray-200 text-lg leading-relaxed mb-10">Crie sua conta, participe das ações sustentáveis e ajude a construir um futuro melhor.</p>

          <div className="text-center py-8">
            <img src={ilustracaoEco} alt="Planeta Terra apoiado por uma mão" className="w-full max-w-md mx-auto"/>
            <p className="text-[#dce5d8] mt-5 text-sm">Pequenas atitudes transformam o futuro.</p>
          </div>
        </div>
      </div>

      {/* lado direito */}
      <div className="w-full md:w-1/2 bg-[#f3f5ef] flex items-center justify-center px-6 py-14">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8 md:p-10">
          <h2 className="text-4xl font-bold text-[#152b11] mb-3">Cadastro</h2>
          <p className="text-gray-600 mb-8">Crie sua conta para começar a participar.</p>

          <form onSubmit={handleCadastro} className="flex flex-col gap-5">
            <div>
              <label className="block text-[#152b11] font-semibold mb-2">Nome completo</label>
              <input type="text" placeholder="Digite seu nome completo" value={nome} onChange={(event) => setNome(event.target.value)} required className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#4d6c48] transition"/>
            </div>

            <div>
              <label className="block text-[#152b11] font-semibold mb-2">E-mail</label>
              <input type="email" placeholder="Digite seu e-mail" value={email} onChange={(event) => setEmail(event.target.value)} required className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#4d6c48] transition"/>
            </div>

            <div>
              <label className="block text-[#152b11] font-semibold mb-2">Tipo de usuário</label>
              <select value={tipoUsuario} onChange={(event) => setTipoUsuario(event.target.value)} required className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#4d6c48] transition bg-white">
                <option value="" disabled>Selecione uma opção</option>
                <option value="estudante">Estudante</option>
                <option value="instituicao">Instituição de ensino</option>
              </select>
            </div>

            <div>
              <label className="block text-[#152b11] font-semibold mb-2">Senha</label>
              <input type="password" placeholder="Crie uma senha" value={senha} onChange={(event) => setSenha(event.target.value)} required className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#4d6c48] transition"/>
            </div>

            <div>
              <label className="block text-[#152b11] font-semibold mb-2">Confirmar senha</label>
              <input type="password" placeholder="Digite sua senha novamente" value={confirmarSenha} onChange={(event) => setConfirmarSenha(event.target.value)} required className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#4d6c48] transition"/>
            </div>

            <button type="submit" className="w-full bg-[#f0832c] text-white font-bold py-3 rounded-full hover:bg-[#d96b1e] transition shadow-sm mt-2">
              Criar conta
            </button>
            
            {mensagem && (
              <p className="text-center text-sm font-semibold text-[#4d6c48]">{mensagem}</p>
            )}
          </form>

          <p className="text-center text-gray-600 mt-8">Já tem uma conta?{' '}
            <Link to="/login" className="text-[#4d6c48] font-bold hover:text-[#f0832c] transition">
              Entrar
            </Link>
          </p>

        </div>
      </div>

    </div>
  )
}

export default Cadastro
