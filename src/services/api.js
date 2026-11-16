const BASE_URL = 'https://6afb296a730c1d152f3339e3.mockapi.io/Ecotech/';

export const api = {
  // --- USUÁRIOS ---
  async listarUsuarios() {
    const res = await fetch(`${BASE_URL}/usuarios`);
    if (!res.ok) throw new Error('Erro ao buscar usuários');
    return res.json();
  },

  async cadastrarUsuario(dados) {
    const res = await fetch(`${BASE_URL}/usuarios`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados),
    });
    if (!res.ok) throw new Error('Erro ao cadastrar usuário');
    return res.json();
  },

  // --- COLETAS (CRUD) ---
  async listarColetas() {
    const res = await fetch(`${BASE_URL}/coletas`);
    if (!res.ok) throw new Error('Erro ao buscar coletas');
    return res.json();
  },

  async criarColeta(dados) {
    const res = await fetch(`${BASE_URL}/coletas`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados),
    });
    if (!res.ok) throw new Error('Erro ao registrar coleta');
    return res.json();
  },

  async atualizarColeta(id, dados) {
    const res = await fetch(`${BASE_URL}/coletas/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados),
    });
    if (!res.ok) throw new Error('Erro ao atualizar coleta');
    return res.json();
  },

  async deletarColeta(id) {
    const res = await fetch(`${BASE_URL}/coletas/${id}`, {
      method: 'DELETE',
    });
    if (!res.ok) throw new Error('Erro ao deletar coleta');
    return res.json();
  },
};