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

// Function to handle keyup events when the player presses a key
function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key; // Get the key pressed by the player
    console.log('player pressed', playerPressed);

    // Stop the game if the 'Escape' key is pressed
    if (playerPressed === 'Escape') {
        gameOver();
    }

    // Get the alphabet the player is expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText; // Current alphabet displayed
    const expectedAlphabet = currentAlphabet.toLowerCase(); // Ensure comparison is case-insensitive

    // Check if the player pressed the correct key
    if (playerPressed === expectedAlphabet) {
        console.log('you got a point!');

        // Update score
        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1; // Increment score
        setTextElementValueById('current-score', updatedScore); // Display updated score

        // Remove the background color from the current alphabet and start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    } else {
        console.log('Wrong key! Try again.');

        // Reduce the player's life count
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1; // Decrement life
        setTextElementValueById('current-life', updatedLife); // Display updated life count

        // End the game if lives reach zero
        if (updatedLife === 0) {
            gameOver();
        }
    }
}

// Add an event listener for the 'keyup' event
document.addEventListener('keyup', handleKeyboardKeyUpEvent);

// Function to continue the game by starting a new round
function continueGame() {
    // Generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet', alphabet);

    // Display the random alphabet on the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // Highlight the current alphabet with a background color
    setBackgroundColorById(alphabet);
}

// Function to start the game
function play() {
    // Hide the home screen and final score, and show the game area
    hideElement
}
