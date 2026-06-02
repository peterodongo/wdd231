console.log("join.js loaded");

document.getElementById("timestamp").value =
new Date().toISOString();



const npModal = document.getElementById("np-modal");
const openNp = document.getElementById("open-np");
const closeNp = document.getElementById("close-np");

openNp.addEventListener("click", () => {
    
    npModal.showModal();
});

closeNp.addEventListener("click", () => {
    npModal.close();
});




const bronzeModal = document.getElementById("bronze-modal");
const openBronze = document.getElementById("open-bronze");
const closeBronze = document.getElementById("close-bronze");

openBronze.addEventListener("click", () => {
    bronzeModal.showModal();
});

closeBronze.addEventListener("click", () => {
    bronzeModal.close();
});




const silverModal = document.getElementById("silver-modal");
const openSilver = document.getElementById("open-silver");
const closeSilver = document.getElementById("close-silver");

openSilver.addEventListener("click", () => {
    silverModal.showModal();
});

closeSilver.addEventListener("click", () => {
    silverModal.close();
});





const goldModal = document.getElementById("gold-modal");
const openGold = document.getElementById("open-gold");
const closeGold = document.getElementById("close-gold");

openGold.addEventListener("click", () => {
    goldModal.showModal();
});

closeGold.addEventListener("click", () => {
    goldModal.close();
});







