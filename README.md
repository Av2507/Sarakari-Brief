```html
<!DOCTYPE html>
<html lang="hi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sarakari Brief - Aapki Seva, Hamara Sankalp</title>
    
    <!-- LIBRARIES -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script src="https://cdn.jsdelivr.net/npm/fuse.js@6.6.2"></script>
    <script type="text/javascript" src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

    <!-- ========================================== -->
    <!-- 🎨 CSS STYLES SECTION                      -->
    <!-- ========================================== -->
    <style>
        /* Base Styles */
        body {
            margin: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f0f4f8;
            color: #1e293b;
            transition: all 0.5s ease;
            overflow-x: hidden;
        }

        /* Live Background Layer */
        #bg-layer {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: -1;
            background-image: url('https://images.unsplash.com/photo-1532375810709-75b1d31665e2?q=80&w=2070&auto=format&fit=crop'); 
            background-size: cover;
            background-position: center;
            filter: blur(8px) brightness(0.8);
            transform: scale(1.1);
            transition: background-image 1s ease-in-out;
        }

        /* Glassmorphism Effects */
        .glass {
            background: rgba(255, 255, 255, 0.6);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.5);
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
        }
        .glass-dark {
            background: rgba(15, 23, 42, 0.7);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: white;
        }

        /* 3D Button Animation */
        .btn-3d {
            transition: all 0.1s ease;
            box-shadow: 0px 6px 0px #0284c7, 0px 8px 15px rgba(0,0,0,0.2);
            transform: translateY(0);
            border-radius: 1rem;
        }
        .btn-3d:active {
            transform: translateY(6px);
            box-shadow: 0px 0px 0px #0284c7, 0px 2px 5px rgba(0,0,0,0.2);
        }
        .btn-3d-green { box-shadow: 0px 6px 0px #16a34a; }
        .btn-3d-green:active { box-shadow: 0px 0px 0px #16a34a; }

        /* Vertical Scrolling Updates */
        .scrolling-wrapper {
            height: 40px;
            overflow: hidden;
            position: relative;
        }
        .scrolling-content {
            position: absolute;
            width: 100%;
            animation: scroll-vertical 15s linear infinite;
        }
        .scrolling-content:hover { animation-play-state: paused; }
        @keyframes scroll-vertical {
            0% { top: 100%; }
            100% { top: -200%; }
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: rgba(255,255,255,0.1); }
        ::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.2); border-radius: 4px; }

        /* ========================================================= */
        /* 🚫 GOOGLE TRANSLATE BANNER REMOVER CODE (As Requested)  */
        /* ========================================================= */
        .goog-te-banner-frame.skiptranslate, .goog-te-gadget-icon { display: none !important; }
        body { top: 0px !important; position: static !important; }
        .goog-tooltip { display: none !important; }
        .goog-tooltip:hover { display: none !important; }
        .goog-text-highlight { background-color: transparent !important; border: none !important; box-shadow: none !important; }
        #goog-gt-tt, .goog-te-balloon-frame { display: none !important; }
    </style>
</head>
<body class="antialiased">

    <!-- Live Animated Background -->
    <div id="bg-layer"></div>

    <!-- ========================================== -->
    <!-- 🏗️ HTML STRUCTURE SECTION                  -->
    <!-- ========================================== -->

    <!-- Disclaimer Modal -->
    <div id="disclaimer-modal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm hidden">
        <div class="glass p-6 md:p-8 rounded-2xl max-w-2xl w-11/12 text-center shadow-2xl relative">
            <h2 class="text-2xl font-bold text-red-600 mb-4"><i class="fa-solid fa-triangle-exclamation"></i> Disclaimer (Suchna ka Adhikar)</h2>
            <div class="text-left text-sm md:text-base text-gray-800 space-y-3 h-64 overflow-y-auto pr-2">
                <p>Yah website ek <strong>Private portal</strong> hai aur iska kisi bhi sarkari sansthan se koi aadhikarik sambandh nahi hai.</p>
                <p><strong>Accuracy:</strong> Hum jankari ko update rakhne ka pura prayas karte hain, fir bhi kisi bhi yojana me aavedan karne se pehle official website par jankari jarur check karen.</p>
                <p><strong>No Fees:</strong> Yah website kisi bhi sarkari seva ke liye aapse koi shulk nahi mangti hai.</p>
                <hr class="border-gray-400 my-2">
                <p class="font-semibold text-xs">Disclaimer: This website is a privately owned informational portal and is NOT affiliated with any government body. We do not charge any fees. Verify all details from official portals.</p>
            </div>
            <button onclick="acceptDisclaimer()" class="mt-6 px-8 py-3 bg-green-600 text-white font-bold rounded-xl btn-3d btn-3d-green w-full">Main Sahamat Hun (I Agree)</button>
        </div>
    </div>

    <!-- Header -->
    <header class="glass sticky top-0 z-40 px-4 py-3 shadow-md flex flex-wrap justify-between items-center">
        <!-- Logo & Name -->
        <div class="flex items-center gap-3 cursor-pointer" onclick="goHome()">
            <div id="site-logo-container" class="text-3xl text-blue-700"></div>
            <div>
                <h1 id="site-name" class="text-xl md:text-2xl font-extrabold text-blue-900 tracking-tight">Sarakari Brief</h1>
                <p id="site-slogan" class="text-xs md:text-sm font-semibold text-orange-600">Aapki Seva, Hamara Sankalp</p>
            </div>
        </div>

        <!-- Right Side Controls -->
        <div class="flex flex-col items-end gap-1 mt-2 md:mt-0">
            <div class="flex items-center gap-4 text-sm font-medium">
                <!-- Translate Dropdown -->
                <div id="google_translate_element" class="text-xs"></div>
                
                <!-- State Selector -->
                <select id="state-selector" onchange="filterByState()" class="glass px-2 py-1 rounded text-xs outline-none cursor-pointer hidden md:block font-bold text-blue-900">
                    <option value="all">All States / Sabhi Rajya</option>
                    <option value="UP">Uttar Pradesh</option>
                    <option value="RJ">Rajasthan</option>
                    <option value="MP">Madhya Pradesh</option>
                    <option value="BH">Bihar</option>
                    <option value="HR">Haryana</option>
                    <option value="DL">Delhi</option>
                    <option value="MH">Maharashtra</option>
                </select>

                <!-- Help Center Icon -->
                <div class="flex items-center gap-1 text-blue-800" title="Help Center">
                    <i class="fa-solid fa-headset text-lg cursor-pointer hover:text-blue-600"></i>
                </div>
            </div>
            
            <div class="flex items-center gap-3 text-xs md:text-sm font-semibold text-gray-800 mt-1">
                <span id="current-time"><i class="fa-regular fa-clock"></i> --:--</span>
                <span id="weather-info" class="cursor-pointer bg-white/50 px-2 py-1 rounded" onclick="requestLocation()">
                    <i class="fa-solid fa-cloud-sun"></i> Location allow karen
                </span>
            </div>
        </div>
    </header>

    <!-- Main Container -->
    <main class="container mx-auto px-4 py-6 min-h-[80vh]">
        
        <!-- Search Section -->
        <div class="max-w-2xl mx-auto mb-4 relative z-30">
            <input type="text" id="ai-search" onkeyup="performSearch()" placeholder="Search Services, Certificates, Schemes..." 
                   class="w-full px-6 py-4 rounded-full glass text-gray-800 font-bold placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner text-lg">
            
            <div id="search-results" class="absolute w-full mt-2 glass-dark rounded-xl overflow-hidden hidden shadow-2xl z-50"></div>
        </div>

        <!-- Vertical Scrolling Updates -->
        <div class="max-w-2xl mx-auto mb-8 glass rounded-lg shadow-sm border border-white/40">
            <div class="scrolling-wrapper text-sm font-bold text-red-700 text-center">
                <div class="scrolling-content" id="updates-marquee"></div>
            </div>
        </div>

        <!-- ========================================== -->
        <!-- 📱 VIEWS (Pages are handled via JS)        -->
        <!-- ========================================== -->

        <!-- 1. Home View -->
        <div id="view-home" class="view-section">
            <div id="services-grid" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"></div>
        </div>

        <!-- 2. Sub-page View (Links) -->
        <div id="view-service" class="view-section hidden">
            <button onclick="goHome()" class="mb-6 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg font-bold transition text-gray-800 shadow">
                <i class="fa-solid fa-arrow-left"></i> Wapas Jayen
            </button>
            <div class="glass p-6 md:p-10 rounded-2xl">
                <div class="flex items-center gap-4 mb-8">
                    <i id="sub-page-icon" class="text-4xl text-blue-600"></i>
                    <h2 id="sub-page-title" class="text-3xl font-bold text-gray-800">Title</h2>
                </div>
                <div id="sub-links-grid" class="grid grid-cols-1 md:grid-cols-2 gap-4"></div>
                
                <div id="api-tool-section" class="mt-8 p-4 glass-dark rounded-xl hidden">
                    <h3 id="api-tool-title" class="text-xl font-bold mb-4">Tool</h3>
                    <div id="api-tool-content"></div>
                </div>
            </div>
        </div>

        <!-- 3. Contact Form -->
        <div id="contact-section" class="mt-16 glass p-6 rounded-2xl max-w-4xl mx-auto view-section">
            <h2 class="text-2xl font-bold mb-4 text-center text-blue-900">Sampark Karen (Contact Us)</h2>
            <div class="flex flex-wrap justify-center gap-6 text-3xl mb-8">
                <a href="#" class="text-blue-600 hover:scale-110 transition"><i class="fa-brands fa-facebook"></i></a>
                <a href="#" class="text-pink-600 hover:scale-110 transition"><i class="fa-brands fa-instagram"></i></a>
                <a href="#" class="text-sky-400 hover:scale-110 transition"><i class="fa-brands fa-twitter"></i></a>
                <a href="#" class="text-red-600 hover:scale-110 transition"><i class="fa-brands fa-youtube"></i></a>
                <a href="#" class="text-green-500 hover:scale-110 transition"><i class="fa-brands fa-whatsapp"></i></a>
                <a href="#" class="text-gray-800 hover:scale-110 transition"><i class="fa-solid fa-envelope"></i></a>
            </div>
            
            <form class="max-w-md mx-auto space-y-4" onsubmit="event.preventDefault(); alert('Message sent!');">
                <input type="text" placeholder="Aapka Naam" required class="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-300 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400">
                <input type="email" placeholder="Email ID" required class="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-300 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400">
                <textarea placeholder="Aapka sandesh..." required class="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-300 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 h-24"></textarea>
                <button type="submit" class="w-full py-3 bg-blue-600 text-white font-bold rounded-lg btn-3d shadow">Bhejen</button>
            </form>
        </div>

        <!-- 4. Admin Panel View -->
        <div id="view-admin" class="view-section hidden glass p-6 rounded-2xl max-w-5xl mx-auto">
            <div class="flex justify-between items-center mb-6">
                <h2 class="text-2xl font-bold text-red-700"><i class="fa-solid fa-user-shield"></i> Admin Dashboard</h2>
                <button onclick="logoutAdmin()" class="px-4 py-2 bg-red-600 text-white rounded shadow font-bold">Logout</button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="glass-dark p-4 rounded-xl">
                    <h3 class="text-lg font-bold mb-4">Site Settings</h3>
                    <div class="space-y-3">
                        <label class="text-xs text-gray-300">Website Name</label>
                        <input type="text" id="admin-site-name" class="w-full p-2 rounded text-black font-semibold">
                        <label class="text-xs text-gray-300">Slogan</label>
                        <input type="text" id="admin-slogan" class="w-full p-2 rounded text-black font-semibold">
                        <label class="text-xs text-gray-300">Logo Icon (FontAwesome Class)</label>
                        <input type="text" id="admin-logo-icon" class="w-full p-2 rounded text-black font-semibold">
                        <button onclick="saveSiteSettings()" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full font-bold transition">Save Settings</button>
                    </div>
                </div>

                <div class="glass-dark p-4 rounded-xl">
                    <h3 class="text-lg font-bold mb-4">Scrolling Updates</h3>
                    <textarea id="admin-updates" rows="5" class="w-full p-2 rounded text-black text-sm font-semibold" placeholder="Ek update ek line me..."></textarea>
                    <button onclick="saveUpdates()" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full font-bold mt-2 transition">Save Updates</button>
                </div>
            </div>

            <div class="mt-8 glass-dark p-4 rounded-xl">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-lg font-bold">Manage Services & Links</h3>
                    <button onclick="addNewServicePrompt()" class="bg-green-500 hover:bg-green-600 px-3 py-2 rounded font-bold text-sm transition">+ Add New Service</button>
                </div>
                <div id="admin-services-list" class="space-y-2 max-h-96 overflow-y-auto pr-2 custom-scrollbar"></div>
            </div>
        </div>
    </main>

    <!-- Footer -->
    <footer class="glass mt-12 py-8 border-t border-white/50 text-center">
        <div class="container mx-auto px-4">
            <div class="flex justify-center gap-6 mb-6 font-semibold text-sm flex-wrap">
                <a href="#" class="text-blue-900 hover:underline">Privacy Policy</a>
                <a href="#" class="text-blue-900 hover:underline">Terms & Conditions</a>
                <a href="#" class="text-blue-900 hover:underline" onclick="document.getElementById('disclaimer-modal').classList.remove('hidden')">Disclaimer</a>
            </div>
            <p class="text-xs text-gray-600 mb-4">© 2026 Sarakari Brief. All rights reserved.</p>
            <button onclick="showAdminLogin()" class="text-xs font-bold text-gray-500 hover:text-red-600 transition"><i class="fa-solid fa-lock"></i> Admin Access</button>
        </div>
    </footer>

    <!-- Video Modal / How to do -->
    <div id="video-modal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm hidden">
        <div class="glass-dark p-6 rounded-2xl w-11/12 max-w-lg relative">
            <button onclick="document.getElementById('video-modal').classList.add('hidden')" class="absolute top-2 right-4 text-3xl text-red-500 hover:text-red-400 font-bold">&times;</button>
            <h3 class="text-xl font-bold text-white mb-4"><i class="fa-solid fa-circle-play text-blue-400"></i> Kaise Karen? (Guide)</h3>
            <div class="aspect-video bg-gray-900 rounded-lg flex flex-col items-center justify-center border border-gray-600 p-4 text-center">
                <i class="fa-solid fa-video text-4xl text-gray-600 mb-2"></i>
                <p class="text-gray-400 text-sm">Yahan Admin dwara jodi gayi video ya guide chalegi.</p>
            </div>
        </div>
    </div>


    <script>
        // =========================================================================
        // 📂 DATA SECTION (Ise manage karna sabse aasan hai)
        // Yahan aap apna saara data edit, add ya delete kar sakte hain.
        // =========================================================================
        
        const initialData = {
            siteSettings: {
                name: "Sarakari Brief",
                slogan: "Aapki Seva, Hamara Sankalp",
                logoIcon: "fa-building-columns"
            },
            updates: [
                "🔥 NAYA: PAN Card Aadhaar linking ki aakhiri tarikh badhi.",
                "📢 E-Shram card dharakon ke liye nayi suvidha shuru.",
                "⚠️ Voter ID Card me correction ab online bahut aasan."
            ],
            services: [
                { id: 'aadhaar', name: 'Aadhaar Card', icon: 'fa-id-card', bgWord: 'fingerprint identity india', color: 'bg-blue-100 text-blue-800', state: 'all', subLinks: [
                    { name: 'Order Plastic Aadhaar', url: 'https://myaadhaar.uidai.gov.in/' },
                    { name: 'E- Aadhaar Download', url: 'https://myaadhaar.uidai.gov.in/genricDownloadAadhaar/en' },
                    { name: 'Aadhaar Status', url: 'https://myaadhaar.uidai.gov.in/CheckAadhaarStatus/en' }
                ]},
                { id: 'pan', name: 'PAN Card', icon: 'fa-credit-card', bgWord: 'finance tax money india', color: 'bg-orange-100 text-orange-800', state: 'all', subLinks: [
                    { name: 'Naye PAN ka Aavedan', url: '#' },
                    { name: 'Correction PAN Card', url: '#' }
                ]},
                { id: 'voter', name: 'Voter Card', icon: 'fa-check-to-slot', bgWord: 'election voting democracy india', color: 'bg-green-100 text-green-800', state: 'all', subLinks: [
                    { name: 'Naya Voter Card Aavedan', url: '#' },
                    { name: 'Voter List me Naam Dekhen', url: '#' }
                ]},
                { id: 'ration', name: 'Ration Card', icon: 'fa-wheat-awn', bgWord: 'wheat grain ration india', color: 'bg-yellow-100 text-yellow-800', state: 'UP', subLinks: [
                    { name: 'Ration Card Status (UP)', url: '#' },
                    { name: 'Ration Card List', url: '#' }
                ]},
                { id: 'rates', name: 'Current Rates / Tools', icon: 'fa-chart-line', bgWord: 'stock market graph money', color: 'bg-indigo-100 text-indigo-800', state: 'all', subLinks: [
                    { name: 'Petrol/Diesel Rate (Live Demo)', url: '#tool-fuel', isTool: true },
                    { name: 'Bank IFSC Code Finder', url: '#tool-ifsc', isTool: true }
                ]}
                // Aap Admin Panel se aur bhi services add kar sakte hain
