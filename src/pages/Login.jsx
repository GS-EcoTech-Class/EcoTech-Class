import React from 'react'
import { Link } from 'react-router-dom'
import ilustracaoEco from '../assets/ilustracao-eco.png'
import useLogin from '../hooks/useLogin'

const Login = () => {
  const {
    email, setEmail,
    senha, setSenha,
    erro, carregando,
    handleLogin
  } = useLogin()

  return (
    <div className="min-h-screen flex flex-col md:flex-row">

      {/* lado esquerdo */}
      <div className="w-full md:w-1/2 bg-[#114217] text-white flex flex-col justify-center items-center px-10 py-8">
        <div className="max-w-md">

          {/* logo */}
          <Link to="/" className="flex items-center gap-3 mb-8">
            <span className="text-5xl">♻️</span>
            <h1 className="text-3xl font-bold">EcoTech <span className="text-[#f0832c]">Class</span></h1>
          </Link>

          {/* mensagem */}
          <h2 className="text-4xl font-bold leading-tight mb-6">Juntos por um futuro mais sustentável!</h2>
          <p className="text-gray-200 text-lg leading-relaxed mb-10">Conecte-se, doe, acumule pontos e faça a diferença pelo meio ambiente.</p>

          {/* ilustração */}
          <div className="text-center py-3">
            <img src={ilustracaoEco} alt="Planeta Terra apoiado por uma mão" className="w-full max-w-xs mx-auto"/>
            <p className="text-[#dce5d8] mt-5 text-sm">Pequenas atitudes transformam o futuro.</p>
          </div>
        </div>
      </div>

      {/* lado direito */}
      <div className="w-full md:w-1/2 bg-[#f3f5ef] flex items-center justify-center px-6 py-14">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8 md:p-10">
          <h2 className="text-4xl font-bold text-[#152b11] mb-3">Login</h2>
          <p className="text-gray-600 mb-10">Acesse sua conta para continuar.</p>

          {/* campos */}
          <form onSubmit={handleLogin} className="flex flex-col gap-6">
            <div>
              <label className="block text-[#152b11] font-semibold mb-2">E-mail</label>
              <input
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#4d6c48] transition"
              />
            </div>

            <div>
              <label className="block text-[#152b11] font-semibold mb-2">Senha</label>
              <input
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(event) => setSenha(event.target.value)}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#4d6c48] transition"
              />
            </div>

            <button
              type="submit"
              disabled={carregando}
              className="w-full bg-[#f0832c] text-white font-bold py-3 rounded-full hover:bg-[#d96b1e] transition shadow-sm disabled:opacity-60"
            >
              {carregando ? 'Entrando...' : 'Entrar'}
            </button>

            {erro && (
              <p className="text-center text-sm font-semibold text-red-600">
                {erro}
              </p>
            )}
          </form>

          {/* cadastro */}
          <p className="text-center text-gray-600 mt-8">Ainda não tem uma conta?{' '}
            <Link to="/cadastro" className="text-[#4d6c48] font-bold hover:text-[#f0832c] transition">
              Cadastre-se
            </Link>
          </p>

        </div>
      </div>

    </div>
  )
}

export default Login
