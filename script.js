let comidaselecionada = 0
let bebidaselecionada = 0
let doceselecionado = 0


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

    }
}