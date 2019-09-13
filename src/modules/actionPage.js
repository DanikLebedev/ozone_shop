 import filter from './filter';
export default function actionPage() {
    const cards = document.querySelectorAll('.goods .card');
    const discountCheckbox = document.getElementById('discount-checkbox');
    const min = document.getElementById('min');
    const max = document.getElementById('max');
    const goods = document.querySelector('.goods');
    const search = document.querySelector('.search-wrapper_input');
    const searchBtn = document.querySelector('.search-btn');



    discountCheckbox.addEventListener('click' , function () {
        cards.forEach((card) => {
            if (discountCheckbox.checked){
                if (!card.querySelector(".card-sale")){
                    card.parentNode.remove();
                }
            } else {
               goods.appendChild(card.parentNode);
            }
        });
    });


    min.addEventListener('change', filter);
    max.addEventListener('change', filter);


    searchBtn.addEventListener('click',() =>{
       const searchText = new RegExp(search.value.trim(), 'i');
       cards.forEach((card) => {
          const title = card.querySelector('.card-title');
          if (!searchText.test(title.textContent)){
              card.parentNode.remove();
          } else {
              goods.appendChild(card.parentNode);
          }
       });
       search.value = '';

    });
}