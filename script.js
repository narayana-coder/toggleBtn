const btn = document.querySelector("#Btn");
const label = document.querySelector(".label");
const STORAGE_KEY = "toggleState";

function applyState(isActive) {
  btn.classList.toggle("active", isActive);
  document.body.classList.toggle("active-bg", isActive);
  label.textContent = isActive ? "ON" : "OFF";
}

// Load saved state on page load
const savedState = localStorage.getItem(STORAGE_KEY) === "true";
applyState(savedState);

// Toggle and save state on click
btn.addEventListener("click", () => {
  const nextState = !btn.classList.contains("active");
  applyState(nextState);
  localStorage.setItem(STORAGE_KEY, nextState);
});
