
/*

Aluno: Ian Matsuhara Ferraz

Mátricula: 627378

*/



/*

Todos métodos nessa aplicação fazem uso da base de dados fake implementada nos dois arquivos JSON
carrinho.json
dado.json


*/



let carrinho;

fetch('./assets/data/carrinho.json')
.then(response => response.json())
.then(data => {
    carts = data.map(cart => {
    return { 
        id:cart.id,
        produtos:cart.produtos,
        performance: cart.performance
    }
    });
    console.log(carts);
    carrinho = JSON.parse(JSON.stringify(carts));
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    console.log(carrinho);
    console.log(carts);
})

console.log(carrinho); 



//----------------------------------------------------------------



let carrier;

    fetch('./assets/data/dado.json')
    .then(response => response.json())
    .then(data => {
        items = data.map(item => {
        return { 
            id:item.id,
            nome: item.nome,
            descricao: item.descricao,
            valor: item.valor,
            categoria: item.categoria,
            marca: item.marca,
            picture: item.picture
        }
        });
        console.log(carrier);
        carrier = JSON.parse(JSON.stringify(items));
        localStorage.setItem('carrier', JSON.stringify(carrier));
        console.log(carrier);
        console.log(carrier);
    })

    



    //----------------------------------------------------------------




var product_scout = JSON.parse(localStorage.getItem('carrier'));
var carrinho_scout = JSON.parse(localStorage.getItem('carrinho'));


console.log(product_scout);
console.log(carrinho_scout);





//----------------------------------------------------------------

//----------------------------------------------------------------





function SendToJson(NewObject){

  console.log(NewObject);
  let carrier = JSON.parse(localStorage.getItem('carrier')) || [];
  let newObjectId = (parseInt(carrier.length))+1;
  const DefNewObject = { id: newObjectId, ...NewObject };
  carrier.push(DefNewObject);
  localStorage.setItem('carrier', JSON.stringify(carrier));
  console.log(carrier);
  
}




//----------------------------------------------------------------




function ResultadoDaPesquisa(){
  window.open("PesquisaResultado.html", "_blank");
}




//----------------------------------------------------------------



function SendToJson2(NewObject){
  localStorage.setItem('searched_item', JSON.stringify(NewObject));
  
}


//----------------------------------------------------------------


function SendToJson3(NewObject){
  localStorage.setItem('custom_parameter', JSON.stringify(NewObject));
  
}


//----------------------------------------------------------------




function Researcher(){

  const carrinhoDeBusca_indicator = [];
  const carrinhoDeBusca = [];
  const searchedItem = JSON.parse(localStorage.getItem('searched_item'));
  const carrinho = JSON.parse(localStorage.getItem('carrinho'));

  console.log(searchedItem.performance);
  console.log(carrinho[2].performance);

  console.log(typeof searchedItem.performance);
  console.log(typeof carrinho[2].performance);

  for (let count = 0; count < carrinho.length; count++) {
    if (carrinho[count].performance.toString() === searchedItem.performance) {
      carrinhoDeBusca_indicator.push(carrinho[count].produtos);
      console.log('INSERTION FLAG');
    }
  }
  localStorage.setItem('carrinhoDeBusca_indicator', JSON.stringify(carrinhoDeBusca_indicator));


  const carrier_carrier = JSON.parse(localStorage.getItem('carrier'));


  console.log(carrinhoDeBusca_indicator);
  console.log(carrier_carrier[0].id);
  console.log(carrinhoDeBusca_indicator[0][0]);


  for (let count = 0; count < carrinhoDeBusca_indicator[0].length; count++) {

    console.log('upper_laco');
    

    for (let count2 = 0; count2 < carrier_carrier.length; count2++) {

      console.log(carrier_carrier[count2].id);
      console.log((carrinhoDeBusca_indicator[0][count]));

      if (carrier_carrier[count2].id === (carrinhoDeBusca_indicator[0][count])) {

        carrinhoDeBusca.push(carrier_carrier[count2]);
        console.log('INSERTION FLAG 2');
     }
   }
  }
  localStorage.setItem('carrinhoDeBusca', JSON.stringify(carrinhoDeBusca));
  console.log(carrinhoDeBusca);
} 

var researcher_scout = JSON.parse(localStorage.getItem('carrinhoDeBusca')) || [];
//console.log(researcher_scout_indicator);




//----------------------------------------------------------------




function OpenPesquisa(){

  window.open("pesquisa.html", "_blank");


}


//----------------------------------------------------------------


function BuildCustomizada(){



  console.log('JULIA FLAG');
  window.open("customizada.html", "_blank");
}


//----------------------------------------------------------------


function Shower(){

  
}

var customizada_scout = JSON.parse(localStorage.getItem('carrier')) || [];
console.log(customizada_scout);



//----------------------------------------------------------------



let carrinho_custom;


function addToCart(id) {
  let ItensDoCarrinho = JSON.parse(localStorage.getItem('carrinho_custom')) || [];
  const existingItem = ItensDoCarrinho[0];

  if (existingItem && existingItem.produtos.indexOf(id) !== -1) {
    const index = existingItem.produtos.indexOf(id);
    existingItem.produtos.splice(index, 1, id);
  } else {
    if (existingItem) {
      existingItem.produtos.push(id);
    } else {
      ItensDoCarrinho.push({ produtos: [id] });
    }
  }
  localStorage.setItem('carrinho_custom', JSON.stringify(ItensDoCarrinho));
}




//----------------------------------------------------------------



function deleteToCart(id) {
  let ItensDoCarrinho = JSON.parse(localStorage.getItem('carrinho_custom')) || [];
  const existingItem = ItensDoCarrinho.find(item => item.produtos.includes(id));

  if (existingItem) {
    const index = existingItem.produtos.indexOf(id);
    existingItem.produtos.splice(index, 1);
    if (existingItem.produtos.length === 0) {
      const itemIndex = ItensDoCarrinho.indexOf(existingItem);
      ItensDoCarrinho.splice(itemIndex, 1);
    }
    localStorage.setItem('carrinho_custom', JSON.stringify(ItensDoCarrinho));
  }
}


//----------------------------------------------------------------


function StoreBuild(){

  let custom_builds = [];
  custom_builds[0]



  localStorage.setItem('custom_builds', JSON.stringify(custom_builds));




}

//----------------------------------------------------------------








  

