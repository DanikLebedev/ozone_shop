export default function addCart() {
    const cards =  document.querySelectorAll(".goods .card");
    const cartWrapper = document.querySelector(".cart-wrapper");
    const count = document.querySelector(".counter");
    const cartEmpty = document.getElementById("cart-empty");

    cards.forEach(function (card) {
        const btn = card.querySelector("button");

        btn.addEventListener('click' , () => {
            const cardClone = card.cloneNode(true);
            cartWrapper.appendChild(cardClone);
            showData();

            const removeBtn =cardClone.querySelector(".btn");
            removeBtn.textContent = 'Удалить из корзины';
            removeBtn.style.backgroundColor = 'red';
            removeBtn.addEventListener('click', function () {
                cardClone.remove();
                showData();
            });
        });
    });

    function showData() {
        const cardsPrice = cartWrapper.querySelectorAll(".card-price");
        const cardsCart = cartWrapper.querySelectorAll(".card");
        const cardTotal = document.querySelector(".cart-total span");
        let sum = 0;
        count.textContent = cardsCart.length;


        cardsPrice.forEach( (cardPrice) => {
            let price = parseFloat(cardPrice.textContent);
            sum += price;

        });
        cardTotal.textContent = sum;
        if (cardsCart.length !== 0) {
            cartEmpty.remove();
        } else {
            cartWrapper.appendChild(cartEmpty);
        }
    }
}