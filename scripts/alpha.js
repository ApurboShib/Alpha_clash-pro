// // function Play() {
// //     // console.log('play start now');

// //     // step - 1 : hide the home screen. to hide the screen add the class hidden to the home screen

// // const homeSection = document.getElementById('home-screen');
// // // console.log(homeSection);
// // homeSection.classList.add('hidden');

// //     // step - 2 : show the playground.
// //     const playgroundSction = document.getElementById('play-ground');
// //     playgroundSction.classList.remove('hidden');
// // }

// function continueGame() {
//     // generate a random number.
//     const alpha = getRandonAlphabet();
//     //console.log('Your Random Alphabet is : ', alpha);

//     // set random alphabets.

//     const currntAlphabetIs = document.getElementById('current-alphabet');
//     currntAlphabetIs.innerText = alpha;
//     addBackgroundColourById(alpha);

// }

// function Play() {
//     hideElementById('home-screen');
//     show('play-ground');
//     continueGame();
// }

// function play(){
//     // step-1: hide the home screen. to hide the screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList)

//     // show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
//     // console.log(playgroundSection.classList)
// }

function continueGame() {
    // Step 1: Generate a random alphabet
    const alphabet = getRandomAlphabet(); 
    console.log('Your random alphabet:', alphabet);

    // Set the randomly generated alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    if (currentAlphabetElement) {
        currentAlphabetElement.innerText = alphabet.toUpperCase(); // Use uppercase 
    } else {
        console.error("Element with ID 'current-alphabet' not found.");
    }

    // Set the background color based on the alphabet
    setBackgroundColorById(alphabet);
}

function Play() {
    hideElementById('home-screen'); // Hide the home screen
    showElementById('play-ground'); // Show the playground
    continueGame(); // Start the game
}

function ButtonPress(event) {
    const playerPressed = event.key.toUpperCase(); // Convert pressed key to uppercase
    console.log('Button pressed:', playerPressed);

    // Get the expected alphabet
    const currentAlphabetElement = document.getElementById('current-alphabet');
    if (!currentAlphabetElement) {
        console.error("Element with ID 'current-alphabet' not found.");
        return;
    }

    const expectedAlphabet = currentAlphabetElement.innerText;

    console.log('Pressed:', playerPressed, 'Expected:', expectedAlphabet);

    // Check if the pressed key matches the expected alphabet
    if (playerPressed === expectedAlphabet) {
        console.log('You win! Get a point!');
    } else {
        console.log('You missed! You lose a life!');
    }
}

// Capture keyboard key press
document.addEventListener('keyup', ButtonPress);

// Utility function: Generate a random alphabet
function getRandomAlphabet() {
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomIndex = Math.floor(Math.random() * alphabets.length);
    return alphabets[randomIndex];
}

// Utility function: Set background color by ID
function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.add('bg-orange-400'); // Add background color class
    } else {
        console.error(`Element with ID '${elementId}' not found.`);
    }
}
