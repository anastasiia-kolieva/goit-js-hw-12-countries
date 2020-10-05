// функция поиска стран
function fetchCountries(searchQuery) {
  // возвращаем из функции промис
  return (
    fetch('https://restcountries.eu/rest/v2/name/' + `${searchQuery}`)
      .then(responce => responce.json())
      // .then(countries => {
      //   console.log(countries);

      //   // список стран (если от 2-х до 10-х стран)
      //   buildMarkupForManyCountries(countries);

      //   // если одна страна
      // //   buildMarkupForOneCountry(countries);

      // })
      .catch(apiError => console.log(apiError))
  );
}

export default fetchCountries;
