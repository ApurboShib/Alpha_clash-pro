function hideElementById(elementId) {
    const element = document.getElementById(elementId); // Use the variable value
    if (element) {
        element.classList.add('hidden'); // Add 'hidden' class to hide the element
    } else {
        console.error(`Element with ID '${elementId}' not found.`);
    }
}

function show(elementId) {
    const element = document.getElementById(elementId); // Use the variable value
    if (element) {
        element.classList.remove('hidden'); // Remove 'hidden' class to show the element
    } else {
        console.error(`Element with ID '${elementId}' not found.`);
    }
}

function getRandonAlphabet() {
    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    // now split the string.
    const alpha = alphabets.split(' ');
    //console.log(alpha);

    // get a random index between 0 - 25;
    const randomNum = Math.random() * 25;
    const index = Math.round(randomNum);
   // console.log(index);
   const alphabewets = alphabets[index];
   //console.log(index, alphabewets);
   return alphabewets;
}