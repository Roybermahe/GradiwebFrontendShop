import _ from 'lodash';
import "../css/home.scss";
import {loadRates} from "./services/rateService";
import {loadProducts} from "./services/productService";
const menuBar = require('../js/services/menuBar');
const sliderComp = require('../js/services/sliderComponent');

function component() {
    const element = document.createElement('div');
    document.getElementById('btnMenuBars').onclick = menuBar;
    const select = document.getElementById('selectrate');
    loadRates(select);
    sliderComp();
    loadProducts('');
    select.addEventListener('change', (event) => {
        loadProducts(event.target.value);
    });
    return element;
}



document.body.appendChild(component());
