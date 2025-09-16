// Family picks data
const familyPicks = {
    "Dad": ["vince", "morgan", "adrian"],
    "Mom": ["jimmy", "keanu", "lauren"],
    "Emma": ["ashley", "ava"],
    "Lily": ["rylie", "katherine", "will"]
};

// Local image paths - Big Brother 27 CBS headshots downloaded locally
const imageUrls = {
    "vince": "images/vince.jpg",
    "morgan": "images/morgan.jpg",
    "adrian": "images/adrian.jpg",
    "jimmy": "images/jimmy.jpg",
    "keanu": "images/keanu.jpg",
    "lauren": "images/lauren.jpg",
    "ashley": "images/ashley.jpg",
    "ava": "images/ava.jpg",
    "rylie": "images/rylie.jpg",
    "katherine": "images/katherine.jpg",
    "will": "images/will.jpg"
};

// Background information links for each contestant
const backgroundLinks = {
    "vince": "https://www.realitytea.com/2025/08/08/big-brother-27-vince-panaro-age-relationship-status-job-instagram-socials/",
    "morgan": "https://screenrant.com/big-brother-season-27-houseguest-morgan-pope-surprising-career-age-instagram-bio/",
    "adrian": "https://www.primetimer.com/features/big-brother-27-adrian-rocha-wall-comp-training",
    "jimmy": "https://fandomwire.com/big-brother-season-27-who-is-jimmy-heagerty-age-career-and-nationality-revealed/",
    "keanu": "https://screenrant.com/big-brother-season-27-houseguest-keanu-soto-favorite-underrated-bb-moment-age-job-bio/",
    "lauren": "https://www.realitytea.com/2025/08/01/big-brother-27-lauren-domingue-age-relationship-status-job-instagram/",
    "ashley": "https://screenrant.com/big-brother-season-27-houseguest-ashley-hollis-surprising-bb-connection-age-job-bio/",
    "ava": "https://www.realitytea.com/2025/07/25/big-brother-27-ava-pearl-age-relationship-status-job-instagram/",
    "rylie": "https://mabumbe.com/people/rylie-jeffries-biography-age-net-worth-big-brother-career/",
    "katherine": "https://www.soapcentral.com/shows/big-brother-who-katherine-woodman-age-career-explored",
    "will": "https://bigbrother.fandom.com/wiki/Will_Williams"
};

// Eliminated contestants - add names here as they get eliminated
const eliminated = ["rylie", "katherine", "will", "jimmy", "adrian"];

// Function to check if a contestant is eliminated
function isEliminated(contestant) {
    return eliminated.includes(contestant.toLowerCase());
}

// Function to create contestant card HTML
function createContestantCard(contestant) {
    const isEliminatedClass = isEliminated(contestant) ? 'eliminated' : '';
    const imageUrl = imageUrls[contestant.toLowerCase()] || generatePlaceholder(contestant);
    const backgroundUrl = backgroundLinks[contestant.toLowerCase()] || '#';

    return `
        <div class="contestant-card ${isEliminatedClass}"
             data-contestant="${contestant}"
             onclick="openBackground('${backgroundUrl}')"
             style="cursor: pointer;">
            <img src="${imageUrl}"
                 alt="${contestant}"
                 class="contestant-image"
                 crossorigin="anonymous"
                 onerror="this.src='${generatePlaceholder(contestant)}'">
            <div class="contestant-name">${contestant}</div>
        </div>
    `;
}

// Function to generate SVG placeholder
function generatePlaceholder(name) {
    const initial = name.charAt(0).toUpperCase();
    return `data:image/svg+xml;base64,${btoa(`
        <svg width="150" height="150" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="#ddd"/>
            <circle cx="75" cy="60" r="25" fill="#999"/>
            <path d="M45 120 Q45 100 75 100 Q105 100 105 120 L105 150 L45 150 Z" fill="#999"/>
            <text x="50%" y="140" font-family="Arial, sans-serif" font-size="12" fill="#666" text-anchor="middle">${name}</text>
        </svg>
    `)}`;
}

// Function to create family card HTML
function createFamilyCard(familyMember, contestants) {
    const contestantsHTML = contestants.map(contestant =>
        createContestantCard(contestant)
    ).join('');

    return `
        <div class="family-card">
            <div class="family-name">${familyMember}</div>
            <div class="contestants-grid">
                ${contestantsHTML}
            </div>
        </div>
    `;
}

// Function to render all family picks
function renderFamilyPicks() {
    const container = document.getElementById('familyContainer');

    const familyCardsHTML = Object.entries(familyPicks).map(([familyMember, contestants]) =>
        createFamilyCard(familyMember, contestants)
    ).join('');

    container.innerHTML = familyCardsHTML;
}

// Function to add an elimination (for manual updates)
function addElimination(contestant) {
    const contestantLower = contestant.toLowerCase();
    if (!eliminated.includes(contestantLower)) {
        eliminated.push(contestantLower);
        renderFamilyPicks(); // Re-render to show red X
        console.log(`${contestant} has been eliminated!`);
    }
}

// Function to remove an elimination (in case of mistakes)
function removeElimination(contestant) {
    const contestantLower = contestant.toLowerCase();
    const index = eliminated.indexOf(contestantLower);
    if (index > -1) {
        eliminated.splice(index, 1);
        renderFamilyPicks(); // Re-render to remove red X
        console.log(`${contestant} elimination removed.`);
    }
}

// Function to open background information in new window
function openBackground(url) {
    if (url && url !== '#') {
        window.open(url, '_blank');
    }
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    renderFamilyPicks();

    // Log instructions for manual updates
    console.log('=== Big Brother 27 Family Picks - Local Images Version ===');
    console.log('Images loaded from local files (not external URLs)');
    console.log('To eliminate a contestant, use: addElimination("name")');
    console.log('To remove elimination, use: removeElimination("name")');
    console.log('Current eliminated contestants:', eliminated);
    console.log('');
    console.log('Click on any contestant photo to open their background information!');
    console.log('Background links are available for all contestants.');
    console.log('Script loaded at:', new Date().toLocaleString());
});