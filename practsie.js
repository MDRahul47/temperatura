// website link for more information --https://openweathermap.org/current#data


const API_KEY = `67a45f8b4f9746c27cbda36bbc31feee`

const searchTemperature = () => {

    const city = document.getElementById("city-name").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;


    fetch(url)

        .then(res => res.json())
        .then(data => displayTemperature(data));
}

const setInerText = (id, Text) => {
    document.getElementById(id).innerText = Text;

}

const displayTemperature = temperature => {

    setInerText('city', temperature.name);
    setInerText('temperature', temperature.main.temp);
    setInerText('condition', temperature.weather[0].main);
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);

}