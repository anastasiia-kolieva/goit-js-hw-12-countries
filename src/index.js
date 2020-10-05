import '@pnotify/core/dist/BrightTheme.css';
import { error } from '@pnotify/core';
// нужно ли дебаунс импортировать??????
// var debounce = require('lodash.debounce');
import fetchCountries from './js/fetchCountries';
import templateForManyCountries from './templates/template-many-country.hbs';
import templateForOneCountry from './templates/template-one-country.hbs';
import refs from './js/refs.js';
import './styles.css';

refs.searchFormInput.addEventListener('input', event => {
  event.preventDefault();

  // вызов функции очистки инпута перед вводом нового поиска страны???????нужно ли??? ПРОВЕРИТЬ!!!!
  clearSearchFormInput();

  // значение которое вводят в инпут
  const inputValue = refs.searchFormInput.value;

  fetchCountries(inputValue).then(countries => {
    if (countries.length === 1) {
      // если одна страна
      buildMarkupForOneCountry(countries);
    } else if (countries.length <= 10) {
      // список стран (если от 2-х до 10-х стран)
      buildMarkupForManyCountries(countries);
    } else if (countries.length > 10) {
      // если стран более чем 10 стран подошедших под критерий введенный пользователем, в интерфейсе отображается нотификация о том, что необходимо сделать запрос более специфичным.
      error({
        text: 'Too many matches found. Please enter a more specific query!',
      });
    }
  });
});

// функция очистки инпута перед вводом поиска новой страны???нужно ли??? ПРОВЕРИТЬ!!!!
function clearSearchFormInput() {
  refs.searchFormInput.innerHTML = ' ';
}

// функция прорисовки шаблона для одной страны
function buildMarkupForOneCountry(countries) {
  const markupForOneCountry = templateForOneCountry(countries);
  refs.countriesList.insertAdjacentHTML('beforeend', markupForOneCountry);
}

// функиця прорисовки шаблона если список стран (если от 2-х до 10-х стран)
function buildMarkupForManyCountries(countries) {
  const markupForManyCountries = templateForManyCountries(countries);
  refs.countriesList.insertAdjacentHTML('beforeend', markupForManyCountries);
}
