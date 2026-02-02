// Key name to use in localStorage
const STORAGE_KEY = "counter-value";

// 1. Select DOM elements
const counterElement = document.getElementById("counter");
const incrementButton = document.getElementById("increment-btn");
const resetButton = document.getElementById("reset-btn");

// 2. Load initial state from localStorage (if any)
let counterValue = 0;

function loadInitialValue() {
  const storedValue = localStorage.getItem(STORAGE_KEY); // returns string or null
  if (storedValue !== null) {
    // convert to number
    counterValue = Number(storedValue);
  } else {
    counterValue = 0;
  }
}

// 3. Save current state to localStorage
function saveValue() {
  localStorage.setItem(STORAGE_KEY, String(counterValue));
}

// 4. Update UI
function render() {
  counterElement.textContent = counterValue;
}

// 5. Event listeners
incrementButton.addEventListener("click", () => {
  counterValue = counterValue + 1;
  saveValue();
  render();
});

resetButton.addEventListener("click", () => {
  counterValue = 0;
  saveValue();
  render();
});

// 6. Start app
loadInitialValue();
render();
