async function loadUsers() {
  const userList = document.getElementById('userList');
  try {
    const response = await fetch('http://localhost:3000/usuarios');
    const users = await response.json();
    userList.innerHTML = '';

    console.log(users)
    users.forEach(user => {
      const userItem = document.createElement('div');
      userItem.className = 'user-item';
      userItem.innerHTML = `
        <span>${user.bornAt} - ${user.name} - ${user.email}</span>
        <button class="edit-btn" onclick="editUser(${user.id})">✏️</button>
        <button class="delete-btn" onclick="deleteUser(${user.id})">🗑️</button>
      `;
      userList.appendChild(userItem);
    });
  } catch (error) {
    console.error('Erro ao carregar usuários:', error);
  }
}

window.onload = loadUsers;

const logoutButton = document.getElementsByClassName('logout-btn')[0]
logoutButton.addEventListener('click',() => {
  window.location.href = "/";
})

const dashBoardButton = document.getElementById('dashBoard')
dashBoardButton.addEventListener('click',() => {
  window.location.href = "/view/dashboard";
})

