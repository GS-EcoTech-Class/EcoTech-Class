import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../services/api'

const Admin = () => {
  const navigate = useNavigate()

  const [usuarios, setUsuarios] = useState([])
  const [coletas, setColetas] = useState([])
  const [carregando, setCarregando] = useState(true)


  const [alunoSelecionadoEmail, setAlunoSelecionadoEmail] = useState('')
  const [material, setMaterial] = useState('')
  const [quantidade, setQuantidade] = useState('')
  const [peso, setPeso] = useState('')
  const [pontos, setPontos] = useState('')
  const [editandoId, setEditandoId] = useState(null)
  const [salvando, setSalvando] = useState(false)

  const carregarDados = async () => {
    try {
      setCarregando(true)
      const [listaUsuarios, listaColetas] = await Promise.all([
        api.listarUsuarios(),
        api.listarColetas()
      ])
      setUsuarios(listaUsuarios)
      setColetas(listaColetas)
    } catch (erro) {
      console.error('Erro ao carregar dados do admin:', erro)
    } finally {
      setCarregando(false)
    }
  }

  useEffect(() => {
    carregarDados()
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('usuarioLogado')
    navigate('/login')
  }

  // Lista apenas estudantes
  const listaEstudantes = usuarios.filter((u) => u.tipoUsuario === 'estudante')

  // CREATE & UPDATE
  const handleSalvarColeta = async (event) => {
    event.preventDefault()

    const estudante = listaEstudantes.find((e) => e.email === alunoSelecionadoEmail)
    if (!estudante) {
      alert('Selecione um estudante válido!')
      return
    }

    const dadosColeta = {
      alunoEmail: estudante.email,
      alunoNome: estudante.nome,
      turma: estudante.turma || 'Sem turma',
      material,
      quantidade: Number(quantidade),
      peso: Number(peso),
      pontos: Number(pontos),
      data: new Date().toLocaleDateString('pt-BR')
    }

    try {
      setSalvando(true)
      if (editandoId) {
        await api.atualizarColeta(editandoId, dadosColeta)
        setEditandoId(null)
      } else {
        await api.criarColeta(dadosColeta)
      }

      // Limpa o formulário e recarrega a lista da API
      setAlunoSelecionadoEmail('')
      setMaterial('')
      setQuantidade('')
      setPeso('')
      setPontos('')
      await carregarDados()
    } catch (erro) {
      alert('Erro ao salvar coleta na API.')
    } finally {
      setSalvando(false)
    }
  }

  // Preenche o formulário para edição (UPDATE)
  const handleIniciarEdicao = (coleta) => {
    setEditandoId(coleta.id)
    setAlunoSelecionadoEmail(coleta.alunoEmail)
    setMaterial(coleta.material)
    setQuantidade(coleta.quantidade)
    setPeso(coleta.peso)
    setPontos(coleta.pontos)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleCancelarEdicao = () => {
    setEditandoId(null)
    setAlunoSelecionadoEmail('')
    setMaterial('')
    setQuantidade('')
    setPeso('')
    setPontos('')
  }

  // DELETE 
  const handleExcluirColeta = async (id) => {
    if (!window.confirm('Tem certeza que deseja excluir esta coleta?')) return

    try {
      await api.deletarColeta(id)
      setColetas((prev) => prev.filter((item) => item.id !== id))
    } catch (erro) {
      alert('Erro ao excluir coleta.')
    }
  }


  const pesoTotal = coletas.reduce((soma, c) => soma + Number(c.peso || 0), 0)
  const turmasUnicas = [...new Set(listaEstudantes.map((e) => e.turma).filter(Boolean))]

  const estatisticas = [
    {
      icone: '🎓',
      titulo: 'Estudantes cadastrados',
      valor: `${listaEstudantes.length}`,
      descricao: 'Participantes na plataforma'
    },
    {
      icone: '♻️',
      titulo: 'Doações realizadas',
      valor: `${coletas.length}`,
      descricao: 'Contribuições registradas'
    },
    {
      icone: '🌱',
      titulo: 'Resíduos coletados',
      valor: `${pesoTotal.toFixed(1)} kg`,
      descricao: 'Materiais encaminhados'
    },
    {
      icone: '🏫',
      titulo: 'Turmas participantes',
      valor: `${turmasUnicas.length}`,
      descricao: 'Turmas cadastradas'
    }
  ]

  // Ranking individual de estudantes
  const estudantesComPontos = listaEstudantes
    .map((aluno) => {
      const totalPontos = coletas
        .filter((c) => c.alunoEmail === aluno.email)
        .reduce((soma, c) => soma + Number(c.pontos || 0), 0)
      return { ...aluno, pontos: totalPontos }
    })
    .sort((a, b) => b.pontos - a.pontos)

  // Ranking por turmas
  const rankingTurmas = turmasUnicas
    .map((nomeTurma) => {
      const pontosTurma = coletas
        .filter((c) => c.turma === nomeTurma)
        .reduce((soma, c) => soma + Number(c.pontos || 0), 0)
      return { turma: nomeTurma, pontos: pontosTurma }
    })
    .sort((a, b) => b.pontos - a.pontos)

  const medalhas = ['🥇', '🥈', '🥉']

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

        <section className="mb-10">
          <p className="text-[#f0832c] font-semibold mb-2">PAINEL ADMINISTRATIVO</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#152b11] dark:text-white mb-3">Visão geral da instituição 🏫</h2>
          <p className="text-gray-600 dark:text-gray-300">Acompanhe os resultados e gerencie as atividades de sustentabilidade.</p>
        </section>

        {/* FORMULÁRIO DE CRUD */}
        <section className="bg-white dark:bg-[#1d3519] rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-[#34502e] mb-12">
          <h3 className="text-xl font-bold text-[#152b11] dark:text-white mb-4">
            {editandoId ? '✏️ Editar coleta registrada' : '➕ Registrar nova coleta'}
          </h3>

          <form onSubmit={handleSalvarColeta} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1">Estudante</label>
              <select
                value={alunoSelecionadoEmail}
                onChange={(e) => setAlunoSelecionadoEmail(e.target.value)}
                required
                className="w-full border border-gray-300 dark:border-[#34502e] rounded-xl px-3 py-2 text-sm bg-white dark:bg-[#152b11] dark:text-white outline-none"
              >
                <option value="" disabled>Selecione o aluno</option>
                {listaEstudantes.map((aluno) => (
                  <option key={aluno.id} value={aluno.email}>
                    {aluno.nome} ({aluno.turma})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1">Material</label>
              <input
                type="text"
                placeholder="Ex: Celular antigo"
                value={material}
                onChange={(e) => setMaterial(e.target.value)}
                required
                className="w-full border border-gray-300 dark:border-[#34502e] rounded-xl px-3 py-2 text-sm dark:bg-[#152b11] dark:text-white outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1">Quantidade (un.)</label>
              <input
                type="number"
                min="1"
                placeholder="Ex: 2"
                value={quantidade}
                onChange={(e) => setQuantidade(e.target.value)}
                required
                className="w-full border border-gray-300 dark:border-[#34502e] rounded-xl px-3 py-2 text-sm dark:bg-[#152b11] dark:text-white outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1">Peso (kg)</label>
              <input
                type="number"
                step="0.1"
                min="0.1"
                placeholder="Ex: 1.5"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                required
                className="w-full border border-gray-300 dark:border-[#34502e] rounded-xl px-3 py-2 text-sm dark:bg-[#152b11] dark:text-white outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1">Pontos</label>
              <input
                type="number"
                min="1"
                placeholder="Ex: 100"
                value={pontos}
                onChange={(e) => setPontos(e.target.value)}
                required
                className="w-full border border-gray-300 dark:border-[#34502e] rounded-xl px-3 py-2 text-sm dark:bg-[#152b11] dark:text-white outline-none"
              />
            </div>

            <div className="sm:col-span-2 lg:col-span-5 flex items-center gap-3 mt-2">
              <button
                type="submit"
                disabled={salvando}
                className="bg-[#f0832c] text-white font-bold px-6 py-2.5 rounded-full hover:bg-[#d96b1e] transition text-sm disabled:opacity-60"
              >
                {salvando ? 'Salvando...' : editandoId ? 'Salvar alterações' : 'Registrar coleta'}
              </button>

              {editandoId && (
                <button
                  type="button"
                  onClick={handleCancelarEdicao}
                  className="bg-gray-300 text-gray-800 font-semibold px-5 py-2.5 rounded-full hover:bg-gray-400 transition text-sm"
                >
                  Cancelar
                </button>
              )}
            </div>
          </form>
        </section>

        {carregando ? (
          <p className="text-center text-gray-600 dark:text-gray-300 py-10">Carregando indicadores...</p>
        ) : (
          <>
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

            {/* estudantes e ranking */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

              <div className="bg-white dark:bg-[#1d3519] rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-[#34502e]">
                <h3 className="text-xl font-bold text-[#152b11] dark:text-white mb-6">Estudantes participantes 🎓</h3>

                {estudantesComPontos.length === 0 ? (
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Nenhum estudante cadastrado ainda.</p>
                ) : (
                  <div className="space-y-5">
                    {estudantesComPontos.map((aluno) => (
                      <div key={aluno.id} className="flex items-center justify-between gap-3 border-b border-gray-100 dark:border-[#34502e] pb-4">
                        <div>
                          <p className="font-semibold text-[#152b11] dark:text-white">{aluno.nome}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{aluno.turma}</p>
                        </div>
                        <span className="font-bold text-green-700 dark:text-green-400 whitespace-nowrap">{aluno.pontos} pts</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* ranking */}
              <div className="bg-white dark:bg-[#1d3519] rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-[#34502e]">
                <h3 className="text-xl font-bold text-[#152b11] dark:text-white mb-6">Ranking das turmas 🏆</h3>

                {rankingTurmas.length === 0 ? (
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Nenhuma turma pontuando ainda.</p>
                ) : (
                  <div className="space-y-6">
                    {rankingTurmas.map((item, index) => (
                      <div key={item.turma} className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl w-8 text-center">{medalhas[index] || `${index + 1}º`}</span>
                          <span className="font-semibold text-[#152b11] dark:text-white">{item.turma}</span>
                        </div>

                        <span className="font-bold text-green-700 dark:text-green-400">{item.pontos} pts</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>

           
            <section className="bg-white dark:bg-[#1d3519] rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-[#34502e]">
              <h3 className="text-xl font-bold text-[#152b11] dark:text-white mb-6">Coletas registradas ♻️</h3>

              {coletas.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-400 text-sm">Nenhuma coleta registrada até o momento.</p>
              ) : (
                <div className="space-y-5">
                  {coletas.map((item) => (
                    <div key={item.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 dark:border-[#34502e] pb-4">
                      <div>
                        <p className="font-semibold text-[#152b11] dark:text-white">
                          {item.material} • <span className="text-[#f0832c]">{item.alunoNome} ({item.turma})</span>
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          {item.quantidade} unidades • {item.peso} kg • +{item.pontos} pts • {item.data}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleIniciarEdicao(item)}
                          className="text-xs bg-blue-600 text-white font-semibold px-3 py-1.5 rounded-lg hover:bg-blue-700 transition"
                        >
                          Editar
                        </button>
                        <button
                          onClick={() => handleExcluirColeta(item.id)}
                          className="text-xs bg-red-600 text-white font-semibold px-3 py-1.5 rounded-lg hover:bg-red-700 transition"
                        >
                          Excluir
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </>
        )}

      </main>
    </div>
  )
}

export default Admin