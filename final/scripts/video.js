const container = document.querySelector("#video-container");

async function getVideos() {
    try {
        const response = await fetch("data/videos.json");

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const videos = await response.json();

        displayVideos(videos);

    } catch (error) {
        console.error("Error loading videos:", error);

        container.innerHTML += `
            <p class="error">
                Sorry, the video data could not be loaded.
            </p>
        `;
    }
}

function displayVideos(videos) {
    videos.forEach(video => {
        const card = document.createElement("div");

        card.classList.add("video-card");

        card.innerHTML = `
            <h3>${video.title}</h3>

            <iframe
                width="300"
                height="200"
                src="${video.video}"
                title="${video.title}"
                allowfullscreen>
            </iframe>

            <p>${video.description}</p>
        `;

        container.appendChild(card);
    });
}

getVideos();