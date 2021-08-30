const cards = document.querySelectorAll(".card");

let isCardFlipped = false;
let card1, card2;
function flipcard() {
    this.classList.toggle("change");
    if(!isCardFlipped) {
        isCardFlipped = true;
        card1 = this;
    }else {
        isCardFlipped = false;
        card2 = this;
        if (card1.dataset.name === card2.dataset.name) {
            card1.removeEventListener("click", flipcard);
            card2.removeEventListener("click", cardflip);
        }else {
            setTimeout(() => {
                card1.classList.remove("change");
                card2.classList.remove("change");
            }, 1000);
        }
    }
}

cards.forEach((card) => {
    card.addEventListener("click", flipcard);
});