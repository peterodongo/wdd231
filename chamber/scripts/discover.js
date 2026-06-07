//port { attractions } from "../data/attractions.mjs";

//nst hamburger = document.querySelector("#hamburger");
//nst navMenu = document.querySelector("#nav-menu");

//mburger.addEventListener("click", () => {
  //navMenu.classList.toggle("show");
  //hamburger.textContent = navMenu.classList.contains("show") ? "X" : "☰";
 //}); 



/* build cards */

import { attractions } from "../data/attractions.mjs";

const container = document.querySelector("#discover-cards");

attractions.forEach(attraction => {

    const card = document.createElement("section");
    card.classList.add("card");

    const title = document.createElement("h2");
    title.classList.add("card-title");
    title.textContent = attraction.name;

    const figure = document.createElement("figure");
    figure.classList.add("card-image");

    const image = document.createElement("img");
    image.src = attraction.image;
    image.alt = attraction.name;
    image.loading = "lazy";

    figure.appendChild(image);

    const address = document.createElement("address");
    address.classList.add("card-address");
    address.textContent = attraction.address;

    const description = document.createElement("p");
    description.classList.add("card-description");
    description.textContent = attraction.description;

    const button = document.createElement("button");
    button.classList.add("card-button");
    button.textContent = "Learn More";

    card.append(
        title,
        figure,
        address,
        description,
        button
    );

    container.appendChild(card);
});


/* visitor message */
const messageBox =
    document.querySelector("#visitor-message");

const lastVisit =
    localStorage.getItem("lastVisit");

const now = Date.now();

if (!lastVisit) {

    messageBox.textContent =
        "Welcome! Let us know if you have any questions.";

} else {

    const daysBetween =
        Math.floor(
            (now - Number(lastVisit))
            / (1000 * 60 * 60 * 24)
        );

    if (daysBetween < 1) {

        messageBox.textContent =
            "Back so soon! Awesome!";

    } else {

        messageBox.textContent =
            `You last visited ${daysBetween} ${
                daysBetween === 1 ? "day" : "days"
            } ago.`;
    }
}

localStorage.setItem("lastVisit", now);