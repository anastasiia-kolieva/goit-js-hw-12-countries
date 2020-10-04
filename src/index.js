import { alert, notice, info, success, error } from '@pnotify/core';
// нужно ли дебаунс импортировать??????
// var debounce = require('lodash.debounce');
import templateForManyCountries from './templates/template-many-country.hbs';
import templateForOneCountry from './templates/template-one-country.hbs';
import refs from './js/refs.js'
import './styles.css';

refs.searchFormInput.addEventListener('input', event=>{
    event.preventDefault();

    // значение которое вводят в инпут
    // console.log(refs.searchFormInput.value);
})


// переменная введенное название страны/поиск
const inputCountryName = fetch('https://restcountries.eu/rest/v2/name/uk')
  .then(responce => responce.json())
  .then(countries => {
    console.log(countries);

    // список стран (если от 2-х до 10-х стран)
    const markupForManyCountries = templateForManyCountries(countries);
    refs.countriesList.insertAdjacentHTML('beforeend',markupForManyCountries);

    // если одна страна
    // const markupForOneCountry = templateForOneCountry(countries);
    // refs.countriesList.insertAdjacentHTML('beforeend',markupForOneCountry);

  })
  .catch(Error => console.log('Страна с данным названием не найдена!'));
