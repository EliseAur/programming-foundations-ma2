// Question 1

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
    var age = pets[i].age;
    var typeOfPet = pets[i].type;

    if (age >= 4) {
        console.log(typeOfPet);
    }
}

//Question 2

function checkForBooleanValue(argument) {
    var typeOfArgument = typeof argument;

    if (typeOfArgument !== "boolean") {
        console.log("please pass in a boolean value");
    }

    return argument;
}

var result = checkForBooleanValue(true);
console.log(result);

//Question 3

var buttonChangeSubheading = document.querySelector("button");
var subheading = document.querySelector("h2");

function updateSubheading() {
    subheading.innerHTML = "Updated subheading";
    subheading.style.color = "blue";
}

buttonChangeSubheading.onclick = updateSubheading;
