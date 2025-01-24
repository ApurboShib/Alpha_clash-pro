// function hideElementById(elementId) {
//     const element = document.getElementById(elementId); // Use the variable value
//     if (element) {
//         element.classList.add('hidden'); // Add 'hidden' class to hide the element
//     } else {
//         console.error(`Element with ID '${elementId}' not found.`);
//     }
// }

// function show(elementId) {
//     const element = document.getElementById(elementId); // Use the variable value
//     if (element) {
//         element.classList.remove('hidden'); // Remove 'hidden' class to show the element
//     } else {
//         console.error(`Element with ID '${elementId}' not found.`);
//     }
// }

// function addBackgroundColourById(elementId) {
//     const element = document.getElementById('elementId');
//     element.classList.add('bg-orange-400');

//     // set background colour.
    
// }

// function getRandonAlphabet() {
//     const alphabets = "abcdefghijklmnopqrstuvwxyz";
//     // now split the string.
//     const word = alphabets.split(' ');
//     //console.log(alpha);

//     // get a random index between 0 - 25;
//     const randomNum = Math.random() * 25;
//     const index = Math.round(randomNum);
//    // console.log(index);
//    const alphabewets = alphabets[index];
//    //console.log(index, alphabewets);
//    return alphabewets;
// }


// function getARandomAlphabet() {
//     // get or create an alphabet array
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
//     const alphabets = alphabetString.split('');
//     // console.log(alphabets);

//     // get a random index between 0 -25
//     const randomNumber = Math.random() * 25;
//     const index = Math.round(randomNumber);
    
//     const alphabet = alphabets[index];
//     // console.log(index, alphabet);
//     return alphabet;
// }

// function getARandomAlphabet() {
//     // get or create an alphabet array
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
//     const alphabets = alphabetString.split('');
//     // console.log(alphabets);

//     // get a random index between 0 -25
//     const randomNumber = Math.random() * 25;
//     const index = Math.round(randomNumber);
    
//     const alphabet = alphabets[index];
//     // console.log(index, alphabet);
//     return alphabet;
// }

// Function to hide an element by adding the 'hidden' class
function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

// Function to show an element by removing the 'hidden' class
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

// Function to set the background color of an element to a specific class ('bg-orange-400')
function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

// Function to remove the background color class ('bg-orange-400') from an element
function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

// Function to get the integer value from the text content of an element by its ID
function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value; // Returns the parsed integer value
}

// Function to set a new value as the text content of an element by its ID
function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value; // Updates the text content with the provided value
}

// Function to retrieve the text content of an element by its ID
function getElementTextById(elementId) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text; // Returns the text content
}

// Function to generate a random alphabet character
function getARandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'; // String of lowercase alphabets
    const alphabets = alphabetString.split(''); // Convert string into an array of alphabets

    const randomNumber = Math.random() * 25; // Generate a random number between 0 and 25
    const index = Math.round(randomNumber); // Round to the nearest whole number

    const alphabet = alphabets[index]; // Get the alphabet at the random index
    return alphabet; // Return the random alphabet
}
