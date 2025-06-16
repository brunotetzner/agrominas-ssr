// createUser.js

export async function createUser(user) {
  const response = await fetch('http://54.156.44.192:3000/usuarios', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });

  if (!response.ok) {
    throw new Error('Erro ao criar usuário');
  }

  return await response.json();
}
