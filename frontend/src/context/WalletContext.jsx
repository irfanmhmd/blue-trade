import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { ethers } from "ethers";

const WalletContext = createContext(null);

export function WalletProvider({ children }) {
  const [address, setAddress] = useState(null);
  const [chainId, setChainId] = useState(null);
  const [connecting, setConnecting] = useState(false);
  const [error, setError] = useState(null);

  const isMetaMask = () => Boolean(window.ethereum);

  const connect = useCallback(async () => {
    if (!isMetaMask()) {
      setError("MetaMask not installed. Please install it from metamask.io");
      return null;
    }
    setConnecting(true);
    setError(null);
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const addr = await signer.getAddress();
      const network = await provider.getNetwork();
      setAddress(addr);
      setChainId(Number(network.chainId));
      return addr;
    } catch (err) {
      setError(err.message || "Connection rejected");
      return null;
    } finally {
      setConnecting(false);
    }
  }, []);

  const disconnect = useCallback(() => {
    setAddress(null);
    setChainId(null);
    setError(null);
    localStorage.removeItem("walletAddress");
  }, []);

  // Auto-reconnect disabled - user must manually connect each session
  // useEffect(() => { ... }, []);

  // Listen to MetaMask account/chain changes in real time
  useEffect(() => {
    if (!isMetaMask()) return;

    const onAccountsChanged = (accounts) => {
      if (accounts.length === 0) {
        disconnect();
      } else {
        setAddress(accounts[0]);
      }
    };

    const onChainChanged = (id) => setChainId(parseInt(id, 16));

    window.ethereum.on("accountsChanged", onAccountsChanged);
    window.ethereum.on("chainChanged", onChainChanged);
    return () => {
      window.ethereum.removeListener("accountsChanged", onAccountsChanged);
      window.ethereum.removeListener("chainChanged", onChainChanged);
    };
  }, [disconnect]);

  const shortAddress = address ? `${address.slice(0, 6)}...${address.slice(-4)}` : null;
  const isAmoy = chainId === 80002;
  const isLocal = chainId === 31337;
  const isCorrectNetwork = isAmoy || isLocal;

  return (
    <WalletContext.Provider value={{ address, shortAddress, chainId, isAmoy, isLocal, isCorrectNetwork, connecting, error, connect, disconnect }}>
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  return useContext(WalletContext);
}
