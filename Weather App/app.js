const weatherForm = document.querySelector(".weatherForm")
const cityInput = document.querySelector(".cityInput")
const card = document.querySelector(".card")
const apiKey = "55cb39d6b2106f91a641ddbc07d1ab6b";

weatherForm.addEventListener('submit', async event => {

    event.preventDefault(); //this will prevent the page from refreshing after the form is submitted

    const city = cityInput.value;

    if(city) {
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            console.error(error);
            displayError(error);
        }

    } else {
        displayError('Please enter a city!')
    }

})

async function getWeatherData(city) {

const apiKey = "55cb39d6b2106f91a641ddbc07d1ab6b";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

const response = await fetch(apiUrl);

console.log(response);

if (!response.ok) {
    throw new Error("Could not fetch Weather data.");
}

return await response.json();

}

function displayWeatherInfo(data) {
    console.log(data);
}

function getWeatherEmoji(weatherId){

}

function displayError(message){

    const errorDisplay = document.createElement('p');
    errorDisplay.textContent = message;
    errorDisplay.classList.add('errorDisplay');

    card.textContent = ``;
    card.style.display = 'flex';
    card.appendChild(errorDisplay);
}