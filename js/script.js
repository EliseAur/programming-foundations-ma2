//Programming Foundations
// Module 2
//Module Assignment 2
//Elise Aurtande

//Question 1

var pets = [
    {
        type: "cat",
        age: 5.5,
    },
    {
        type: "dog",
        age: 3.8,
    },
    {
        type: "parrot",
        age: 4.0,
    },
];

for (var i = 0; i < pets.length; i++) {
    typeOfPet = pets[i].type;

    if (pets[i].age >= 4) {
        console.log(typeOfPet);
    }
}

//Question 2
// it is a boolean value, log the value.

function isLoggedIn(loggedIn) {
    typeOfValue = typeof loggedIn;

    if (typeOfValue !== "boolean") {
        return "Please pass a boolean value in";
    }

    return loggedIn;
}

var input = isLoggedIn(true);
console.log(input);

//Question 3

var buttonChange = document.querySelector("button");
var headingTwo = document.querySelector("h2");

function changeHeadingTwo() {
    headingTwo.innerHTML = "Updated subheading";
    headingTwo.style.color = "blue";
}

buttonChange.onclick = changeHeadingTwo;
