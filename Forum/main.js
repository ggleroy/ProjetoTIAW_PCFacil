// NavBar
function hideIconBar() {
    var iconBar = document.getElementById("iconBar");
    var navigation = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:none;");
    navigation.classList.remove("hide");
  }
  
  function showIconBar() {
    var iconBar = document.getElementById("iconBar");
    var navigation = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:block;");
    navigation.classList.add("hide");
  }
  
  // Comment
  function showComment() {
    var commentArea = document.getElementById("comment-area");
    commentArea.classList.remove("hide");
  }
  
  // Reply
  function showReply() {
    var replyArea = document.getElementById("reply-area");
    replyArea.classList.remove("hide");
  }
  
  // Submit Comment
  function submitComment() {
    var commentInput = document.getElementById("comment-input");
    var commentText = commentInput.value;
  
    // Aqui você pode adicionar a lógica para salvar o comentário, por exemplo, enviar para um servidor ou armazenar localmente
  
    // Exemplo de exibição do comentário salvo
    var commentList = document.getElementById("comment-list");
    var newComment = document.createElement("li");
    newComment.textContent = commentText;
    commentList.appendChild(newComment);
  
    // Limpar o campo de entrada após enviar o comentário
    commentInput.value = "";
  }
  
