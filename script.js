// Function to switch between Websites (Tab Control)
function openWebsite(webId, btnElement) {
    // Hide all tab content
    const contents = document.querySelectorAll('.web-content');
    contents.forEach(content => content.classList.remove('active'));

    // Remove 'active' class from all tab buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Show the selected tab and add 'active' class to the clicked button
    document.getElementById(webId).classList.add('active');
    btnElement.classList.add('active');
}

// Array of botanical quotes to rotate daily or randomly
const botanicalQuotes = [
    { text: "In a world full of roses, choose to be a wildflower of endless grace.", author: "Bloom Duo Inspiration" },
    { text: "Flowers don't worry about how they're going to bloom. They just open up and turn toward the light.", author: "Jim Carrey" },
    { text: "Where flowers bloom, so does hope and new creative possibilities.", author: "Lady Bird Johnson" },
    { text: "Two blooms grown together create a garden of mutual inspiration.", author: "Bloom Duo Philosophy" }
];

// Function to set a random or daily quote
function loadDailyQuote() {
    const quoteElement = document.getElementById('daily-quote');
    const authorElement = document.getElementById('quote-author');
    
    const randomIndex = Math.floor(Math.random() * botanicalQuotes.length);
    quoteElement.textContent = `"${botanicalQuotes[randomIndex].text}"`;
    authorElement.textContent = `— ${botanicalQuotes[randomIndex].author}`;
}

// Function to create the Floating Petals Animation dynamically
function createPetals() {
    const container = document.getElementById('petal-container');
    const petalCount = 18; // Number of floating petals

    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        
        // Random petal size
        const size = Math.random() * 16 + 10;
        petal.style.width = `${size}px`;
        petal.style.height = `${size * 1.6}px`;
        
        // Random horizontal start position
        petal.style.left = `${Math.random() * 100}%`;
        
        // Random animation duration and delay for organic flow
        const duration = Math.random() * 6 + 8;
        const delay = Math.random() * 6;
        petal.style.animationDuration = `${duration}s`;
        petal.style.animationDelay = `${delay}s`;

        container.appendChild(petal);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    createPetals();
    loadDailyQuote();

    // Background Music Player
    const music = document.getElementById('backgroundMusic');
    const musicButton = document.getElementById('musicToggle');

    musicButton.addEventListener('click', async () => {

        if (music.paused) {
            try {
                await music.play();

                musicButton.innerHTML =
                    '<i class="fa-solid fa-pause"></i><span>Pause Music</span>';

                musicButton.classList.add('playing');
                musicButton.setAttribute('aria-label', 'Pause music');

            } catch (error) {
                console.log('Music could not be played:', error);
            }

        } else {
            music.pause();

            musicButton.innerHTML =
                '<i class="fa-solid fa-play"></i><span>Play Music</span>';

            musicButton.classList.remove('playing');
            musicButton.setAttribute('aria-label', 'Play music');
        }
    });
});
