// --- All 22 Services Data ---
const services = [
    { id: "aadhar", name: "आधार कार्ड", icon: "fa-id-card", color: "#e0f2fe", theme: "theme-tech", links: [
        { title: "ऑर्डर प्लास्टिक आधार", url: "https://myaadhaar.uidai.gov.in/" },
        { title: "E- आधार डाउनलोड", url: "https://myaadhaar.uidai.gov.in/genricDownloadAadhaar/en" },
        { title: "आधार एड्रेस अपडेट", url: "https://myaadhaar.uidai.gov.in/" },
        { title: "आधार से पैन लिंक", url: "https://eportal.incometax.gov.in/iec/foservices/#/pre-login/link-aadhaar-status" },
        { title: "आधार स्टेटस", url: "https://myaadhaar.uidai.gov.in/CheckAadhaarStatus/en" }
    ]},
    { id: "pan", name: "पैन कार्ड", icon: "fa-address-card", color: "#fff7ed", theme: "theme-tech", links: [
        { title: "नया पैन कार्ड आवेदन", url: "https://onlineservices.nsdl.com/paam/endUserRegisterContact.html" },
        { title: "पैन कार्ड करेक्शन", url: "https://onlineservices.nsdl.com/" },
        { title: "पैन कार्ड डाउनलोड", url: "https://www.onlineservices.nsdl.com/paam/MPanDownloadView.html" }
    ]},
    { id: "voter", name: "वोटर कार्ड", icon: "fa-users", color: "#f5f3ff", links: [
        { title: "नया वोटर रजिस्ट्रेशन", url: "https://voters.eci.gov.in/" },
        { title: "वोटर लिस्ट में नाम देखें", url: "https://electoralsearch.eci.gov.in/" }
    ]},
    { id: "driving", name: "ड्राइविंग लाइसेंस", icon: "fa-car", color: "#f0fdf4", links: [
        { title: "लर्निंग लाइसेंस आवेदन", url: "https://sarathi.parivahan.gov.in/" },
        { title: "लाइसेंस स्टेटस", url: "https://sarathi.parivahan.gov.in/" }
    ]},
    { id: "kisan", name: "किसान", icon: "fa-tractor", color: "#ecfdf5", theme: "theme-farmer", links: [
        { title: "PM किसान स्टेटस", url: "https://pmkisan.gov.in/BeneficiaryStatus_New.aspx" },
        { title: "नया किसान रजिस्ट्रेशन", url: "https://pmkisan.gov.in/RegistrationFormNew.aspx" }
    ]},
    { id: "passport", name: "पासपोर्ट", icon: "fa-passport", color: "#eff6ff", links: [{ title: "नया पासपोर्ट अप्लाई", url: "https://www.passportindia.gov.in/" }] },
    { id: "ration", name: "राशन कार्ड", icon: "fa-bowl-rice", color: "#fff1f2", links: [{ title: "राशन कार्ड लिस्ट", url: "https://nfsa.gov.in/" }] },
    { id: "shram", name: "ई - श्रम कार्ड", icon: "fa-briefcase", color: "#fdf4ff", links: [{ title: "नया ई-श्रम कार्ड", url: "https://eshram.gov.in/" }] },
    { id: "epfo", name: "EPFO", icon: "fa-piggy-bank", color: "#f0f9ff", links: [{ title: "PF पासबुक", url: "https://passbook.epfindia.gov.in/" }] },
    { id: "pension", name: "पेंशन", icon: "fa-blind", color: "#fdf2f8", links: [{ title: "पेंशन स्टेटस", url: "https://nsap.nic.in/" }] },
    { id: "results", name: "10वीं & 12वीं रिजल्ट", icon: "fa-graduation-cap", color: "#f8fafc", links: [{ title: "सभी बोर्ड रिजल्ट", url: "https://results.gov.in/" }] },
    { id: "gas", name: "गैस", icon: "fa-fire-burner", color: "#fff7ed", links: [{ title: "उज्ज्वला योजना", url: "https://www.pmuy.gov.in/" }] },
    { id: "bis", name: "BIS Care", icon: "fa-check-double", color: "#ecfdf5", links: [{ title: "Check Quality", url: "https://www.bis.gov.in/" }] },
    { id: "post", name: "भारतीय डांक", icon: "fa-envelope", color: "#fff1f2", links: [{ title: "डांक ट्रैकिंग", url: "https://www.indiapost.gov.in/" }] },
    { id: "sanchar", name: "संचार साथी", icon: "fa-mobile-screen", color: "#f0f9ff", links: [{ title: "खोया मोबाइल ढूंढें", url: "https://www.sancharsaathi.gov.in/" }] },
    { id: "swachh", name: "स्वच्छ भारत", icon: "fa-broom", color: "#f0fdf4", links: [{ title: "शौचालय आवेदन", url: "https://sbm.gov.in/" }] },
    { id: "cert", name: "Certificates", icon: "fa-certificate", color: "#f5f3ff", links: [{ title: "जाति/आय/निवास", url: "https://edistrict.up.gov.in/" }] },
    { id: "schemes", name: "योजनाएं", icon: "fa-hand-holding-heart", color: "#fffbeb", links: [{ title: "सरकारी योजनाएं", url: "https://www.myscheme.gov.in/" }] },
    { id: "rates", name: "करेंट रेट्स", icon: "fa-chart-line", color: "#f0fdfa", links: [{ title: "मंडी भाव", url: "https://agmarknet.gov.in/" }] },
    { id: "loan", name: "लोन & क्रेडिट", icon: "fa-credit-card", color: "#fdf2f8", links: [{ title: "जन समर्थ लोन", url: "https://www.jansamarth.in/" }] },
    { id: "office", name: "नजदीकी दफ्तर", icon: "fa-map-location-dot", color: "#f1f5f9", links: [{ title: "Find Office", url: "https://maps.google.com" }] },
    { id: "helpline", name: "हेल्पलाइन नंबर", icon: "fa-phone-volume", color: "#fff1f2", links: [{ title: "Child Help: 1098", url: "tel:1098" }, { title: "Police: 112", url: "tel:112" }] }
];

// --- Core Logic ---

window.onload = () => {
    renderHome();
    updateClock();
    setInterval(updateClock, 1000);
};

function renderHome() {
    const grid = document.getElementById('home-grid');
    grid.innerHTML = services.map(s => `
        <div class="btn-3d glass-morphism p-6 flex flex-col items-center rounded-3xl cursor-pointer" 
             style="background: ${s.color}" onclick="openSubPage('${s.id}')">
            <i class="fas ${s.icon} text-3xl mb-3 text-blue-900"></i>
            <span class="text-xs font-black text-center uppercase">${s.name}</span>
        </div>
    `).join('');
}

function openSubPage(id) {
    const s = services.find(x => x.id === id);
    document.getElementById('home-grid').classList.add('hidden');
    document.getElementById('sub-page').classList.remove('hidden');
    document.getElementById('sub-page-title').innerText = s.name;
    document.body.className = s.theme || "";

    const linksBox = document.getElementById('sub-page-links');
    linksBox.innerHTML = s.links.map(l => `
        <div class="glass-morphism p-4 rounded-2xl flex justify-between items-center group hover:bg-white transition">
            <span class="font-bold text-sm">${l.title}</span>
            <div class="flex gap-2">
                <button onclick="window.open('${l.url}', '_blank')" class="btn-3d bg-blue-900 text-white px-4 py-2 rounded-xl text-xs">अभी जाएं</button>
                <button onclick="alert('How-to guide coming soon!')" class="text-[10px] bg-gray-200 px-2 rounded-lg">How to do?</button>
            </div>
        </div>
    `).join('');
}

function backToHome() {
    document.getElementById('home-grid').classList.remove('hidden');
    document.getElementById('sub-page').classList.add('hidden');
    document.body.className = "";
}

// AI Search Logic
function aiSearch(val) {
    const results = document.getElementById('search-results');
    if (val.length < 2) { results.classList.add('hidden'); return; }
    
    const matches = services.filter(s => s.name.includes(val) || s.id.includes(val.toLowerCase()));
    if (matches.length > 0) {
        results.innerHTML = matches.map(m => `
            <div class="p-4 hover:bg-blue-50 cursor-pointer flex items-center gap-3 border-b" onclick="openSubPage('${m.id}')">
                <i class="fas ${m.icon} text-blue-900"></i>
                <span class="font-bold">${m.name}</span>
            </div>
        `).join('');
        results.classList.remove('hidden');
    } else {
        results.innerHTML = `<div class="p-4 text-xs italic">कोई सेवा नहीं मिली...</div>`;
    }
}

// Admin Logic
function toggleAdmin() { document.getElementById('admin-panel').classList.toggle('hidden'); }
function loginAdmin() {
    if(document.getElementById('admin-pass').value === "2006") {
        document.getElementById('admin-login').classList.add('hidden');
        document.getElementById('admin-tools').classList.remove('hidden');
    } else { alert("गलत पासवर्ड!"); }
}

function updateClock() {
    document.getElementById('ist-clock').innerText = "IST: " + new Date().toLocaleTimeString('en-IN');
}

function closeDisclaimer() { document.getElementById('disclaimer-modal').classList.add('hidden'); }

// Initial Disclaimer Text
document.getElementById('disclaimer-text').innerText = `यह वेबसाइट एक निजी पोर्टल है और इसका सरकारी विभाग से संबंध नहीं है... (Full Text as provided in your prompt)`;
        
