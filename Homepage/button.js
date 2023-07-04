document.addEventListener("DOMContentLoaded", function() {
    var btnIniciarConversa = document.getElementById("btnFalarConsultor");
    btnIniciarConversa.addEventListener("click", iniciarConversa);
  
    function iniciarConversa() {
      fetch("dados-consultor.json")
        .then(function(response) {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Não foi possível carregar os dados do consultor.");
          }
        })
        .then(function(dadosConsultor) {
          abreChat(dadosConsultor);
        })
        .catch(function(error) {
          alert(error.message);
        });
    }
    function abreChat(dadosConsultor) {
      var urlWhatsApp = "https://api.whatsapp.com/send?phone=" + dadosConsultor.telefone + "&text=" + encodeURIComponent(dadosConsultor.mensagem);
      window.location.href = urlWhatsApp;
    }
  });