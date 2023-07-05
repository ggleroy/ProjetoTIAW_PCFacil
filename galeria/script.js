//js para pegar dados do json e colocar na tela

fetch('itens.json')
  .then(response => response.json())
  .then(data => exibirItens(data));

function exibirItens(itens) {
  const container = document.querySelector('#container');

  itens.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');

    const cpu = document.createElement('p');
    cpu.textContent = `CPU: ${item.cpu}`;
    card.appendChild(cpu);

    const gpu = document.createElement('p');
    gpu.textContent = `GPU: ${item.gpu}`;
    card.appendChild(gpu);

    const fonte = document.createElement('p');
    fonte.textContent = `Fonte: ${item.fonte}`;
    card.appendChild(fonte);

    const gabinete = document.createElement('p');
    gabinete.textContent = `Gabinete: ${item.gabinete}`;
    card.appendChild(gabinete);

    const memoriaRam = document.createElement('p');
    memoriaRam.textContent = `Memória RAM: ${item.memoriaRam}`;
    card.appendChild(memoriaRam);

    const placaMae = document.createElement('p');
    placaMae.textContent = `Placa-mãe: ${item.placaMae}`;
    card.appendChild(placaMae);

    const cooler = document.createElement('p');
    cooler.textContent = `Cooler: ${item.cooler}`;
    card.appendChild(cooler);

    const divcard = document.createElement('div');
    divcard.classList.add('titulo');

    const title = document.createElement('h2');
    title.textContent = `${item.nomeBuild} - ${item.nomeUsuario}`;
    card.appendChild(title);

    container.appendChild(card);



    
    // Código JS para redirecionar ao clicar em um card
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    
    const buildId = card.dataset.buildId;

    window.location.href = `pagina.html?build=${buildId}`;
  });
});

    
  });
}



