const enviarEmail = document.getElementById("enviar");

enviarEmail.addEventListener("submit", function(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;

  const enviar = {
    email: email,
  };

  let acharEmail = JSON.parse(localStorage.getItem("acharEmail")) || [];
  acharEmail.push(enviar);
  localStorage.setItem("acharEmail", JSON.stringify(acharEmail));

  alert("Email enviado com sucesso!");
});
