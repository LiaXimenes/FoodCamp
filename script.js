function comidas(){
    const comida = document.querySelector(".pratos");
    comida.classList.add("verde");

    const botao =document.querySelector(".ion");
    botao.classList.remove("escondido");   
}


function bebida(){
    const bebidas = document.querySelector(".lata");
    bebidas.classList.add("verde");

    const boto =document.querySelector(".ions");
    boto.classList.remove("escondido");   
}

function sobremesa(){
    const sobremesas = document.querySelector(".doce");
    sobremesas.classList.add("verde");

    const botao =document.querySelector(".ionss");
    botao.classList.remove("escondido");   
}






if (itemselecionado != null){
    const comida = document.querySelector(".pratos")
    comida.classList.remove("verde");
}