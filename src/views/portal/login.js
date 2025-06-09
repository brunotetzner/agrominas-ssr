document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".login-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // impede o envio padrão do formulário

    const login = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;

    const usuarioValido = "agrominas";
    const senhaValida = "12345";

    if (login === usuarioValido && senha === senhaValida) {
      window.location.href = "/view/dashboard";
    } else {
      alert("Login ou senha inválidos. Tente novamente.");
    }
  });
});
