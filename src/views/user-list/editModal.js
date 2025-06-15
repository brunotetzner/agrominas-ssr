import { updateUser } from './editUser.js';

export function openEditUserModal(userData) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';

  overlay.innerHTML = `
    <div class="modal">
      <h3>Editar Estudante</h3>
      <form id="editUserForm">
        <input type="text" id="name" placeholder="Nome completo" required />
        <input type="date" id="bornAt" required />
        <input type="text" id="taxIdentifier" placeholder="CPF (somente números)" required />
        <input type="email" id="email" placeholder="Email" required />
        <button type="submit">Salvar Alterações</button>
        <button type="button" class="close-btn">Cancelar</button>
      </form>
    </div>
  `;

  document.body.appendChild(overlay);

  const form = document.getElementById('editUserForm');

  // Preencher com dados existentes
  form.name.value = userData.name;
  form.bornAt.value = userData.bornAt;
  form.taxIdentifier.value = userData.taxIdentifier;
  form.email.value = userData.email;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const updatedUser = {
      name: form.name.value,
      bornAt: form.bornAt.value,
      taxIdentifier: form.taxIdentifier.value,
      email: form.email.value
    };

    try {
      await updateUser(userData.id, updatedUser);
      alert('Usuário atualizado com sucesso!');
      document.body.removeChild(overlay);
      location.reload();
    } catch (error) {
      alert('Erro ao atualizar usuário.');
    }
  });

  overlay.querySelector('.close-btn').addEventListener('click', () => {
    document.body.removeChild(overlay);
  });
}
