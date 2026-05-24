const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
//const coursesContainer = document.querySelector("#courses");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");
    hamburger.textContent = menu.classList.contains("show") ? "X" : "☰";
});



// 3. Fetch Chamber Members Data from JSON
// Paths are relative to the HTML file loading the script (directory.html)
const jsonURL = "data/members.json"; 
const container = document.querySelector("#courses"); // Targets your main content container

async function getMembers() {
    try {
        const response = await fetch(jsonURL);
        if (response.ok) {
            const data = await response.json();
            // Since JSON wraps everything inside a "companies" key:
            displayMembers(data.companies); 
        } else {
            console.error("Failed to fetch member data. Status:", response.status);
        }
    } catch (error) {
        console.error("Error loading JSON file:", error);
    }
}

// 4. Generate and Inject HTML elements dynamically
function displayMembers(companiesList) {
    container.innerHTML = ""; // Clear out any old static placeholder text or HTML
    
    companiesList.forEach((company) => {
        // Create an HTML card section for each business
        const card = document.createElement("section");
        card.className = "card";
        
        // Build the inner HTML template matching your data structure
        card.innerHTML = `
            <img src="${company.image || 'images/placeholder.png'}" alt="${company['company name']} Logo" loading="lazy">
            <h3>${company['company name']}</h3>
            <p class="address">${company.address}</p>
            <p class="phone">${company.phone}</p>
            <p class="url"><a href="${company.URL}" target="_blank">Visit Website</a></p>
            <span class="membership-level badge">${company['membership level'].split('=')[1].toUpperCase()}</span>
        `;
        
        // Append the newly built card to the main view container
        container.appendChild(card);
    });
}

// 5. Grid vs List View Toggle Functionality
const gridBtn = document.querySelector("#gridBtn");
const listBtn = document.querySelector("#listBtn");

// Check if buttons exist on the page before adding event listeners to prevent errors
if (gridBtn && listBtn) {
    gridBtn.addEventListener("click", () => {
        container.classList.add("grid-view");
        container.classList.remove("list-view");
        gridBtn.classList.add("active");
        listBtn.classList.remove("active");
    });

    listBtn.addEventListener("click", () => {
        container.classList.add("list-view");
        container.classList.remove("grid-view");
        listBtn.classList.add("active");
        gridBtn.classList.remove("active");
    });
}

// 6. Initialize the script process
getMembers();




const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastModified").textContent =
    "Last Modified: " + document.lastModified;



// ---------------- WEATHER API ----------------

const apiKey = "5a4ac38717c56399ca9e5274bb1b1f15";

const lat = -1.2129;
const lon = 36.9239;

const weatherURL =
`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

const forecastURL =
`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function getWeather() {

    try {

        // CURRENT WEATHER
        const weatherResponse = await fetch(weatherURL);
        const weatherData = await weatherResponse.json();

        const weatherInfo = document.querySelector("#weather-info");

        weatherInfo.innerHTML = `
        <img 
            src="https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png"
            alt="${weatherData.weather[0].description}"
        >

        <p class="temp">
            <strong>${weatherData.main.temp.toFixed(1)}°C</strong>
        </p>

        <p class="description">
            ${weatherData.weather[0].description}
        </p>
    `;

        // FORECAST
        const forecastResponse = await fetch(forecastURL);
        const forecastData = await forecastResponse.json();

        const forecastContainer = document.querySelector("#forecast");

        forecastContainer.innerHTML = "";

        // Every 8th item = roughly 24 hours
        const dailyForecasts = forecastData.list.filter((item, index) => index % 8 === 0);

        dailyForecasts.slice(0, 3).forEach((day) => {

            const date = new Date(day.dt_txt);

            const forecastCard = document.createElement("p");

            forecastCard.innerHTML = `
                ${date.toLocaleDateString("en-US", { weekday: "long" })}:
                <strong>${day.main.temp.toFixed(1)}°C</strong>
            `;

            forecastContainer.appendChild(forecastCard);

        });

    } catch (error) {

        console.error("Weather API Error:", error);

    }
}

getWeather();


// ---------------- SPOTLIGHTS ----------------

const spotlightContainer = document.querySelector("#spotlight-container");

async function getSpotlights() {

    try {

        const response = await fetch("data/members.json");

        const data = await response.json();

        // Filter ONLY silver and gold members
        const qualifiedMembers = data.companies.filter(company =>
            company["membership level"].includes("2") ||
            company["membership level"].includes("3")
        );

        // Shuffle randomly
        const shuffled = qualifiedMembers.sort(() => 0.5 - Math.random());

        // Select first 3
        const selectedMembers = shuffled.slice(0, 3);

        displaySpotlights(selectedMembers);

    } catch (error) {

        console.error("Spotlight Error:", error);

    }
}

function displaySpotlights(members) {

    spotlightContainer.innerHTML = "";

    members.forEach(company => {

        const card = document.createElement("section");

        card.classList.add("spotlight-card");

        card.innerHTML = `
            <img src="${company.image}" alt="${company['company name']} Logo">

            <h3>${company['company name']}</h3>

            <p>${company.address}</p>

            <p>${company.phone}</p>

            <p>
                <a href="${company.URL}" target="_blank">
                    Visit Website
                </a>
            </p>

            <p class="spotlight-level">
                ${company['membership level'].split("=")[1].toUpperCase()}
            </p>
        `;

        spotlightContainer.appendChild(card);

    });
}

getSpotlights();