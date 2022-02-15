// Filter method Example

// Import the data array to use it
import teams from "./data/teams.js";
// Example 1 Filter Method with Static Data

console.log(teams)
// Example 1 Filter Method with Static Data

// Select elements > .team-container and search

const teamContainer = document.querySelector(".team-container");
const search = document.querySelector(".search");

console.log(teamContainer, search)

// Assign the teams data to a variable

let teamsToRender = teams;
console.log(teamsToRender);

// Loop on the teams array and inject data to the html dom. In .team-container

// Wrap for loop in a function

function renderTeams(arr) {
  teamContainer.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    teamContainer.innerHTML +=
      `<div class="team">
         <h3>${arr[i].full_name}</h3>
       </div>`
  }
}

renderTeams(teamsToRender);

search.onkeyup = function (event) {

  // Get the search value
  console.log(event.target.value)
  const inputValue = event.target.value.trim().toLowerCase();
  console.log(inputValue)

  const renderedTeams = teamsToRender.filter(function (arr) {
    // Check if any of the full_name property starts with inputValue
    if (arr.full_name.toLowerCase().startsWith(inputValue)) {
      return true
    }
  });
  console.log(renderedTeams);
  console.log(inputValue);
  renderTeams(renderedTeams)

}