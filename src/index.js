import getData from './modules/getData';
import renderCards from './modules/renderCards';
import renderCatalog from './modules/renderCatalog';
import toggleCart from './modules/toggleCart';
import toggleCheckbox from './modules/toggleCheckbox';
import actionPage from './modules/actionPage';
import addCart from './modules/addCart';


//  checkbox


//end checkbox

// basket


//end basket

// add + delete items



// end add + delete

//filter




//end filter


// get data server



//end get data server
// get cards 

// end get cards









getData().then((data) => {
    renderCards(data);
    toggleCheckbox();
    toggleCart();
    addCart();
    actionPage();
    renderCatalog();
});



