// codigo que pega um video do json e o coloca para reproduzir na tela:

function loadJSON(callback) {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open('GET', 'videos.json', true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        callback(JSON.parse(xhr.responseText));
      }
    };
    xhr.send(null);
  }
  
  function exibirVideo(index) {
    loadJSON(function (videos) {
      var videoUrl = videos.videos[index].url;
      var videoId = extrairIdDoVideo(videoUrl);
      var embedUrl = 'https://www.youtube.com/embed/' + videoId;
  
      var videoContainer = document.getElementById('video-container');
      videoContainer.innerHTML = '<iframe width="100%" height="100%" src="' + embedUrl + '" frameborder="0" allowfullscreen></iframe>';
    });
  }
  
  function extrairIdDoVideo(url) {
    var videoId = '';
    var match = url.match(/[?&]v=([^&#]+)/);
  
    if (match) {
      videoId = match[1];
    }
  
    return videoId;
  }

  

//background do video (bugado):

/*
  function toggleBackground() {
    var content = document.getElementById('video-container');
    content.classList.toggle('background-active');
  }
*/  
