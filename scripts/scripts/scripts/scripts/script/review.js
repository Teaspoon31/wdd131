// localStorage review counter
// Increments every time review.html loads successfully after form submission
(function trackReviews() {
  const STORAGE_KEY = "reviewHub_reviewCount";

  // Get current count, increment, store back
  let count = parseInt(localStorage.getItem(STORAGE_KEY) || "0", 10);
  count += 1;
  localStorage.setItem(STORAGE_KEY, count);

  // Display to user
  const el = document.getElementById("reviewCount");
  if (el) {
    el.textContent = count;
  }
})();