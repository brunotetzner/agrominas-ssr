async function fetchAndUpdateUserCounts() {
  try {
    const response = await fetch('http://localhost:3000/usuarios');
    if (!response.ok) throw new Error('Erro ao buscar usuários');

    const users = await response.json();

    const totalUsers = users.length;

    document.querySelector('.cards .card:nth-child(1) .card-value').textContent = totalUsers;
    document.querySelector('.cards .card:nth-child(2) .card-value').textContent = 0;
    document.querySelector('.cards .card:nth-child(3) .card-value').textContent = 0;

  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    document.querySelector('.cards .card:nth-child(1) .card-value').textContent = '0';
    document.querySelector('.cards .card:nth-child(2) .card-value').textContent = '0';
    document.querySelector('.cards .card:nth-child(3) .card-value').textContent = '0';
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const studentsCard = document.getElementById('active-students');
  studentsCard.addEventListener('click', () => {
    console.log('aqiooooooooooooooooooo')
    window.location.href = '/view/usuarios';
  });
});

fetchAndUpdateUserCounts();
