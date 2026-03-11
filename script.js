// Get elements from the DOM
const billInput = document.getElementById("billAmount");
const tipSelect = document.getElementById("tipPercentage");
const calculateBtn = document.getElementById("calculate");
const totalDisplay = document.getElementById("totalAmount");
const themeToggle = document.getElementById("themeToggle");
const form = document.querySelector(".calculator");

// Function to calculate the tip and total amount
function calculateTotal(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the bill amount and tip percentage from the inputs
  // Input values from the DOM are strings, so we convert them to numbers
  let bill = parseFloat(billInput.value);
  let tip = parseFloat(tipSelect.value);

  // Calculate the total amount
  // This adds the original bill to the tip amount (bill * tip / 100)
  let total = bill + (bill * tip / 100);

  // Display the total amount as a decimal with 2 decimal places
  totalDisplay.innerText = `Total: $${total.toFixed(2)}`; // Format number to 2 decimal places
}

// Function to toggle light/dark mode
function toggleTheme() {
  // Toggle returns true when the class was added, false when removed
  let isDarkMode = document.body.classList.toggle("dark");

  if (isDarkMode) {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i> Switch to Light Mode';
  } else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i> Switch to Dark Mode';
  }
}

// Event listeners
form.addEventListener("submit", calculateTotal);
themeToggle.addEventListener("click", toggleTheme);
