export const ngoHtml = `<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>BlueTrade | NGO Dashboard</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;family=Manrope:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-primary-fixed": "#001f23",
                        "surface": "#111415",
                        "inverse-surface": "#e1e3e4",
                        "primary": "#00dbec",
                        "secondary": "#94d3c1",
                        "tertiary-fixed": "#a3f69c",
                        "outline-variant": "#3e4949",
                        "on-tertiary-fixed": "#002204",
                        "tertiary-fixed-dim": "#88d982",
                        "tertiary": "#88d982",
                        "secondary-fixed": "#afefdd",
                        "on-secondary-container": "#86c5b3",
                        "on-primary-fixed-variant": "#004f55",
                        "outline": "#879392",
                        "on-secondary": "#00382e",
                        "tertiary-container": "#338236",
                        "surface-dim": "#111415",
                        "surface-container-high": "#272a2b",
                        "surface-container-highest": "#323536",
                        "on-primary-container": "#ebfdff",
                        "secondary-fixed-dim": "#94d3c1",
                        "surface-variant": "#323536",
                        "on-primary": "#00363b",
                        "primary-container": "#007f89",
                        "surface-container-lowest": "#0c0f10",
                        "background": "#111415",
                        "inverse-on-surface": "#2e3132",
                        "secondary-container": "#0b5345",
                        "on-tertiary-container": "#ebffe3",
                        "on-background": "#e1e3e4",
                        "inverse-primary": "#006971",
                        "on-error": "#690005",
                        "on-secondary-fixed-variant": "#065043",
                        "surface-container-low": "#191c1d",
                        "on-secondary-fixed": "#00201a",
                        "primary-fixed-dim": "#00dbec",
                        "on-surface-variant": "#bdc9c8",
                        "error": "#ffb4ab",
                        "on-surface": "#e1e3e4",
                        "primary-fixed": "#88f3ff",
                        "surface-container": "#1d2021",
                        "on-error-container": "#ffdad6",
                        "error-container": "#93000a",
                        "on-tertiary": "#003909",
                        "on-tertiary-fixed-variant": "#005312",
                        "surface-tint": "#00dbec",
                        "surface-bright": "#373a3b"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "1rem",
                        "xl": "1.5rem",
                        "full": "9999px"
                    },
                    "fontFamily": {
                        "headline": ["Space Grotesk"],
                        "body": ["Manrope"],
                        "label": ["Manrope"]
                    }
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .glass-panel {
            background: rgba(50, 53, 54, 0.4);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
        }
        body {
            font-family: 'Manrope', sans-serif;
            background-color: #111415;
            color: #e1e3e4;
        }
        .sidebar-active {
            color: #00dbec;
            font-weight: 700;
            background-color: rgba(0, 219, 236, 0.1);
            border-radius: 0.75rem;
        }
    </style>
</head>
<body class="bg-background text-on-surface">
<aside class="h-screen w-64 fixed left-0 top-0 border-r border-slate-800/30 bg-slate-950 flex flex-col h-full p-6 gap-8 z-50">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-container flex items-center justify-center">
<span class="material-symbols-outlined text-on-primary" style="font-variation-settings: 'FILL' 1;">water_drop</span>
</div>
<div>
<h1 class="font-['Space_Grotesk'] text-xl font-black text-cyan-400">BlueTrade</h1>
<p class="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">Aquatic Ledger</p>
</div>
</div>
<nav class="flex flex-col gap-2 font-['Manrope'] font-medium">
<a class="flex items-center gap-3 px-4 py-3 text-cyan-400 font-bold bg-cyan-400/10 rounded-xl transition-all duration-300" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">dashboard</span>
<span>Dashboard</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-200 transition-colors group" href="#">
<span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">eco</span>
<span>Projects</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-200 transition-colors group" href="#">
<span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">tsunami</span>
<span>Marketplace</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-200 transition-colors group" href="#">
<span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">account_balance_wallet</span>
<span>Portfolio</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-200 transition-colors group" href="#">
<span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">settings</span>
<span>Settings</span>
</a>
</nav>
<div class="mt-auto flex flex-col gap-2 pt-6 border-t border-slate-800/50">
<button class="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-3 rounded-xl font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform">
<span class="material-symbols-outlined">add_circle</span>
                Submit Project
            </button>
<a class="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-200 transition-colors group" href="#">
<span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">help</span>
<span>Support</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-200 transition-colors group" href="#">
<span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">logout</span>
<span>Sign Out</span>
</a>
</div>
</aside>
<main class="ml-64 min-h-screen relative">
<header class="w-full sticky top-0 z-40 bg-slate-950/40 backdrop-blur-xl flex justify-between items-center px-8 py-4 w-full font-['Space_Grotesk'] tracking-tight">
<div class="flex items-center bg-slate-900/50 rounded-full px-4 py-2 w-96 group focus-within:ring-1 ring-cyan-400/50 transition-all">
<span class="material-symbols-outlined text-slate-500">search</span>
<input class="bg-transparent border-none focus:ring-0 text-sm text-on-surface w-full" placeholder="Search aquatic assets..." type="text"/>
</div>
<div class="flex items-center gap-6">
<div class="flex items-center gap-2 bg-secondary-container px-4 py-1.5 rounded-full text-on-secondary-container border border-primary/20">
<div class="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
<span class="text-xs font-bold font-['Manrope']">Wallet Connected</span>
</div>
<button class="bg-slate-800/50 p-2 rounded-lg text-cyan-400 hover:bg-slate-800 transition-all active:scale-95">
<span class="material-symbols-outlined">notifications</span>
</button>
<div class="flex items-center gap-3 pl-6 border-l border-slate-800">
<div class="text-right">
<p class="text-sm font-bold text-on-surface">Ocean Foundation</p>
<p class="text-[10px] text-cyan-400">Verified NGO</p>
</div>
<img alt="User profile" class="w-10 h-10 rounded-xl object-cover border border-cyan-400/30" data-alt="Close-up portrait of a professional woman with a soft background, warm cinematic lighting, natural texture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq2_Z66rvUUQjv75ZP_L6A_5kPRyXh67b7uHn8rgxR7cyt99XLhetfcyamdmuMjQZ9xA2x7FGH9EkoYRla8z5gU1qLqT8wKCVeAaHn8hR39duNeZufOEcfkZb0NKzJ2lxFTytL3jNt7lbaNiGOzrAJvmaQ-vNY92wo9Hl85FFEU8gUo0_bU4iUQIl3KgJdQX_06_KSc9hZbWrdi8zMLIdE_5csUTAWkwELAhDgljPgMXmmjVqP_9TgsNEdygPrDwf5-bCY4BbB-SY"/>
</div>
</div>
</header>
<section class="p-8 space-y-8">
<div class="flex flex-col gap-1">
<span class="text-xs font-bold tracking-[0.2em] text-primary uppercase">Performance Overview</span>
<h2 class="text-4xl font-headline font-bold text-on-surface">NGO Impact Dashboard</h2>
</div>
<div class="grid grid-cols-1 md:grid-cols-4 gap-6">
<div class="bg-surface-container-low p-6 rounded-xl relative overflow-hidden group">
<div class="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform duration-700">
<span class="material-symbols-outlined text-9xl text-primary">account_balance_wallet</span>
</div>
<p class="text-sm text-on-surface-variant mb-2">Wallet Balance</p>
<div class="flex items-baseline gap-2">
<h3 class="text-2xl font-bold font-headline">142,580</h3>
<span class="text-primary text-sm font-bold">USDT</span>
</div>
<div class="mt-4 flex items-center gap-1 text-tertiary text-xs">
<span class="material-symbols-outlined text-xs">trending_up</span>
<span>+12.4% this month</span>
</div>
</div>
<div class="bg-surface-container-low p-6 rounded-xl relative overflow-hidden group">
<div class="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform duration-700">
<span class="material-symbols-outlined text-9xl text-tertiary">eco</span>
</div>
<p class="text-sm text-on-surface-variant mb-2">Blue Credits Earned</p>
<div class="flex items-baseline gap-2">
<h3 class="text-2xl font-bold font-headline">8,245</h3>
<span class="text-tertiary text-sm font-bold">BTC</span>
</div>
<div class="mt-4 flex items-center gap-1 text-tertiary text-xs">
<span class="material-symbols-outlined text-xs">verified</span>
<span>Verified 100%</span>
</div>
</div>
<div class="bg-surface-container-low p-6 rounded-xl relative overflow-hidden group">
<div class="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform duration-700">
<span class="material-symbols-outlined text-9xl text-primary">waves</span>
</div>
<p class="text-sm text-on-surface-variant mb-2">Carbon Sequestered</p>
<div class="flex items-baseline gap-2">
<h3 class="text-2xl font-bold font-headline">12.8k</h3>
<span class="text-primary text-sm font-bold">Tons</span>
</div>
<div class="mt-4 flex items-center gap-1 text-primary text-xs">
<span class="material-symbols-outlined text-xs">water_drop</span>
<span>Oceanic Depth +4m</span>
</div>
</div>
<div class="bg-surface-container-low p-6 rounded-xl relative overflow-hidden group">
<div class="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform duration-700">
<span class="material-symbols-outlined text-9xl text-primary-container">groups</span>
</div>
<p class="text-sm text-on-surface-variant mb-2">Projects Active</p>
<div class="flex items-baseline gap-2">
<h3 class="text-2xl font-bold font-headline">14</h3>
<span class="text-on-surface-variant text-sm font-bold">Submissions</span>
</div>
<div class="mt-4 flex items-center gap-1 text-on-surface-variant text-xs">
<span class="material-symbols-outlined text-xs">pending_actions</span>
<span>3 Pending Approval</span>
</div>
</div>
</div>
<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
<div class="lg:col-span-2 glass-panel p-8 rounded-xl relative overflow-hidden">
<div class="flex justify-between items-end mb-8">
<div>
<h3 class="text-xl font-headline font-bold mb-1">Revenue Tracking</h3>
<p class="text-sm text-on-surface-variant">NGO Revenue from Blue Credit Sales</p>
</div>
<div class="flex gap-2">
<button class="px-3 py-1 text-xs rounded-full bg-surface-container-highest text-primary">1W</button>
<button class="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary font-bold">1M</button>
<button class="px-3 py-1 text-xs rounded-full bg-surface-container-highest text-on-surface-variant">1Y</button>
</div>
</div>
<div class="h-64 flex items-end gap-2 px-4">
<div class="flex-1 bg-primary/10 rounded-t-lg h-[40%] hover:bg-primary/30 transition-all duration-500 group relative">
<div class="absolute -top-10 left-1/2 -translate-x-1/2 bg-surface-container-high px-2 py-1 rounded text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">$12k</div>
</div>
<div class="flex-1 bg-primary/10 rounded-t-lg h-[65%] hover:bg-primary/30 transition-all duration-500 group relative">
<div class="absolute -top-10 left-1/2 -translate-x-1/2 bg-surface-container-high px-2 py-1 rounded text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">$18k</div>
</div>
<div class="flex-1 bg-primary/10 rounded-t-lg h-[55%] hover:bg-primary/30 transition-all duration-500 group relative">
<div class="absolute -top-10 left-1/2 -translate-x-1/2 bg-surface-container-high px-2 py-1 rounded text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">$15k</div>
</div>
<div class="flex-1 bg-primary/10 rounded-t-lg h-[85%] hover:bg-primary/30 transition-all duration-500 group relative">
<div class="absolute -top-10 left-1/2 -translate-x-1/2 bg-surface-container-high px-2 py-1 rounded text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">$24k</div>
</div>
<div class="flex-1 bg-gradient-to-t from-primary/40 to-primary rounded-t-lg h-[100%] hover:scale-x-105 transition-all duration-500 group relative">
<div class="absolute -top-10 left-1/2 -translate-x-1/2 bg-surface-container-high px-2 py-1 rounded text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">$32k</div>
</div>
<div class="flex-1 bg-primary/10 rounded-t-lg h-[70%] hover:bg-primary/30 transition-all duration-500 group relative">
<div class="absolute -top-10 left-1/2 -translate-x-1/2 bg-surface-container-high px-2 py-1 rounded text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">$21k</div>
</div>
</div>
<div class="flex justify-between mt-4 px-4 text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">
<span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
</div>
</div>
<div class="bg-surface-container-low rounded-xl p-8 flex flex-col justify-between">
<div>
<h3 class="text-xl font-headline font-bold mb-4">Project Map</h3>
<div class="w-full h-48 rounded-xl overflow-hidden grayscale contrast-125 mb-4 border border-outline-variant/30">
<img alt="Map location" class="w-full h-full object-cover" data-alt="Abstract aerial satellite view of a coastline with deep blue water and lush green delta patterns" data-location="Indonesia Mangrove Delta" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxAbDYG7j3bCN3X-6t4TB1mgpNePDdRFphkjth0TmnPxBbX4VGXuXV0LDbzox7VL2QSI8m_DNzBUghXfWAYu3ZufVjNdJiYIqOOlhMl8_xDvSehNlCKMrDuC2EvGFsGppjiFScGBFfn_LvQG9oS5VYbkD8QxUV-7tMzFI04gf5Rn9ALRGwTAlHSCpJRUwF7Pl7vRZmMw6x-5cE5FBLY42dobIBejfupjVR-y2dx5Cuz8WuQWLX7UTPQaoVt1ejMECV3v_vK6gqcxc"/>
</div>
<div class="space-y-3">
<div class="flex justify-between items-center text-sm">
<span class="text-on-surface-variant">Primary Hub</span>
<span class="font-bold">Bali, Indonesia</span>
</div>
<div class="flex justify-between items-center text-sm">
<span class="text-on-surface-variant">Active Clusters</span>
<span class="font-bold">12 Zones</span>
</div>
</div>
</div>
<button class="w-full mt-6 bg-surface-container-highest text-on-surface py-3 rounded-xl font-bold hover:bg-surface-bright transition-colors text-sm">
                        View Detailed Map
                    </button>
</div>
</div>
<div>
<div class="flex justify-between items-center mb-6">
<h3 class="text-2xl font-headline font-bold">Project History</h3>
<button class="text-primary font-bold text-sm flex items-center gap-1">
                        View All <span class="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
<div class="bg-surface-container-low rounded-xl overflow-hidden hover:translate-y-[-4px] transition-transform duration-300">
<div class="h-48 overflow-hidden relative">
<img alt="Mangrove Restoration" class="w-full h-full object-cover" data-alt="Stunning aerial view of a vibrant green mangrove forest meeting clear turquoise tropical water" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiH0gTeU_abqxy4GblymJanT6shTIJ2r8lV5FpCSLA9pkB7sQ8OaOOM2XjfsM8pai1FJbLvbBqm8b3MAtiJ3Edox93G7D0K_Kl4bbtI6TmgyTBR0UMV9c6Ax4QCk9FLmttWmUsvBeYsMeqOmKBHSkvE5NTb9GmcVWs4WQfHf1THYFzjj5R3gu3ccehqFlA2IRbWexF8d-zfg6Hfotl4iR1adrSlr9gMfSbGz4105yTVJDePbCr9mtfjr4wFjbop2IXIaSa6-AaJEs"/>
<div class="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-tertiary flex items-center gap-1">
<span class="w-2 h-2 rounded-full bg-tertiary"></span> VERIFIED
                            </div>
</div>
<div class="p-6">
<h4 class="text-lg font-headline font-bold mb-2">Java Mangrove Delta Restoration</h4>
<p class="text-sm text-on-surface-variant mb-4 line-clamp-2">Revitalizing 500 hectares of mangrove ecosystem to protect coastal communities and restore biodiversity.</p>
<div class="flex justify-between items-center pt-4 border-t border-outline-variant/20">
<div>
<p class="text-[10px] text-on-surface-variant uppercase font-bold tracking-tighter">Credits Issued</p>
<p class="font-bold text-primary">1,240 BTC</p>
</div>
<span class="material-symbols-outlined text-on-surface-variant/40">arrow_outward</span>
</div>
</div>
</div>
<div class="bg-surface-container-low rounded-xl overflow-hidden hover:translate-y-[-4px] transition-transform duration-300">
<div class="h-48 overflow-hidden relative">
<img alt="Coral Nursery" class="w-full h-full object-cover" data-alt="Underwater view of a vibrant coral reef nursery with small diverse coral fragments growing on structured frames" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANzOnG3wNSKS5r7Ro4crjrCPulUCGhjPTSj7c3tz7ZvAwEDDRO3Uwfq51AjQbIOn81oHN5wUxEQLHzhw1hWhybjLmahXq7u-Zz1kvM_u97mcb42ISkVBSxAv_I_MdWkNc4JI92Y7TM9FpmLz1GthzxSyTjKV1Q1w_E_uqQG4uiPEHw7U8fwYyUtkJSqsI4jOgHDj_OQaD_l2AntCX2fm8ZEnFjSpezAu48LeTKLiuEdn8hAZItK_vbL1XH_gaSt71im_eiplg91_k"/>
<div class="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-primary flex items-center gap-1">
<span class="w-2 h-2 rounded-full bg-primary"></span> PENDING
                            </div>
</div>
<div class="p-6">
<h4 class="text-lg font-headline font-bold mb-2">Sulawesi Coral Nursery Phase II</h4>
<p class="text-sm text-on-surface-variant mb-4 line-clamp-2">Scaling reef restoration efforts across the Sulawesi coastline with innovative thermal-resistant coral strains.</p>
<div class="flex justify-between items-center pt-4 border-t border-outline-variant/20">
<div>
<p class="text-[10px] text-on-surface-variant uppercase font-bold tracking-tighter">Under Audit</p>
<p class="font-bold text-slate-400">TBD</p>
</div>
<span class="material-symbols-outlined text-on-surface-variant/40">schedule</span>
</div>
</div>
</div>
<div class="bg-surface-container-low rounded-xl overflow-hidden hover:translate-y-[-4px] transition-transform duration-300">
<div class="h-48 overflow-hidden relative">
<img alt="Kelp Forest" class="w-full h-full object-cover" data-alt="Sunlight filtering through tall golden kelp stalks in a deep blue oceanic environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1Icz4UsJjkcBvY37akUABfa7Tso8RkwBeHMR1IEkw4nAlXs2VyZornZT01Nn45hFPkQnRbxU9P9RH7x1mK9fu3aRW7UmwPL5GR7ASPay-haUvvb9MZsspnM-oIz8Oiy-RAUao4243PJNSkhaWkfXP69Xkr91odG3zd-uNMDQ6Mw1k5yc1Au4ZiTNcxPr5mY-EG89kRrW_6SLZ4VOT4tioYv1IBBsc3KD2O4KikmyJDRqADzb7XXArlrRzzBxxbLw3sHiu5oEWOsk"/>
<div class="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-tertiary flex items-center gap-1">
<span class="w-2 h-2 rounded-full bg-tertiary"></span> VERIFIED
                            </div>
</div>
<div class="p-6">
<h4 class="text-lg font-headline font-bold mb-2">Lombok Seagrass Seeding</h4>
<p class="text-sm text-on-surface-variant mb-4 line-clamp-2">Automated seagrass seeding program to enhance carbon sequestration capacity in coastal meadows.</p>
<div class="flex justify-between items-center pt-4 border-t border-outline-variant/20">
<div>
<p class="text-[10px] text-on-surface-variant uppercase font-bold tracking-tighter">Credits Issued</p>
<p class="font-bold text-primary">890 BTC</p>
</div>
<span class="material-symbols-outlined text-on-surface-variant/40">arrow_outward</span>
</div>
</div>
</div>
</div>
</div>
</section>
<div class="fixed bottom-8 right-8 z-50">
<button class="w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300">
<span class="material-symbols-outlined text-3xl">chat</span>
</button>
</div>
</main>
</body></html>`;

export const companyHtml = `<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>BlueTrade | Company Buyer Dashboard</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;family=Manrope:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-primary-fixed": "#001f23",
                        "surface": "#111415",
                        "inverse-surface": "#e1e3e4",
                        "primary": "#00dbec",
                        "secondary": "#94d3c1",
                        "tertiary-fixed": "#a3f69c",
                        "outline-variant": "#3e4949",
                        "on-tertiary-fixed": "#002204",
                        "tertiary-fixed-dim": "#88d982",
                        "tertiary": "#88d982",
                        "secondary-fixed": "#afefdd",
                        "on-secondary-container": "#86c5b3",
                        "on-primary-fixed-variant": "#004f55",
                        "outline": "#879392",
                        "on-secondary": "#00382e",
                        "tertiary-container": "#338236",
                        "surface-dim": "#111415",
                        "surface-container-high": "#272a2b",
                        "surface-container-highest": "#323536",
                        "on-primary-container": "#ebfdff",
                        "secondary-fixed-dim": "#94d3c1",
                        "surface-variant": "#323536",
                        "on-primary": "#00363b",
                        "primary-container": "#007f89",
                        "surface-container-lowest": "#0c0f10",
                        "background": "#111415",
                        "inverse-on-surface": "#2e3132",
                        "secondary-container": "#0b5345",
                        "on-tertiary-container": "#ebffe3",
                        "on-background": "#e1e3e4",
                        "inverse-primary": "#006971",
                        "on-error": "#690005",
                        "on-secondary-fixed-variant": "#065043",
                        "surface-container-low": "#191c1d",
                        "on-secondary-fixed": "#00201a",
                        "primary-fixed-dim": "#00dbec",
                        "on-surface-variant": "#bdc9c8",
                        "error": "#ffb4ab",
                        "on-surface": "#e1e3e4",
                        "primary-fixed": "#88f3ff",
                        "surface-container": "#1d2021",
                        "on-error-container": "#ffdad6",
                        "error-container": "#93000a",
                        "on-tertiary": "#003909",
                        "on-tertiary-fixed-variant": "#005312",
                        "surface-tint": "#00dbec",
                        "surface-bright": "#373a3b"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "1rem",
                        "xl": "1.5rem",
                        "full": "9999px"
                    },
                    "fontFamily": {
                        "headline": ["Space Grotesk"],
                        "body": ["Manrope"],
                        "label": ["Manrope"]
                    }
                },
            },
        }
    </script>
<style>
        body { font-family: 'Manrope', sans-serif; background-color: #111415; }
        .font-headline { font-family: 'Space Grotesk', sans-serif; }
        .glass-card {
            background: rgba(50, 53, 54, 0.4);
            backdrop-filter: blur(32px);
            -webkit-backdrop-filter: blur(32px);
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
    </style>
</head>
<body class="text-on-surface selection:bg-primary/30">
<!-- SideNavBar -->
<aside class="h-screen w-64 fixed left-0 top-0 border-r border-slate-800/30 bg-slate-950 bg-gradient-to-b from-slate-900 to-slate-950 flex flex-col h-full p-6 gap-8 z-50">
<div class="flex flex-col gap-2">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-container flex items-center justify-center">
<span class="material-symbols-outlined text-on-primary" data-icon="tsunami">tsunami</span>
</div>
<div class="flex flex-col">
<span class="font-['Space_Grotesk'] text-xl font-black text-cyan-400">BlueTrade</span>
<span class="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Aquatic Ledger</span>
</div>
</div>
</div>
<nav class="flex flex-col gap-2 font-['Manrope'] font-medium">
<!-- Dashboard (Active) -->
<a class="flex items-center gap-3 px-4 py-3 text-cyan-400 font-bold bg-cyan-400/10 rounded-xl transition-all duration-300" href="#">
<span class="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span>Dashboard</span>
</a>
<!-- Projects -->
<a class="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-200 hover:bg-slate-900/80 rounded-xl transition-colors group" href="#">
<span class="material-symbols-outlined group-hover:translate-x-1 transition-transform" data-icon="eco">eco</span>
<span>Projects</span>
</a>
<!-- Marketplace -->
<a class="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-200 hover:bg-slate-900/80 rounded-xl transition-colors group" href="#">
<span class="material-symbols-outlined group-hover:translate-x-1 transition-transform" data-icon="tsunami">tsunami</span>
<span>Marketplace</span>
</a>
<!-- Portfolio -->
<a class="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-200 hover:bg-slate-900/80 rounded-xl transition-colors group" href="#">
<span class="material-symbols-outlined group-hover:translate-x-1 transition-transform" data-icon="account_balance_wallet">account_balance_wallet</span>
<span>Portfolio</span>
</a>
<!-- Settings -->
<a class="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-200 hover:bg-slate-900/80 rounded-xl transition-colors group" href="#">
<span class="material-symbols-outlined group-hover:translate-x-1 transition-transform" data-icon="settings">settings</span>
<span>Settings</span>
</a>
</nav>
<div class="mt-auto flex flex-col gap-2">
<button class="w-full py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold rounded-xl active:scale-95 transition-all shadow-lg shadow-primary/10">
                New Project
            </button>
<div class="pt-6 mt-6 border-t border-slate-800/50 flex flex-col gap-1 font-['Manrope'] font-medium">
<a class="flex items-center gap-3 px-4 py-2 text-slate-500 hover:text-slate-200 transition-colors" href="#">
<span class="material-symbols-outlined text-sm" data-icon="help">help</span>
<span class="text-sm">Support</span>
</a>
<a class="flex items-center gap-3 px-4 py-2 text-slate-500 hover:text-error transition-colors" href="#">
<span class="material-symbols-outlined text-sm" data-icon="logout">logout</span>
<span class="text-sm">Sign Out</span>
</a>
</div>
</div>
</aside>
<!-- Main Content Area -->
<main class="ml-64 min-h-screen bg-background">
<!-- TopNavBar -->
<header class="w-full sticky top-0 z-40 bg-slate-950/40 backdrop-blur-xl flex justify-between items-center px-8 py-4 w-full shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
<div class="flex items-center gap-8 flex-1">
<div class="relative w-full max-w-md">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" data-icon="search">search</span>
<input class="w-full bg-slate-900/50 border-none rounded-xl py-2 pl-10 pr-4 text-sm text-slate-200 focus:ring-1 focus:ring-primary/50 font-['Manrope']" placeholder="Search marketplace or projects..." type="text"/>
</div>
</div>
<div class="flex items-center gap-6">
<div class="flex items-center gap-2 px-4 py-2 bg-secondary-container/30 rounded-full border border-primary/20">
<div class="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
<span class="text-xs font-bold text-primary font-['Manrope'] tracking-wider">0x82...F491</span>
</div>
<div class="flex items-center gap-3">
<button class="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 rounded-lg transition-all duration-300">
<span class="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button class="px-5 py-2 bg-slate-800/50 text-cyan-400 text-sm font-bold rounded-lg border border-cyan-400/20 hover:bg-slate-800 transition-all">
                        Connect Wallet
                    </button>
<div class="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden border border-slate-700/50">
<img alt="User profile" class="w-full h-full object-cover" data-alt="professional portrait of a high-level corporate executive with a neutral background and warm lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSGqXLnZmokHJXF5uo9PR04LJkI3lujQotNJpidSeDF7xmUWHkcYAMrF9DFXzDGXPpu-02sai2AyzciDyBu-XxsSCoeXn7fXtVpQZyuc4l3rC3u1wvPq36aXkev6Z864g2frFExcu2mzNcaL5N92IV0whtM2zB33n4VVWlYWgJ-EsG0I5FT3iKOoKL2EgdgZ59Ya0QQwayu5xtPO83yWSYANF9I0v0o5CH6ve9SPwYubPgZ8Vz_1Q4jU5pbjgMukudDi9BJt3vxS4"/>
</div>
</div>
</div>
</header>
<!-- Page Content -->
<div class="p-8 space-y-8">
<!-- Hero Grid: Balance & Impact -->
<section class="grid grid-cols-1 lg:grid-cols-12 gap-6">
<!-- Wallet Balance Card -->
<div class="lg:col-span-4 glass-card p-8 rounded-xl flex flex-col justify-between overflow-hidden relative group">
<div class="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-700">
<span class="material-symbols-outlined text-9xl text-primary" data-icon="account_balance_wallet">account_balance_wallet</span>
</div>
<div>
<span class="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-2">Wallet Balance</span>
<h2 class="text-4xl font-headline font-bold text-on-surface">14,250.00 <span class="text-primary">BCT</span></h2>
<p class="text-on-surface-variant text-sm mt-1">≈ $42,750.00 USD</p>
</div>
<div class="mt-8 flex gap-3">
<button class="flex-1 py-3 bg-primary text-on-primary font-bold rounded-xl text-sm active:scale-95 transition-all">Buy More</button>
<button class="flex-1 py-3 bg-surface-container-highest text-on-surface font-bold rounded-xl text-sm hover:bg-surface-bright transition-all">Withdraw</button>
</div>
</div>
<!-- Sustainability Score Card -->
<div class="lg:col-span-8 glass-card rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center relative overflow-hidden">
<div class="flex-1 space-y-4">
<div>
<span class="text-tertiary text-xs font-bold uppercase tracking-[0.2em] block mb-2">Sustainability Score</span>
<h2 class="text-4xl font-headline font-bold text-on-surface">A+ <span class="text-tertiary text-lg font-body ml-2">98/100</span></h2>
</div>
<p class="text-on-surface-variant text-sm leading-relaxed max-w-sm">
                            Your company has offset 1,240 metric tons of CO2 this quarter. You are in the top 3% of buyers in the BlueTrade ecosystem.
                        </p>
<div class="pt-2">
<button class="text-tertiary text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
                                View Full ESG Report <span class="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
<div class="w-full md:w-64 h-64 relative flex items-center justify-center">
<!-- Impact Visualization Mockup -->
<div class="absolute inset-0 border-[12px] border-surface-container-high rounded-full"></div>
<div class="absolute inset-0 border-[12px] border-tertiary rounded-full border-r-transparent border-b-transparent -rotate-45"></div>
<div class="flex flex-col items-center">
<span class="text-4xl font-headline font-bold text-tertiary">1.2k</span>
<span class="text-[10px] text-on-surface-variant font-bold uppercase">Tons Saved</span>
</div>
<!-- Mangrove pattern decorative -->
<div class="absolute -bottom-10 -right-10 opacity-10 pointer-events-none">
<span class="material-symbols-outlined text-[180px] text-tertiary" data-icon="eco">eco</span>
</div>
</div>
</div>
</section>
<!-- Marketplace Section -->
<section class="space-y-6">
<div class="flex justify-between items-end">
<div>
<span class="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-2">Featured Projects</span>
<h3 class="text-3xl font-headline font-bold text-on-surface">Carbon Marketplace</h3>
</div>
<div class="flex gap-2">
<button class="p-2 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-primary transition-all">
<span class="material-symbols-outlined" data-icon="filter_list">filter_list</span>
</button>
<button class="px-4 py-2 rounded-lg bg-surface-container-high text-sm font-bold text-on-surface-variant hover:text-primary transition-all">
                            View All
                        </button>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
<!-- Marketplace Item 1 -->
<div class="bg-surface-container-low rounded-xl overflow-hidden group cursor-pointer">
<div class="h-48 relative overflow-hidden">
<img alt="Mangrove Forest" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="vibrant tropical mangrove forest with deep green foliage and calm turquoise water reflecting the sun" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqqE8nHBw_A3KnjbvPwx9Wo-jBwAq8iW9kX4HqoXx_DINJWAbz1FI--yIMS07h59jl3Z8gKCxcHP35nch2GuRcnpMyfjgaYru16_v7IkjErgBdc9tkDER1HGbOkkfGMuyIerg7ctYFTU_oWXRIlY00IWTNe41FW6PpDFXoSKLaO1dY6JFCeuJRD9dqZNO9mj437kqpEu-hho8PaPw_if5zHkpcs28Lnc1vRfISl0mMhHOFrK1Aza2RDH-YDi-mY09LxuKg8bNEqwg"/>
<div class="absolute top-4 left-4 px-3 py-1 bg-slate-900/80 backdrop-blur-md rounded-full border border-white/10 flex items-center gap-2">
<span class="material-symbols-outlined text-tertiary text-xs" data-icon="verified" style="font-variation-settings: 'FILL' 1;">verified</span>
<span class="text-[10px] font-bold text-on-surface uppercase tracking-wider">Gold Standard</span>
</div>
</div>
<div class="p-6 space-y-4">
<div class="flex justify-between items-start">
<div>
<h4 class="text-xl font-headline font-bold text-on-surface">Amazon Blue Canopy</h4>
<p class="text-xs text-on-surface-variant">Reforestation • Brazil</p>
</div>
<div class="text-right">
<span class="text-primary font-bold">$12.50</span>
<span class="text-[10px] text-on-surface-variant block uppercase font-bold">Per Credit</span>
</div>
</div>
<div class="grid grid-cols-2 gap-4 py-4 border-y border-white/5">
<div>
<span class="text-[10px] text-on-surface-variant font-bold uppercase block mb-1">Available</span>
<span class="text-sm font-bold">14,200 tCO2e</span>
</div>
<div>
<span class="text-[10px] text-on-surface-variant font-bold uppercase block mb-1">Vintage</span>
<span class="text-sm font-bold">2023 - 2024</span>
</div>
</div>
<button class="w-full py-3 bg-surface-container-highest text-on-surface font-bold rounded-xl text-sm group-hover:bg-primary group-hover:text-on-primary transition-all active:scale-95">
                                Purchase Credits
                            </button>
</div>
</div>
<!-- Marketplace Item 2 -->
<div class="bg-surface-container-low rounded-xl overflow-hidden group cursor-pointer">
<div class="h-48 relative overflow-hidden">
<img alt="Wind Farm" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="modern wind turbines on a rolling green hill under a clear blue sky with soft morning light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA19-sLkWZnAJ0H-UOn-XYhTAS-grnXc_Qb-PWqXj4MbVHIPvjbGtTcHjIxCjFZks-LjXq1TDKjAOzkuOzskm2t9_UtlbEp5T51viwERsXaFnPG3yNuKlDxw7mSuE-7NBr0XL0HhOS5wGEOWjDuFHWi2Zt_Sdx6fNSVwaFF1PeBKuTo73qPfbCXxa4aW0DXR-eNpRONgtb7HoifiJb9TUNOFoJdxYAlbRwaUonsaoCD3FoB-tDXnpFuo5WJPxwP9Xgey_Mopy8IY0c"/>
<div class="absolute top-4 left-4 px-3 py-1 bg-slate-900/80 backdrop-blur-md rounded-full border border-white/10 flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-xs" data-icon="verified" style="font-variation-settings: 'FILL' 1;">verified</span>
<span class="text-[10px] font-bold text-on-surface uppercase tracking-wider">Verra Certified</span>
</div>
</div>
<div class="p-6 space-y-4">
<div class="flex justify-between items-start">
<div>
<h4 class="text-xl font-headline font-bold text-on-surface">Pacific Wind Kinetic</h4>
<p class="text-xs text-on-surface-variant">Renewable • Vietnam</p>
</div>
<div class="text-right">
<span class="text-primary font-bold">$9.75</span>
<span class="text-[10px] text-on-surface-variant block uppercase font-bold">Per Credit</span>
</div>
</div>
<div class="grid grid-cols-2 gap-4 py-4 border-y border-white/5">
<div>
<span class="text-[10px] text-on-surface-variant font-bold uppercase block mb-1">Available</span>
<span class="text-sm font-bold">85,000 tCO2e</span>
</div>
<div>
<span class="text-[10px] text-on-surface-variant font-bold uppercase block mb-1">Vintage</span>
<span class="text-sm font-bold">2024</span>
</div>
</div>
<button class="w-full py-3 bg-surface-container-highest text-on-surface font-bold rounded-xl text-sm group-hover:bg-primary group-hover:text-on-primary transition-all active:scale-95">
                                Purchase Credits
                            </button>
</div>
</div>
<!-- Marketplace Item 3 -->
<div class="bg-surface-container-low rounded-xl overflow-hidden group cursor-pointer">
<div class="h-48 relative overflow-hidden">
<img alt="Peatland Preservation" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="misty peatland wetland at dawn with high contrast between deep dark earth and bright morning mist" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrIo5Z-YDKhnnQVz_BGPZuAb7T-_NxQBpaqTMQYRJQafay03KJ0L5zZNefYN5JbPPH02vvulFy8aATTksLwY92z1rH-1jVjkmh70S9cQYLSmSb2Jb-7CuHC6N-0y8Do5OUXbvrjp6molca47-_pYQzboAHKtlEB8wF20q4AZQeunqojiND71XR3xu31sMaGOGHgYZn1eteaWXy1_RJCqaIU7v3dTERw7LTiF0_nZr4_GUW4edi94l0_S2aSqYQFMi_l_AALoc4j7g"/>
<div class="absolute top-4 left-4 px-3 py-1 bg-slate-900/80 backdrop-blur-md rounded-full border border-white/10 flex items-center gap-2">
<span class="material-symbols-outlined text-tertiary text-xs" data-icon="verified" style="font-variation-settings: 'FILL' 1;">verified</span>
<span class="text-[10px] font-bold text-on-surface uppercase tracking-wider">Plan Vivo</span>
</div>
</div>
<div class="p-6 space-y-4">
<div class="flex justify-between items-start">
<div>
<h4 class="text-xl font-headline font-bold text-on-surface">Sumatra Peat Guard</h4>
<p class="text-xs text-on-surface-variant">Wetland • Indonesia</p>
</div>
<div class="text-right">
<span class="text-primary font-bold">$18.20</span>
<span class="text-[10px] text-on-surface-variant block uppercase font-bold">Per Credit</span>
</div>
</div>
<div class="grid grid-cols-2 gap-4 py-4 border-y border-white/5">
<div>
<span class="text-[10px] text-on-surface-variant font-bold uppercase block mb-1">Available</span>
<span class="text-sm font-bold">4,120 tCO2e</span>
</div>
<div>
<span class="text-[10px] text-on-surface-variant font-bold uppercase block mb-1">Vintage</span>
<span class="text-sm font-bold">2022 - 2023</span>
</div>
</div>
<button class="w-full py-3 bg-surface-container-highest text-on-surface font-bold rounded-xl text-sm group-hover:bg-primary group-hover:text-on-primary transition-all active:scale-95">
                                Purchase Credits
                            </button>
</div>
</div>
</div>
</section>
<!-- Bottom Section: History & Analysis -->
<section class="grid grid-cols-1 lg:grid-cols-3 gap-8">
<!-- Recent Purchase History -->
<div class="lg:col-span-2 space-y-6">
<div>
<h3 class="text-2xl font-headline font-bold text-on-surface">Transaction History</h3>
</div>
<div class="bg-surface-container-low rounded-xl overflow-hidden">
<table class="w-full text-left">
<thead class="bg-surface-container-highest/30">
<tr>
<th class="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Project</th>
<th class="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Credits</th>
<th class="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Total Cost</th>
<th class="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest text-right">Date</th>
</tr>
</thead>
<tbody class="divide-y divide-white/5">
<tr class="hover:bg-surface-container-high transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center">
<span class="material-symbols-outlined text-tertiary text-sm" data-icon="forest">forest</span>
</div>
<span class="text-sm font-bold">Amazon Blue Canopy</span>
</div>
</td>
<td class="px-6 py-4 text-sm">450 tCO2e</td>
<td class="px-6 py-4 text-sm font-bold">$5,625.00</td>
<td class="px-6 py-4 text-sm text-on-surface-variant text-right">Oct 14, 2023</td>
</tr>
<tr class="hover:bg-surface-container-high transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center">
<span class="material-symbols-outlined text-primary text-sm" data-icon="air">air</span>
</div>
<span class="text-sm font-bold">Pacific Wind Kinetic</span>
</div>
</td>
<td class="px-6 py-4 text-sm">1,200 tCO2e</td>
<td class="px-6 py-4 text-sm font-bold">$11,700.00</td>
<td class="px-6 py-4 text-sm text-on-surface-variant text-right">Sep 28, 2023</td>
</tr>
<tr class="hover:bg-surface-container-high transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center">
<span class="material-symbols-outlined text-secondary text-sm" data-icon="waves">waves</span>
</div>
<span class="text-sm font-bold">Blue Mangrove V2</span>
</div>
</td>
<td class="px-6 py-4 text-sm">300 tCO2e</td>
<td class="px-6 py-4 text-sm font-bold">$4,800.00</td>
<td class="px-6 py-4 text-sm text-on-surface-variant text-right">Sep 05, 2023</td>
</tr>
</tbody>
</table>
</div>
</div>
<!-- Monthly Activity Chart / Summary -->
<div class="space-y-6">
<h3 class="text-2xl font-headline font-bold text-on-surface">Quick Actions</h3>
<div class="grid grid-cols-1 gap-4">
<div class="glass-card p-6 rounded-xl border border-white/5 flex items-center gap-4 hover:bg-surface-container-high transition-all cursor-pointer">
<div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
<span class="material-symbols-outlined text-primary" data-icon="file_download">file_download</span>
</div>
<div>
<h5 class="font-bold text-sm">Annual Tax Statement</h5>
<p class="text-xs text-on-surface-variant">Generate PDF for FY 2023</p>
</div>
</div>
<div class="glass-card p-6 rounded-xl border border-white/5 flex items-center gap-4 hover:bg-surface-container-high transition-all cursor-pointer">
<div class="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center">
<span class="material-symbols-outlined text-tertiary" data-icon="share">share</span>
</div>
<div>
<h5 class="font-bold text-sm">Share Impact Stats</h5>
<p class="text-xs text-on-surface-variant">Social Media &amp; PR Kit</p>
</div>
</div>
<div class="glass-card p-6 rounded-xl border border-white/5 flex items-center gap-4 hover:bg-surface-container-high transition-all cursor-pointer">
<div class="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
<span class="material-symbols-outlined text-secondary" data-icon="recurring_element">repeat</span>
</div>
<div>
<h5 class="font-bold text-sm">Auto-Offset Rules</h5>
<p class="text-xs text-on-surface-variant">Manage monthly allocations</p>
</div>
</div>
</div>
</div>
</section>
</div>
</main>
<!-- Contextual FAB (Hidden on this view per rule, but ready if needed) -->
<!-- Suppression logic applied for Dashboard/Portfolio -->
</body></html>`;

export const analyticsHtml = `<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>BlueTrade Admin Analytics</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;family=Manrope:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-primary-fixed": "#001f23",
                        "surface": "#111415",
                        "inverse-surface": "#e1e3e4",
                        "primary": "#00dbec",
                        "secondary": "#94d3c1",
                        "tertiary-fixed": "#a3f69c",
                        "outline-variant": "#3e4949",
                        "on-tertiary-fixed": "#002204",
                        "tertiary-fixed-dim": "#88d982",
                        "tertiary": "#88d982",
                        "secondary-fixed": "#afefdd",
                        "on-secondary-container": "#86c5b3",
                        "on-primary-fixed-variant": "#004f55",
                        "outline": "#879392",
                        "on-secondary": "#00382e",
                        "tertiary-container": "#338236",
                        "surface-dim": "#111415",
                        "surface-container-high": "#272a2b",
                        "surface-container-highest": "#323536",
                        "on-primary-container": "#ebfdff",
                        "secondary-fixed-dim": "#94d3c1",
                        "surface-variant": "#323536",
                        "on-primary": "#00363b",
                        "primary-container": "#007f89",
                        "surface-container-lowest": "#0c0f10",
                        "background": "#111415",
                        "inverse-on-surface": "#2e3132",
                        "secondary-container": "#0b5345",
                        "on-tertiary-container": "#ebffe3",
                        "on-background": "#e1e3e4",
                        "inverse-primary": "#006971",
                        "on-error": "#690005",
                        "on-secondary-fixed-variant": "#065043",
                        "surface-container-low": "#191c1d",
                        "on-secondary-fixed": "#00201a",
                        "primary-fixed-dim": "#00dbec",
                        "on-surface-variant": "#bdc9c8",
                        "error": "#ffb4ab",
                        "on-surface": "#e1e3e4",
                        "primary-fixed": "#88f3ff",
                        "surface-container": "#1d2021",
                        "on-error-container": "#ffdad6",
                        "error-container": "#93000a",
                        "on-tertiary": "#003909",
                        "on-tertiary-fixed-variant": "#005312",
                        "surface-tint": "#00dbec",
                        "surface-bright": "#373a3b"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "1rem",
                        "xl": "1.5rem",
                        "full": "9999px"
                    },
                    "fontFamily": {
                        "headline": ["Space Grotesk"],
                        "body": ["Manrope"],
                        "label": ["Manrope"]
                    }
                },
            },
        }
    </script>
<style>
        body { font-family: 'Manrope', sans-serif; background-color: #111415; color: #e1e3e4; }
        .font-headline { font-family: 'Space Grotesk', sans-serif; }
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        .glass-panel { backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); }
        .chart-gradient-cyan { background: linear-gradient(180deg, rgba(0, 219, 236, 0.2) 0%, rgba(0, 219, 236, 0) 100%); }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #323536; border-radius: 10px; }
    </style>
</head>
<body class="bg-background text-on-background antialiased selection:bg-primary/30 selection:text-primary">
<!-- SideNavBar Anchor -->
<aside class="h-screen w-64 fixed left-0 top-0 bg-slate-950 flex flex-col p-6 gap-8 z-50 font-['Manrope'] font-medium bg-gradient-to-b from-slate-900 to-slate-950">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center">
<span class="material-symbols-outlined text-on-primary-container" data-icon="water_drop">water_drop</span>
</div>
<div>
<h1 class="font-['Space_Grotesk'] text-xl font-black text-cyan-400 leading-none">BlueTrade</h1>
<p class="text-[10px] text-slate-500 tracking-[0.2em] uppercase mt-1">Aquatic Ledger</p>
</div>
</div>
<nav class="flex flex-col gap-2 flex-grow">
<div class="text-cyan-400 font-bold bg-cyan-400/10 rounded-xl flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors group">
<span class="material-symbols-outlined transition-transform group-hover:translate-x-1" data-icon="dashboard">dashboard</span>
<span>Dashboard</span>
</div>
<div class="text-slate-500 hover:text-slate-200 hover:bg-slate-900/80 transition-colors flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer group">
<span class="material-symbols-outlined transition-transform group-hover:translate-x-1" data-icon="eco">eco</span>
<span>Projects</span>
</div>
<div class="text-slate-500 hover:text-slate-200 hover:bg-slate-900/80 transition-colors flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer group">
<span class="material-symbols-outlined transition-transform group-hover:translate-x-1" data-icon="tsunami">tsunami</span>
<span>Marketplace</span>
</div>
<div class="text-slate-500 hover:text-slate-200 hover:bg-slate-900/80 transition-colors flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer group">
<span class="material-symbols-outlined transition-transform group-hover:translate-x-1" data-icon="account_balance_wallet">account_balance_wallet</span>
<span>Portfolio</span>
</div>
<div class="text-slate-500 hover:text-slate-200 hover:bg-slate-900/80 transition-colors flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer group">
<span class="material-symbols-outlined transition-transform group-hover:translate-x-1" data-icon="settings">settings</span>
<span>Settings</span>
</div>
</nav>
<div class="pt-6 border-t border-slate-800/30 flex flex-col gap-2">
<div class="text-slate-500 hover:text-slate-200 hover:bg-slate-900/80 transition-colors flex items-center gap-3 px-4 py-2 rounded-xl cursor-pointer group">
<span class="material-symbols-outlined transition-transform group-hover:translate-x-1" data-icon="help">help</span>
<span class="text-sm">Support</span>
</div>
<div class="text-slate-500 hover:text-slate-200 hover:bg-slate-900/80 transition-colors flex items-center gap-3 px-4 py-2 rounded-xl cursor-pointer group">
<span class="material-symbols-outlined transition-transform group-hover:translate-x-1" data-icon="logout">logout</span>
<span class="text-sm">Sign Out</span>
</div>
</div>
</aside>
<!-- Main Content Area -->
<main class="ml-64 min-h-screen">
<!-- TopNavBar Anchor -->
<header class="w-full sticky top-0 z-40 bg-slate-950/40 backdrop-blur-xl flex justify-between items-center px-8 py-4 bg-slate-900/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
<div class="flex items-center gap-6">
<div class="relative">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" data-icon="search">search</span>
<input class="bg-slate-900/80 border-none rounded-full pl-10 pr-6 py-2 text-sm text-slate-200 focus:ring-1 focus:ring-cyan-400 w-64 transition-all" placeholder="Search ecosystems, projects..." type="text"/>
</div>
</div>
<div class="flex items-center gap-4">
<div class="flex items-center gap-2 bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full border border-cyan-400/20 cursor-pointer active:scale-95 transition-all">
<span class="material-symbols-outlined text-sm" data-icon="account_balance_wallet" style="font-variation-settings: 'FILL' 1;">account_balance_wallet</span>
<span class="text-sm font-bold font-headline tracking-tight">Connect Wallet</span>
</div>
<div class="p-2 text-slate-400 hover:bg-slate-800/50 rounded-full transition-all cursor-pointer">
<span class="material-symbols-outlined" data-icon="notifications">notifications</span>
</div>
<div class="w-10 h-10 rounded-full overflow-hidden border-2 border-slate-800">
<img alt="User profile" class="w-full h-full object-cover" data-alt="close-up portrait of a professional male environmental analyst with a clean look and neutral expression in soft office lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7kByG5AV5vnMBofeFHomIw7sr4ggpJAfKB1BV_LrzpmbDemG9Cyacoz80OQO4yxkp1dDCf6qFjXt0xE_CxWLaTQWCxopuUWDYhAitLxWZYiZPtDmkMgUJCXU0CQhsXNcTvjgw2YiFu8fyeabYcZ_wUFYNPExLyTKKdxZvF87FShG4iGUWUSjJMRPr5kst_kAXrFQNQcclob2iNA92IEhdbeqUbyFxEGKCpECptO1b5AriYKCZPAhVw_iQmSpQdEPcfaQNVWIepXY"/>
</div>
</div>
</header>
<!-- Analytics Content -->
<div class="p-8 space-y-8">
<!-- Header Section -->
<div class="flex flex-col gap-1">
<span class="text-primary font-label text-sm uppercase tracking-widest font-bold">System Overview</span>
<h2 class="text-4xl font-headline font-bold text-on-surface">Analytics Ledger</h2>
</div>
<!-- Dashboard Bento Grid -->
<div class="grid grid-cols-12 gap-6">
<!-- Primary Metric Card: Line Chart -->
<div class="col-span-12 lg:col-span-8 bg-surface-container-low rounded-xl p-8 flex flex-col gap-6 relative overflow-hidden">
<div class="flex justify-between items-start">
<div>
<h3 class="text-xl font-headline font-semibold text-on-surface">Carbon Credits Issuance</h3>
<p class="text-on-surface-variant text-sm">Monthly generation across all monitored zones</p>
</div>
<div class="flex gap-2">
<button class="bg-surface-container-highest px-4 py-1.5 rounded-lg text-xs font-bold text-on-surface hover:bg-surface-bright transition-colors">1M</button>
<button class="bg-primary px-4 py-1.5 rounded-lg text-xs font-bold text-on-primary">6M</button>
<button class="bg-surface-container-highest px-4 py-1.5 rounded-lg text-xs font-bold text-on-surface hover:bg-surface-bright transition-colors">1Y</button>
</div>
</div>
<div class="h-64 w-full flex items-end justify-between gap-1 mt-4">
<!-- Mockup Line Chart using SVG -->
<svg class="w-full h-full" preserveaspectratio="none" viewbox="0 0 800 200">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="5%" stop-color="#00dbec" stop-opacity="0.3"></stop>
<stop offset="95%" stop-color="#00dbec" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,180 Q100,160 200,100 T400,120 T600,60 T800,40 L800,200 L0,200 Z" fill="url(#chartGradient)"></path>
<path d="M0,180 Q100,160 200,100 T400,120 T600,60 T800,40" fill="none" stroke="#00dbec" stroke-width="3"></path>
<circle cx="200" cy="100" fill="#00dbec" r="4"></circle>
<circle cx="600" cy="60" fill="#00dbec" r="4"></circle>
</svg>
</div>
<div class="flex justify-between text-xs text-on-surface-variant font-medium px-2">
<span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span>
</div>
</div>
<!-- Ecosystem Distribution: Pie Chart -->
<div class="col-span-12 lg:col-span-4 bg-surface-container-low rounded-xl p-8 flex flex-col gap-6">
<h3 class="text-xl font-headline font-semibold text-on-surface">Ecosystem Distribution</h3>
<div class="relative w-48 h-48 mx-auto">
<!-- Simple CSS-based Donut Chart Mockup -->
<div class="w-full h-full rounded-full border-[16px] border-secondary-container flex items-center justify-center" style="border-top-color: #00dbec; border-left-color: #88d982;">
<div class="text-center">
<span class="block text-2xl font-bold text-on-surface">1,248</span>
<span class="text-[10px] text-on-surface-variant uppercase tracking-wider">Total Hectares</span>
</div>
</div>
</div>
<ul class="space-y-4 pt-4">
<li class="flex items-center justify-between">
<div class="flex items-center gap-2">
<div class="w-3 h-3 rounded-full bg-primary"></div>
<span class="text-sm text-on-surface-variant">Mangrove Forests</span>
</div>
<span class="text-sm font-bold">42%</span>
</li>
<li class="flex items-center justify-between">
<div class="flex items-center gap-2">
<div class="w-3 h-3 rounded-full bg-tertiary"></div>
<span class="text-sm text-on-surface-variant">Seagrass Meadows</span>
</div>
<span class="text-sm font-bold">35%</span>
</li>
<li class="flex items-center justify-between">
<div class="flex items-center gap-2">
<div class="w-3 h-3 rounded-full bg-secondary-container"></div>
<span class="text-sm text-on-surface-variant">Coral Reefs</span>
</div>
<span class="text-sm font-bold">23%</span>
</li>
</ul>
</div>
<!-- Global Heatmap Section -->
<div class="col-span-12 bg-surface-container-low rounded-xl overflow-hidden flex flex-col">
<div class="p-8 flex justify-between items-center">
<div>
<h3 class="text-xl font-headline font-semibold text-on-surface">Restoration Heatmap</h3>
<p class="text-on-surface-variant text-sm">Real-time global biomass recovery activity</p>
</div>
<div class="flex items-center gap-4">
<div class="flex items-center gap-2 text-xs">
<span class="w-2 h-2 rounded-full bg-error"></span>
<span class="text-on-surface-variant">Low Activity</span>
</div>
<div class="flex items-center gap-2 text-xs">
<span class="w-2 h-2 rounded-full bg-primary"></span>
<span class="text-on-surface-variant">High Activity</span>
</div>
</div>
</div>
<div class="h-[400px] w-full relative bg-surface-container-lowest">
<img alt="Global map heatmap" class="w-full h-full object-cover opacity-60" data-alt="abstract stylized world map in dark minimalist style with glowing cyan and green heatmap spots over coastal regions" data-location="Global" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKOgVbk5E3O7JZWTQVri2anFAKZ0sa-g01UfKIG6L8It4uUSJUJb__qNIkjjU-HuEmEiuF8iBDxdam771mUTe0NgNmgIaWsyRMPn73ad_Ldm_LnJ6qPt0b28I7LtrWsvhuuCdFqijNZNdehMPcBnsEEStzJU7H7kIDGUAuJfLL33sC9lcifkEpQWzSZvFey2joBrSI51xD8vpiaAfZee0jAHx0LMzT967vToXaHp1LgstIR5TzpSB1I4UAhifABg25kT3ld8wnnCA"/>
<!-- Heatmap Overlay Dots -->
<div class="absolute top-[30%] left-[25%] w-12 h-12 bg-primary/20 rounded-full animate-pulse flex items-center justify-center">
<div class="w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_#00dbec]"></div>
</div>
<div class="absolute top-[60%] left-[45%] w-16 h-16 bg-primary/20 rounded-full animate-pulse flex items-center justify-center" style="animation-delay: 1s">
<div class="w-6 h-6 bg-primary rounded-full shadow-[0_0_20px_#00dbec]"></div>
</div>
<div class="absolute top-[45%] left-[80%] w-10 h-10 bg-tertiary/20 rounded-full animate-pulse flex items-center justify-center" style="animation-delay: 0.5s">
<div class="w-3 h-3 bg-tertiary rounded-full shadow-[0_0_15px_#88d982]"></div>
</div>
</div>
</div>
<!-- Recent Transactions Table -->
<div class="col-span-12 bg-surface-container-low rounded-xl p-8">
<div class="flex justify-between items-center mb-8">
<h3 class="text-xl font-headline font-semibold text-on-surface">Recent Ledger Entries</h3>
<button class="text-primary text-sm font-bold flex items-center gap-1 hover:opacity-80 transition-opacity">
                            View All <span class="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
<div class="overflow-x-auto">
<table class="w-full text-left">
<thead>
<tr class="text-on-surface-variant label-md border-b border-outline-variant/30">
<th class="pb-4 font-bold tracking-wider text-xs uppercase">Project ID</th>
<th class="pb-4 font-bold tracking-wider text-xs uppercase">Asset Type</th>
<th class="pb-4 font-bold tracking-wider text-xs uppercase">Volume (Tons)</th>
<th class="pb-4 font-bold tracking-wider text-xs uppercase">Timestamp</th>
<th class="pb-4 font-bold tracking-wider text-xs uppercase">Status</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant/10">
<tr class="hover:bg-surface-container-high/50 transition-colors">
<td class="py-4 font-headline text-on-surface">#MNG-0422</td>
<td class="py-4 text-on-surface-variant text-sm">Mangrove Restoration</td>
<td class="py-4 text-on-surface font-medium">1,240.50</td>
<td class="py-4 text-on-surface-variant text-sm">Oct 24, 2023 · 14:22</td>
<td class="py-4">
<span class="bg-tertiary/10 text-tertiary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-tertiary/20">Verified</span>
</td>
</tr>
<tr class="hover:bg-surface-container-high/50 transition-colors">
<td class="py-4 font-headline text-on-surface">#SGR-0811</td>
<td class="py-4 text-on-surface-variant text-sm">Seagrass Replanting</td>
<td class="py-4 text-on-surface font-medium">892.30</td>
<td class="py-4 text-on-surface-variant text-sm">Oct 24, 2023 · 11:05</td>
<td class="py-4">
<span class="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-primary/20">Auditing</span>
</td>
</tr>
<tr class="hover:bg-surface-container-high/50 transition-colors">
<td class="py-4 font-headline text-on-surface">#CRL-0299</td>
<td class="py-4 text-on-surface-variant text-sm">Coral Propagation</td>
<td class="py-4 text-on-surface font-medium">415.00</td>
<td class="py-4 text-on-surface-variant text-sm">Oct 23, 2023 · 09:40</td>
<td class="py-4">
<span class="bg-tertiary/10 text-tertiary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-tertiary/20">Verified</span>
</td>
</tr>
<tr class="hover:bg-surface-container-high/50 transition-colors">
<td class="py-4 font-headline text-on-surface">#MNG-0511</td>
<td class="py-4 text-on-surface-variant text-sm">Mangrove Restoration</td>
<td class="py-4 text-on-surface font-medium">2,110.15</td>
<td class="py-4 text-on-surface-variant text-sm">Oct 22, 2023 · 18:15</td>
<td class="py-4">
<span class="bg-tertiary/10 text-tertiary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-tertiary/20">Verified</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</main>
<!-- FAB: Contextual to Admin/Dashboard -->
<div class="fixed bottom-8 right-8 z-50">
<button class="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all">
<span class="material-symbols-outlined text-3xl" data-icon="add">add</span>
</button>
</div>
</body></html>`;

export const registryHtml = `<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>BlueTrade | Admin Blockchain Registry</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;family=Manrope:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-primary-fixed": "#001f23",
                        "surface": "#111415",
                        "inverse-surface": "#e1e3e4",
                        "primary": "#00dbec",
                        "secondary": "#94d3c1",
                        "tertiary-fixed": "#a3f69c",
                        "outline-variant": "#3e4949",
                        "on-tertiary-fixed": "#002204",
                        "tertiary-fixed-dim": "#88d982",
                        "tertiary": "#88d982",
                        "secondary-fixed": "#afefdd",
                        "on-secondary-container": "#86c5b3",
                        "on-primary-fixed-variant": "#004f55",
                        "outline": "#879392",
                        "on-secondary": "#00382e",
                        "tertiary-container": "#338236",
                        "surface-dim": "#111415",
                        "surface-container-high": "#272a2b",
                        "surface-container-highest": "#323536",
                        "on-primary-container": "#ebfdff",
                        "secondary-fixed-dim": "#94d3c1",
                        "surface-variant": "#323536",
                        "on-primary": "#00363b",
                        "primary-container": "#007f89",
                        "surface-container-lowest": "#0c0f10",
                        "background": "#111415",
                        "inverse-on-surface": "#2e3132",
                        "secondary-container": "#0b5345",
                        "on-tertiary-container": "#ebffe3",
                        "on-background": "#e1e3e4",
                        "inverse-primary": "#006971",
                        "on-error": "#690005",
                        "on-secondary-fixed-variant": "#065043",
                        "surface-container-low": "#191c1d",
                        "on-secondary-fixed": "#00201a",
                        "primary-fixed-dim": "#00dbec",
                        "on-surface-variant": "#bdc9c8",
                        "error": "#ffb4ab",
                        "on-surface": "#e1e3e4",
                        "primary-fixed": "#88f3ff",
                        "surface-container": "#1d2021",
                        "on-error-container": "#ffdad6",
                        "error-container": "#93000a",
                        "on-tertiary": "#003909",
                        "on-tertiary-fixed-variant": "#005312",
                        "surface-tint": "#00dbec",
                        "surface-bright": "#373a3b"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "1rem",
                        "xl": "1.5rem",
                        "full": "9999px"
                    },
                    "fontFamily": {
                        "headline": ["Space Grotesk"],
                        "body": ["Manrope"],
                        "label": ["Manrope"]
                    }
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        body {
            background-color: #111415;
            color: #e1e3e4;
            font-family: 'Manrope', sans-serif;
        }
        .glass-panel {
            background: rgba(50, 53, 54, 0.4);
            backdrop-filter: blur(32px);
            -webkit-backdrop-filter: blur(32px);
        }
    </style>
</head>
<body class="flex min-h-screen overflow-x-hidden">
<!-- SideNavBar (Authority Source: JSON) -->
<aside class="hidden md:flex h-screen w-64 fixed left-0 top-0 border-r border-slate-800/30 bg-slate-950 flex-col p-6 gap-8 z-50 font-['Manrope'] font-medium">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-xl bg-cyan-400/20 flex items-center justify-center">
<span class="material-symbols-outlined text-cyan-400" data-icon="tsunami">tsunami</span>
</div>
<div>
<h1 class="font-['Space_Grotesk'] text-xl font-black text-cyan-400">BlueTrade</h1>
<p class="text-[10px] uppercase tracking-widest text-slate-500">Aquatic Ledger</p>
</div>
</div>
<nav class="flex flex-col gap-2 flex-grow">
<!-- Active Tab: Projects (Contextual Mapping) -->
<a class="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-200 hover:bg-slate-900/80 transition-colors group" href="#">
<span class="material-symbols-outlined group-hover:translate-x-1 transition-transform" data-icon="dashboard">dashboard</span>
<span>Dashboard</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-cyan-400 font-bold bg-cyan-400/10 rounded-xl group" href="#">
<span class="material-symbols-outlined group-hover:translate-x-1 transition-transform" data-icon="eco">eco</span>
<span>Projects</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-200 hover:bg-slate-900/80 transition-colors group" href="#">
<span class="material-symbols-outlined group-hover:translate-x-1 transition-transform" data-icon="tsunami">tsunami</span>
<span>Marketplace</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-200 hover:bg-slate-900/80 transition-colors group" href="#">
<span class="material-symbols-outlined group-hover:translate-x-1 transition-transform" data-icon="account_balance_wallet">account_balance_wallet</span>
<span>Portfolio</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-200 hover:bg-slate-900/80 transition-colors group" href="#">
<span class="material-symbols-outlined group-hover:translate-x-1 transition-transform" data-icon="settings">settings</span>
<span>Settings</span>
</a>
<div class="mt-8">
<button class="w-full bg-gradient-to-r from-cyan-400 to-teal-500 text-on-primary-fixed font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-all">
<span class="material-symbols-outlined" data-icon="add_circle">add_circle</span>
                    New Project
                </button>
</div>
</nav>
<div class="flex flex-col gap-2 border-t border-slate-800/50 pt-6">
<a class="flex items-center gap-3 px-4 py-2 text-slate-500 hover:text-slate-200 transition-colors group" href="#">
<span class="material-symbols-outlined group-hover:translate-x-1 transition-transform" data-icon="help">help</span>
<span>Support</span>
</a>
<a class="flex items-center gap-3 px-4 py-2 text-slate-500 hover:text-slate-200 transition-colors group" href="#">
<span class="material-symbols-outlined group-hover:translate-x-1 transition-transform" data-icon="logout">logout</span>
<span>Sign Out</span>
</a>
</div>
</aside>
<!-- Main Content Canvas -->
<main class="flex-1 md:ml-64 bg-background min-h-screen">
<!-- TopAppBar (Authority Source: JSON) -->
<header class="w-full sticky top-0 z-40 bg-slate-950/40 backdrop-blur-xl flex justify-between items-center px-8 py-4 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
<div class="flex items-center gap-6">
<div class="relative flex items-center">
<span class="material-symbols-outlined absolute left-3 text-slate-400" data-icon="search">search</span>
<input class="bg-slate-900/50 border-none rounded-full py-2 pl-10 pr-4 text-sm text-on-surface focus:ring-1 focus:ring-cyan-400 w-64 transition-all" placeholder="Search registry..." type="text"/>
</div>
</div>
<div class="flex items-center gap-6">
<nav class="hidden lg:flex items-center gap-8 text-sm font-['Space_Grotesk'] tracking-tight">
<a class="text-cyan-400 border-b-2 border-cyan-400 pb-1" href="#">Registry</a>
<a class="text-slate-400 hover:text-slate-100 transition-all duration-300" href="#">Nodes</a>
<a class="text-slate-400 hover:text-slate-100 transition-all duration-300" href="#">Governance</a>
</nav>
<div class="flex items-center gap-4">
<div class="p-2 rounded-full hover:bg-slate-800/50 cursor-pointer transition-all active:scale-95 text-slate-400">
<span class="material-symbols-outlined" data-icon="notifications">notifications</span>
</div>
<button class="bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-xl text-sm font-bold hover:bg-primary/20 transition-all active:scale-95">
                        Connect Wallet
                    </button>
<div class="w-10 h-10 rounded-full bg-slate-800 overflow-hidden border border-slate-700">
<img alt="User profile" class="w-full h-full object-cover" data-alt="professional portrait of a tech executive in a dark minimalist studio with subtle blue lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeR6gmZNBCOXfg--L3xaixYOaqVFHTdzPomyItZ6fm4tj9bfF-MW4KPHw2zt0c4N5yclzv8Dh__LR6jB4rXMDVgor2RPsEsAh8W5YJcmxXy3CW_tIm0vgE5mKQPoDqdqF_kkRl0f6qHBEf_lHKdUzJyDdhzXZSnm_R0ps8hmH-HdxgQvMxqlSyQTm__tPY72-J13vs3jzNaEjDjGh0Wke-ds05Yei142346DcqBSx-OCSmUC6VE6U8kqBYDlCfkpUYFX7_ORa_5ZY"/>
</div>
</div>
</div>
</header>
<!-- Dashboard Content -->
<div class="p-8 max-w-7xl mx-auto">
<!-- Header Section -->
<div class="mb-12">
<span class="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-2 block">On-Chain verification</span>
<h2 class="text-4xl md:text-5xl font-['Space_Grotesk'] font-bold text-on-surface tracking-tight mb-4">Blockchain Registry</h2>
<p class="text-on-surface-variant max-w-2xl leading-relaxed">
                    Real-time immutable ledger of climate-tech projects. Every project is cryptographically anchored to ensure transparent carbon sequestration metrics.
                </p>
</div>
<!-- Stats Overview - Bento Style -->
<div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
<div class="md:col-span-1 bg-surface-container-low p-6 rounded-xl relative overflow-hidden group">
<div class="relative z-10">
<p class="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Total Verified</p>
<h3 class="text-3xl font-headline font-bold text-on-surface">1,284</h3>
<p class="text-tertiary text-xs mt-2 flex items-center gap-1">
<span class="material-symbols-outlined text-xs" data-icon="trending_up">trending_up</span> +12.5% vs last month
                        </p>
</div>
<div class="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-8xl" data-icon="verified">verified</span>
</div>
</div>
<div class="md:col-span-1 bg-surface-container-low p-6 rounded-xl relative overflow-hidden group">
<div class="relative z-10">
<p class="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Active Transactions</p>
<h3 class="text-3xl font-headline font-bold text-on-surface">42.8k</h3>
<p class="text-primary text-xs mt-2 flex items-center gap-1">
<span class="material-symbols-outlined text-xs" data-icon="bolt">bolt</span> Live Network
                        </p>
</div>
<div class="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-8xl" data-icon="hub">hub</span>
</div>
</div>
<div class="md:col-span-2 bg-primary-container p-6 rounded-xl relative overflow-hidden">
<div class="relative z-10 flex flex-col h-full justify-between">
<div>
<p class="text-on-primary-container/80 text-xs font-bold uppercase tracking-widest mb-1">Ecosystem Health</p>
<h3 class="text-3xl font-headline font-bold text-on-primary-container">Excellent</h3>
</div>
<div class="flex gap-2 mt-4">
<div class="h-1 flex-1 bg-on-primary-container/20 rounded-full overflow-hidden">
<div class="h-full bg-on-primary-container w-[92%]"></div>
</div>
</div>
</div>
<div class="absolute top-0 right-0 p-4">
<span class="material-symbols-outlined text-on-primary-container/40" data-icon="eco">eco</span>
</div>
</div>
</div>
<!-- Registry Table Section -->
<div class="bg-surface-container-low rounded-xl overflow-hidden">
<!-- Table Controls -->
<div class="p-6 flex flex-col md:flex-row justify-between items-center gap-4 border-b border-outline-variant/10">
<div class="flex gap-3">
<button class="px-4 py-2 bg-surface-container-highest rounded-lg text-sm text-on-surface flex items-center gap-2 hover:bg-slate-800 transition-colors">
<span class="material-symbols-outlined text-sm" data-icon="filter_list">filter_list</span>
                            Filter
                        </button>
<button class="px-4 py-2 bg-surface-container-highest rounded-lg text-sm text-on-surface flex items-center gap-2 hover:bg-slate-800 transition-colors">
<span class="material-symbols-outlined text-sm" data-icon="download">download</span>
                            Export CSV
                        </button>
</div>
<div class="flex items-center gap-2 text-sm text-slate-500">
<span class="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                        Blockchain synced: 4 seconds ago
                    </div>
</div>
<!-- Data Table -->
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse">
<thead>
<tr class="bg-surface-container-lowest/50">
<th class="px-6 py-4 text-xs font-bold uppercase tracking-wider text-on-surface-variant font-label">Project Identity</th>
<th class="px-6 py-4 text-xs font-bold uppercase tracking-wider text-on-surface-variant font-label">Tx Hash</th>
<th class="px-6 py-4 text-xs font-bold uppercase tracking-wider text-on-surface-variant font-label">IPFS Pointer</th>
<th class="px-6 py-4 text-xs font-bold uppercase tracking-wider text-on-surface-variant font-label">Timestamp</th>
<th class="px-6 py-4 text-xs font-bold uppercase tracking-wider text-on-surface-variant font-label text-right">Status</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant/5">
<!-- Row 1 -->
<tr class="hover:bg-surface-container-high/50 transition-colors group">
<td class="px-6 py-5">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
<span class="material-symbols-outlined text-emerald-500 text-sm" data-icon="forest">forest</span>
</div>
<div>
<div class="font-bold text-on-surface text-sm">Amazonia Mangrove Alpha</div>
<div class="text-[10px] text-slate-500">Brazil Registry #4092</div>
</div>
</div>
</td>
<td class="px-6 py-5">
<div class="flex items-center gap-2 font-mono text-xs text-primary/80">
                                        0x4f2...9d1e
                                        <span class="material-symbols-outlined text-[14px] cursor-pointer hover:text-primary transition-colors" data-icon="content_copy">content_copy</span>
</div>
</td>
<td class="px-6 py-5">
<div class="flex items-center gap-2 font-mono text-xs text-slate-400">
                                        QmX...7jY2
                                        <span class="material-symbols-outlined text-[14px] cursor-pointer hover:text-slate-100 transition-colors" data-icon="open_in_new">open_in_new</span>
</div>
</td>
<td class="px-6 py-5">
<div class="text-xs text-on-surface-variant">2023-11-24</div>
<div class="text-[10px] text-slate-500">14:22:15 UTC</div>
</td>
<td class="px-6 py-5 text-right">
<span class="px-3 py-1 bg-tertiary/10 text-tertiary text-[10px] font-bold rounded-full border border-tertiary/20">VERIFIED</span>
</td>
</tr>
<!-- Row 2 -->
<tr class="bg-surface-container-lowest hover:bg-surface-container-high/50 transition-colors group">
<td class="px-6 py-5">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
<span class="material-symbols-outlined text-blue-500 text-sm" data-icon="waves">waves</span>
</div>
<div>
<div class="font-bold text-on-surface text-sm">Great Barrier Reef Core</div>
<div class="text-[10px] text-slate-500">Australia Registry #1128</div>
</div>
</div>
</td>
<td class="px-6 py-5">
<div class="flex items-center gap-2 font-mono text-xs text-primary/80">
                                        0x8a1...2c3b
                                        <span class="material-symbols-outlined text-[14px] cursor-pointer hover:text-primary" data-icon="content_copy">content_copy</span>
</div>
</td>
<td class="px-6 py-5">
<div class="flex items-center gap-2 font-mono text-xs text-slate-400">
                                        QmZ...1pL9
                                        <span class="material-symbols-outlined text-[14px] cursor-pointer" data-icon="open_in_new">open_in_new</span>
</div>
</td>
<td class="px-6 py-5">
<div class="text-xs text-on-surface-variant">2023-11-23</div>
<div class="text-[10px] text-slate-500">09:15:42 UTC</div>
</td>
<td class="px-6 py-5 text-right">
<span class="px-3 py-1 bg-tertiary/10 text-tertiary text-[10px] font-bold rounded-full border border-tertiary/20">VERIFIED</span>
</td>
</tr>
<!-- Row 3 -->
<tr class="hover:bg-surface-container-high/50 transition-colors group">
<td class="px-6 py-5">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
<span class="material-symbols-outlined text-amber-500 text-sm" data-icon="landscape">landscape</span>
</div>
<div>
<div class="font-bold text-on-surface text-sm">Savannah Restoration</div>
<div class="text-[10px] text-slate-500">Kenya Registry #7741</div>
</div>
</div>
</td>
<td class="px-6 py-5">
<div class="flex items-center gap-2 font-mono text-xs text-primary/80">
                                        0x1e9...4f7d
                                        <span class="material-symbols-outlined text-[14px] cursor-pointer hover:text-primary" data-icon="content_copy">content_copy</span>
</div>
</td>
<td class="px-6 py-5">
<div class="flex items-center gap-2 font-mono text-xs text-slate-400">
                                        QmR...9wK4
                                        <span class="material-symbols-outlined text-[14px] cursor-pointer" data-icon="open_in_new">open_in_new</span>
</div>
</td>
<td class="px-6 py-5">
<div class="text-xs text-on-surface-variant">2023-11-22</div>
<div class="text-[10px] text-slate-500">22:05:10 UTC</div>
</td>
<td class="px-6 py-5 text-right">
<span class="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full border border-primary/20">PENDING</span>
</td>
</tr>
<!-- Row 4 -->
<tr class="bg-surface-container-lowest hover:bg-surface-container-high/50 transition-colors group">
<td class="px-6 py-5">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
<span class="material-symbols-outlined text-purple-500 text-sm" data-icon="tsunami">tsunami</span>
</div>
<div>
<div class="font-bold text-on-surface text-sm">Coastal Kelp Farm</div>
<div class="text-[10px] text-slate-500">Norway Registry #2293</div>
</div>
</div>
</td>
<td class="px-6 py-5">
<div class="flex items-center gap-2 font-mono text-xs text-primary/80">
                                        0xbc7...3a2e
                                        <span class="material-symbols-outlined text-[14px] cursor-pointer hover:text-primary" data-icon="content_copy">content_copy</span>
</div>
</td>
<td class="px-6 py-5">
<div class="flex items-center gap-2 font-mono text-xs text-slate-400">
                                        QmV...4vS1
                                        <span class="material-symbols-outlined text-[14px] cursor-pointer" data-icon="open_in_new">open_in_new</span>
</div>
</td>
<td class="px-6 py-5">
<div class="text-xs text-on-surface-variant">2023-11-22</div>
<div class="text-[10px] text-slate-500">18:40:33 UTC</div>
</td>
<td class="px-6 py-5 text-right">
<span class="px-3 py-1 bg-tertiary/10 text-tertiary text-[10px] font-bold rounded-full border border-tertiary/20">VERIFIED</span>
</td>
</tr>
</tbody>
</table>
</div>
<!-- Table Footer/Pagination -->
<div class="p-6 flex items-center justify-between bg-surface-container-low border-t border-outline-variant/10">
<p class="text-xs text-slate-500">Showing <span class="text-on-surface">1 - 25</span> of 1,284 projects</p>
<div class="flex gap-2">
<button class="p-2 rounded-lg bg-surface-container-highest hover:bg-slate-800 transition-all text-slate-400">
<span class="material-symbols-outlined text-sm" data-icon="chevron_left">chevron_left</span>
</button>
<button class="p-2 rounded-lg bg-primary text-on-primary-fixed font-bold text-xs px-3">1</button>
<button class="p-2 rounded-lg bg-surface-container-highest hover:bg-slate-800 transition-all text-slate-400 text-xs px-3">2</button>
<button class="p-2 rounded-lg bg-surface-container-highest hover:bg-slate-800 transition-all text-slate-400 text-xs px-3">3</button>
<button class="p-2 rounded-lg bg-surface-container-highest hover:bg-slate-800 transition-all text-slate-400">
<span class="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
</div>
<!-- Mangrove Decorative Element -->
<div class="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
<div class="relative rounded-2xl overflow-hidden aspect-video group">
<img alt="Climate tech data visualization" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="futuristic 3D map of a reforestation area with neon blue data lines overlaying deep green forest canopies under moonlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfzbMXY6T0XaFPfSRsC3LbAIFKnRWSU9so688RiLC7AyVjn8bkqxsyzX_Zww50nCxmj-ppI06FA0YW0YFc0dFp1GElnKmMGU8YkzGJobhoS_MpkXL2QHHnSLzudedxzS-AwRR0RLgSem_4d1gghCa6sssBUiXX0HJKf_IotvFBDFjNHA7Phcbb9Jx3kgMhKgUQeq1kLvfI2iMQoAwvxOtqCs8VJ1MBNbqLwfpkekPeN9SuwcuF0e1P4PIRyBchUwmG7nyUBjf908A"/>
<div class="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
<div class="absolute bottom-6 left-6">
<div class="glass-panel p-4 rounded-xl border border-white/5">
<p class="text-primary font-bold text-[10px] tracking-widest uppercase mb-1">Global Node Network</p>
<h4 class="text-lg font-headline font-bold text-white">Pacific Basin Status: Optimal</h4>
</div>
</div>
</div>
<div class="space-y-6">
<div class="glass-panel p-8 rounded-2xl border border-white/5">
<h4 class="text-2xl font-headline font-bold text-on-surface mb-4">Audit Transparency</h4>
<p class="text-on-surface-variant leading-relaxed text-sm">
                            BlueTrade uses a multi-layered verification protocol. Every IPFS CID is cross-referenced with satellite telemetry before receiving the 'Verified' status badge. This ensures zero double-counting in the carbon ledger.
                        </p>
<div class="mt-6 flex items-center gap-4">
<div class="flex -space-x-3">
<div class="w-8 h-8 rounded-full border-2 border-surface bg-slate-700"></div>
<div class="w-8 h-8 rounded-full border-2 border-surface bg-slate-600"></div>
<div class="w-8 h-8 rounded-full border-2 border-surface bg-slate-500"></div>
</div>
<span class="text-xs text-slate-400">Validated by 14 neutral auditing nodes</span>
</div>
</div>
</div>
</div>
</div>
<!-- Sticky Status Bar -->
<footer class="w-full py-4 px-8 border-t border-outline-variant/10 bg-slate-950 flex justify-between items-center mt-12">
<div class="flex gap-6">
<div class="flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-tertiary"></span>
<span class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Mainnet Live</span>
</div>
<div class="flex items-center gap-2">
<span class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Block Height: 18,442,109</span>
</div>
</div>
<div class="flex gap-4">
<span class="text-[10px] text-slate-600">© 2023 BlueTrade Registry</span>
<span class="text-[10px] text-slate-600">Privacy Protocol v4.2</span>
</div>
</footer>
</main>
</body></html>`;

export const marketplaceHtml = `<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>BlueTrade | Carbon Marketplace</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;family=Manrope:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-primary-fixed": "#001f23",
                        "surface": "#111415",
                        "inverse-surface": "#e1e3e4",
                        "primary": "#00dbec",
                        "secondary": "#94d3c1",
                        "tertiary-fixed": "#a3f69c",
                        "outline-variant": "#3e4949",
                        "on-tertiary-fixed": "#002204",
                        "tertiary-fixed-dim": "#88d982",
                        "tertiary": "#88d982",
                        "secondary-fixed": "#afefdd",
                        "on-secondary-container": "#86c5b3",
                        "on-primary-fixed-variant": "#004f55",
                        "outline": "#879392",
                        "on-secondary": "#00382e",
                        "tertiary-container": "#338236",
                        "surface-dim": "#111415",
                        "surface-container-high": "#272a2b",
                        "surface-container-highest": "#323536",
                        "on-primary-container": "#ebfdff",
                        "secondary-fixed-dim": "#94d3c1",
                        "surface-variant": "#323536",
                        "on-primary": "#00363b",
                        "primary-container": "#007f89",
                        "surface-container-lowest": "#0c0f10",
                        "background": "#111415",
                        "inverse-on-surface": "#2e3132",
                        "secondary-container": "#0b5345",
                        "on-tertiary-container": "#ebffe3",
                        "on-background": "#e1e3e4",
                        "inverse-primary": "#006971",
                        "on-error": "#690005",
                        "on-secondary-fixed-variant": "#065043",
                        "surface-container-low": "#191c1d",
                        "on-secondary-fixed": "#00201a",
                        "primary-fixed-dim": "#00dbec",
                        "on-surface-variant": "#bdc9c8",
                        "error": "#ffb4ab",
                        "on-surface": "#e1e3e4",
                        "primary-fixed": "#88f3ff",
                        "surface-container": "#1d2021",
                        "on-error-container": "#ffdad6",
                        "error-container": "#93000a",
                        "on-tertiary": "#003909",
                        "on-tertiary-fixed-variant": "#005312",
                        "surface-tint": "#00dbec",
                        "surface-bright": "#373a3b"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "1rem",
                        "xl": "1.5rem",
                        "full": "9999px"
                    },
                    "fontFamily": {
                        "headline": ["Space Grotesk"],
                        "body": ["Manrope"],
                        "label": ["Manrope"]
                    }
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        body {
            font-family: 'Manrope', sans-serif;
            background-color: #111415;
            color: #e1e3e4;
        }
        .glass-card {
            background: rgba(50, 53, 54, 0.4);
            backdrop-filter: blur(32px);
            -webkit-backdrop-filter: blur(32px);
        }
    </style>
</head>
<body class="bg-background text-on-background min-h-screen">
<!-- SideNavBar Anchor -->
<aside class="h-screen w-64 fixed left-0 top-0 bg-slate-950 flex flex-col p-6 gap-8 z-50 border-r border-slate-800/30">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-container flex items-center justify-center">
<span class="material-symbols-outlined text-on-primary" style="font-variation-settings: 'FILL' 1;">eco</span>
</div>
<div>
<h1 class="font-['Space_Grotesk'] text-xl font-black text-cyan-400">BlueTrade</h1>
<p class="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Aquatic Ledger</p>
</div>
</div>
<nav class="flex flex-col gap-2 flex-grow">
<a class="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-200 transition-colors group" href="#">
<span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">dashboard</span>
<span class="font-['Manrope'] font-medium">Dashboard</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-200 transition-colors group" href="#">
<span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">eco</span>
<span class="font-['Manrope'] font-medium">Projects</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-cyan-400 font-bold bg-cyan-400/10 rounded-xl group" href="#">
<span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">tsunami</span>
<span class="font-['Manrope'] font-medium">Marketplace</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-200 transition-colors group" href="#">
<span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">account_balance_wallet</span>
<span class="font-['Manrope'] font-medium">Portfolio</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-200 transition-colors group" href="#">
<span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">settings</span>
<span class="font-['Manrope'] font-medium">Settings</span>
</a>
</nav>
<div class="flex flex-col gap-2 pt-6 border-t border-slate-800/50">
<a class="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-200 transition-colors group" href="#">
<span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">help</span>
<span class="font-['Manrope'] font-medium">Support</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-200 transition-colors group" href="#">
<span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">logout</span>
<span class="font-['Manrope'] font-medium">Sign Out</span>
</a>
</div>
</aside>
<main class="ml-64 min-h-screen flex flex-col">
<!-- TopNavBar Anchor -->
<header class="w-full sticky top-0 z-40 bg-slate-950/40 backdrop-blur-xl flex justify-between items-center px-8 py-4 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
<div class="flex items-center gap-8">
<div class="relative group">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
<input class="bg-slate-900/50 border-none rounded-full py-2 pl-10 pr-4 text-sm w-64 focus:ring-1 focus:ring-primary transition-all font-body" placeholder="Search marketplace..." type="text"/>
</div>
<nav class="hidden md:flex gap-6">
<a class="text-cyan-400 border-b-2 border-cyan-400 pb-1 font-['Space_Grotesk'] tracking-tight" href="#">Active Trades</a>
<a class="text-slate-400 hover:text-slate-100 transition-all duration-300 font-['Space_Grotesk'] tracking-tight" href="#">Governance</a>
<a class="text-slate-400 hover:text-slate-100 transition-all duration-300 font-['Space_Grotesk'] tracking-tight" href="#">Registry</a>
</nav>
</div>
<div class="flex items-center gap-4">
<button class="p-2 text-slate-400 hover:bg-slate-800/50 transition-all duration-300 active:scale-95 rounded-full">
<span class="material-symbols-outlined">notifications</span>
</button>
<div class="h-8 w-px bg-slate-800/50 mx-2"></div>
<button class="px-6 py-2 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold rounded-xl active:scale-95 transition-all text-sm flex items-center gap-2">
<span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">account_balance_wallet</span>
                    Connect Wallet
                </button>
</div>
</header>
<!-- Content Canvas -->
<section class="p-8 flex flex-col gap-10">
<!-- Hero Header Section -->
<div class="relative overflow-hidden rounded-xl bg-surface-container-low p-12">
<div class="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
<div class="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/40 via-transparent to-transparent"></div>
</div>
<div class="relative z-10 max-w-2xl">
<span class="text-primary font-label text-sm font-bold tracking-[0.2em] uppercase mb-4 block">Ecosystem Integrity</span>
<h2 class="text-5xl font-headline font-bold text-on-surface leading-tight mb-6">Carbon Credits for a <br/><span class="bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">Liquid Planet</span></h2>
<p class="text-on-surface-variant text-lg max-w-lg mb-8 leading-relaxed">
                        Verified blue carbon projects utilizing the aquatic ledger for absolute transparency. Trade mangrove and seagrass restoration credits instantly.
                    </p>
<div class="flex gap-4">
<button class="px-8 py-3 bg-primary text-on-primary font-bold rounded-xl active:scale-95 transition-all">Explore All</button>
<button class="px-8 py-3 bg-surface-container-highest text-on-surface font-bold rounded-xl active:scale-95 transition-all">How it works</button>
</div>
</div>
</div>
<!-- Marketplace Grid -->
<div>
<div class="flex justify-between items-end mb-8">
<div>
<span class="text-tertiary font-label text-xs font-bold tracking-widest uppercase mb-2 block">Live Listings</span>
<h3 class="text-3xl font-headline font-bold">Featured Projects</h3>
</div>
<div class="flex gap-2">
<button class="p-2 bg-surface-container-low rounded-lg text-on-surface-variant hover:text-primary transition-colors">
<span class="material-symbols-outlined">filter_list</span>
</button>
<button class="p-2 bg-surface-container-low rounded-lg text-on-surface-variant hover:text-primary transition-colors">
<span class="material-symbols-outlined">grid_view</span>
</button>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
<!-- Project Card 1 -->
<div class="glass-card rounded-xl overflow-hidden group hover:bg-surface-container-high transition-all duration-500">
<div class="h-64 relative overflow-hidden">
<img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="lush green mangrove forest aerial view with clear blue water channels winding through dense vegetation" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo2gGKKII5MUclwAdDQ0JYifq1GkouxUlRoKtIDnSwfE9kHR1B67faJ4dnOWmcc72n_j06UwF0WwsNX7Cd5yCcNwXNl8MkN-UYEBYDHGZLTL_iy2URzFEGII0ebinSN5PqcdBsVp90IQQ1tradtUEsdJRQd9k1Q7qr8WSKNindVBaDv9XJr9Pi6lpI9CCAwG7YLTRpKYJCUeNL78e2JqW9PMLNGxeeFbFMzp2jy4Dtux4poWrcI4LIl9Rj3iGpYDk0Hr1fHEArhzM"/>
<div class="absolute top-4 left-4">
<span class="bg-slate-900/80 backdrop-blur-md text-primary text-[10px] font-bold px-3 py-1 rounded-full border border-primary/20">BLUE CARBON</span>
</div>
<div class="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-slate-950 to-transparent">
<div class="flex items-center gap-2 text-on-primary-container text-xs">
<span class="material-symbols-outlined text-sm">location_on</span>
                                    Sundarbans, India
                                </div>
</div>
</div>
<div class="p-6 flex flex-col gap-4">
<div class="flex justify-between items-start">
<h4 class="text-xl font-headline font-bold text-on-surface">Sundarbans Mangrove Restoration</h4>
<div class="text-right">
<p class="text-primary font-headline font-bold text-lg">$24.50</p>
<p class="text-[10px] text-slate-500 font-bold uppercase">Per Metric Ton</p>
</div>
</div>
<div class="flex items-center gap-4 py-2">
<div class="flex-1">
<div class="flex justify-between mb-1 text-[10px] font-bold text-slate-400">
<span>SUPPLY</span>
<span>82%</span>
</div>
<div class="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
<div class="h-full bg-primary rounded-full" style="width: 82%"></div>
</div>
</div>
<div class="text-right">
<p class="text-xs font-bold text-on-surface">12.4k tCO2e</p>
<p class="text-[10px] text-slate-500">Available</p>
</div>
</div>
<button class="w-full py-3 bg-surface-container-highest hover:bg-primary hover:text-on-primary text-on-surface font-bold rounded-xl transition-all duration-300 active:scale-95">
                                Buy Credits
                            </button>
</div>
</div>
<!-- Project Card 2 -->
<div class="glass-card rounded-xl overflow-hidden group hover:bg-surface-container-high transition-all duration-500">
<div class="h-64 relative overflow-hidden">
<img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="underwater view of vibrant green seagrass meadow with sunlight rays filtering through clear turquoise water" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCROMCSFEbDij7V8oczdVgsP8SVbypk06-NLQXHNHwOoJykRbekYzzL7lIaCNyI1osXR0g3In6cffcWUZyuf6_a1x1MhjkcwApVuB3C58A9y2RkRd8lE3RJtbfi8ZZ0ZgA9J06zLB2CO-hv2dYqDSMciqRUe39wwI5JVfA14uAFe4Ha0RU7XNFbvLJ5dAf_bF2bD_1LLriFA-AUkstwRsopk6B3ZhYXsvFLi-pyMieL6F-IIK4Js3vozd3ZoUhdFKkuoNbSoEM47EY"/>
<div class="absolute top-4 left-4">
<span class="bg-slate-900/80 backdrop-blur-md text-tertiary text-[10px] font-bold px-3 py-1 rounded-full border border-tertiary/20">SEAGRASS RECOVERY</span>
</div>
<div class="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-slate-950 to-transparent">
<div class="flex items-center gap-2 text-on-primary-container text-xs">
<span class="material-symbols-outlined text-sm">location_on</span>
                                    Shark Bay, Australia
                                </div>
</div>
</div>
<div class="p-6 flex flex-col gap-4">
<div class="flex justify-between items-start">
<h4 class="text-xl font-headline font-bold text-on-surface">Shark Bay Seagrass Sanctuary</h4>
<div class="text-right">
<p class="text-primary font-headline font-bold text-lg">$31.20</p>
<p class="text-[10px] text-slate-500 font-bold uppercase">Per Metric Ton</p>
</div>
</div>
<div class="flex items-center gap-4 py-2">
<div class="flex-1">
<div class="flex justify-between mb-1 text-[10px] font-bold text-slate-400">
<span>SUPPLY</span>
<span>45%</span>
</div>
<div class="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
<div class="h-full bg-tertiary rounded-full" style="width: 45%"></div>
</div>
</div>
<div class="text-right">
<p class="text-xs font-bold text-on-surface">5.8k tCO2e</p>
<p class="text-[10px] text-slate-500">Available</p>
</div>
</div>
<button class="w-full py-3 bg-surface-container-highest hover:bg-primary hover:text-on-primary text-on-surface font-bold rounded-xl transition-all duration-300 active:scale-95">
                                Buy Credits
                            </button>
</div>
</div>
<!-- Project Card 3 -->
<div class="glass-card rounded-xl overflow-hidden group hover:bg-surface-container-high transition-all duration-500">
<div class="h-64 relative overflow-hidden">
<img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="coastal wetland landscape at sunset with calm water reflecting orange and purple sky and sparse mangrove roots" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4WwcpJGBYX8XOUeW-sTDT2OKjRttYCSF-MoY8EJ2ie4SPn3a6zd-KoXIR3LhpfXwaxOVu3rvEvFu6QgyOcNmO__y5h7hz14wUjcsVbQQ6SellOStFSBN5u2XEwEMEyVVN63SKjSY0pqnJJrEnDIs43qr7GVJpgKRrQQs_-atWY_tUjhwQxZIbeviFeF9k9NNoZgaK6BzZz1f24BhVlI1vk18Y0BNXQTMFqi0_UV1cXIYtLGDYkszJpmFKRuU9srgsM-lbWC1D1f0"/>
<div class="absolute top-4 left-4">
<span class="bg-slate-900/80 backdrop-blur-md text-primary text-[10px] font-bold px-3 py-1 rounded-full border border-primary/20">COASTAL WETLANDS</span>
</div>
<div class="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-slate-950 to-transparent">
<div class="flex items-center gap-2 text-on-primary-container text-xs">
<span class="material-symbols-outlined text-sm">location_on</span>
                                    Everglades, USA
                                </div>
</div>
</div>
<div class="p-6 flex flex-col gap-4">
<div class="flex justify-between items-start">
<h4 class="text-xl font-headline font-bold text-on-surface">Everglades Carbon Sink</h4>
<div class="text-right">
<p class="text-primary font-headline font-bold text-lg">$19.90</p>
<p class="text-[10px] text-slate-500 font-bold uppercase">Per Metric Ton</p>
</div>
</div>
<div class="flex items-center gap-4 py-2">
<div class="flex-1">
<div class="flex justify-between mb-1 text-[10px] font-bold text-slate-400">
<span>SUPPLY</span>
<span>95%</span>
</div>
<div class="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
<div class="h-full bg-primary rounded-full" style="width: 95%"></div>
</div>
</div>
<div class="text-right">
<p class="text-xs font-bold text-on-surface">42k tCO2e</p>
<p class="text-[10px] text-slate-500">Available</p>
</div>
</div>
<button class="w-full py-3 bg-surface-container-highest hover:bg-primary hover:text-on-primary text-on-surface font-bold rounded-xl transition-all duration-300 active:scale-95">
                                Buy Credits
                            </button>
</div>
</div>
</div>
</div>
<!-- Ledger Activity Section (Asymmetric) -->
<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
<div class="lg:col-span-2 glass-card rounded-xl p-8">
<h3 class="text-2xl font-headline font-bold mb-6">Real-time Ledger Activity</h3>
<div class="space-y-4">
<div class="flex items-center justify-between p-4 bg-surface-container-lowest rounded-xl">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-secondary">
<span class="material-symbols-outlined text-sm">swap_horiz</span>
</div>
<div>
<p class="text-sm font-bold">Purchase: 500 tCO2e</p>
<p class="text-[10px] text-slate-500">0x8f2...e41 • 2 mins ago</p>
</div>
</div>
<div class="text-right">
<p class="text-sm font-headline font-bold text-primary">12.25 ETH</p>
<p class="text-[10px] text-slate-500">Hash: c74...88a</p>
</div>
</div>
<div class="flex items-center justify-between p-4 bg-surface-container-lowest/50 rounded-xl opacity-80">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-sm">verified</span>
</div>
<div>
<p class="text-sm font-bold">Verification: Shark Bay</p>
<p class="text-[10px] text-slate-500">Verra VCU-992 • 15 mins ago</p>
</div>
</div>
<div class="text-right">
<p class="text-sm font-headline font-bold text-tertiary">Verified</p>
<p class="text-[10px] text-slate-500">Hash: a2b...331</p>
</div>
</div>
<div class="flex items-center justify-between p-4 bg-surface-container-lowest rounded-xl">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-secondary">
<span class="material-symbols-outlined text-sm">swap_horiz</span>
</div>
<div>
<p class="text-sm font-bold">Purchase: 1,200 tCO2e</p>
<p class="text-[10px] text-slate-500">0x2d1...b90 • 45 mins ago</p>
</div>
</div>
<div class="text-right">
<p class="text-sm font-headline font-bold text-primary">29.40 ETH</p>
<p class="text-[10px] text-slate-500">Hash: f82...01e</p>
</div>
</div>
</div>
</div>
<div class="bg-gradient-to-br from-primary-container to-surface-container-high rounded-xl p-8 flex flex-col justify-between">
<div>
<span class="text-on-primary-container font-label text-xs font-bold tracking-widest uppercase mb-4 block">Market Stats</span>
<h4 class="text-3xl font-headline font-bold text-on-primary-container mb-2">$4.2M</h4>
<p class="text-sm text-on-primary-container/70 mb-8 leading-relaxed">Total liquidity locked in the Aquatic Ledger across 12 active blue carbon projects.</p>
<div class="space-y-6">
<div>
<p class="text-[10px] font-bold text-on-primary-container/60 mb-1 uppercase">Avg. Price Yield</p>
<p class="text-xl font-headline font-bold text-on-primary-container">+14.2%</p>
</div>
<div>
<p class="text-[10px] font-bold text-on-primary-container/60 mb-1 uppercase">Carbon Offset YTD</p>
<p class="text-xl font-headline font-bold text-on-primary-container">842,000 Tons</p>
</div>
</div>
</div>
<button class="mt-8 w-full py-3 bg-on-primary-container text-primary-container font-black rounded-xl active:scale-95 transition-all">
                        View Analytics
                    </button>
</div>
</div>
</section>
<!-- Footer Padding -->
<footer class="mt-auto p-8 border-t border-slate-800/20 text-slate-500 text-xs flex justify-between">
<p>© 2024 BlueTrade Foundation. All projects verified by the Aquatic Ledger.</p>
<div class="flex gap-6">
<a class="hover:text-primary transition-colors" href="#">Documentation</a>
<a class="hover:text-primary transition-colors" href="#">Privacy Policy</a>
<a class="hover:text-primary transition-colors" href="#">API Access</a>
</div>
</footer>
</main>
</body></html>`;

export const adminHtml = `<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;family=Manrope:wght@200;300;400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-primary-fixed": "#001f23",
                        "surface": "#111415",
                        "inverse-surface": "#e1e3e4",
                        "primary": "#00dbec",
                        "secondary": "#94d3c1",
                        "tertiary-fixed": "#a3f69c",
                        "outline-variant": "#3e4949",
                        "on-tertiary-fixed": "#002204",
                        "tertiary-fixed-dim": "#88d982",
                        "tertiary": "#88d982",
                        "secondary-fixed": "#afefdd",
                        "on-secondary-container": "#86c5b3",
                        "on-primary-fixed-variant": "#004f55",
                        "outline": "#879392",
                        "on-secondary": "#00382e",
                        "tertiary-container": "#338236",
                        "surface-dim": "#111415",
                        "surface-container-high": "#272a2b",
                        "surface-container-highest": "#323536",
                        "on-primary-container": "#ebfdff",
                        "secondary-fixed-dim": "#94d3c1",
                        "surface-variant": "#323536",
                        "on-primary": "#00363b",
                        "primary-container": "#007f89",
                        "surface-container-lowest": "#0c0f10",
                        "background": "#111415",
                        "inverse-on-surface": "#2e3132",
                        "secondary-container": "#0b5345",
                        "on-tertiary-container": "#ebffe3",
                        "on-background": "#e1e3e4",
                        "inverse-primary": "#006971",
                        "on-error": "#690005",
                        "on-secondary-fixed-variant": "#065043",
                        "surface-container-low": "#191c1d",
                        "on-secondary-fixed": "#00201a",
                        "primary-fixed-dim": "#00dbec",
                        "on-surface-variant": "#bdc9c8",
                        "error": "#ffb4ab",
                        "on-surface": "#e1e3e4",
                        "primary-fixed": "#88f3ff",
                        "surface-container": "#1d2021",
                        "on-error-container": "#ffdad6",
                        "error-container": "#93000a",
                        "on-tertiary": "#003909",
                        "on-tertiary-fixed-variant": "#005312",
                        "surface-tint": "#00dbec",
                        "surface-bright": "#373a3b"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "1.5rem",
                        "2xl": "2rem",
                        "full": "9999px"
                    },
                    "fontFamily": {
                        "headline": ["Space Grotesk"],
                        "body": ["Manrope"],
                        "label": ["Manrope"]
                    }
                },
            },
        }
    </script>
<style>
        body { font-family: 'Manrope', sans-serif; }
        h1, h2, h3, .brand-font { font-family: 'Space Grotesk', sans-serif; }
        .glass-panel {
            background: rgba(50, 53, 54, 0.4);
            backdrop-filter: blur(32px);
            -webkit-backdrop-filter: blur(32px);
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
    </style>
</head>
<body class="bg-background text-on-surface overflow-x-hidden">
<!-- Sidebar Navigation -->
<aside class="h-screen w-64 fixed left-0 top-0 bg-slate-950 flex flex-col p-6 gap-8 z-50 border-r border-slate-800/30">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-container flex items-center justify-center">
<span class="material-symbols-outlined text-on-primary" style="font-variation-settings: 'FILL' 1;">tsunami</span>
</div>
<div>
<h1 class="font-['Space_Grotesk'] text-xl font-black text-cyan-400">BlueTrade</h1>
<p class="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Aquatic Ledger</p>
</div>
</div>
<nav class="flex-1 flex flex-col gap-2 font-['Manrope'] font-medium">
<a class="flex items-center gap-3 px-4 py-3 text-cyan-400 font-bold bg-cyan-400/10 rounded-xl transition-all" href="#">
<span class="material-symbols-outlined">dashboard</span>
                Dashboard
            </a>
<a class="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-200 hover:bg-slate-900/80 rounded-xl transition-colors group" href="#">
<span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">eco</span>
                Projects
            </a>
<a class="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-200 hover:bg-slate-900/80 rounded-xl transition-colors group" href="#">
<span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">tsunami</span>
                Marketplace
            </a>
<a class="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-200 hover:bg-slate-900/80 rounded-xl transition-colors group" href="#">
<span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">account_balance_wallet</span>
                Portfolio
            </a>
<a class="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-200 hover:bg-slate-900/80 rounded-xl transition-colors group" href="#">
<span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">settings</span>
                Settings
            </a>
</nav>
<div class="mt-auto flex flex-col gap-2 pt-6 border-t border-slate-800/30">
<a class="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-200 transition-colors" href="#">
<span class="material-symbols-outlined">help</span>
                Support
            </a>
<a class="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-200 transition-colors" href="#">
<span class="material-symbols-outlined">logout</span>
                Sign Out
            </a>
</div>
</aside>
<!-- Main Content Area -->
<main class="ml-64 min-h-screen">
<!-- Top Navigation Bar -->
<header class="w-full sticky top-0 z-40 bg-slate-950/40 backdrop-blur-xl flex justify-between items-center px-8 py-4 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
<div class="flex items-center gap-6">
<div class="relative">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">search</span>
<input class="bg-slate-900/50 border-none rounded-full pl-10 pr-4 py-2 text-sm text-on-surface focus:ring-1 focus:ring-primary w-64" placeholder="Search ledger..." type="text"/>
</div>
</div>
<div class="flex items-center gap-4">
<button class="p-2 text-slate-400 hover:bg-slate-800/50 rounded-full transition-all active:scale-95 cursor-pointer">
<span class="material-symbols-outlined">notifications</span>
</button>
<button class="px-6 py-2 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold rounded-full transition-all active:scale-95 cursor-pointer text-sm shadow-lg shadow-primary/20">
                    Connect Wallet
                </button>
<div class="w-10 h-10 rounded-full border-2 border-primary/20 p-0.5">
<img alt="User profile" class="w-full h-full rounded-full object-cover" data-alt="Close-up portrait of a professional male executive in a dark tech-focused environment with subtle cyan rim lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrNvs_nqwfABQxsvIHVYRyBwhCBW58sQzixY2iiYJYexn3zGeiFSKkoacf5lhH2XJr4iTMZtR-ToZsDXywU58VX_XQYLtZWg_i5P1a3-WZ7Ecov5TxaCe23fBsA03KT_Z7nZ_RhanxHTxolZEkh7vrhbyEM0jHyun8NlpYAkBefJ3dGJ0mWWFMM-mNiNoisy8eHmSa4Fg9ZjwrpPFETaRQwiJ9ME3earx8Zs3SGUYhIq6t5A7kS1ibP_MRvg4jB22aB04doCnPQpQ"/>
</div>
</div>
</header>
<section class="p-8 space-y-10 max-w-[1600px] mx-auto">
<!-- Page Header -->
<div class="space-y-1">
<p class="text-primary text-xs font-bold tracking-[0.2em] uppercase">Executive Overview</p>
<h2 class="text-4xl font-headline font-bold text-on-surface tracking-tight">Admin Dashboard</h2>
</div>
<!-- Bento Grid Stats -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<!-- Stat Card 1 -->
<div class="bg-surface-container-low rounded-xl p-6 flex flex-col justify-between group hover:bg-surface-container-high transition-all duration-300">
<div class="flex justify-between items-start">
<div class="p-3 bg-primary/10 rounded-lg text-primary">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">account_tree</span>
</div>
<span class="text-tertiary text-xs font-bold">+12%</span>
</div>
<div class="mt-8">
<p class="text-on-surface-variant text-sm font-medium">Total Projects</p>
<h3 class="text-3xl font-headline font-bold mt-1">1,248</h3>
</div>
</div>
<!-- Stat Card 2 -->
<div class="bg-surface-container-low rounded-xl p-6 flex flex-col justify-between group hover:bg-surface-container-high transition-all duration-300">
<div class="flex justify-between items-start">
<div class="p-3 bg-secondary/10 rounded-lg text-secondary">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">verified_user</span>
</div>
<span class="text-error text-xs font-bold">24 Active</span>
</div>
<div class="mt-8">
<p class="text-on-surface-variant text-sm font-medium">Pending Verifications</p>
<h3 class="text-3xl font-headline font-bold mt-1">42</h3>
</div>
</div>
<!-- Stat Card 3 -->
<div class="bg-surface-container-low rounded-xl p-6 flex flex-col justify-between group hover:bg-surface-container-high transition-all duration-300">
<div class="flex justify-between items-start">
<div class="p-3 bg-tertiary/10 rounded-lg text-tertiary">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">forest</span>
</div>
<span class="text-tertiary text-xs font-bold">8.4M tCO2e</span>
</div>
<div class="mt-8">
<p class="text-on-surface-variant text-sm font-medium">Carbon Credits Issued</p>
<h3 class="text-3xl font-headline font-bold mt-1">142,500</h3>
</div>
</div>
<!-- Stat Card 4 -->
<div class="bg-surface-container-low rounded-xl p-6 flex flex-col justify-between group hover:bg-surface-container-high transition-all duration-300">
<div class="flex justify-between items-start">
<div class="p-3 bg-primary-container/20 rounded-lg text-primary-fixed">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">payments</span>
</div>
<span class="text-primary text-xs font-bold">$2.4M YTD</span>
</div>
<div class="mt-8">
<p class="text-on-surface-variant text-sm font-medium">Total Revenue</p>
<h3 class="text-3xl font-headline font-bold mt-1">$482.9K</h3>
</div>
</div>
</div>
<!-- Main Interactive Section -->
<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
<!-- Plantation Verification Section -->
<div class="lg:col-span-2 space-y-6">
<div class="flex justify-between items-end">
<h3 class="text-2xl font-headline font-bold">Plantation Verification</h3>
<button class="text-primary text-sm font-bold hover:underline">View All Queue</button>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<!-- Verification Card 1 -->
<div class="glass-panel rounded-xl overflow-hidden group">
<div class="h-48 w-full relative">
<img alt="Mangrove plantation" class="w-full h-full object-cover" data-alt="Dense green mangrove forest from an aerial perspective with turquoise water channels winding through the trees in high detail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALIQqjvNxzEOTAw58f6EMgzWQFas9uFYu7Ujf4GWjSeFYOu-jboHFviDAu6XotfWBQJE-gTbPipzNhuf8RvnOX9nGi1fq3YOSd_iYaTlFFBJu8cHCzgcBPXSWUumqUzv-pZO_QSntktqeJyQ7Zqz4ai4cy2XKsPaRa58uOXkzmra0NgcCZ1FPMtcElDsgBzHGv0TmFOhFqX091o4kMDUi_MrJ5SZC2uQ_5eTtSb4rHtOO9N7YM99sTRbwfGyG9BKmz0_ZtT2_EtYs"/>
<div class="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-tertiary uppercase tracking-widest">
                                    Coastal Ecosystem
                                </div>
</div>
<div class="p-6 space-y-4">
<div class="flex justify-between items-start">
<div>
<h4 class="text-lg font-bold">Blue Carbon Sundarbans</h4>
<p class="text-on-surface-variant text-xs flex items-center gap-1">
<span class="material-symbols-outlined text-xs">location_on</span>
                                            21.9497° N, 89.1833° E
                                        </p>
</div>
<div class="text-right">
<p class="text-primary font-bold">1,240 Ha</p>
<p class="text-[10px] text-on-surface-variant uppercase">Total Area</p>
</div>
</div>
<div class="flex gap-3">
<button class="flex-1 py-3 bg-tertiary-container/20 text-tertiary hover:bg-tertiary-container/40 rounded-xl font-bold text-sm transition-all">Approve</button>
<button class="flex-1 py-3 bg-error-container/20 text-error hover:bg-error-container/40 rounded-xl font-bold text-sm transition-all">Reject</button>
</div>
</div>
</div>
<!-- Verification Card 2 -->
<div class="glass-panel rounded-xl overflow-hidden group">
<div class="h-48 w-full relative">
<img alt="Tropical rainforest" class="w-full h-full object-cover" data-alt="Vibrant tropical rainforest canopy with misty atmosphere and sunlight filtering through broad leaves in rich green tones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1Wd-yejpwGnEYEgpybWURytJYGy2ZfvLLg-q1MAAEvgfauoqK0cqaDAmS57e8g3Kuv-4HTWNNlSJBPS7bhEG4SfRs_OZRruAQnkzxaTsfr4nJGn8nGFWtzqc_vxRjJlEesXS_nD2FjkBtcTXPRc0hfhaG2Wu1dfKSOySCCoiMutTopm97W4yyo4bZiWu1k5KhoaJewrXYSSumwRfSzaebB8EaaUpVrya2BhZyOhUupMBqofTFwbd8tR5fb5gLWD4nidqZp6tcWZc"/>
<div class="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-primary-fixed uppercase tracking-widest">
                                    Peatland Restoration
                                </div>
</div>
<div class="p-6 space-y-4">
<div class="flex justify-between items-start">
<div>
<h4 class="text-lg font-bold">Amazon Basin Delta</h4>
<p class="text-on-surface-variant text-xs flex items-center gap-1">
<span class="material-symbols-outlined text-xs">location_on</span>
                                            3.4653° S, 62.2159° W
                                        </p>
</div>
<div class="text-right">
<p class="text-primary font-bold">4,890 Ha</p>
<p class="text-[10px] text-on-surface-variant uppercase">Total Area</p>
</div>
</div>
<div class="flex gap-3">
<button class="flex-1 py-3 bg-tertiary-container/20 text-tertiary hover:bg-tertiary-container/40 rounded-xl font-bold text-sm transition-all">Approve</button>
<button class="flex-1 py-3 bg-error-container/20 text-error hover:bg-error-container/40 rounded-xl font-bold text-sm transition-all">Reject</button>
</div>
</div>
</div>
</div>
</div>
<!-- Recent Activity Timeline -->
<div class="space-y-6">
<h3 class="text-2xl font-headline font-bold">Global Activity</h3>
<div class="bg-surface-container-low rounded-xl p-6 space-y-6">
<div class="flex gap-4 relative">
<div class="z-10 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-primary text-sm" style="font-variation-settings: 'FILL' 1;">history_edu</span>
</div>
<div class="pb-6 border-l border-slate-800 ml-[-1.25rem] pl-8">
<p class="text-sm font-bold text-on-surface">NGO Wallet Authorized</p>
<p class="text-xs text-on-surface-variant mt-1">GreenRoots NGO has been whitelisted for verification.</p>
<p class="text-[10px] text-slate-500 mt-2 uppercase font-bold tracking-widest">2 mins ago</p>
</div>
</div>
<div class="flex gap-4 relative">
<div class="z-10 w-8 h-8 rounded-full bg-tertiary/20 flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-tertiary text-sm" style="font-variation-settings: 'FILL' 1;">data_check</span>
</div>
<div class="pb-6 border-l border-slate-800 ml-[-1.25rem] pl-8">
<p class="text-sm font-bold text-on-surface">Block #924,102 Finalized</p>
<p class="text-xs text-on-surface-variant mt-1">Carbon credit batch for 14,000 tCO2e issued to Amazon Restoration.</p>
<p class="text-[10px] text-slate-500 mt-2 uppercase font-bold tracking-widest">45 mins ago</p>
</div>
</div>
<div class="flex gap-4 relative">
<div class="z-10 w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-secondary text-sm" style="font-variation-settings: 'FILL' 1;">security</span>
</div>
<div class="pb-6 border-l border-slate-800 ml-[-1.25rem] pl-8">
<p class="text-sm font-bold text-on-surface">Admin Access Alert</p>
<p class="text-xs text-on-surface-variant mt-1">Multi-sig wallet "Core-01" signed a proposal for new protocol fees.</p>
<p class="text-[10px] text-slate-500 mt-2 uppercase font-bold tracking-widest">2 hours ago</p>
</div>
</div>
<div class="flex gap-4 relative">
<div class="z-10 w-8 h-8 rounded-full bg-primary-container/20 flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-primary-fixed text-sm" style="font-variation-settings: 'FILL' 1;">campaign</span>
</div>
<div class="pl-8">
<p class="text-sm font-bold text-on-surface">New Verification Request</p>
<p class="text-xs text-on-surface-variant mt-1">Borneo Peatlands submitted multispectral drone imagery for audit.</p>
<p class="text-[10px] text-slate-500 mt-2 uppercase font-bold tracking-widest">5 hours ago</p>
</div>
</div>
</div>
<div class="bg-gradient-to-br from-primary-container/40 to-slate-900 rounded-xl p-6 border border-primary/10">
<div class="flex items-center gap-3 mb-4">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">info</span>
<p class="text-sm font-bold text-on-primary-container">System Status</p>
</div>
<div class="flex justify-between text-xs text-on-surface-variant">
<span>Mainnet Node 1</span>
<span class="text-tertiary">Operational</span>
</div>
<div class="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
<div class="bg-primary h-full w-[98%]"></div>
</div>
</div>
</div>
</div>
</section>
<!-- Footer Tonal Separation -->
<footer class="bg-surface-container-lowest mt-12 py-8 px-8 border-t border-slate-900">
<div class="flex flex-col md:flex-row justify-between items-center gap-6">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary">water_drop</span>
<span class="text-on-surface-variant text-sm font-medium">© 2024 BlueTrade Aquatic Ledger Ecosystem</span>
</div>
<div class="flex gap-8 text-xs font-bold text-slate-500 uppercase tracking-widest">
<a class="hover:text-primary transition-colors" href="#">Documentation</a>
<a class="hover:text-primary transition-colors" href="#">Privacy</a>
<a class="hover:text-primary transition-colors" href="#">API Keys</a>
</div>
</div>
</footer>
</main>
<!-- Floating Background Textures (Mangrove Patterns) -->
<div class="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-30 mix-blend-soft-light overflow-hidden">
<svg class="absolute top-[10%] right-[-5%] w-[40%] h-[40%] text-surface-bright" fill="currentColor" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="40" stroke="currentColor" stroke-dasharray="1 2" stroke-width="0.1"></circle>
<circle cx="50" cy="50" fill="none" r="30" stroke="currentColor" stroke-dasharray="2 4" stroke-width="0.1"></circle>
</svg>
<svg class="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] text-primary/5" fill="currentColor" viewbox="0 0 100 100">
<path d="M10,50 Q25,25 50,50 T90,50" fill="none" stroke="currentColor" stroke-width="0.2"></path>
<path d="M10,60 Q25,35 50,60 T90,60" fill="none" stroke="currentColor" stroke-width="0.2"></path>
</svg>
</div>
</body></html>`;

