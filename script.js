// Multi-language Dictionary
const i18n = {
    hi: {
        siteName: "Sarakari Brief",
        slogan: "आपकी सेवा, हमारा संकल्प",
        searchPl: "सर्च सर्विसेज, सर्टिफिकेट्स, स्कीम्स...",
        back: "वापस",
        discTitle: "महत्वपूर्ण सूचना",
        discBtn: "सहमत हूँ"
    },
    en: {
        siteName: "Sarakari Brief",
        slogan: "Your Service, Our Commitment",
        searchPl: "Search Services, Certificates, Schemes...",
        back: "Back",
        discTitle: "Important Disclaimer",
        discBtn: "I Agree"
    }
    // Add other 12 languages here...
};

const services = [
    { id: "aadhar", name: "आधार कार्ड", keywords: ["aadhar", "uidai", "id", "card", "pvc"], icon: "fa-id-card", color: "#dbeafe", links: [
        { title: "ऑर्डर प्लास्टिक आधार", url: "https://myaadhaar.uidai.gov.in/" },
        { title: "E- आधार डाउनलोड", url: "https://myaadhaar.uidai.gov.in/genricDownloadAadhaar/en" }
    ]},
    { id: "pan", name: "पैन कार्ड", keywords: ["pan", "tax", "income", "nsdl", "uti"], icon: "fa-address-card", color: "#fee2e2", links: [
        { title: "नया पैन आवेदन", url: "https://onlineservices.nsdl.com/" }
    ]},
    { id: "voter", name: "वोटर कार्ड", keywords: ["voter", "election", "vote", "epic"], icon: "fa-users", color: "#f3e8ff", links: [] },
    // Repeat for all 22 buttons...
];

window.onload = () => {
    initApp();
};

function initApp() {
    renderHome();
    updateClock();
    setInterval(updateClock, 1000);
    loadSavedSettings();
    document.getElementById('disc-body').innerText = "यह वेबसाइट एक निजी पोर्टल है... (Full Disclaimer Text)";
}

function renderHome() {
    const grid = document.getElementById('home-grid');
    grid.innerHTML = services.map(s => `
        <div class="btn-3d glass-card p-6 flex flex-col items-center rounded-3xl cursor-pointer" 
             style="background: ${s.color}; border: 2px solid white;" onclick="openSubPage('${s.id}')">
            <i class="fas ${s.icon} text-4xl mb-3 text-blue-900 drop-shadow-sm"></i>
            <span class="text-sm font-black text-center text-blue-950">${s.name}</span>
        </div>
    `).join('');
}

// Smart Search with Keyword Matching
function smartSearch(val) {
    const box = document.getElementById('search-results');
    if (val.length < 2) { box.classList.add('hidden'); return; }
    
    const query = val.toLowerCase();
    const matches = services.filter(s => 
        s.name.toLowerCase().includes(query) || 
        s.keywords.some(k => k.includes(query))
    );

    if (matches.length > 0) {
        box.innerHTML = matches.map(m => `
            <div class="p-4 hover:bg-blue-50 cursor-pointer flex items-center gap-4 border-b" onclick="openSubPage('${m.id}')">
                <i class="fas ${m.icon} text-blue-900"></i>
                <span class="font-bold text-blue-950">${m.name}</span>
            </div>
        `).join('');
        box.classList.remove('hidden');
    } else {
        box.innerHTML = `<div class="p-4 text-xs italic">कोई रिजल्ट नहीं मिला. कृपया सही कीवर्ड लिखें.</div>`;
        box.classList.remove('hidden');
    }
}

// Language Switcher
function changeLanguage(lang) {
    const t = i18n[lang] || i18n.hi;
    document.getElementById('site-name').innerText = t.siteName;
    document.getElementById('site-slogan').innerText = t.slogan;
    document.getElementById('ai-search').placeholder = t.searchPl;
    document.getElementById('back-txt').innerText = t.back;
    document.getElementById('disc-title').innerText = t.discTitle;
    document.getElementById('disc-btn').innerText = t.discBtn;
}

// Admin Identity & Logo Management
function loginAdmin() {
    if(document.getElementById('admin-pass').value === "2006") {
        document.getElementById('admin-login').classList.add('hidden');
        document.getElementById('admin-tools').classList.remove('hidden');
    }
}

function saveAdminSettings() {
    const name = document.getElementById('edit-name').value;
    const slogan = document.getElementById('edit-slogan').value;
    const logoFile = document.getElementById('logo-upload').files[0];

    if(name) {
        document.getElementById('site-name').innerText = name;
        localStorage.setItem('customName', name);
    }
    if(slogan) {
        document.getElementById('site-slogan').innerText = slogan;
        localStorage.setItem('customSlogan', slogan);
    }

    if(logoFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const logoUrl = e.target.result;
            document.getElementById('main-logo').src = logoUrl;
            document.getElementById('main-logo').classList.remove('hidden');
            document.getElementById('logo-icon').classList.add('hidden');
            localStorage.setItem('customLogo', logoUrl);
        };
        reader.readAsDataURL(logoFile);
    }
    toggleAdmin();
}

function loadSavedSettings() {
    const n = localStorage.getItem('customName');
    const s = localStorage.getItem('customSlogan');
    const l = localStorage.getItem('customLogo');

    if(n) document.getElementById('site-name').innerText = n;
    if(s) document.getElementById('site-slogan').innerText = s;
    if(l) {
        document.getElementById('main-logo').src = l;
        document.getElementById('main-logo').classList.remove('hidden');
        document.getElementById('logo-icon').classList.add('hidden');
    }
}

function updateClock() {
    document.getElementById('ist-clock').innerText = new Date().toLocaleTimeString('en-IN');
}

function openSubPage(id) {
    const s = services.find(x => x.id === id);
    document.getElementById('home-view').classList.add('hidden');
    document.getElementById('sub-page').classList.remove('hidden');
    document.getElementById('sub-page-title').innerText = s.name;
    document.getElementById('search-results').classList.add('hidden');
    
    const linksBox = document.getElementById('sub-page-links');
    linksBox.innerHTML = s.links.map(l => `
        <div class="glass-card p-5 rounded-2xl flex justify-between items-center shadow-md">
            <span class="font-bold text-blue-900">${l.title}</span>
            <button onclick="window.open('${l.url}', '_blank')" class="bg-blue-900 text-white px-5 py-2 rounded-xl text-xs font-bold">Apply</button>
        </div>
    `).join('');
}

function backToHome() {
    document.getElementById('home-view').classList.remove('hidden');
    document.getElementById('sub-page').classList.add('hidden');
}

function toggleAdmin() { document.getElementById('admin-panel').classList.toggle('hidden'); }
function closeDisclaimer() { document.getElementById('disclaimer-modal').classList.add('hidden'); }
        
