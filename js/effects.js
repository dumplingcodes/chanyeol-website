// Get the image element
const logo = document.getElementById("logo");

// Add a mouseover event listener
logo.addEventListener('mouseover', () => {
  // Change the button's background color
  logo.style.backgroundColor = 'blue';
});

// Add a mouseout event listener
logo.addEventListener('mouseout', () => {
  // Change the button's background color back to its original color
  logo.style.backgroundColor = '';
});