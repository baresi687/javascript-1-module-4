// Create a variable and assign the endpoint url to it. Call it randomUserUrl

const randomUserUrl = "https://randomuser.me/api/";

// Select the wrapper div

const wrapperDiv = document.querySelector(".wrapper");

// Make the api call

fetch(randomUserUrl)
  .then(function (response) {
    return response.json() // Must use when not using arrow function
  })
  .then(function (jsonData) {
    const results = jsonData.results;
    for (let i = 0; i < results.length; i++) {
      const firstName = results[i].name.first;
      const lastName = results[i].name.last;
      const image = results[i].picture.large;

      wrapperDiv.innerHTML = `<h1>${firstName} ${lastName}</h1>
                              <img src="${image}"
                                   title="${firstName}"
                                   alt="The name of person is: ${firstName}">`
    }
  })
  .catch(function (error) {
    console.log(error)
  })