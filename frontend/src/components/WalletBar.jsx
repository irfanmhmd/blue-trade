import { useWallet } from "../context/WalletContext";

export default function WalletBar() {
  const { address, shortAddress, chainId, isCorrectNetwork, isLocal, connecting, error, connect, disconnect } = useWallet();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] flex items-center justify-between px-6 py-3 bg-[#0c0f10] border-t border-[#3e4949]">
      <div className="flex items-center gap-3">
        {address ? (
          <>
            <div className="w-2 h-2 rounded-full bg-[#88d982] animate-pulse" />
            <span className="text-[#88d982] text-xs font-bold">Connected</span>
            <span className="text-[#bdc9c8] text-xs font-mono">{shortAddress}</span>
            {!isCorrectNetwork && chainId && (
              <span className="text-yellow-400 text-xs font-bold bg-yellow-400/10 px-2 py-0.5 rounded-full">
                ⚠ Wrong Network (chainId: {chainId})
              </span>
            )}
            {isCorrectNetwork && (
              <span className="text-[#00dbec] text-xs bg-[#00dbec]/10 px-2 py-0.5 rounded-full">
                {isLocal ? 'Hardhat Local' : 'Polygon Amoy'}
              </span>
            )}
          </>
        ) : (
          <>
            <div className="w-2 h-2 rounded-full bg-[#879392]" />
            <span className="text-[#879392] text-xs font-bold">Wallet not connected</span>
          </>
        )}
        {error && <span className="text-red-400 text-xs">{error}</span>}
      </div>

      <div className="flex items-center gap-2">
        {address ? (
          <button
            onClick={disconnect}
            className="text-xs font-bold text-[#879392] hover:text-red-400 px-3 py-1.5 rounded-lg border border-[#3e4949] hover:border-red-400/30 transition-all"
          >
            Disconnect
          </button>
        ) : (
          <button
            onClick={connect}
            disabled={connecting}
            className="text-xs font-bold bg-gradient-to-r from-[#00dbec] to-[#007f89] text-[#001f23] px-4 py-1.5 rounded-lg disabled:opacity-50 transition-all hover:opacity-90 active:scale-95"
          >
            {connecting ? 'Connecting...' : 'Connect MetaMask'}
          </button>
        )}
      </div>
    </div>
  );
}
