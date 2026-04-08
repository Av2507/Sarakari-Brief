const services = [
    { id: 1, name: "आधार कार्ड", icon: "fa-id-card", color: "bg-blue-100", links: [
        { title: "ऑर्डर प्लास्टिक आधार", url: "https://myaadhaar.uidai.gov.in/" },
        { title: "E- आधार डाउनलोड", url: "https://myaadhaar.uidai.gov.in/genricDownloadAadhaar/en" }
    ]},
    { id: 2, name: "पैन कार्ड", icon: "fa-address-card", color: "bg-orange-100", links: [] },
    { id: 3, name: "किसान", icon: "fa-tractor", color: "bg-green-100", links: [] },
    // 22 services structure...
];

const disclaimerText = `
यह वेबसाइट एक निजी पोर्टल है... (Full Disclaimer text from your prompt)
`;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadServices();
    startTime();
    fetchWeather();
    showPopup();
});

function loadServices() {
    const grid = document.getElementById('service-grid');
    grid.innerHTML = services.map(s => `
        <div class="btn-3d glass-morphism ${s.color}" onclick="openSubPage(${s.id})">
            <i class="fas ${s.icon} text-3xl mb-2 text-blue-700"></i>
            <span>${s.name}</span>
        </div>
    `).join('');
}

function openSubPage(id) {
    const service = services.find(s => s.id === id);
    // Dynamic sub-page creation logic here
    alert("Opening sub-page for: " + service.name);
}

// AI Search Suggestion Logic
function showSuggestions() {
    const input = document.getElementById('ai-search').value.toLowerCase();
    const suggestionsBox = document.getElementById('suggestions');
    if (input.length < 2) {
        suggestionsBox.classList.add('hidden');
        return;
    }
    
    const matches = services.filter(s => s.name.toLowerCase().includes(input));
    if (matches.length > 0) {
        suggestionsBox.innerHTML = matches.map(m => `
            <div class="p-2 hover:bg-gray-100 cursor-pointer" onclick="openSubPage(${m.id})">
                ${m.name}
            </div>
        `).join('');
        suggestionsBox.classList.remove('hidden');
    }
}

// Weather & Time
function startTime() {
    const today = new Date();
    document.getElementById('ist-time').innerHTML = today.toLocaleTimeString('en-IN');
    setTimeout(startTime, 1000);
}

async function fetchWeather() {
    // Note: In real app, use navigator.geolocation
    try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=28.61&longitude=77.23&current_weather=true');
        const data = await response.json();
        document.getElementById('temp').innerText = data.current_weather.temperature + "°C Delhi";
    } catch (e) {
        document.getElementById('temp').innerText = "28°C";
    }
}

// Disclaimer Popup
function showPopup() {
    document.getElementById('disclaimer-modal').classList.remove('hidden');
    document.getElementById('disclaimer-text').innerText = disclaimerText;
}

function closeDisclaimer() {
    document.getElementById('disclaimer-modal').classList.add('hidden');
}

// Admin Logic
function toggleAdmin() {
    const panel = document.getElementById('admin-panel');
    panel.classList.toggle('hidden');
}

function loginAdmin() {
    const pass = document.getElementById('admin-pass').value;
    if (pass === "2006") {
        document.getElementById('admin-auth').classList.add('hidden');
        document.getElementById('admin-controls').classList.remove('hidden');
    } else {
        alert("Wrong Password");
    }
}

function saveAdminChanges() {
    const newName = document.getElementById('edit-site-name').value;
    if (newName) {
        document.getElementById('site-name').innerText = newName;
        localStorage.setItem('siteName', newName);
    }
    toggleAdmin();
                                                                             }
      
