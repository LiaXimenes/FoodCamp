function meclica(){

    if (itemselecionado != null){
        const prato_excluido = document.querySelector(".item, .steak_au_gratin")
        prato_excluido.classList.remove("verde");
    }


    const comida = document.querySelector(".pratos");
    comida.classList.toggle("verde");
}
