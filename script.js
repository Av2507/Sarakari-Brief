// Database Simulation
let siteData = {
    name: "Sarakari Brief",
    slogan: "आपकी सेवा, हमारा संकल्प",
    mainServices: [
        { name: "आधार कार्ड", icon: "fa-id-card", color: "#e3f2fd", links: ["https://uidai.gov.in"] },
        { name: "पैन कार्ड", icon: "fa-address-card", color: "#fff3e0", links: ["https://onlineservices.nsdl.com"] },
        { name: "वोटर कार्ड", icon: "fa-users", color: "#f3e5f5", links: ["https://voters.eci.gov.in"] },
        { name: "ड्राइविंग लाइसेंस", icon: "fa-car", color: "#e8f5e9", links: ["https://parivahan.gov.in"] },
        { name: "पीएम किसान", icon: "fa-tractor", color: "#f1f8e9", links: ["https://pmkisan.gov.in"] }
    ]
};

// Initialize
window.onload = () => {
    renderUI();
    updateClock();
    setInterval(updateClock, 1000);
    loadDisclaimer();
};

function renderUI() {
    const grid = document.getElementById('main-grid');
    grid.innerHTML = siteData.mainServices.map(srv => `
        <div class="btn-3d glass-card" style="background: ${srv.color}" onclick="window.open('${srv.links[0]}', '_blank')">
            <i class="fas ${srv.icon} text-blue-900"></i>
            <span class="text-xs font-black uppercase tracking-tighter">${srv.name}</span>
            <span class="text-[8px] mt-2 bg-white/50 px-2 rounded">Check Official Site</span>
        </div>
    `).join('');
}

// AI Search (Simple fuzzy logic simulation)
function aiSearchSuggest(val) {
    const box = document.getElementById('search-suggestions');
    if (val.length < 2) { box.classList.add('hidden'); return; }
    
    const results = siteData.mainServices.filter(s => 
        s.name.toLowerCase().includes(val.toLowerCase())
    );

    if (results.length > 0) {
        box.innerHTML = results.map(r => `
            <div class="p-3 hover:bg-blue-50 cursor-pointer text-sm font-bold border-b" onclick="window.open('${r.links[0]}')">
                <i class="fas ${r.icon} mr-2"></i> ${r.name}
            </div>
        `).join('');
        box.classList.remove('hidden');
    } else {
        box.innerHTML = `<div class="p-3 text-xs italic">कोई सेवा नहीं मिली...</div>`;
    }
}

// IST Clock
function updateClock() {
    const now = new Date();
    document.getElementById('ist-clock').innerText = "IST: " + now.toLocaleTimeString('en-IN');
}

// Admin Logic
function openAdmin() { document.getElementById('admin-modal').classList.remove('hidden'); }
function closeAdmin() { document.getElementById('admin-modal').classList.add('hidden'); }

function verifyAdmin() {
    const p = document.getElementById('admin-pass').value;
    if (p === "2006") {
        document.getElementById('admin-login-step').classList.add('hidden');
        document.getElementById('admin-dashboard').classList.remove('hidden');
    } else { alert("गलत पासवर्ड!"); }
}

function loadDisclaimer() {
    document.getElementById('disclaimer-content').innerText = `सूचना का अधिकार और जिम्मेदारी... (आपका पूरा टेक्स्ट यहाँ आएगा)`;
}

function closeDisclaimer() {
    document.getElementById('disclaimer-popup').classList.add('hidden');
}

function switchState(val) {
    if(val === 'central') return;
    alert(val.toUpperCase() + " के लिए पोर्टल लोड हो रहा है...");
    // यहाँ आप state-view को शो और main-grid को हाइड करने का लॉजिक डाल सकते हैं
         }
         
