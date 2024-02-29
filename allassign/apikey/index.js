// Function to fetch weather data using Promise
function fetchWeather(city) {
    const apiKey = '8ef62cfd8f4cf148cdecfddb4c1f4645';
    const url = 'https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid={API key}'
    // Creating a new Promise
    return new Promise((resolve, reject) => {
        // Fetching data from the APInode index.js
        
        fetch(url)
            .then(response => {
                // Checking if the response is OK (status code 200)
                if (response.ok) {
                    // Parsing JSON response
                    return response.json();
                } else {
                    // Rejecting the Promise with an error message
                    reject('Unable to fetch weather data');
                }
            })
            .then(data => {
                // Resolving the Promise with the fetched data
                resolve(data);
            })
            .catch(error => {
                // Rejecting the Promise with an error message
                reject('Error fetching weather data: ' + error);
            });
    });
}

// Example usage of fetchWeather function
const city = 'New York';
fetchWeather(city)
    .then(data => {
        console.log('Weather data for', city + ':', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
