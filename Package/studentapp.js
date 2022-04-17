// Select and store everything you need from the page / DOM
const userbox = document.getElementById('user-box');
const addUserBtn = document.getElementById('add-user-btn');
const filterBtn = document.getElementById('filter-btn');
const sortBtn = document.getElementById('sort-btn');
const totalBtn = document.getElementById('sum-btn');

// create application data, including one test user to start with
let appData = [
    {
        name: "Jean Louise",
        imgsrc: "img/JeanOverallsSq.jpg",
        minutes: 100
    }
];

// use async await syntax and the randomuser api to generate random 'users'
// anything that could take time needs 'await' in front of it.
// officially, anything that 'returns a promise'
// this is much neater than using .then().then().then().catch() etc
// it also just looks like normal code. #win!
async function getRandomUser() {

    console.log('getRandomUser called.');
    // ask the API for a random user and convert the response to JavaScript Object Notation (json)
    const response = await fetch('https://randomuser.me/api');
    const data = await response.json();

    // store the API data in the variable 'user' for more readable, concise code
    const user = data.results[0];
    
    // Check the console.log for what is returned from the API
    console.log(user);

    // create a 'newuser' object and populate it with data from 'user'
    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        imgsrc: user.picture.medium,
        minutes: Math.floor(Math.random()*100)
    }
    
	// add user to appData then update page / DOM
    appData.push( newUser );
    displayUsers( appData );
}

// default argument is appData (for if/when nothing is passed in. eg event listeners)
function displayUsers( receivedData = appData ) {
        
    // Clear userbox div
    userbox.innerHTML = "";
    
    // forEach allows you to cycle through the array without setting up a for loop
    receivedData.forEach( (user) => {
                
        // INSTRUCTIONS:
        // make a new, blank div HTML element  
    let newElt = document.createElement('div');   
        // apply the css class ".user" to the new div
        newElt.classList.add('user');
        // using a template literal, set the required HTML for the new div 
        newElt.innerHTML = `<img src=${user.imgsrc} alt="user">
                          <p>${user.name}</p>
                          <p>${user.minutes} minutes</p>`;
        userbox.appendChild(newElt);
        // note there is an example in the HTML currently for what this needs to look like.
        // append the new HTML element to the page / DOM in the div with ID 'user-box'

    });
}

function sortUsers( receivedData = appData ) {

    // INSTRUCTIONS:
    // on appData call the built-in .sort() function
    // call the displayUsers function to refresh the page with a sorted list of users
 
    let sortedData = appData.sort(function (a, b) {
        return b.minutes - a.minutes
      });
    displayUsers(sortedData)
}

function filterUsers( receivedData = appData ) {

    // INSTRUCTIONS:
    // ask the user for a minutes cutoff using prompt()
    // on appData call the built-in .filter() function, storing the results in a new array 'filteredData'
    // (this means appData is left intact #functionalprogramming)
    // call the displayUsers function to refresh the page with a sorted list of users
    let filterData = filterBtn.filter( (user) =>{
        return user.minutes > total 
        });
}

function calculateTotal( receivedData = appData ) {

    // INSTRUCTIONS:
    // refresh the page / DOM using displayUsers
    // on appData call the built-in .reduce() function, storing the results in a variable 'totalMinutes'
    // (this means appData is left intact #functionalprogramming)
    // make a new, blank div HTML element     
    // using a template literal, set the required HTML for the new div
    // it should look like <h3>Total minutes: <strong>XYZ minutes</strong></h3> 
    // append the new HTML element to the page / DOM in the div with ID 'user-box'
    
    let newElt = document.createElement('div');   
    <h3>Total minutes: <strong>XYZ minutes</strong></h3>

}

// Add event listeners to call necessary functions
addUserBtn.addEventListener('click', getRandomUser);
sortBtn.addEventListener('click', sortUsers);
filterBtn.addEventListener('click', filterUsers);
totalBtn.addEventListener('click', calculateTotal);
