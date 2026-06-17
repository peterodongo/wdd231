// Hamburger Menu
const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");
    hamburger.textContent = menu.classList.contains("show") ? "☰" : "X";
});


//import { schools } from "../data/schools.mjs";


const jsonURL = "data/schools.json"; 
const container = document.querySelector("#discover-cards"); // Targets the main content container

async function getMembers() {
    try {
        const response = await fetch(jsonURL);
        if (response.ok) {
            const data = await response.json();
            // Since JSON wraps everything inside a "companies" key:
            displayMembers(data.schools); 
        } else {
            console.error("Failed to fetch member data. Status:", response.status);
        }
    } catch (error) {
        console.error("Error loading JSON file:", error);
    }
}

//const container = document.querySelector("#discover-cards");
function displayMembers(schoolsList) {
    container.innerHTML = ""; // Clear out any old static placeholder text or HTML
    schoolsList.forEach(school => {

        const card = document.createElement("section");
        card.classList.add("card");

        const title = document.createElement("h2");
        title.classList.add("card-title");
        title.textContent = school.name;

        const figure = document.createElement("figure");
        figure.classList.add("card-image");

        const image = document.createElement("img");
        image.src = school.image;
        image.alt = school.name;
        image.loading = "lazy";

        figure.appendChild(image);

        const address = document.createElement("address");
        address.classList.add("card-address");
        address.textContent = school.address;

        const description = document.createElement("p");
        description.classList.add("card-description");
        description.textContent = school.description;

        const button = document.createElement("button");
        button.classList.add("card-button");
        button.textContent = "Learn More";

        const details = document.createElement("p");
        details.classList.add("card-details");
        details.textContent = school.details;
        details.hidden = true;

        //button.addEventListener("click", () => {
        //  details.hidden = !details.hidden;
        //});


        button.addEventListener("click", () => {

        if (details.hidden) {
            details.hidden = false;
            button.textContent = "Show Less";
        } else {
            details.hidden = true;
            button.textContent = "Learn More";
        }

    });

        card.append(
            title,
            figure,
            address,
            description,
            button,
            details
        );

        container.appendChild(card);
    });
}

getMembers();

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


// Current Year
// ------------------------------
const year = document.querySelector("#currentyear");
year.textContent = new Date().getFullYear();

// ------------------------------
// Last Modified Date
// ------------------------------
const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;



