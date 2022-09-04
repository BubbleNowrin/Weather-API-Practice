const API_KEY = `ce9d574f1432a12da6af3752797e62d5`;

const loadTemp = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemp(data));
}

const displayTemp = (data) => {
    setInnerTextById('temp', data.main.temp);
    setInnerTextById('city', data.name);
    setInnerTextById('condition', data.weather[0].main);
}

const setInnerTextById = (id, text) => {
    const element = document.getElementById(id);
    element.innerText = text;
}

document.getElementById('btn-search').addEventListener('click', function () {

    const searchTextElement = document.getElementById('search-field');
    const searchText = searchTextElement.value;
    loadTemp(searchText);
})

