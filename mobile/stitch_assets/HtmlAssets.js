export const cameraHtml = `<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;family=Manrope:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
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
        .camera-overlay-grid {
            background-image: 
                linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
            background-size: 33.33% 33.33%;
        }
        .shutter-glow {
            box-shadow: 0 0 20px rgba(0, 219, 236, 0.3);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background text-on-background font-body overflow-hidden h-screen w-screen flex flex-col">
<!-- Top Navigation Anchor (Shared Component) -->
<nav class="bg-[#111415]/80 backdrop-blur-xl w-full sticky top-0 z-50 flex justify-between items-center px-6 py-4 w-full bg-gradient-to-b from-[#111415] to-transparent shadow-none">
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-[#00dbec] transition-opacity active:scale-95 duration-200" data-icon="close">close</span>
<span class="font-['Space_Grotesk'] font-bold tracking-tight text-xl tracking-tighter text-[#00dbec]">BlueTrade</span>
</div>
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-slate-400 opacity-80 transition-opacity active:scale-95 duration-200" data-icon="flash_on">flash_on</span>
<span class="material-symbols-outlined text-slate-400 opacity-80 transition-opacity active:scale-95 duration-200" data-icon="settings">settings</span>
</div>
</nav>
<!-- Full Screen Camera Viewport -->
<main class="relative flex-grow w-full overflow-hidden bg-surface-container-lowest">
<!-- Mock Camera Background -->
<div class="absolute inset-0 z-0">
<img alt="high-resolution view of a dense mangrove forest from a water-level perspective with dappled sunlight through leaves" class="w-full h-full object-cover grayscale-[0.2] contrast-[1.1]" data-alt="high-resolution view of a dense mangrove forest from a water-level perspective with dappled sunlight through leaves" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7ck8AhRgtfkUyuGN2IjdeMYUTdQFgjUh0ML2XXMMJ-vq21YMYuelphWbQLsN_c2qKOwMogAJckT6Kn3lR7FLok8qgj9zv78dEdFxMoLc1dQpQ6s7ZQv-Ryas8kM6Df6i7lzl5BitQZlt4ASerkukCyEq-7cRice4anoqwp8qSRWQgfboyehULKM3qkcbaCnLdd2ScZEWUZeNeuMDVPLmW46bZfe5relIqwuNEqgbZkeZIGMS2KOIXwY8RahAf0npXBvDjMl6CJSU"/>
<div class="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
<div class="absolute inset-0 camera-overlay-grid"></div>
</div>
<!-- Camera UI Overlays -->
<div class="relative z-10 h-full w-full p-6 flex flex-col justify-between">
<!-- Metadata Top Label -->
<div class="flex flex-col gap-1 items-start">
<div class="bg-surface/40 backdrop-blur-md px-4 py-2 rounded-xl border border-white/5 flex items-center gap-3">
<div class="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
<span class="font-label text-xs font-bold tracking-widest text-primary uppercase">Recording Proof</span>
</div>
</div>
<!-- Focus Bracket (Visual Element) -->
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 pointer-events-none">
<div class="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/40 rounded-tl-lg"></div>
<div class="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/40 rounded-tr-lg"></div>
<div class="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/40 rounded-bl-lg"></div>
<div class="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/40 rounded-br-lg"></div>
</div>
<!-- Bottom Data Display -->
<div class="flex flex-col gap-4">
<!-- Asymmetric Bento-style metadata -->
<div class="grid grid-cols-2 gap-3 max-w-sm">
<div class="bg-surface/60 backdrop-blur-xl p-4 rounded-xl border border-white/5">
<span class="block font-label text-[10px] text-primary font-bold tracking-widest uppercase mb-1">GPS Location</span>
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary text-lg" data-icon="location_on">location_on</span>
<span class="font-headline font-medium text-sm text-on-surface">24.5502° N, 81.7800° W</span>
</div>
</div>
<div class="bg-surface/60 backdrop-blur-xl p-4 rounded-xl border border-white/5">
<span class="block font-label text-[10px] text-primary font-bold tracking-widest uppercase mb-1">Blockchain Hash</span>
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary text-lg" data-icon="vibration">vibration</span>
<span class="font-headline font-medium text-sm text-on-surface">0x7F...3B92</span>
</div>
</div>
<div class="bg-surface/60 backdrop-blur-xl p-4 rounded-xl border border-white/5 col-span-2">
<div class="flex justify-between items-center">
<div>
<span class="block font-label text-[10px] text-primary font-bold tracking-widest uppercase mb-1">Current Timestamp</span>
<span class="font-headline font-medium text-sm text-on-surface">OCT 24, 2023 | 14:32:05 UTC</span>
</div>
<span class="material-symbols-outlined text-primary/60" data-icon="schedule">schedule</span>
</div>
</div>
</div>
<!-- Main Interaction Bar -->
<div class="flex items-center justify-between gap-6 py-6 px-2">
<!-- Gallery Preview -->
<div class="w-14 h-14 rounded-full border-2 border-white/20 overflow-hidden bg-surface-container-high transition-transform active:scale-90">
<img alt="small square preview of a previous nature photograph featuring ocean waves" class="w-full h-full object-cover opacity-80" data-alt="small square preview of a previous nature photograph featuring ocean waves" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbCkj2cGR6Ni6XI1xzNaK2bvb-aySgwC7PB7W2tZnPL0Vm8s_fG79ISIeoOBLFdJIz8_CdsfzKcjZhSVjG2YOjPYn3kDj853C6P7qTvQ540O_zL1qyRrZBCs9WsKTIUGxWQklraUGXj2v57AoHIhJPjzcWnqBbgkA3RlZL8S8MEZe4OpSUOmR_XPVV5RZT8r8TzI-4ptcNFt8YyZJ_aZxMmCdNlxI38EV4iFOQvYyQMrxhFEW5ohpAIwWSMeErLvAC55qjPi7L5jc"/>
</div>
<!-- Capture Button -->
<button class="relative w-24 h-24 rounded-full flex items-center justify-center group active:scale-95 transition-transform">
<div class="absolute inset-0 rounded-full border-4 border-primary/30"></div>
<div class="absolute inset-1 rounded-full border-2 border-white/80"></div>
<div class="w-18 h-18 rounded-full bg-gradient-to-br from-primary to-primary-container shutter-glow flex items-center justify-center">
<div class="w-16 h-16 rounded-full border border-white/20"></div>
</div>
</button>
<!-- Camera Switch -->
<button class="w-14 h-14 rounded-full bg-surface/40 backdrop-blur-lg flex items-center justify-center text-on-surface transition-transform active:scale-90">
<span class="material-symbols-outlined text-2xl" data-icon="flip_camera_ios">flip_camera_ios</span>
</button>
</div>
</div>
</div>
</main>
<!-- Bottom Navigation Shell (Shared Component) -->
<div class="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-8 pt-4 bg-[#111415]/60 backdrop-blur-2xl z-50 rounded-t-[32px] border-t border-white/5 shadow-[0_-8px_30px_rgb(0,0,0,0.12)]">
<div class="flex flex-col items-center justify-center text-slate-500 py-2 hover:text-[#00dbec] transition-colors active:scale-90 transition-transform duration-200">
<span class="material-symbols-outlined mb-1" data-icon="home">home</span>
<span class="font-['Manrope'] text-[10px] font-semibold tracking-wide uppercase">Home</span>
</div>
<div class="flex flex-col items-center justify-center text-slate-500 py-2 hover:text-[#00dbec] transition-colors active:scale-90 transition-transform duration-200">
<span class="material-symbols-outlined mb-1" data-icon="history">history</span>
<span class="font-['Manrope'] text-[10px] font-semibold tracking-wide uppercase">History</span>
</div>
<!-- Active Tab: Camera -->
<div class="flex flex-col items-center justify-center bg-[#007f89]/20 text-[#00dbec] rounded-2xl px-4 py-2 hover:text-[#00dbec] transition-colors active:scale-90 transition-transform duration-200">
<span class="material-symbols-outlined mb-1" data-icon="photo_camera" style="font-variation-settings: 'FILL' 1;">photo_camera</span>
<span class="font-['Manrope'] text-[10px] font-semibold tracking-wide uppercase">Camera</span>
</div>
<div class="flex flex-col items-center justify-center text-slate-500 py-2 hover:text-[#00dbec] transition-colors active:scale-90 transition-transform duration-200">
<span class="material-symbols-outlined mb-1" data-icon="person">person</span>
<span class="font-['Manrope'] text-[10px] font-semibold tracking-wide uppercase">Profile</span>
</div>
</div>

  <script>
    document.addEventListener('click', function(e) {
      let target = e.target;
      while(target && target.tagName !== 'A' && target.tagName !== 'BUTTON') {
        target = target.parentNode;
      }
      if(target) {
        let text = target.innerText || target.textContent;
        window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'nav', text: text, tag: target.tagName, href: target.getAttribute('href') }));
      }
    });
  </script>
  </body></html>`;

export const dashboardHtml = `<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
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
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
        }
        .mangrove-gradient {
            background: linear-gradient(135deg, #00dbec 0%, #007f89 100%);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background text-on-surface min-h-screen pb-32">
<!-- TopAppBar -->
<header class="w-full sticky top-0 z-50 bg-[#111415]/80 backdrop-blur-xl flex justify-between items-center px-6 py-4 w-full">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-[#00dbec]" data-icon="menu">menu</span>
<span class="text-xl font-bold tracking-tighter text-[#00dbec] font-['Space_Grotesk']">BlueTrade</span>
</div>
<div class="flex items-center gap-4">
<div class="glass-card px-3 py-1 rounded-full flex items-center gap-2 border border-white/5">
<div class="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
<span class="text-[10px] font-bold tracking-widest uppercase text-primary">Connected</span>
</div>
<span class="material-symbols-outlined text-slate-400" data-icon="notifications">notifications</span>
</div>
</header>
<main class="px-6 pt-4 space-y-8">
<!-- Hero Section -->
<section class="relative h-48 rounded-xl overflow-hidden flex items-end p-6 group">
<div class="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10"></div>
<img alt="Forest conservation" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="lush green mangrove forest canopy with intricate aerial root systems seen from a high angle in cinematic daylight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEh4EqI3DiurNuJzRWchdYeySbOvQwEkVSWnhWmKxeDlqkpUYe2aUH2QW8CRp2j4YVw846FYDuQAt92cviVYq_VO93hi6BeEcITRClzZTcrkqNY21QmuQEX6ed5rK5OImHZd17SvpQnvfGtwjtjOX9E1W39aq3wNUIgFrzzWgibG5j0SGHW49iPrJL74paxD3kKBTQfpLfAlZNaq5KR7C_piM3BST1LLPqJUmZEuWSvZWYZmP8OyKxkdykryY5GMi4LuOS5uUAY3A"/>
<div class="relative z-20">
<p class="text-primary font-label text-[10px] font-bold tracking-[0.2em] uppercase mb-1">Field Intelligence</p>
<h1 class="text-3xl font-headline font-bold leading-none tracking-tight">Morning, Staff</h1>
</div>
</section>
<!-- Bento Grid Quick Actions -->
<section>
<div class="flex items-baseline justify-between mb-4">
<h2 class="text-xl font-headline font-bold text-on-surface">Field Operations</h2>
<span class="text-xs font-label font-semibold text-primary/60 tracking-wider uppercase">Region: Amazonia</span>
</div>
<div class="grid grid-cols-2 gap-4">
<!-- Action 1: Upload Plantation (Large) -->
<div class="col-span-2 glass-card rounded-xl p-6 relative overflow-hidden group active:scale-95 transition-transform duration-200">
<div class="mangrove-gradient absolute top-0 right-0 w-24 h-24 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
<div class="flex flex-col h-full justify-between">
<div class="w-12 h-12 rounded-xl mangrove-gradient flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
<span class="material-symbols-outlined text-on-primary text-2xl" data-icon="cloud_upload">cloud_upload</span>
</div>
<div>
<h3 class="text-lg font-headline font-bold text-on-surface">Upload Plantation</h3>
<p class="text-sm text-on-surface-variant font-body mt-1">Sync local satellite data to the carbon ledger.</p>
</div>
</div>
</div>
<!-- Action 2: Capture GPS -->
<div class="glass-card rounded-xl p-5 flex flex-col justify-between aspect-square active:scale-95 transition-transform duration-200">
<div class="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center">
<span class="material-symbols-outlined text-primary" data-icon="location_on">location_on</span>
</div>
<div>
<h3 class="text-md font-headline font-bold text-on-surface leading-tight">Capture GPS</h3>
<p class="text-[10px] text-on-surface-variant uppercase tracking-wider font-bold mt-2">Precision Sync</p>
</div>
</div>
<!-- Action 3: View History -->
<div class="glass-card rounded-xl p-5 flex flex-col justify-between aspect-square active:scale-95 transition-transform duration-200">
<div class="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center">
<span class="material-symbols-outlined text-secondary" data-icon="history_edu">history_edu</span>
</div>
<div>
<h3 class="text-md font-headline font-bold text-on-surface leading-tight">View History</h3>
<p class="text-[10px] text-on-surface-variant uppercase tracking-wider font-bold mt-2">Audit Logs</p>
</div>
</div>
</div>
</section>
<!-- Stats Section -->
<section class="bg-surface-container-low rounded-xl p-6">
<div class="flex items-center justify-between mb-6">
<div>
<h3 class="text-on-surface font-headline font-bold">Daily Impact</h3>
<p class="text-xs text-on-surface-variant">Carbon sequestration tracking</p>
</div>
<div class="text-right">
<p class="text-2xl font-headline font-bold text-tertiary">12.4t</p>
<p class="text-[10px] font-bold text-tertiary-container uppercase">CO2 Offset</p>
</div>
</div>
<div class="flex gap-1 h-2 w-full rounded-full overflow-hidden bg-surface-container-highest">
<div class="h-full w-2/3 mangrove-gradient"></div>
<div class="h-full w-1/12 bg-tertiary"></div>
</div>
</section>
<!-- Active Tasks -->
<section class="space-y-4">
<h2 class="text-lg font-headline font-bold px-1">Active Site Mapping</h2>
<div class="space-y-3">
<div class="flex items-center gap-4 p-4 rounded-xl bg-surface-container-lowest border border-white/5">
<img alt="Site Alpha" class="w-12 h-12 rounded-lg object-cover" data-alt="top down view of a square plot of young trees in a reforestation project with vibrant green soil" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK46mliCLZiJ3A1jGqsry2I7rqOGJd-2IMY_eJxMhXzPjhAwNrzQ5aSDi-bxPP_psf87IPCENXJdn9063AxeklUP0ZAyhIpb9GK6IlHW3RmibLgtrdOq57JpPTUGldo4kH3FlGv-RgGkwroxsJIRc5VdiZTzjqx66OyDGhDvjjUqnJLe-3JXNYt023PNAEAJtgzVk4v7rFXdFkCUD_Ki55d9J2wCrKrGaLoExM3b6jAh4Efu4b0dizP1gS6zreHW9E0qwC1VKRXWs"/>
<div class="flex-1">
<h4 class="text-sm font-bold font-headline">Sector 7-G Reforest</h4>
<p class="text-xs text-on-surface-variant">42 points remaining</p>
</div>
<span class="material-symbols-outlined text-primary text-xl" data-icon="chevron_right">chevron_right</span>
</div>
<div class="flex items-center gap-4 p-4 rounded-xl bg-surface-container-lowest border border-white/5">
<img alt="Site Beta" class="w-12 h-12 rounded-lg object-cover" data-alt="misty morning in a dense redwood forest with sunbeams piercing through the foliage" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDw7mXBRd2OQOkM4QR_Ju1dhV2TzxYWW0Q8RvSrHvwX5qrDPISaopAksm5o1hvu922zbygVygQmP2y-ODyIhGZwYBIzyf4pBDqAIzK5p41qiT82C5Ca4XgNN9ox7LKzNvGgVT0WfV09SGGIFEyzicOBlHlhSZX-Wz0fcD5caNYkCRJcMeJqIoR2R_Y5_58zGf-ERFtnQYykq_bKkAgFrTdbNhSfBxAiDOVYL_XCqMQ7YWqFnaZvrQMdi5a4Aa5C34s3kJCgLaJ_gQ"/>
<div class="flex-1">
<h4 class="text-sm font-bold font-headline">Coastal Mangrove B</h4>
<p class="text-xs text-on-surface-variant">Validation pending</p>
</div>
<span class="material-symbols-outlined text-secondary text-xl" data-icon="pending">pending</span>
</div>
</div>
</section>
</main>
<!-- BottomNavBar -->
<nav class="fixed bottom-0 left-0 w-full z-50 rounded-t-[32px] bg-[#111415]/60 backdrop-blur-2xl border-t border-white/5 shadow-[0_-8px_30px_rgb(0,0,0,0.12)] flex justify-around items-center px-4 pb-8 pt-4">
<!-- Home Active -->
<a class="flex flex-col items-center justify-center bg-[#007f89]/20 text-[#00dbec] rounded-2xl px-4 py-2 active:scale-90 transition-transform duration-200" href="#">
<span class="material-symbols-outlined mb-1" data-icon="home" style="font-variation-settings: 'FILL' 1;">home</span>
<span class="font-['Manrope'] text-[10px] font-semibold tracking-wide uppercase">Home</span>
</a>
<a class="flex flex-col items-center justify-center text-slate-500 py-2 hover:text-[#00dbec] transition-colors active:scale-90 duration-200" href="#">
<span class="material-symbols-outlined mb-1" data-icon="history">history</span>
<span class="font-['Manrope'] text-[10px] font-semibold tracking-wide uppercase">History</span>
</a>
<div class="relative -top-8">
<button class="w-14 h-14 rounded-full mangrove-gradient flex items-center justify-center shadow-xl shadow-primary/40 active:scale-90 transition-transform duration-200">
<span class="material-symbols-outlined text-on-primary text-3xl" data-icon="photo_camera">photo_camera</span>
</button>
</div>
<a class="flex flex-col items-center justify-center text-slate-500 py-2 hover:text-[#00dbec] transition-colors active:scale-90 duration-200" href="#">
<span class="material-symbols-outlined mb-1" data-icon="person">person</span>
<span class="font-['Manrope'] text-[10px] font-semibold tracking-wide uppercase">Profile</span>
</a>
</nav>

  <script>
    document.addEventListener('click', function(e) {
      let target = e.target;
      while(target && target.tagName !== 'A' && target.tagName !== 'BUTTON') {
        target = target.parentNode;
      }
      if(target) {
        let text = target.innerText || target.textContent;
        window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'nav', text: text, tag: target.tagName, href: target.getAttribute('href') }));
      }
    });
  </script>
  </body></html>`;

export const historyHtml = `<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>BlueTrade - Submission History</title>
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
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
        }
        .text-gradient {
            background: linear-gradient(135deg, #00dbec 0%, #007f89 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .mangrove-pattern {
            background-image: radial-gradient(circle at 2px 2px, rgba(55, 58, 59, 0.03) 1px, transparent 0);
            background-size: 24px 24px;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background mangrove-pattern min-h-screen pb-32">
<!-- TopAppBar -->
<header class="bg-[#111415]/80 backdrop-blur-xl w-full sticky top-0 z-50 flex justify-between items-center px-6 py-4 w-full bg-gradient-to-b from-[#111415] to-transparent">
<div class="flex items-center gap-4">
<button class="text-[#00dbec] opacity-80 transition-opacity active:scale-95 duration-200">
<span class="material-symbols-outlined">menu</span>
</button>
<h1 class="text-xl font-bold tracking-tighter text-[#00dbec] font-['Space_Grotesk']">BlueTrade</h1>
</div>
<button class="text-[#00dbec] opacity-80 transition-opacity active:scale-95 duration-200">
<span class="material-symbols-outlined">notifications</span>
</button>
</header>
<main class="px-6 pt-8 max-w-2xl mx-auto">
<!-- Header Section -->
<div class="mb-10">
<span class="font-label text-[10px] font-semibold tracking-[0.15em] text-primary uppercase block mb-2">Aquatic Ledger</span>
<h2 class="font-headline text-4xl font-bold tracking-tight text-on-surface">Submission History</h2>
<p class="text-on-surface-variant mt-2 text-sm max-w-[80%]">Track your environmental project tokens and their verification status on the blockchain.</p>
</div>
<!-- Filter Pills -->
<div class="flex gap-2 overflow-x-auto pb-6 scrollbar-hide">
<button class="bg-primary-container text-on-primary-container px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap">All Projects</button>
<button class="bg-surface-container-high text-on-surface-variant px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap">Approved</button>
<button class="bg-surface-container-high text-on-surface-variant px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap">Pending</button>
<button class="bg-surface-container-high text-on-surface-variant px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap">Rejected</button>
</div>
<!-- Timeline List -->
<div class="relative space-y-6 before:absolute before:left-[19px] before:top-4 before:bottom-4 before:w-[1px] before:bg-outline-variant/30">
<!-- Item 1: Approved -->
<div class="relative pl-12 group">
<div class="absolute left-0 top-6 w-[40px] h-[40px] flex items-center justify-center rounded-full bg-surface-container-lowest z-10">
<div class="w-3 h-3 rounded-full bg-tertiary shadow-[0_0_12px_rgba(136,217,130,0.4)]"></div>
</div>
<div class="glass-card rounded-xl p-5 border border-white/5 group-hover:bg-surface-container-high transition-all duration-300">
<div class="flex justify-between items-start mb-3">
<div>
<span class="text-[10px] font-bold text-tertiary uppercase tracking-wider mb-1 block">Approved • Oct 24</span>
<h3 class="font-headline text-lg font-bold text-on-primary-container">Mangrove Restoration #882</h3>
</div>
<div class="h-10 w-10 rounded-lg overflow-hidden shrink-0">
<img class="w-full h-full object-cover" data-alt="vibrant green mangrove saplings growing in shallow coastal waters with reflections" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQNVAxfX-9PD24vMblGT3Hi2AdyFiCfL0-BQgR5Gwfl-bxHk2XttPd-2TwcMVZm6cpPHyokXmy7QNCUw0jL03FShiw_uChAIL018g7AaEv7rUGGh-DWf02IBuO-qHhP2CRl26zY1Gbi7J9v29tI8kw8of0Xw_EM95MuVb-R4lJoqCHapkjhFW4CXnkUUM_ArD6ilHLPNanKkARVnfjxjtLIwLiJqm_B7plvi8WlI1_VDahpsReXVv_8wJjlqnPFJFXWzw2l_-H3x8"/>
</div>
</div>
<div class="flex items-center gap-4 mt-4 text-xs text-on-surface-variant">
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-sm">token</span>
<span class="font-mono">1,240 BTRD</span>
</div>
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-sm">database</span>
<span class="font-mono">0x4a...3e1</span>
</div>
</div>
</div>
</div>
<!-- Item 2: Pending -->
<div class="relative pl-12 group">
<div class="absolute left-0 top-6 w-[40px] h-[40px] flex items-center justify-center rounded-full bg-surface-container-lowest z-10">
<div class="w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_rgba(0,219,236,0.4)]"></div>
</div>
<div class="glass-card rounded-xl p-5 border border-white/5 group-hover:bg-surface-container-high transition-all duration-300">
<div class="flex justify-between items-start mb-3">
<div>
<span class="text-[10px] font-bold text-primary uppercase tracking-wider mb-1 block">In Verification • Oct 22</span>
<h3 class="font-headline text-lg font-bold text-on-primary-container">Coral Reef Protection Alpha</h3>
</div>
<div class="h-10 w-10 rounded-lg overflow-hidden shrink-0">
<img class="w-full h-full object-cover" data-alt="underwater shot of healthy colorful coral reef with schools of small tropical fish" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE-e-a28UVmbCFtshGsHWSccpFBFKqJmF1B3gD084gs4joDg920QMo2uhw6Kk_DWIeVd0L1TcY6iSXSi2jpti6uKAh5clp6nFJ_h3WjNAHVqEg-0c2rCm7qyGTKTcfUcVZruuhoL9EXL36Ei7NYHONEnPgpfc0AV-qWSXtreYzhHN8wtiqNDTPtSnuQfApCcG1YyLctgNdIrcwb2YOuA8MYww4K6T6mY8wMIWpjvQDw7NEtJJ2acUqLTxE7PR0DK1hSPjbMfk8aDs"/>
</div>
</div>
<div class="w-full bg-surface-container-lowest h-1.5 rounded-full mt-4 overflow-hidden">
<div class="bg-primary h-full w-[65%] rounded-full shadow-[0_0_8px_rgba(0,219,236,0.3)]"></div>
</div>
<div class="mt-2 text-[10px] text-on-surface-variant flex justify-between uppercase font-bold tracking-widest">
<span>Node validation</span>
<span>65% Complete</span>
</div>
</div>
</div>
<!-- Item 3: Rejected -->
<div class="relative pl-12 group">
<div class="absolute left-0 top-6 w-[40px] h-[40px] flex items-center justify-center rounded-full bg-surface-container-lowest z-10">
<div class="w-3 h-3 rounded-full bg-error shadow-[0_0_12px_rgba(255,180,171,0.4)]"></div>
</div>
<div class="glass-card rounded-xl p-5 border border-white/5 opacity-80 group-hover:opacity-100 transition-all duration-300">
<div class="flex justify-between items-start mb-3">
<div>
<span class="text-[10px] font-bold text-error uppercase tracking-wider mb-1 block">Verification Failed • Oct 18</span>
<h3 class="font-headline text-lg font-bold text-on-primary-container">Sustainable Forestry V2</h3>
</div>
<div class="h-10 w-10 rounded-lg overflow-hidden shrink-0 grayscale">
<img class="w-full h-full object-cover" data-alt="dense forest canopy with sunlight streaming through large leaves in a misty atmosphere" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhhi83es0bZhshbvwqZiuQe8pXYhsIGqVz7LzoB887Ql3ivAshSKRGTsbjYinNEb0o_fo29uFnPQBfKBhvvcKpImLBoFuuy7BRWSCBjC7UsPxITGRoLREbpwnPlKbjcEloyJJsQ_wDsbmiPdWc2VEkufWcTiwwjhsb3OHibSCGEAlkDEA44fXX3jsTXd_ytI0PPmx8REHoOGM-1HEGGvGpKcZ0wDA7n6vig9xZm2TJfUOLYG4wYVcPzreG_xs5DqtJI0B21XCN-0k"/>
</div>
</div>
<p class="text-xs text-on-surface-variant leading-relaxed mb-4">Insufficient satellite data telemetry for the requested period. Re-submission required with updated metrics.</p>
<button class="bg-surface-container-highest text-on-surface text-[10px] font-bold px-4 py-2 rounded-lg uppercase tracking-widest active:scale-95 transition-transform">View Feedback</button>
</div>
</div>
<!-- Item 4: Approved -->
<div class="relative pl-12 group">
<div class="absolute left-0 top-6 w-[40px] h-[40px] flex items-center justify-center rounded-full bg-surface-container-lowest z-10">
<div class="w-3 h-3 rounded-full bg-tertiary"></div>
</div>
<div class="glass-card rounded-xl p-5 border border-white/5 group-hover:bg-surface-container-high transition-all duration-300">
<div class="flex justify-between items-start mb-3">
<div>
<span class="text-[10px] font-bold text-tertiary uppercase tracking-wider mb-1 block">Approved • Oct 10</span>
<h3 class="font-headline text-lg font-bold text-on-primary-container">Delta Water Purification</h3>
</div>
<div class="h-10 w-10 rounded-lg overflow-hidden shrink-0">
<img class="w-full h-full object-cover" data-alt="scenic river delta landscape at sunset with winding blue water channels and dark land" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDRLcSoTgf9KPzMAhf8zzyC9lWKdW9lYbvApYV9FaURFJnQeivOL4Un5a_ryTyIDTfKnzFI3DJx0PZCJgeQoMnQ-Zfat-VF-DRAB4RUSUjexJ8YzWObO4i7oX6TQZoWqYPlc8Hinf7XhyzRyrXpDopoSOQN5XUPZUUugTLY19uwhm3_eZTQSeVdCOCDfT-znVCyS2kEMvSEetTq6TiqQbV5eMB8Zbxbb7ncbtwEwfex7zeZd1GH8Fj6vPU9J2K5Byco5YpXEWwd3o"/>
</div>
</div>
<div class="flex items-center gap-4 mt-4 text-xs text-on-surface-variant">
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-sm">token</span>
<span class="font-mono">4,500 BTRD</span>
</div>
</div>
</div>
</div>
</div>
</main>
<!-- BottomNavBar -->
<nav class="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-8 pt-4 bg-[#111415]/60 backdrop-blur-2xl z-50 rounded-t-[32px] border-t border-white/5 shadow-[0_-8px_30px_rgb(0,0,0,0.12)]">
<a class="flex flex-col items-center justify-center text-slate-500 py-2 hover:text-[#00dbec] transition-colors active:scale-90 duration-200" href="#">
<span class="material-symbols-outlined">home</span>
<span class="font-['Manrope'] text-[10px] font-semibold tracking-wide uppercase mt-1">Home</span>
</a>
<a class="flex flex-col items-center justify-center bg-[#007f89]/20 text-[#00dbec] rounded-2xl px-4 py-2 transition-colors active:scale-90 duration-200" href="#">
<span class="material-symbols-outlined">history</span>
<span class="font-['Manrope'] text-[10px] font-semibold tracking-wide uppercase mt-1">History</span>
</a>
<a class="flex flex-col items-center justify-center text-slate-500 py-2 hover:text-[#00dbec] transition-colors active:scale-90 duration-200" href="#">
<span class="material-symbols-outlined">photo_camera</span>
<span class="font-['Manrope'] text-[10px] font-semibold tracking-wide uppercase mt-1">Camera</span>
</a>
<a class="flex flex-col items-center justify-center text-slate-500 py-2 hover:text-[#00dbec] transition-colors active:scale-90 duration-200" href="#">
<span class="material-symbols-outlined">person</span>
<span class="font-['Manrope'] text-[10px] font-semibold tracking-wide uppercase mt-1">Profile</span>
</a>
</nav>
<!-- Background Decoration -->
<div class="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
<div class="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full"></div>
<div class="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-tertiary/5 blur-[100px] rounded-full"></div>
</div>

  <script>
    document.addEventListener('click', function(e) {
      let target = e.target;
      while(target && target.tagName !== 'A' && target.tagName !== 'BUTTON') {
        target = target.parentNode;
      }
      if(target) {
        let text = target.innerText || target.textContent;
        window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'nav', text: text, tag: target.tagName, href: target.getAttribute('href') }));
      }
    });
  </script>
  </body></html>`;

export const loginHtml = `<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>BlueTrade - Login</title>
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
                  "lg": "0.5rem",
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
    .glass-effect {
      background: rgba(50, 53, 54, 0.4);
      backdrop-filter: blur(32px);
      -webkit-backdrop-filter: blur(32px);
    }
    .material-symbols-outlined {
      font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    }
    .mangrove-pattern {
      background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 4.871L50.258 0.502C49.907 0.151 49.431 0 48.934 0c-0.497 0-0.973 0.151-1.324 0.502L43.24 4.871C42.889 5.222 42.738 5.698 42.738 6.195c0 0.497 0.151 0.973 0.502 1.324l4.369 4.369c0.351 0.351 0.827 0.502 1.324 0.502 0.497 0 0.973-0.151 1.324-0.502l4.369-4.369C54.978 7.168 55.129 6.692 55.129 6.195 55.129 5.698 54.978 5.222 54.627 4.871z' fill='%2300dbec' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E");
    }
  </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background text-on-background min-h-screen flex flex-col overflow-x-hidden">
<!-- Background Decorative Elements -->
<div class="fixed inset-0 mangrove-pattern pointer-events-none"></div>
<div class="fixed -top-24 -left-24 w-96 h-96 bg-primary-container/20 rounded-full blur-[120px] pointer-events-none"></div>
<div class="fixed top-1/2 -right-48 w-[500px] h-[500px] bg-secondary-container/10 rounded-full blur-[150px] pointer-events-none"></div>
<!-- Header: Suppressed Nav Shell for focused task -->
<header class="w-full sticky top-0 z-50 bg-gradient-to-b from-[#111415] to-transparent flex justify-between items-center px-6 py-8">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-container flex items-center justify-center shadow-lg shadow-primary/20">
<span class="material-symbols-outlined text-on-primary text-2xl" style="font-variation-settings: 'FILL' 1;">water_drop</span>
</div>
<h1 class="text-xl font-headline font-bold tracking-tighter text-primary">BlueTrade</h1>
</div>
</header>
<main class="flex-grow flex items-center justify-center px-6 pb-20 relative z-10">
<div class="w-full max-w-md space-y-8">
<!-- Editorial Intro Section -->
<div class="space-y-2">
<span class="text-primary font-label text-xs font-bold tracking-[0.2em] uppercase">The Aquatic Ledger</span>
<h2 class="text-4xl font-headline font-bold text-on-surface tracking-tight leading-tight">Secure Access to <br/><span class="text-primary">Ecosystem Finance</span></h2>
<p class="text-on-surface-variant text-sm font-body max-w-[280px]">Connect your digital identity to the future of mangrove-backed liquidity.</p>
</div>
<!-- Login Form Card -->
<div class="glass-effect rounded-xl p-8 shadow-2xl border border-white/5 space-y-6">
<form class="space-y-5">
<!-- Email Field -->
<div class="space-y-2">
<label class="block text-xs font-label font-bold text-on-surface-variant tracking-widest uppercase px-1">Email Address</label>
<div class="relative group">
<span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors text-xl">alternate_email</span>
<input class="w-full bg-surface-container-low border-none rounded-xl py-4 pl-12 pr-4 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary/30 transition-all font-body text-sm" placeholder="name@ecosystem.io" type="email"/>
</div>
</div>
<!-- Password Field -->
<div class="space-y-2">
<div class="flex justify-between items-center px-1">
<label class="block text-xs font-label font-bold text-on-surface-variant tracking-widest uppercase">Password</label>
<a class="text-[10px] font-label font-bold text-primary/80 uppercase tracking-tighter hover:text-primary transition-colors" href="#">Forgot Access?</a>
</div>
<div class="relative group">
<span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors text-xl">lock</span>
<input class="w-full bg-surface-container-low border-none rounded-xl py-4 pl-12 pr-12 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary/30 transition-all font-body text-sm" placeholder="••••••••••••" type="password"/>
<button class="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface" type="button">
<span class="material-symbols-outlined text-xl">visibility</span>
</button>
</div>
</div>
<!-- Divider -->
<div class="flex items-center gap-4 py-2">
<div class="h-[1px] flex-grow bg-outline-variant/30"></div>
<span class="text-[10px] font-label font-bold text-outline uppercase tracking-[0.2em]">or</span>
<div class="h-[1px] flex-grow bg-outline-variant/30"></div>
</div>
<!-- Optional Wallet Field -->
<div class="space-y-2">
<label class="block text-xs font-label font-bold text-on-surface-variant tracking-widest uppercase px-1">Web3 Identity <span class="text-outline-variant">(Optional)</span></label>
<div class="relative group">
<span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors text-xl">account_balance_wallet</span>
<input class="w-full bg-surface-container-low border-none rounded-xl py-4 pl-12 pr-4 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary/30 transition-all font-body text-sm" placeholder="0x... or ENS Name" type="text"/>
</div>
</div>
<!-- Action Button -->
<div class="pt-4">
<button class="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline font-bold py-4 rounded-xl shadow-lg shadow-primary/20 active:scale-[0.98] transition-transform flex items-center justify-center gap-2">
              Sign In to Dashboard
              <span class="material-symbols-outlined text-xl">arrow_forward</span>
</button>
</div>
</form>
<!-- Secondary Actions -->
<div class="text-center pt-2">
<p class="text-sm font-body text-on-surface-variant">New to BlueTrade? <a class="text-primary font-bold hover:underline decoration-primary/30 underline-offset-4" href="#">Create an account</a></p>
</div>
</div>
<!-- Trust Badges / Info -->
<div class="grid grid-cols-2 gap-4">
<div class="bg-surface-container-low/50 rounded-xl p-4 flex items-center gap-3">
<span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">verified_user</span>
<div class="flex flex-col">
<span class="text-[10px] font-label font-bold text-outline-variant uppercase">Security</span>
<span class="text-xs font-body text-on-surface">AES-256 Auth</span>
</div>
</div>
<div class="bg-surface-container-low/50 rounded-xl p-4 flex items-center gap-3">
<span class="material-symbols-outlined text-tertiary" style="font-variation-settings: 'FILL' 1;">eco</span>
<div class="flex flex-col">
<span class="text-[10px] font-label font-bold text-outline-variant uppercase">Ecology</span>
<span class="text-xs font-body text-on-surface">Net Zero Verified</span>
</div>
</div>
</div>
</div>
</main>
<!-- Footer Info -->
<footer class="w-full p-8 text-center space-y-4">
<div class="flex justify-center gap-6">
<a class="text-outline hover:text-primary transition-colors" href="#"><span class="material-symbols-outlined">help</span></a>
<a class="text-outline hover:text-primary transition-colors" href="#"><span class="material-symbols-outlined">language</span></a>
<a class="text-outline hover:text-primary transition-colors" href="#"><span class="material-symbols-outlined">settings</span></a>
</div>
<p class="text-[10px] font-label font-bold text-outline-variant tracking-widest uppercase">© 2024 BlueTrade Protocol • Built for the Planet</p>
</footer>
<!-- Decorative Gradient Blobs (Floating) -->
<div class="fixed bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>

  <script>
    document.addEventListener('click', function(e) {
      let target = e.target;
      while(target && target.tagName !== 'A' && target.tagName !== 'BUTTON') {
        target = target.parentNode;
      }
      if(target) {
        let text = target.innerText || target.textContent;
        window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'nav', text: text, tag: target.tagName, href: target.getAttribute('href') }));
      }
    });
  </script>
  </body></html>`;

export const profileHtml = `<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
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
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
        }
        .mangrove-gradient {
            background: linear-gradient(135deg, #00dbec 0%, #007f89 100%);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background text-on-background min-h-screen pb-32">
<!-- TopAppBar -->
<header class="bg-[#111415]/80 backdrop-blur-xl w-full sticky top-0 z-50 bg-gradient-to-b from-[#111415] to-transparent shadow-none flex justify-between items-center px-6 py-4 w-full">
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-[#00dbec] active:scale-95 duration-200 cursor-pointer">menu</span>
<h1 class="font-['Space_Grotesk'] font-bold tracking-tight text-xl text-[#00dbec]">BlueTrade</h1>
</div>
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-[#00dbec] opacity-80 transition-opacity cursor-pointer">notifications</span>
</div>
</header>
<main class="px-6 pt-4 space-y-8">
<!-- Profile Hero Section -->
<section class="relative">
<div class="flex flex-col items-center">
<div class="relative group">
<div class="absolute -inset-1 mangrove-gradient rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
<img alt="User Profile" class="relative w-28 h-28 rounded-full border-4 border-surface-container-low object-cover" data-alt="Portrait of a modern professional with soft cinematic lighting against a dark minimalist architectural background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDyOU7UOUQ1XoDiH8ZLw51xsTGydggXCEmZJNesJfNYe0ml2y1LdICW7zgEyRPqrRxFXu5cQX7c6QSAZbmlGwTYqu6utnkhIifiE7flqzffXSNesMghzYPMsqpi6Emsocu4Wv2U-CgYdEYHqId4y0DOzLkXOMxha8dcmgbFtd-5AiXpUpyO_3Qg1kuYfbfek24NFZNGvHUmDTEdqTKFzGC3yc0xpXdnRE5N-EKTKJL86ccWxzGKLaMsgMBHm-dMV53EMDjKhnW0fw"/>
<div class="absolute bottom-1 right-1 bg-primary p-1.5 rounded-full border-2 border-surface shadow-lg">
<span class="material-symbols-outlined text-[14px] text-on-primary font-bold">edit</span>
</div>
</div>
<div class="mt-6 text-center">
<p class="font-label text-primary text-[10px] tracking-[0.2em] uppercase mb-1">Elite Contributor</p>
<h2 class="font-headline text-3xl font-bold tracking-tight text-on-surface">Alex River</h2>
<div class="mt-2 inline-flex items-center gap-2 px-3 py-1.5 bg-surface-container-low rounded-full">
<span class="material-symbols-outlined text-primary text-[16px]">account_balance_wallet</span>
<span class="font-mono text-xs text-on-surface-variant">0x71C...8D42</span>
<span class="material-symbols-outlined text-on-surface-variant text-[14px] cursor-pointer hover:text-primary transition-colors">content_copy</span>
</div>
</div>
</div>
</section>
<!-- Stats Bento Grid -->
<section class="grid grid-cols-2 gap-4">
<div class="bg-surface-container-low p-6 rounded-xl flex flex-col justify-between aspect-square">
<span class="material-symbols-outlined text-primary text-3xl">eco</span>
<div>
<h4 class="text-4xl font-headline font-bold text-on-surface">24</h4>
<p class="text-xs font-label text-on-surface-variant tracking-wide uppercase mt-1">Projects Submitted</p>
</div>
</div>
<div class="bg-surface-container-low p-6 rounded-xl flex flex-col justify-between aspect-square">
<span class="material-symbols-outlined text-tertiary text-3xl">token</span>
<div>
<h4 class="text-4xl font-headline font-bold text-on-surface">1.2k</h4>
<p class="text-xs font-label text-on-surface-variant tracking-wide uppercase mt-1">BLUE Earned</p>
</div>
</div>
</section>
<!-- Account Settings List -->
<section class="space-y-4">
<p class="font-label text-on-surface-variant text-xs tracking-widest uppercase px-1">Settings</p>
<div class="space-y-2">
<div class="group flex items-center justify-between p-5 bg-surface-container-low rounded-xl hover:bg-surface-container-high transition-all duration-300 cursor-pointer">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center">
<span class="material-symbols-outlined text-primary">person</span>
</div>
<span class="font-semibold text-on-surface">Personal Information</span>
</div>
<span class="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform">chevron_right</span>
</div>
<div class="group flex items-center justify-between p-5 bg-surface-container-low rounded-xl hover:bg-surface-container-high transition-all duration-300 cursor-pointer">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center">
<span class="material-symbols-outlined text-primary">security</span>
</div>
<span class="font-semibold text-on-surface">Wallet Security</span>
</div>
<span class="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform">chevron_right</span>
</div>
<div class="group flex items-center justify-between p-5 bg-surface-container-low rounded-xl hover:bg-surface-container-high transition-all duration-300 cursor-pointer">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center">
<span class="material-symbols-outlined text-primary">notifications_active</span>
</div>
<span class="font-semibold text-on-surface">Notifications</span>
</div>
<span class="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform">chevron_right</span>
</div>
</div>
</section>
<!-- Logout Action -->
<section class="pt-4">
<button class="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-error-container text-on-error-container font-bold tracking-tight active:scale-[0.98] transition-all">
<span class="material-symbols-outlined">logout</span>
                Logout from Wallet
            </button>
<p class="text-center text-[10px] text-on-surface-variant mt-6 uppercase tracking-[0.2em] opacity-40">BlueTrade v2.0.4-Aquatic</p>
</section>
</main>
<!-- BottomNavBar -->
<nav class="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-8 pt-4 bg-[#111415]/60 backdrop-blur-2xl z-50 rounded-t-[32px] border-t border-white/5 shadow-[0_-8px_30px_rgb(0,0,0,0.12)]">
<div class="flex flex-col items-center justify-center text-slate-500 py-2 hover:text-[#00dbec] transition-colors active:scale-90 duration-200 cursor-pointer">
<span class="material-symbols-outlined">home</span>
<span class="font-['Manrope'] text-[10px] font-semibold tracking-wide uppercase mt-1">Home</span>
</div>
<div class="flex flex-col items-center justify-center text-slate-500 py-2 hover:text-[#00dbec] transition-colors active:scale-90 duration-200 cursor-pointer">
<span class="material-symbols-outlined">history</span>
<span class="font-['Manrope'] text-[10px] font-semibold tracking-wide uppercase mt-1">History</span>
</div>
<div class="flex flex-col items-center justify-center text-slate-500 py-2 hover:text-[#00dbec] transition-colors active:scale-90 duration-200 cursor-pointer">
<span class="material-symbols-outlined">photo_camera</span>
<span class="font-['Manrope'] text-[10px] font-semibold tracking-wide uppercase mt-1">Camera</span>
</div>
<div class="flex flex-col items-center justify-center bg-[#007f89]/20 text-[#00dbec] rounded-2xl px-4 py-2 transition-transform duration-200">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">person</span>
<span class="font-['Manrope'] text-[10px] font-semibold tracking-wide uppercase mt-1">Profile</span>
</div>
</nav>

  <script>
    document.addEventListener('click', function(e) {
      let target = e.target;
      while(target && target.tagName !== 'A' && target.tagName !== 'BUTTON') {
        target = target.parentNode;
      }
      if(target) {
        let text = target.innerText || target.textContent;
        window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'nav', text: text, tag: target.tagName, href: target.getAttribute('href') }));
      }
    });
  </script>
  </body></html>`;

export const splashHtml = `<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>BlueTrade | The Aquatic Ledger</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;family=Manrope:wght@200;300;400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
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
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .mangrove-pattern {
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5c-5 0-9 4-9 9 0 3 1.5 5.5 4 7.5V30h10V21.5c2.5-2 4-4.5 4-7.5 0-5-4-9-9-9z' fill='%23373a3b' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
        }
        .glass-blur {
            backdrop-filter: blur(32px);
            -webkit-backdrop-filter: blur(32px);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background text-on-background font-body overflow-hidden">
<!-- Splash Screen Wrapper -->
<main class="relative h-screen w-full flex flex-col items-center justify-between overflow-hidden">
<!-- Aquatic Background Elements -->
<div class="absolute inset-0 z-0">
<!-- Deep Ocean Gradient -->
<div class="absolute inset-0 bg-gradient-to-b from-[#111415] via-[#0b2a2e] to-[#111415] opacity-80"></div>
<!-- Mangrove Texture Overlay -->
<div class="absolute inset-0 mangrove-pattern opacity-30"></div>
<!-- Glowing Orbs (Water reflections) -->
<div class="absolute top-[-10%] left-[-20%] w-[80%] h-[60%] rounded-full bg-primary/10 blur-[120px]"></div>
<div class="absolute bottom-[-10%] right-[-20%] w-[80%] h-[60%] rounded-full bg-tertiary/10 blur-[120px]"></div>
</div>
<!-- Top Decorative Kicker -->
<div class="relative z-10 pt-16 flex flex-col items-center">
<span class="text-primary font-label text-[10px] tracking-[0.3em] uppercase font-bold mb-2">Secure Ecosystem</span>
<div class="w-12 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
</div>
<!-- Central Identity Section (Logo Placeholder Area) -->
<div class="relative z-10 flex flex-col items-center gap-8">
<!-- Logo Container (Placeholder for Animation) -->
<div class="relative group">
<!-- Outer Ring Glow -->
<div class="absolute inset-0 bg-primary/20 rounded-full blur-2xl scale-110"></div>
<!-- Main Logo Hex/Icon Shape -->
<div class="relative w-32 h-32 flex items-center justify-center rounded-2xl bg-surface-container-low glass-blur border border-white/5 shadow-2xl">
<div class="relative w-20 h-20 bg-gradient-to-br from-primary to-primary-container rounded-xl flex items-center justify-center transform rotate-45">
<span class="material-symbols-outlined text-on-primary text-5xl -rotate-45" data-icon="waves">waves</span>
</div>
<!-- Floating Bubbles (Small particles) -->
<div class="absolute -top-2 -right-2 w-4 h-4 bg-tertiary rounded-full opacity-60"></div>
<div class="absolute bottom-4 -left-4 w-6 h-6 bg-primary/40 rounded-full blur-sm"></div>
</div>
</div>
<!-- Brand Typography -->
<div class="text-center">
<h1 class="text-5xl font-headline font-bold tracking-tighter text-on-primary-container">
                    BlueTrade
                </h1>
<p class="mt-3 text-on-surface-variant font-light tracking-wide text-sm max-w-[240px] mx-auto leading-relaxed">
                    Decentralized finance for a thriving <span class="text-tertiary-fixed-dim font-medium">blue economy</span>.
                </p>
</div>
</div>
<!-- Footer / Progress Area -->
<div class="relative z-10 pb-20 w-full px-12 flex flex-col items-center">
<!-- Minimal Progress Bar -->
<div class="w-full h-[2px] bg-surface-container-highest rounded-full overflow-hidden mb-6">
<div class="h-full bg-gradient-to-r from-primary to-tertiary-fixed w-1/3 rounded-full"></div>
</div>
<div class="flex items-center gap-3">
<div class="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
<span class="text-on-surface-variant/60 font-label text-[10px] tracking-widest uppercase">Initializing Ledger</span>
</div>
</div>
<!-- Decorative Subtle Mask (Bottom) -->
<div class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-[5]"></div>
</main>
<!-- Visual Polish: Mangrove Image Background (Subtle Editorial Feel) -->
<div class="fixed inset-0 pointer-events-none opacity-[0.03] grayscale contrast-125 z-0">
<img class="w-full h-full object-cover" data-alt="abstract macro view of mangrove roots submerged in clear turquoise ocean water with dappled sunlight filtering through from above" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq7LX36GNmdJ_8vrHgQc3hloXQiSgb_1JxIbbpf6xpyY91SOrf-1Q2wfH1GwAL4r6gOyyQ0lFUCf86x5lSj4Abi1wbP-yK0bSp4sTMXhD7Vkg5QAOZHvYZ_AD7o3U_TrcCKkzVhhbTNcPlvh-M2rjaprlsysC21ePKIFt-Jr8hYJ5QcDSFnMgXjNXHpSdJ3flufV2y0iPcvkEa1AMX6mdx3rUVVdLA9fXwkIZmdBn_6lty4Xvvfus164fk64N46VqZaHbFwkE6CnY"/>
</div>

  <script>
    document.addEventListener('click', function(e) {
      let target = e.target;
      while(target && target.tagName !== 'A' && target.tagName !== 'BUTTON') {
        target = target.parentNode;
      }
      if(target) {
        let text = target.innerText || target.textContent;
        window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'nav', text: text, tag: target.tagName, href: target.getAttribute('href') }));
      }
    });
  </script>
  </body></html>`;

export const uploadHtml = `<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Upload Plantation | BlueTrade</title>
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
        .glass-card {
            background: rgba(50, 53, 54, 0.4);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        input:focus, select:focus, textarea:focus {
            outline: none;
            box-shadow: 0 0 0 2px rgba(0, 219, 236, 0.2);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background text-on-background font-body min-h-screen pb-32">
<!-- Top Navigation Anchor -->
<header class="bg-[#111415]/80 backdrop-blur-xl w-full sticky top-0 z-50 flex justify-between items-center px-6 py-4 w-full bg-gradient-to-b from-[#111415] to-transparent shadow-none">
<div class="flex items-center gap-4">
<button class="text-[#00dbec] opacity-80 transition-opacity active:scale-95 duration-200">
<span class="material-symbols-outlined">menu</span>
</button>
<h1 class="text-xl font-bold tracking-tighter text-[#00dbec] font-['Space_Grotesk']">BlueTrade</h1>
</div>
<div class="flex items-center gap-4">
<button class="text-slate-400 opacity-80 transition-opacity active:scale-95 duration-200">
<span class="material-symbols-outlined">notifications</span>
</button>
</div>
</header>
<main class="px-6 pt-8 max-w-md mx-auto">
<!-- Editorial Header -->
<div class="mb-8">
<span class="text-primary font-label text-[10px] font-bold tracking-[0.15em] uppercase mb-2 block">Climate Asset Portal</span>
<h2 class="text-3xl font-headline font-bold text-on-surface tracking-tight leading-tight">Upload Plantation</h2>
<p class="text-on-surface-variant text-sm mt-2 leading-relaxed">Mint your ecological impact onto the aquatic ledger. Ensure all metadata is accurate for verification.</p>
</div>
<!-- Form Section -->
<form class="space-y-6">
<!-- Image Upload Preview (Visual Soul) -->
<div class="glass-card rounded-xl overflow-hidden aspect-[16/9] relative group">
<img class="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" data-alt="lush tropical mangrove forest reflecting in calm dark water under a soft teal atmospheric sky at dawn" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALVfd6JkDvB-fkMaoVyxYSIy-iNZCN2Qnc7a5CY9eunMqsuNCtKBrEEzb65YQmpWjd3ZigpFQGALUub5WWtVFtVutpc6OEFYj6Q4INAg62jJMCRJ9xgw6Tr92BfbfCfKLn_rKYJGMT_rxWgyik6sEiN4YbuxNAh22N-M0YLVKRPEqVhYJd1IcrqSNLwcx1HGu00QxkJKtldbj88w5pL2z5cbE2DQb2rcntUR80zT13U9zWFatB5sJlJAEdUmNeSrYRfj21wpd4ARo"/>
<div class="absolute inset-0 flex flex-col items-center justify-center bg-surface-container-lowest/40">
<span class="material-symbols-outlined text-primary text-4xl mb-2">photo_camera</span>
<span class="text-xs font-bold tracking-widest uppercase text-on-primary-container">Capture Site Data</span>
</div>
</div>
<!-- Input Fields in Recessed Wells -->
<div class="space-y-4">
<div class="space-y-2">
<label class="text-xs font-bold text-primary tracking-widest uppercase ml-1">Plantation Name</label>
<div class="bg-surface-container-low rounded-xl px-4 py-4">
<input class="w-full bg-transparent border-none text-on-surface placeholder:text-outline-variant p-0 font-medium" placeholder="e.g. Mangrove Delta Alpha" type="text"/>
</div>
</div>
<div class="grid grid-cols-2 gap-4">
<div class="space-y-2">
<label class="text-xs font-bold text-primary tracking-widest uppercase ml-1">Ecosystem Type</label>
<div class="bg-surface-container-low rounded-xl px-4 py-4 relative">
<select class="w-full bg-transparent border-none text-on-surface p-0 font-medium appearance-none">
<option>Mangrove</option>
<option>Coral Reef</option>
<option>Sea Grass</option>
<option>Tidal Marsh</option>
</select>
<span class="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline text-sm pointer-events-none">expand_more</span>
</div>
</div>
<div class="space-y-2">
<label class="text-xs font-bold text-primary tracking-widest uppercase ml-1">Area (Hectares)</label>
<div class="bg-surface-container-low rounded-xl px-4 py-4">
<input class="w-full bg-transparent border-none text-on-surface placeholder:text-outline-variant p-0 font-medium" placeholder="0.00" type="number"/>
</div>
</div>
</div>
<div class="space-y-2">
<label class="text-xs font-bold text-primary tracking-widest uppercase ml-1">Geographic Metadata</label>
<div class="bg-surface-container-low rounded-xl h-24 overflow-hidden relative">
<img class="w-full h-full object-cover opacity-40" data-alt="abstract satellite map view of coastline with deep blue water and geometric land shapes in dark tones" data-location="Singapore" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlzxaOro9QODrFeZqQh--wA5abeI_xTq4m_-78UKMcTxqatAXIsTBiaBCHif9iYtbkvopN4JER2de8rKhDrRhgrr1139ej5MY0foSvikVXYCtsfCeAri-zr9U0LYbXI8IeTe8905nNKuAQpCbcZOP7SoyN17xsPBWHwkTwyanXwwd4hyXuLcclll4N1gwSf1pM16x0qQq2zkdScjmkcLmcfXpGLTbdUIFLqkkoBL4GctL6erE0d8gWkb5oMmgTcZlWZ0Ga_hxd1XM"/>
<div class="absolute inset-0 flex items-center justify-center">
<div class="bg-primary/20 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 border border-primary/30">
<span class="material-symbols-outlined text-primary text-xs" style="font-variation-settings: 'FILL' 1;">location_on</span>
<span class="text-[10px] font-bold text-on-primary-container">FETCHING COORDINATES</span>
</div>
</div>
</div>
</div>
<div class="space-y-2">
<label class="text-xs font-bold text-primary tracking-widest uppercase ml-1">Notes</label>
<div class="bg-surface-container-low rounded-xl px-4 py-4">
<textarea class="w-full bg-transparent border-none text-on-surface placeholder:text-outline-variant p-0 font-medium resize-none" placeholder="Describe the biological diversity or restoration progress..." rows="3"></textarea>
</div>
</div>
</div>
<!-- Submit Button (Signature Gradient) -->
<button class="w-full py-5 rounded-xl bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold text-sm tracking-widest uppercase shadow-[0_8px_32px_rgba(0,219,236,0.3)] active:scale-[0.98] transition-all flex items-center justify-center gap-3" type="submit">
<span class="material-symbols-outlined text-xl">token</span>
                Submit to Blockchain
            </button>
<!-- Verification Status Pill -->
<div class="flex justify-center mt-4">
<div class="flex items-center gap-2 px-4 py-2 rounded-full border border-outline-variant/30 bg-surface-container-lowest">
<div class="w-2 h-2 rounded-full bg-tertiary shadow-[0_0_8px_rgba(136,217,130,0.6)] animate-pulse"></div>
<span class="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant">Validator Node: Online</span>
</div>
</div>
</form>
</main>
<!-- Bottom Navigation Shell -->
<nav class="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-8 pt-4 bg-[#111415]/60 backdrop-blur-2xl z-50 rounded-t-[32px] border-t border-white/5 shadow-[0_-8px_30px_rgb(0,0,0,0.12)]">
<a class="flex flex-col items-center justify-center text-slate-500 py-2 hover:text-[#00dbec] transition-colors active:scale-90 transition-transform duration-200" href="#">
<span class="material-symbols-outlined">home</span>
<span class="font-['Manrope'] text-[10px] font-semibold tracking-wide uppercase">Home</span>
</a>
<a class="flex flex-col items-center justify-center text-slate-500 py-2 hover:text-[#00dbec] transition-colors active:scale-90 transition-transform duration-200" href="#">
<span class="material-symbols-outlined">history</span>
<span class="font-['Manrope'] text-[10px] font-semibold tracking-wide uppercase">History</span>
</a>
<a class="flex flex-col items-center justify-center bg-[#007f89]/20 text-[#00dbec] rounded-2xl px-4 py-2 active:scale-90 transition-transform duration-200" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">photo_camera</span>
<span class="font-['Manrope'] text-[10px] font-semibold tracking-wide uppercase">Camera</span>
</a>
<a class="flex flex-col items-center justify-center text-slate-500 py-2 hover:text-[#00dbec] transition-colors active:scale-90 transition-transform duration-200" href="#">
<span class="material-symbols-outlined">person</span>
<span class="font-['Manrope'] text-[10px] font-semibold tracking-wide uppercase">Profile</span>
</a>
</nav>

  <script>
    document.addEventListener('click', function(e) {
      let target = e.target;
      while(target && target.tagName !== 'A' && target.tagName !== 'BUTTON') {
        target = target.parentNode;
      }
      if(target) {
        let text = target.innerText || target.textContent;
        window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'nav', text: text, tag: target.tagName, href: target.getAttribute('href') }));
      }
    });
  </script>
  </body></html>`;

