// Hamburger Menu
const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");
});

// Current Year
document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

// Last Modified
document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;

// Timestamp
document.querySelector("#timestamp").value =
    new Date().toISOString();


// =======================
// MODALS
// =======================

const modals = [
    {
        openBtn: "open-np",
        closeBtn: "close-np",
        modal: "np-modal"
    },
    {
        openBtn: "open-bronze",
        closeBtn: "close-bronze",
        modal: "bronze-modal"
    },
    {
        openBtn: "open-silver",
        closeBtn: "close-silver",
        modal: "silver-modal"
    },
    {
        openBtn: "open-gold",
        closeBtn: "close-gold",
        modal: "gold-modal"
    }
];

modals.forEach(item => {

    const openButton = document.getElementById(item.openBtn);
    const closeButton = document.getElementById(item.closeBtn);
    const dialog = document.getElementById(item.modal);

    openButton.addEventListener("click", (event) => {
        event.preventDefault();
        dialog.showModal();
    });

    closeButton.addEventListener("click", () => {
        dialog.close();
    });

});