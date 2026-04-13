import { useEffect, useState, useRef } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import api from "./services/api";
import { fetchPlantations, fetchListings, fetchAllListings, approvePlantation, rejectPlantation, buyListing } from "./services/dataService";
import { WalletProvider, useWallet } from "./context/WalletContext";
import WalletBar from "./components/WalletBar";

import * as Stitch from "./stitch_assets";

// A wrapper component to safely inject HTML and handle internal link navigation automatically
const HtmlWrapper = ({ html, onMarketplaceBuy }) => {
  const navigate = useNavigate();
  const { connect: walletConnect, address, shortAddress } = useWallet();

  // Inject real wallet address into dashboard header whenever wallet connects
  useEffect(() => {
    if (!address) return;
    // Update any hardcoded wallet address text in the injected HTML
    const walletEls = document.querySelectorAll('[class*="wallet"], [data-wallet]');
    walletEls.forEach(el => {
      if (el.textContent.match(/0x[0-9a-fA-F]{2,4}\.{3}/)) {
        el.textContent = shortAddress;
      }
    });
    // Update all Connect Wallet buttons to show address
    document.querySelectorAll('button').forEach(btn => {
      if ((btn.textContent || '').toLowerCase().includes('connect wallet') ||
          (btn.textContent || '').toLowerCase().includes('connect')) {
        btn.textContent = shortAddress;
      }
    });
  }, [address, shortAddress]);

  useEffect(() => {
    const handleIntercept = async (e) => {
      let target = e.target;
      while (target && target.tagName !== 'A' && target.tagName !== 'BUTTON') {
        target = target.parentNode;
      }
      if (target) {
        if (target.tagName === 'A') {
          const href = target.getAttribute('href');
          if ((target.textContent || '').toLowerCase().includes("sign out")) {
            e.preventDefault();
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            navigate("/login");
            return;
          }
          if (href && href.startsWith('/')) {
            e.preventDefault();
            navigate(href);
          }
        }
        if (target.tagName === 'BUTTON') {
          const text = (target.textContent || '').toLowerCase().trim();
          // Skip buy-btn class — handled by CompanyView
          if (target.classList.contains('buy-btn')) return;
          if (text === 'connect wallet' || text === 'connect') {
            e.preventDefault();
            const addr = await walletConnect();
            if (addr) target.textContent = `${addr.slice(0, 6)}...${addr.slice(-4)}`;
          } else if (text.includes("buy more") && onMarketplaceBuy) {
            e.preventDefault();
            onMarketplaceBuy();
          }
        }
      }
    };
    document.addEventListener("click", handleIntercept);
    return () => document.removeEventListener("click", handleIntercept);
  }, [navigate, onMarketplaceBuy, walletConnect]);

  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  const cleanHtml = bodyMatch ? bodyMatch[1] : html;

  return <div dangerouslySetInnerHTML={{ __html: cleanHtml }} className="text-[#e1e3e4]" />;
};

function MarketplaceView() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetchListings().then(setListings).catch(() => {});
  }, []);

  const handleBuy = async (listingId) => {
    try {
      await buyListing(listingId, "pending_wallet_tx");
      setListings(prev => prev.filter(l => l._id !== listingId));
      alert("Purchase recorded! Connect wallet to complete on-chain transfer.");
    } catch (e) {
      alert("Purchase failed: " + (e.response?.data?.message || e.message));
    }
  };

  return <HtmlWrapper html={Stitch.marketplaceHtml} onMarketplaceBuy={handleBuy} />;
}

function AdminView() {
  const [plantations, setPlantations] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    fetchPlantations().then(data => {
      setPlantations(data);
      const total = data.length;
      const pending = data.filter(p => p.status === "pending").length;
      const approved = data.filter(p => p.status === "approved").length;
      const credits = data.reduce((sum, p) => sum + (p.carbonEstimated || 0), 0);

      if (!ref.current) return;
      // Find all h3 stat numbers inside the bento grid cards and replace with real data
      const cards = ref.current.querySelectorAll('.grid .bg-surface-container-low, .grid [class*="surface-container-low"]');
      const statMap = [
        { label: 'Total Projects', value: total.toLocaleString() },
        { label: 'Pending Verifications', value: pending.toLocaleString() },
        { label: 'Carbon Credits Issued', value: credits.toLocaleString() },
      ];
      cards.forEach(card => {
        const label = card.querySelector('p')?.textContent?.trim();
        const match = statMap.find(s => label && label.includes(s.label.split(' ')[0]));
        if (match) {
          const h3 = card.querySelector('h3');
          if (h3) h3.textContent = match.value;
        }
      });
    }).catch(() => {});
  }, []);

  const handleApprove = async (id) => {
    await approvePlantation(id);
    setPlantations(prev => prev.map(p => p._id === id ? { ...p, status: "approved" } : p));
  };

  const handleReject = async (id) => {
    await rejectPlantation(id);
    setPlantations(prev => prev.map(p => p._id === id ? { ...p, status: "rejected" } : p));
  };

  // Build modified adminHtml with real pending plantation cards injected
  const pendingList = plantations.filter(p => p.status === "pending");
  const pendingCardsHtml = pendingList.map(p => `
    <div class="glass-panel rounded-xl overflow-hidden group" data-id="${p._id}">
      <div class="h-48 w-full relative bg-surface-container-high flex items-center justify-center">
        ${p.imageUrl ? `<img src="${p.imageUrl}" class="w-full h-full object-cover" />` : `<span class="material-symbols-outlined text-6xl text-primary/30">eco</span>`}
        <div class="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-primary uppercase tracking-widest">${p.ecosystemType}</div>
      </div>
      <div class="p-6 space-y-4">
        <div class="flex justify-between items-start">
          <div>
            <h4 class="text-lg font-bold">${p.plantationName}</h4>
            <p class="text-on-surface-variant text-xs flex items-center gap-1">
              <span class="material-symbols-outlined text-xs">location_on</span>
              ${p.latitude}° N, ${p.longitude}° E
            </p>
          </div>
          <div class="text-right">
            <p class="text-primary font-bold">${p.area} Ha</p>
            <p class="text-[10px] text-on-surface-variant uppercase">Total Area</p>
          </div>
        </div>
        <div class="flex gap-3">
          <button onclick="window.approveP('${p._id}')" class="flex-1 py-3 bg-tertiary-container/20 text-tertiary hover:bg-tertiary-container/40 rounded-xl font-bold text-sm transition-all">Approve</button>
          <button onclick="window.rejectP('${p._id}')" class="flex-1 py-3 bg-error-container/20 text-error hover:bg-error-container/40 rounded-xl font-bold text-sm transition-all">Reject</button>
        </div>
      </div>
    </div>
  `).join('');

  useEffect(() => {
    window.approveP = handleApprove;
    window.rejectP = handleReject;
    return () => { delete window.approveP; delete window.rejectP; };
  }, [plantations]);

  // Inject real pending cards into the existing plantation verification grid
  const adminHtmlWithData = pendingList.length > 0
    ? Stitch.adminHtml.replace(
        /(<div class="grid grid-cols-1 md:grid-cols-2 gap-6">)[\s\S]*?(<\/div>\s*<\/div>\s*<!-- Recent Activity)/,
        `$1${pendingCardsHtml}</div></div><!-- Recent Activity`
      )
    : Stitch.adminHtml;

  return <div ref={ref}><HtmlWrapper html={adminHtmlWithData} /></div>;
}

function NgoView() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const ref = useRef(null);

  useEffect(() => {
    fetchPlantations().then(data => {
      const mine = data.filter(p => p.uploadedBy?._id === user.id || p.uploadedBy === user.id);
      const total = mine.length;
      const approved = mine.filter(p => p.status === "approved").length;
      const pending = mine.filter(p => p.status === "pending").length;
      const credits = mine.reduce((sum, p) => sum + (p.carbonEstimated || 0), 0);

      if (!ref.current) return;
      // Inject into the 4 stat cards in the NGO dashboard
      const statCards = ref.current.querySelectorAll('.grid-cols-1.md\\:grid-cols-4 > div, .md\\:grid-cols-4 > div');
      const values = [null, credits.toLocaleString(), null, total.toLocaleString()];
      statCards.forEach((card, i) => {
        if (values[i] !== null) {
          const h3 = card.querySelector('h3');
          if (h3) h3.textContent = values[i];
        }
      });
    }).catch(() => {});
  }, []);

  return <div ref={ref}><HtmlWrapper html={Stitch.ngoHtml} /></div>;
}

function CompanyView() {
  const ref = useRef(null);
  const { address } = useWallet();

  const injectData = (available, purchased) => {
    if (!ref.current) return;
    const totalCredits = purchased.reduce((sum, l) => sum + (l.creditsAvailable || 0), 0);
    const totalSpent = purchased.reduce((sum, l) => sum + (l.creditsAvailable * l.pricePerCredit), 0);

    // Fix wallet balance card
    ref.current.querySelectorAll('span').forEach(span => {
      if (span.textContent.trim() === 'Wallet Balance') {
        const card = span.closest('.glass-card');
        if (!card) return;
        const h2 = card.querySelector('h2');
        const p = card.querySelector('p');
        if (h2) h2.innerHTML = `${totalCredits} <span class="text-primary">BCT</span>`;
        if (p) p.textContent = `\u2248 $${totalSpent.toLocaleString()}.00 USD`;
      }
    });

    // Find marketplace card grid
    let cardGrid = null;
    ref.current.querySelectorAll('.grid').forEach(g => {
      if (g.querySelectorAll('.bg-surface-container-low').length >= 2) cardGrid = g;
    });
    if (cardGrid) {
      cardGrid.innerHTML = available.length === 0
        ? `<div class="col-span-3 text-center py-12 text-on-surface-variant">No listings available.</div>`
        : available.slice(0, 3).map(l => `
          <div class="bg-surface-container-low rounded-xl overflow-hidden">
            <div class="h-48 relative bg-surface-container-high flex items-center justify-center">
              <span class="material-symbols-outlined text-6xl" style="color:rgba(0,219,236,0.2)">eco</span>
              <div class="absolute top-4 left-4 px-3 py-1 rounded-full flex items-center gap-2" style="background:rgba(15,18,19,0.8)">
                <span class="material-symbols-outlined text-xs" style="color:#88d982;font-variation-settings:'FILL' 1">verified</span>
                <span style="font-size:10px;font-weight:700;color:white;text-transform:uppercase">Verified</span>
              </div>
            </div>
            <div class="p-6" style="display:flex;flex-direction:column;gap:16px">
              <div style="display:flex;justify-content:space-between">
                <div><h4 style="font-size:18px;font-weight:700;color:#e1e3e4">${l.projectName}</h4>
                <p style="font-size:12px;color:#bdc9c8">${l.location}</p></div>
                <div style="text-align:right"><span style="color:#00dbec;font-weight:700">$${l.pricePerCredit}</span>
                <span style="display:block;font-size:10px;color:#bdc9c8;text-transform:uppercase">Per Credit</span></div>
              </div>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;padding:16px 0;border-top:1px solid rgba(255,255,255,0.05);border-bottom:1px solid rgba(255,255,255,0.05)">
                <div><span style="font-size:10px;color:#bdc9c8;text-transform:uppercase;display:block;margin-bottom:4px">Available</span>
                <span style="font-size:14px;font-weight:700;color:#e1e3e4">${l.creditsAvailable} tCO2e</span></div>
                <div><span style="font-size:10px;color:#bdc9c8;text-transform:uppercase;display:block;margin-bottom:4px">Seller</span>
                <span style="font-size:14px;font-weight:700;color:#e1e3e4">${l.seller?.organization || l.seller?.name || 'NGO'}</span></div>
              </div>
              <button data-listing-id="${l._id}" class="buy-btn" style="width:100%;padding:12px;background:#00dbec;color:#001f23;font-weight:700;border-radius:12px;border:none;cursor:pointer;font-size:14px">
                Purchase Credits
              </button>
            </div>
          </div>`).join('');
    }

    // Inject transaction history
    const tbody = ref.current.querySelector('tbody');
    if (tbody) {
      tbody.innerHTML = purchased.length === 0
        ? `<tr><td colspan="4" style="padding:32px;text-align:center;color:#bdc9c8">No purchases yet.</td></tr>`
        : purchased.map(l => `
          <tr style="border-bottom:1px solid rgba(255,255,255,0.05)">
            <td style="padding:16px 24px">
              <div style="display:flex;align-items:center;gap:12px">
                <div style="width:32px;height:32px;border-radius:8px;background:#323536;display:flex;align-items:center;justify-content:center">
                  <span class="material-symbols-outlined" style="color:#88d982;font-size:16px">forest</span>
                </div>
                <span style="font-size:14px;font-weight:700;color:#e1e3e4">${l.projectName}</span>
              </div>
            </td>
            <td style="padding:16px 24px;font-size:14px;color:#e1e3e4">${l.creditsAvailable} tCO2e</td>
            <td style="padding:16px 24px;font-size:14px;font-weight:700;color:#e1e3e4">$${(l.creditsAvailable * l.pricePerCredit).toLocaleString()}</td>
            <td style="padding:16px 24px;font-size:14px;color:#bdc9c8;text-align:right">${new Date(l.updatedAt).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'})}</td>
          </tr>`).join('');
    }
  };

  useEffect(() => {
    Promise.all([fetchListings(), fetchAllListings()])
      .then(([available, purchased]) => {
        setTimeout(() => injectData(available, purchased), 300);
      }).catch(console.error);
  }, []);

  useEffect(() => {
    const handleClick = async (e) => {
      const btn = e.target.closest('.buy-btn');
      if (!btn) return;
      e.preventDefault();
      e.stopImmediatePropagation();
      const id = btn.getAttribute('data-listing-id');
      if (!id) return;
      btn.textContent = 'Processing...';
      btn.disabled = true;
      try {
        await buyListing(id, address || 'pending_wallet_tx');
        btn.textContent = '\u2713 Purchased!';
        btn.style.cssText = 'width:100%;padding:12px;background:rgba(136,217,130,0.2);color:#88d982;font-weight:700;border-radius:12px;border:none';
        Promise.all([fetchListings(), fetchAllListings()])
          .then(([a, p]) => setTimeout(() => injectData(a, p), 100))
          .catch(() => {});
      } catch(err) {
        btn.textContent = 'Purchase Credits';
        btn.disabled = false;
        alert('Failed: ' + (err.response?.data?.message || err.message));
      }
    };
    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, [address]);

  return <div ref={ref}><HtmlWrapper html={Stitch.companyHtml} /></div>;
}

const roleRoutes = {
  super_admin: "/admin",
  ngo: "/ngo",
  field_staff: "/ngo",
  community_member: "/ngo",
  company_buyer: "/company"
};

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
}

function LoginView() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const { data } = await api.post("/api/auth/login", { email, password });
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate(roleRoutes[data.user.role] || "/ngo");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#111415] text-[#e1e3e4] font-sans px-4">
      <div className="w-full max-w-md p-8 bg-[rgba(50,53,54,0.4)] backdrop-blur-3xl rounded-xl border border-white/5 shadow-2xl space-y-6 relative z-10">
        <div className="space-y-2 text-center">
          <span className="text-[#00dbec] text-xs font-bold tracking-widest uppercase">The Aquatic Ledger</span>
          <h2 className="text-3xl font-bold">Secure Access</h2>
          <p className="text-[#bdc9c8] text-sm">Sign in to access the ecosystem</p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm px-4 py-3 rounded-xl">
            {error}
          </div>
        )}
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <label className="block text-xs font-bold text-[#bdc9c8] uppercase tracking-widest">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full bg-[#191c1d] border-none rounded-xl p-4 text-white focus:ring-2 focus:ring-[#00dbec]"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-bold text-[#bdc9c8] uppercase tracking-widest">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full bg-[#191c1d] border-none rounded-xl p-4 text-white focus:ring-2 focus:ring-[#00dbec]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-[#00dbec] to-[#007f89] text-[#001f23] font-bold py-4 rounded-xl mt-4 hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In to Dashboard"}
          </button>
        </form>
      </div>
    </div>
  );
}

function AppRoutes() {
  return (
    <div className="w-full h-screen overflow-x-hidden bg-slate-950">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/ngo" element={<ProtectedRoute><NgoView /></ProtectedRoute>} />
        <Route path="/company" element={<ProtectedRoute><CompanyView /></ProtectedRoute>} />
        <Route path="/admin" element={<ProtectedRoute><AdminView /></ProtectedRoute>} />
        <Route path="/analytics" element={<ProtectedRoute><HtmlWrapper html={Stitch.analyticsHtml} /></ProtectedRoute>} />
        <Route path="/registry" element={<ProtectedRoute><HtmlWrapper html={Stitch.registryHtml} /></ProtectedRoute>} />
        <Route path="/marketplace" element={<ProtectedRoute><MarketplaceView /></ProtectedRoute>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <WalletBarWrapper />
    </div>
  );
}

function WalletBarWrapper() {
  const token = localStorage.getItem("token");
  if (!token) return null;
  return <WalletBar />;
}

export default function App() {
  return (
    <WalletProvider>
      <AppRoutes />
    </WalletProvider>
  );
}
