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
            // Since your JSON wraps everything inside a "companies" key:
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
