const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const courses = document.querySelector("#courses");


hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");
    hamburger.textContent = menu.classList.contains("show") ? "X" : "☰";
});



const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").textContent =
    "Last Modified: " + document.lastModified;