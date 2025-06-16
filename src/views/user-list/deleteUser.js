export async function deleteUser(id) {
  if (confirm('Tem certeza que deseja excluir este usuário?')) {
    try {
      const response = await fetch(`http://54.156.44.192:3000/usuarios/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        loadUsers(); // Recarrega a lista após exclusão
      } else {
        console.error('Erro ao excluir usuário');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  }
}
