// функция поиска стран
function fetchCountries(searchQuery) {
  // возвращаем из функции промис
  return (
    fetch('https://restcountries.eu/rest/v2/name/' + `${searchQuery}`)
      .then(responce => responce.json())
      .catch(apiError=>console.log(apiError))
  );
}

export default fetchCountries;
