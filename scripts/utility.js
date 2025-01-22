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

function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}

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