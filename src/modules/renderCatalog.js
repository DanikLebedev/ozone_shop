import filter from '../modules/filter';

export default function renderCatalog() {
  const cards = document.querySelectorAll('.goods .card'); // карточки товаров
  const catalogBtn = document.querySelector('.catalog-button'); // обертка списка категорий и кнопки "Каталог"
  const catalogWrapper = document.querySelector('.catalog'); // обертка списка категорий каталога
  const catalogList = document.querySelector('.catalog-list'); // тэг ul для вывода списка категорий каталога
  const categories = new Set(); // коллекция для сохранения уникальных значений категорий
  const filterTitle = document.querySelector('.filter-title h5');

  cards.forEach(card => { // получаем все категории товаров
    categories.add(card.dataset.category); // получаем значение дата-атрибута data-category и добавляем его в  коллекцию
  });

  categories.forEach((item) => { // формируем список категорий
    const li = document.createElement('li');
    li.textContent = item;
    catalogList.appendChild(li);
  });

  const allLi = catalogList.querySelectorAll('li');

  catalogBtn.addEventListener('click', (event) => {
    if (catalogWrapper.style.display) { // Отображение/скрытие списка категорий
      catalogWrapper.style.display = '';
    } else {
      catalogWrapper.style.display = 'block';
    }
    if (event.target.tagName === 'LI') { // если кликнули по элементу списка категорий
      cards.forEach((card) => { // получаем карточки из выбранной категории
        if (card.dataset.category === event.target.textContent) {
          card.parentNode.style.display = 'flex';
        } else {
          card.parentNode.style.display = 'none';
        }
      });
      allLi.forEach((elem) => {
        if (elem === event.target) {
          elem.classList.add('active');
        } else {
          elem.classList.remove('active');
        }
      });
      filterTitle.textContent = event.target.textContent;
      filter();
    }
  });
}