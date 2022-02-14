// Sometimes we retrieve only a single result from an API call.
// In this case, we will work with a single object rather
// than an array of objects.

// Because we are not working with an array,
// we access the result properties directly.


// Example 1
// https://rawg.io/apidocs the API
// API Documentation https://api.rawg.io/docs/#operation/games_read
const container = document.querySelector(".container");

const url = "https://api.rawg.io/api/games/3498?key=54582cd735a340b89b17702eae51578b";

async function fetchGame() {

    try {
        const response = await fetch(url);
        const details = await response.json();
        console.log(details);

        // Name
        // Image background
        // Details description
        // Release date

        createHTML(details);

    } catch (error) {
        console.log(error);

    }

}

fetchGame();

function createHTML (gameDetails) {
    container.innerHTML = `
        <h1 class="details-title">${gameDetails.name}</h1>
        <div class="details-image" style="background-image: url('${gameDetails.background_image}')"></div>
        <p class="details-description">Description: ${gameDetails.description}</p>
        <time class="details-date">Time Released: ${gameDetails.released} </time>`
}