# Blue Trade - BlueCarbon Chain MRV Platform

Production-ready starter monorepo for a blue carbon Monitoring, Reporting, and Verification platform.

## Monorepo Structure

- `backend` - Node.js + Express + MongoDB API
- `frontend` - React + Vite + Tailwind + shadcn-style UI starter
- `mobile` - React Native + Expo field app starter
- `contracts` - Solidity contracts + Hardhat deployment
- `docs` - diagrams, API docs, deployment guide

## Phase-Based Build

1. Phase 1 - Folder setup and package initialization
2. Phase 2 - Backend APIs + MongoDB schemas + auth + seed data
3. Phase 3 - Smart contracts + deployment scripts
4. Phase 4 - Web dashboards + role-based views + maps/charts
5. Phase 5 - Mobile field data capture app
6. Phase 6 - Marketplace + blockchain integration flows
7. Phase 7 - Testing and deployment checklist

## Quick Start

### 1) Backend

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

### 2) Frontend

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

### 3) Mobile (Expo)

```bash
cd mobile
npm install
npm run start
```

### 4) Smart Contracts

```bash
cd contracts
npm install
cp .env.example .env
npx hardhat compile
npx hardhat run scripts/deploy.js --network amoy
```

## Roles

- Super Admin (NCCR)
- NGO
- Field Staff
- Panchayat / Community Member
- Company Buyer

## Environment

Each module includes its own `.env.example`.

## Notes

- This starter is structured for production growth with separated services and clear module boundaries.
- IPFS upload service includes a pluggable adapter pattern and can be switched to Pinata/Web3.Storage.
- AI verification module is a placeholder service in `backend/services/verificationService.js`.
