const numPedidos = parseInt(2);
let totalCalorias = 0;
let valorTotal = 0;

for (let i = 1; i <= numPedidos; i++) {
  let prato = '';
  let calorias = parseInt();
  let ehVegano = 's'.toLowerCase() === 's';
  
  if (ehVegano) {
    if(i === 1){
      prato = 'Hamburguer de lentilha';
      calorias = 300;
      let vegano = 'Vegano';
      
  }
  if(i === 2){
      prato = 'Salada de frutas';
      calorias = 60;
      let vegano = 'Vegano';
      
  }
  } 


  const tipoPrato = ehVegano ? 'Vegano' : 'Não-vegano';
  console.log(`Pedido ${i}: ${prato} (${tipoPrato}) - ${calorias} calorias`);
}



