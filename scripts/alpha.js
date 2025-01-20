// function Play() {
//     // console.log('play start now');

//     // step - 1 : hide the home screen. to hide the screen add the class hidden to the home screen

// const homeSection = document.getElementById('home-screen');
// // console.log(homeSection);
// homeSection.classList.add('hidden');

//     // step - 2 : show the playground.
//     const playgroundSction = document.getElementById('play-ground');
//     playgroundSction.classList.remove('hidden');
// }


function Play() {
    hideElementById('home-screen');
    show('play-ground');
}


