const translateButton = document.getElementById("translateButton");
const translatableElements = document.querySelectorAll(".translatable");
let isTelugu = false;

translateButton.addEventListener("click", () => {
    isTelugu = !isTelugu;
    translateText();
    translateButton.textContent = isTelugu ? "English" : "తెలుగు";
});

function translateText() {
    translatableElements.forEach(element => {
        element.textContent = isTelugu
            ? element.dataset.telugu
            : element.dataset.english;
    });
}
// Add event listener to the landSelectionButton
document.getElementById("landSelectionButton").addEventListener("click", () => {
    // Redirect to land_selection.html
    window.location.href = "land_selection.html";
});
document.getElementById("Next").addEventListener("click", () => {
    // Redirect to land_selection.html
    window.location.href = "home.html";
});
  document.getElementById("seedsSelectionButton").addEventListener("click", () => {
      window.location.href = "seeds_selection.html";
    });
 



