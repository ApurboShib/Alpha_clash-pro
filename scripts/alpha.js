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

function continueGame(){
    // step -1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet', alphabet);

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}

function Play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}

function ButtonPress () {
    console.log('Button pressed');

}
// capure keyboard key press.
document.addEventListener('keyup', ButtonPress);