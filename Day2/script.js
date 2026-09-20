//1.VARIABLES &DATA TYPES
let name = "Jesla";// String
const age = 25; // Number
let isStudent = true; 
console.log(name, age, isStudent);  

//2.ARRAYS & OBJECTS
let skills = ["HTML", "CSS", "JavaScript"]; // Array
let user = {  // Object
    name: "Jesla", city: "New York", country: "USA"
};
console.log(skills[0], user.city);
skills.push("Git"); // Adding a new skill to the array
user.role="Intern";

//3. FUNCTIONS-3 TYPES
function declarationFunc() { //declaration function
    console.log("Declaration function");
}
const expressionFunc = function() { //expression function
    console.log("Expression function");
}
const arrowFunc = () => { //arrow function
    console.log("Arrow function");
}
declarationFunc();
expressionFunc();
arrowFunc();

//4. BUILT-IN UTILITIES
//alert("Welcome to Day 2!"); // Alert
//let userInput = prompt("Enter your name:"); // Prompt
//let isConfirm=confirm("Are you a student?"); // Confirm
//console.log("User Input:", isConfirm); // Log user input  

setTimeout(() => { //setTimeout
    console.log("This message is displayed after 2 seconds");
}, 2000);

//5. DOM BASICS - Selecting and Modifying
const profileLogo = document.getElementById("profileLogo");
const modal = document.getElementById("userModal");
const closeModalBtn = document.getElementById("closeModal");
const closeBtn = document.getElementById("closeBtn");

// EVENTS - Modal Open and Close


function closeModalFunction() {
modal.classList.add("hidden");
}
if(profileLogo){
    profileLogo.addEventListener("click", () => {
        modal.classList.remove("hidden");
    });
}

if(closeModalBtn){
    closeModalBtn.addEventListener("click", closeModalFunction);
}
if(closeBtn){
    closeBtn.addEventListener("click", closeModalFunction);
}

//close when clicking outside 
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModalFunction();
    }
    });