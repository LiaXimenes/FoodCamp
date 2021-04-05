let comidaselecionada = 0
let bebidaselecionada = 0
let doceselecionado = 0

let pratofinal 
let bebidafinal 
let docefinal 
let precofinalprato 
let precofinalbebida
let precofinaldoce
let precototal 
let codificar
let codificado


function comida(numero){
    const naoverde = document.querySelector(".comida .verde")
        if (naoverde != null){    
           naoverde.classList.remove("verde");
        }
    const selecionado = "." + numero;
    const comida = document.querySelector(selecionado);
    comida.classList.add("verde");  
    comidaselecionada = 1;
    botaofinal()
}

function bebida(numeros){
    const naoverde = document.querySelector(".bebida .verde")
        if (naoverde != null){    
           naoverde.classList.remove("verde");
        }
    const selecionado = "." + numeros;
    const bebida = document.querySelector(selecionado);
    bebida.classList.add("verde");  
    bebidaselecionada = 1;
    botaofinal()
}

function doce(numero){
    const naoverde = document.querySelector(".doce .verde")
        if (naoverde != null){    
           naoverde.classList.remove("verde");
        }
    const selecionado = "." + numero;
    const doce = document.querySelector(selecionado);
    doce.classList.add("verde");  
    doceselecionado = 1;
    botaofinal()
}

function botaofinal(){
    if (comidaselecionada !== 0 && bebidaselecionada !== 0 && doceselecionado !==0 ){
        const botaofim = document.querySelector(".finalizacao");             
        botaofim.classList.add("finalizacao-verde");  
        document.querySelector(".finalizacao").disabled = false;
        document.querySelector(".finalizacao").innerHTML = "Fechar Pedido";
    }
}


function confirmarpedido(){
    pratofinal = document.querySelector(".comida .verde .nome").innerHTML;
    bebidafinal = document.querySelector(".bebida .verde .nome").innerHTML;
    docefinal = document.querySelector(".doce .verde .nome").innerHTML;
    precofinalprato = (document.querySelector(".comida .verde .preco").innerHTML).replace("R$","").replace(",",".");
    precofinalbebida = (document.querySelector(".bebida .verde .preco").innerHTML).replace("R$","").replace(",",".");
    precofinaldoce = (document.querySelector(".doce .verde .preco").innerHTML).replace("R$","").replace(",",".");
    precototal = parseFloat(precofinalprato) + parseFloat(precofinalbebida) + parseFloat(precofinaldoce);

    const vossagraca = prompt ("Qual seu nome?");
    const endereco = prompt ("Qual seu endereço?");
    

    codificar = `Olá, gostaria de fazer um pedido
    -Prato: ${pratofinal}
    -Bebida: ${bebidafinal}
    -Sobremesa: ${docefinal}
    -Nome: ${vossagraca}
    -Endereço: ${endereco}
     TOTAL: R$ ${precototal.toFixed(2).replace('.',',')}`;
   codificado = encodeURIComponent(codificar);
   const link = `https://wa.me/5514981320384?text=${codificado}`;
   window.location.href = link;

}
