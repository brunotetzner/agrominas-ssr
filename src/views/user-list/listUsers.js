import { openEditUserModal } from './editModal.js';
import { deleteUser } from './deleteUser.js';

export async function loadUsers() {
  const userList = document.getElementById('userList');

  try {
    const response = await fetch('http://localhost:3000/usuarios');
    const users = await response.json();
    userList.innerHTML = '';

    users.forEach(user => {
      const userItem = document.createElement('div');
      userItem.className = 'user-item';
      userItem.innerHTML = `
        <span>${user.bornAt} - ${user.name} - ${user.email}</span>
        <button class="edit-btn">✏️</button>
        <button class="delete-btn">🗑️</button>
      `;

      // Botão de editar
      const editButton = userItem.querySelector('.edit-btn');
      editButton.addEventListener('click', () => {
        openEditUserModal({
          id: user.id,
          name: user.name,
          bornAt: user.bornAt,
          taxIdentifier: user.taxIdentifier,
          email: user.email
        });
      });

      // Botão de deletar
      const deleteButton = userItem.querySelector('.delete-btn');
      deleteButton.addEventListener('click', () => {
        deleteUser(user.id);
      });

      userList.appendChild(userItem);
    });
  } catch (error) {
    console.error('Erro ao carregar usuários:', error);
  }
}

// Eventos globais
window.onload = loadUsers;

const logoutButton = document.getElementsByClassName('logout-btn')[0];
logoutButton.addEventListener('click', () => {
  window.location.href = "/";
});

const dashBoardButton = document.getElementById('dashBoard');
dashBoardButton.addEventListener('click', () => {
  window.location.href = "/view/dashboard";
});
