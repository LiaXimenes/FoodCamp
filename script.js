function escolha(numero){
    const naoverde = document.querySelector(".verde")
        if (naoverde != null){    
           naoverde.classList.remove("verde");
        }
    const selecionado = "." + numero;
    const comida = document.querySelector(selecionado);
    comida.classList.add("verde");

   
   // no de cima eu tiro a classe, em baixo eu teria que recolocar a coisa para deixar de aparecer o botão,
   //é o inverso, como faz isso? 
   
    const botao = document.querySelector(".ion" + numero);
    botao.classList.remove("escondido");   
}

