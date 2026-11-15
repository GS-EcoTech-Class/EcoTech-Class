import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const estatisticas = [
    {
      icone: '⭐',
      titulo: 'Pontos acumulados',
      valor: '350',
      descricao: 'Pontos conquistados'
    },
    {
      icone: '♻️',
      titulo: 'Resíduos entregues',
      valor: '12 kg',
      descricao: 'Materiais destinados'
    },
    {
      icone: '🏆',
      titulo: 'Posição no ranking',
      valor: '3º',
      descricao: 'Na sua turma'
    },
    {
      icone: '🌱',
      titulo: 'Contribuições',
      valor: '8',
      descricao: 'Doações realizadas'
    }
  ]

  const historico = [
    {
      material: 'Celular antigo',
      data: '10/11/2026',
      pontos: '+100 pontos'
    },
    {
      material: 'Cabos e carregadores',
      data: '08/11/2026',
      pontos: '+50 pontos'
    },
    {
      material: 'Pilhas usadas',
      data: '05/11/2026',
      pontos: '+30 pontos'
    }
  ]

  return (
    <div className="min-h-screen bg-[#f3f5ef] dark:bg-[#101d0e] transition-colors duration-300">

      {/* cabeçalho */}
      <header className="bg-white dark:bg-[#152b11] border-b-2 border-[#f0832c] shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-3xl">♻️</span>
            <h1 className="text-2xl font-bold text-[#152b11] dark:text-white">EcoTech Class</h1>
          </Link>

          <Link to="/" className="text-[#4d6c48] dark:text-white font-semibold hover:text-[#f0832c] transition">Voltar ao início</Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">

        {/* boas-vindas */}
        <section className="mb-10">
          <p className="text-[#f0832c] font-semibold mb-2">ÁREA DO ESTUDANTE</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#152b11] dark:text-white mb-3">Olá, estudante! 👋</h2>
          <p className="text-gray-600 dark:text-gray-300">Acompanhe seus resultados e veja o impacto das suas contribuições.</p>
        </section>

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

            <div className="space-y-5">
              {historico.map((item) => (
                <div key={item.material} className="flex items-center justify-between gap-3 border-b border-gray-100 dark:border-[#34502e] pb-4">
                  <div>
                    <p className="font-semibold text-[#152b11] dark:text-white">{item.material}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.data}</p>
                  </div>
                  <span className="text-sm font-bold text-green-700 dark:text-green-400 whitespace-nowrap">{item.pontos}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ranking */}
          <div className="bg-white dark:bg-[#1d3519] rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-[#34502e]">
            <h3 className="text-xl font-bold text-[#152b11] dark:text-white mb-6">Ranking da turma 🏆</h3>

            <div className="space-y-5">
              {[
                { nome: 'Ana Silva', pontos: 520, posicao: '🥇' },
                { nome: 'Lucas Santos', pontos: 430, posicao: '🥈' },
                { nome: 'Você', pontos: 350, posicao: '🥉' }
              ].map((aluno) => (
                <div key={aluno.nome} className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{aluno.posicao}</span>
                    <span className="font-semibold text-[#152b11] dark:text-white">{aluno.nome}</span>
                  </div>

                  <span className="font-bold text-[#4d6c48] dark:text-green-400">{aluno.pontos} pts</span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}

export default Dashboard
