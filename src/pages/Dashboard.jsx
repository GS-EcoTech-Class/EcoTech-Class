import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../services/api'

const Dashboard = () => {
  const navigate = useNavigate()
  const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado') || '{}')

  const [coletas, setColetas] = useState([])
  const [usuarios, setUsuarios] = useState([])
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const [listaColetas, listaUsuarios] = await Promise.all([
          api.listarColetas(),
          api.listarUsuarios()
        ])
        setColetas(listaColetas)
        setUsuarios(listaUsuarios)
      } catch (erro) {
        console.error('Erro ao carregar dados da dashboard:', erro)
      } finally {
        setCarregando(false)
      }
    }

    carregarDados()
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('usuarioLogado')
    navigate('/login')
  }

  // 1. Filtra as contribuições apenas do aluno logado
  const meuHistorico = coletas.filter(
    (item) => item.alunoEmail === usuarioLogado.email
  )

  // 2. Calcula os totais individuais do aluno
  const meusPontos = meuHistorico.reduce((soma, item) => soma + Number(item.pontos || 0), 0)
  const meuPeso = meuHistorico.reduce((soma, item) => soma + Number(item.peso || 0), 0)
  const totalContribuicoes = meuHistorico.length

  // 3. Monta o ranking dinâmico da turma do aluno logado
  const colegasDeTurma = usuarios.filter(
    (u) => u.tipoUsuario === 'estudante' && u.turma === usuarioLogado.turma
  )

  const rankingTurma = colegasDeTurma
    .map((aluno) => {
      const pontosAluno = coletas
        .filter((c) => c.alunoEmail === aluno.email)
        .reduce((soma, c) => soma + Number(c.pontos || 0), 0)

      return {
        email: aluno.email,
        nome: aluno.email === usuarioLogado.email ? `${aluno.nome} (Você)` : aluno.nome,
        pontos: pontosAluno
      }
    })
    .sort((a, b) => b.pontos - a.pontos) // Ordena do maior para o menor

  const minhaPosicao = rankingTurma.findIndex((a) => a.email === usuarioLogado.email) + 1

  const medalhas = ['🥇', '🥈', '🥉']

  const estatisticas = [
    {
      icone: '⭐',
      titulo: 'Pontos acumulados',
      valor: `${meusPontos}`,
      descricao: 'Pontos conquistados'
    },
    {
      icone: '♻️',
      titulo: 'Resíduos entregues',
      valor: `${meuPeso.toFixed(1)} kg`,
      descricao: 'Materiais destinados'
    },
    {
      icone: '🏆',
      titulo: 'Posição no ranking',
      valor: minhaPosicao > 0 ? `${minhaPosicao}º` : '-',
      descricao: `Na turma ${usuarioLogado.turma || ''}`
    },
    {
      icone: '🌱',
      titulo: 'Contribuições',
      valor: `${totalContribuicoes}`,
      descricao: 'Doações realizadas'
    }
  ]

  return (
    <div className="min-h-screen bg-[#f3f5ef] dark:bg-[#101d0e] transition-colors duration-300">

      <header className="bg-white dark:bg-[#152b11] border-b-2 border-[#f0832c] shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-3xl">♻️</span>
            <h1 className="text-2xl font-bold text-[#152b11] dark:text-white">EcoTech Class</h1>
          </Link>

          <div className="flex items-center gap-6">
            <Link to="/" className="text-[#4d6c48] dark:text-white font-semibold hover:text-[#f0832c] transition">
              Voltar ao início
            </Link>
            <button
              onClick={handleLogout}
              className="text-sm bg-red-600 text-white font-semibold px-4 py-1.5 rounded-full hover:bg-red-700 transition"
            >
              Sair
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">

        {/* boas-vindas */}
        <section className="mb-10">
          <p className="text-[#f0832c] font-semibold mb-2">
            ÁREA DO ESTUDANTE {usuarioLogado.turma ? `• ${usuarioLogado.turma}` : ''}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#152b11] dark:text-white mb-3">
            Olá, {usuarioLogado.nome || 'estudante'}! 👋
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Acompanhe seus resultados e veja o impacto das suas contribuições.
          </p>
        </section>

        {carregando ? (
          <p className="text-center text-gray-600 dark:text-gray-300 py-10">Carregando seus dados...</p>
        ) : (
          <>
            {/* estatísticas */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold text-[#152b11] dark:text-white mb-6">Seu desempenho</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {estatisticas.map((item) => (
                  <div key={item.titulo} className="bg-white dark:bg-[#1d3519] rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-[#34502e]">
                    <span className="text-3xl">{item.icone}</span>
                    <p className="text-gray-600 dark:text-gray-300 mt-4 mb-2">{item.titulo}</p>
                    <h4 className="text-3xl font-bold text-[#152b11] dark:text-white">{item.valor}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{item.descricao}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* conteúdo inferior */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {/* histórico */}
              <div className="bg-white dark:bg-[#1d3519] rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-[#34502e]">
                <h3 className="text-xl font-bold text-[#152b11] dark:text-white mb-6">Histórico de contribuições</h3>

                {meuHistorico.length === 0 ? (
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Você ainda não possui entregas registradas. Entregue seus resíduos eletrônicos na escola para pontuar!
                  </p>
                ) : (
                  <div className="space-y-5">
                    {meuHistorico.map((item) => (
                      <div key={item.id} className="flex items-center justify-between gap-3 border-b border-gray-100 dark:border-[#34502e] pb-4">
                        <div>
                          <p className="font-semibold text-[#152b11] dark:text-white">
                            {item.material} ({item.quantidade} un. • {item.peso} kg)
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.data}</p>
                        </div>
                        <span className="text-sm font-bold text-green-700 dark:text-green-400 whitespace-nowrap">
                          +{item.pontos} pontos
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* ranking */}
              <div className="bg-white dark:bg-[#1d3519] rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-[#34502e]">
                <h3 className="text-xl font-bold text-[#152b11] dark:text-white mb-6">
                  Ranking da turma ({usuarioLogado.turma || 'Geral'}) 🏆
                </h3>

                {rankingTurma.length === 0 ? (
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Nenhum estudante encontrado nesta turma.</p>
                ) : (
                  <div className="space-y-5">
                    {rankingTurma.map((aluno, index) => (
                      <div key={aluno.email} className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl w-8 text-center">
                            {medalhas[index] || `${index + 1}º`}
                          </span>
                          <span className="font-semibold text-[#152b11] dark:text-white">{aluno.nome}</span>
                        </div>

                        <span className="font-bold text-[#4d6c48] dark:text-green-400">{aluno.pontos} pts</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          </>
        )}

      </main>
    </div>
  )
}

export default Dashboard