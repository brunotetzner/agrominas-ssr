export async function updateUser(id, user) {
  const response = await fetch(`http://54.156.44.192:3000/usuarios/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });

  if (!response.ok) {
    throw new Error('Erro ao atualizar usuário');
  }

  return await response.json();
}
