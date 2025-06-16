import { createUser } from './createUser.js';

export function openCreateUserModal() {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';

  overlay.innerHTML = `
    <div class="modal">
      <h3>Criar Estudante</h3>
      <form id="createUserForm">
        <input type="text" id="name" placeholder="Nome completo" required />
        <input type="date" id="bornAt" required />
        <input type="text" id="taxIdentifier" placeholder="CPF (somente números)" required />
        <input type="email" id="email" placeholder="Email" required />
        <button type="submit">Salvar</button>
        <button type="button" class="close-btn">Cancelar</button>
      </form>
    </div>
  `;

  document.body.appendChild(overlay);

  const form = document.getElementById('createUserForm');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const user = {
      name: form.name.value,
      bornAt: form.bornAt.value,
      taxIdentifier: form.taxIdentifier.value,
      email: form.email.value,
      createdAt: new Date().toISOString().split('T')[0]
    };

    try {
      await createUser(user);
      alert('Usuário criado com sucesso!');
      document.body.removeChild(overlay);
      location.reload();
    } catch (error) {
      alert('Erro ao criar usuário.');
    }
  });

  overlay.querySelector('.close-btn').addEventListener('click', () => {
    document.body.removeChild(overlay);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('createStudentBtn');
  if (btn) {
    btn.addEventListener('click', () => {
      openCreateUserModal();
    });
  }
});
