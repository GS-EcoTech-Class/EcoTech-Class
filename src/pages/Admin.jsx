import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
  const estatisticas = [
    {
      icone: '🎓',
      titulo: 'Estudantes cadastrados',
      valor: '120',
      descricao: 'Participantes na plataforma'
    },
    {
      icone: '♻️',
      titulo: 'Doações realizadas',
      valor: '85',
      descricao: 'Contribuições registradas'
    },
    {
      icone: '🌱',
      titulo: 'Resíduos coletados',
      valor: '240 kg',
      descricao: 'Materiais encaminhados'
    },
    {
      icone: '🏫',
      titulo: 'Turmas participantes',
      valor: '8',
      descricao: 'Turmas cadastradas'
    }
  ]

  const estudantes = [
    { nome: 'Ana Silva', turma: '1º ESPG', pontos: 520 },
    { nome: 'Lucas Santos', turma: '1º ESPG', pontos: 430 },
    { nome: 'Mariana Costa', turma: '2º ESPG', pontos: 390 },
    { nome: 'Pedro Oliveira', turma: '2º ESPG', pontos: 350 }
  ]

  const coletas = [
    { material: 'Celulares', quantidade: '15 unidades', peso: '8 kg' },
    { material: 'Cabos e carregadores', quantidade: '30 unidades', peso: '12 kg' },
    { material: 'Pilhas e baterias', quantidade: '45 unidades', peso: '5 kg' }
  ]

  const ranking = [
    { turma: '1º ESPG', pontos: 1250, posicao: '🥇' },
    { turma: '2º ESPG', pontos: 980, posicao: '🥈' },
    { turma: '3º ESPG', pontos: 750, posicao: '🥉' }
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

          <Link to="/" className="text-[#4d6c48] dark:text-white font-semibold hover:text-[#f0832c] transition">
            Voltar ao início
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">

        {/* boas-vindas */}
        <section className="mb-10">
          <p className="text-[#f0832c] font-semibold mb-2">PAINEL ADMINISTRATIVO</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#152b11] dark:text-white mb-3">Visão geral da instituição 🏫</h2>
          <p className="text-gray-600 dark:text-gray-300">Acompanhe os resultados e gerencie as atividades de sustentabilidade.</p>
        </section>

        {/* estatísticas */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-[#152b11] dark:text-white mb-6">Indicadores gerais</h3>

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

        {/* estudantes */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

          <div className="bg-white dark:bg-[#1d3519] rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-[#34502e]">
            <h3 className="text-xl font-bold text-[#152b11] dark:text-white mb-6">Estudantes participantes 🎓</h3>

            <div className="space-y-5">
              {estudantes.map((aluno) => (
                <div key={aluno.nome} className="flex items-center justify-between gap-3 border-b border-gray-100 dark:border-[#34502e] pb-4">
                  <div>
                    <p className="font-semibold text-[#152b11] dark:text-white">{aluno.nome}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{aluno.turma}</p>
                  </div>
                  <span className="font-bold text-green-700 dark:text-green-400 whitespace-nowrap">{aluno.pontos} pts</span>
               
                </div>
              ))}
            </div>
          </div>

          {/* ranking */}
          <div className="bg-white dark:bg-[#1d3519] rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-[#34502e]">
            <h3 className="text-xl font-bold text-[#152b11] dark:text-white mb-6">Ranking das turmas 🏆</h3>

            <div className="space-y-6">
              {ranking.map((item) => (
                <div key={item.turma} className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.posicao}</span>
                    <span className="font-semibold text-[#152b11] dark:text-white">{item.turma}</span>
                  </div>

                  <span className="font-bold text-green-700 dark:text-green-400">{item.pontos} pts</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* coletas */}
        <section className="bg-white dark:bg-[#1d3519] rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-[#34502e]">
          <h3 className="text-xl font-bold text-[#152b11] dark:text-white mb-6">Coletas registradas ♻️</h3>

          <div className="space-y-5">
            {coletas.map((item) => (
              <div key={item.material} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 dark:border-[#34502e] pb-4">
                <div>
                  <p className="font-semibold text-[#152b11] dark:text-white">{item.material}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.quantidade}</p>
                </div>

                <span className="font-bold text-green-700 dark:text-green-400">{item.peso}</span>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  )
}

export default Admin
