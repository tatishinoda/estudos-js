function alterarStatus(id) {
   let game = document.getElementById(`game-${id}`);
   let image = game.querySelector(".dashboard__item__img");
   let button = game.querySelector(".dashboard__item__button");

    if (image.classList.contains("dashboard__item__img--rented")) {
        if (confirm(`Você tem certeza que deseja devolver o jogo ${game.textContent}?`)) {
            image.classList.remove("dashboard__item__img--rented");
            button.classList.remove("dashboard__item__button--return");
            button.textContent = "Alugar";
        }
   } else {
       image.classList.add("dashboard__item__img--rented");
       button.classList.add("dashboard__item__button--return");
       button.textContent = "Devolver";
    }
    imprimirQuantidadeAlugados();
}
let jogosAlugados = 0;


function imprimirQuantidadeAlugados() {
    let quantidadeAlugados = document.querySelectorAll('.dashboard__item__button--return').length;
    console.log(`Quantidade de jogos alugados: ${quantidadeAlugados}`);
}
