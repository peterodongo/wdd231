const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");

    if (menu.classList.contains("show")) {
        hamburger.textContent = "✖";
    } else {
        hamburger.textContent = "☰";
    }
});