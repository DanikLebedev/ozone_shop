export default function toggleCart() {
    const btnCart = document.getElementById("cart");
    const modalCart = document.querySelector(".cart");
    const closeCart = document.querySelector(".cart-close");
    btnCart.addEventListener('click', function () {
        modalCart.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });

    closeCart.addEventListener('click' , function () {
        modalCart.style.display = '';
        document.body.style.overflow = '';
    });
}