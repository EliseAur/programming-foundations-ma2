//Question 1
//Loop through the array below and console log each type property if the age is at least 4.
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
//Create a function with one argument.
//Inside the function check the type of the value being passed in.
// it is a boolean value, log the value.
//If it is not a boolean value, log the message “Please pass a boolean value in”.
//Call the function and pass a value in.

function isLoggedIn(loggedIn) {
    typeOfValue = typeof loggedIn;

    if (typeOfValue !== "boolean") {
        return "Please pass a boolean value in";
    }

    return loggedIn;
}

var input = isLoggedIn(true);
console.log(input);
