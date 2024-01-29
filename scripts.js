// Function to gradually fade in an element
function fadeInElement(element, duration) {
  element.style.display = "block"; // Show the element if it's hidden

  // Initial opacity
  let opacity = 0;

  // Calculate the increment step
  const increment = 1 / (duration / 100);

  // Function to gradually increase the opacity
  function fade() {
    opacity += increment;
    element.style.opacity = opacity;

    if (opacity < 1) {
      requestAnimationFrame(fade);
    }
  }

  // Start the fade-in process
  fade();
}

// Get the element to fade in
const elementToFadeIn = document.getElementById("elementToFadeIn");

// Call the fade-in function with a duration of 4000 milliseconds (4 seconds)
fadeInElement(elementToFadeIn, 2000);
In this code, we first define a function fadeInElement that gradually increases the opacity of the specified HTML element over a specified duration. It uses the requestAnimationFrame method to create a smooth animation.

Make sure to replace "elementToFadeIn" with the actual id of the element you want to fade in. You can adjust the duration (in milliseconds) to control how fast or slow the fade-in effect occurs.






