// ------------------------------
// Hamburger Menu
// ------------------------------
const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");

    // Change icon when menu opens/closes
    hamburger.textContent = menu.classList.contains("show") ? "☰" : "X";
});

// ------------------------------
// Current Year
// ------------------------------
const year = document.querySelector("#currentyear");
year.textContent = new Date().getFullYear();

// ------------------------------
// Last Modified Date
// ------------------------------
const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;