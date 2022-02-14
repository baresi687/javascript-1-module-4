const resultsContainer = document.querySelector(".results");
const url = "https://elephant-api.herokuapp.com/elephants";
const proxy = "https://noroffcors.herokuapp.com/";
const corsFix = proxy + url;

async function makeApiCall () {
    try {
        const response = await fetch(corsFix);
        const elephantData = await response.json();
        console.log(elephantData)
        resultsContainer.innerHTML = alert("success", "API call success");
    } catch (error) {
        console.log(error);
        resultsContainer.innerHTML = alert("error", "Something went wrong");
    }
}

makeApiCall().then();

/*
const url = "https://elephant-api.herokuapp.com/elephants";
const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;

const resultsContainer = document.querySelector(".results");


async function makeApiCall() {
    try {
        const response = await fetch(corsFix);

        const results = await response.json();

        console.log(results);

    } catch (error) {
        console.log(error);
        resultsContainer.innerHTML = alert("error", error);
    }
}

makeApiCall();*/