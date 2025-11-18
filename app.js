// app.js
// Main UI logic for Tiny Search Fixer.
// Uses metrics.js for logging metrics and storing last run.

import { logRunMetric } from "./metrics.js";

const searchInput = document.getElementById("search-input");
const createBubblesBtn = document.getElementById("create-bubbles-btn");
const bubbleContainer = document.getElementById("bubble-container");
const runSearchBtn = document.getElementById("run-search-btn");
const clearAllBtn = document.getElementById("clear-all-btn");
const statusText = document.getElementById("status-text");

let clickCount = 0;
let runNumber = 0;
let sessionStartedAt = null;

// Utility: record a click and lazily start timer
function registerClick() {
  clickCount += 1;

  if (!sessionStartedAt) {
    sessionStartedAt = performance.now();
  }
}

// Helper: create bubble element for a term
function createBubble(term) {
  const bubble = document.createElement("button");
  bubble.type = "button";
  bubble.className = "bubble bubble-active btn btn-sm";
  bubble.setAttribute("data-term", term);
  bubble.setAttribute("aria-pressed", "true");

  const labelSpan = document.createElement("span");
  labelSpan.className = "bubble-label";
  labelSpan.textContent = term;

  const removeIcon = document.createElement("span");
  removeIcon.className = "bubble-remove";
  removeIcon.innerHTML = "&times;";

  bubble.appendChild(labelSpan);
  bubble.appendChild(removeIcon);

  return bubble;
}

// Convert input text into bubbles
function buildBubblesFromInput() {
  const text = searchInput.value.trim();

  if (!text) {
    statusText.textContent = "Type something in the search box first.";
    return;
  }

  registerClick();

  // Clear previous bubbles
  bubbleContainer.innerHTML = "";

  const terms = text.split(/\s+/);

  terms.forEach((term) => {
    const bubble = createBubble(term);
    bubbleContainer.appendChild(bubble);
  });

  statusText.textContent =
    "Bubbles created. Tap to toggle active terms or click × to remove.";
}

// Click handler for bubble container (event delegation)
bubbleContainer.addEventListener("click", (event) => {
  const target = event.target;
  const bubble = target.closest(".bubble");
  if (!bubble) return;

  registerClick();

  // Remove bubble entirely when clicking the × icon
  if (target.classList.contains("bubble-remove")) {
    bubble.remove();
    statusText.textContent = "Removed a term bubble.";
    return;
  }

  // Toggle active/muted state
  const isActive = bubble.classList.contains("bubble-active");
  bubble.classList.toggle("bubble-active", !isActive);
  bubble.classList.toggle("bubble-muted", isActive);
  bubble.setAttribute("aria-pressed", String(!isActive));

  statusText.textContent = isActive
    ? "Muted a search term."
    : "Activated a search term.";
});

// Button: Create Bubbles
createBubblesBtn.addEventListener("click", () => {
  buildBubblesFromInput();
});

// Allow pressing Enter to create bubbles instead of submitting form
document
  .getElementById("search-form")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    buildBubblesFromInput();
  });

// Button: Run Search, logs metrics
runSearchBtn.addEventListener("click", () => {
  registerClick();

  const now = performance.now();

  if (!sessionStartedAt) {
    statusText.textContent = "Interact with the search before running.";
    return;
  }

  const elapsedMs = now - sessionStartedAt;
  const activeTerms = Array.from(
    bubbleContainer.querySelectorAll(".bubble-active")
  ).map((bubble) => bubble.getAttribute("data-term"));

  runNumber += 1;

  const message = logRunMetric(runNumber, clickCount, elapsedMs, activeTerms);

  statusText.textContent = `Run ${runNumber} logged. Check console for details.`;

  // Reset for next run but keep bubbles
  clickCount = 0;
  sessionStartedAt = null;
});

// Button: Clear All
clearAllBtn.addEventListener("click", () => {
  registerClick();
  bubbleContainer.innerHTML = "";
  searchInput.value = "";
  clickCount = 0;
  sessionStartedAt = null;
  statusText.textContent = "Cleared everything. Ready for a new search.";
});