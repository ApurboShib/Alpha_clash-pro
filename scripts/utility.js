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
