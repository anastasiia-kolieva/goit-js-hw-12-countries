import { alert, notice, info, success, error } from '@pnotify/core';
// нужно ли дебаунс импортировать??????
// var debounce = require('lodash.debounce');
import templateForManyCountries from './templates/template-many-country.hbs';
import templateForOneCountre from './templates/template-one-country.hbs';
import refs from './js/refs.js'
import './styles.css';

// переменная введенное название страны/поиск
const inputCountryName = fetch('https://restcountries.eu/rest/v2/name/uk')
  .then(responce => responce.json())
  .then(countries => {
    console.log(countries);

    // список стран (если от 2-х до 10-х стран)
    const markup = templateForManyCountries(countries);
    refs.countriesList.insertAdjacentHTML('beforeend',markup);

  })
  .catch(Error => console.log('Страна с данным названием не найдена!'));
