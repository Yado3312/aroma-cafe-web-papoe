const form = document.getElementById("login-form");
const message = document.getElementById("login-message");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (email === "" || password.length < 6) {
    message.textContent = "Escribe un correo y una contraseña de al menos 6 caracteres.";
    return;
  }
  message.textContent = "Datos válidos.";
});
