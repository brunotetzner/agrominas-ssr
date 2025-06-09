async function editUser(id) {
  const newData = prompt('Digite os novos dados (JSON):\nExemplo: {"name": "Novo Nome", "dtNascimento": "1990-05-20"}');
  if (newData) {
    try {
      const response = await fetch(`http://localhost:3000/usuarios/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: newData
      });
      if (response.ok) {
        loadUsers(); // Recarrega a lista após edição
      } else {
        console.error('Erro ao editar usuário');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  }
}