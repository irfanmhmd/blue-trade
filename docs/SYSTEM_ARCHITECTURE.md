# System Architecture

```mermaid
flowchart LR
  A[Field Staff Mobile App] --> B[Backend API]
  C[Web Dashboard] --> B
  B --> D[(MongoDB)]
  B --> E[IPFS Gateway]
  B --> F[Polygon Amoy Contracts]
  F --> G[Registry]
  F --> H[BCC ERC20]
  F --> I[Project NFT ERC721]
  J[Company Buyer + MetaMask] --> C
  C --> F
```
