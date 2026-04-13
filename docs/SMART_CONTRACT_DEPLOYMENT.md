# Smart Contract Deployment Guide

## Prerequisites

- Node.js 18+
- Amoy testnet wallet with MATIC

## Steps

1. `cd contracts`
2. `npm install`
3. `cp .env.example .env`
4. Fill `AMOY_RPC_URL`, `PRIVATE_KEY`
5. `npx hardhat compile`
6. `npx hardhat run scripts/deploy.js --network amoy`

## Outputs

Deployment script prints:

- Registry address
- CarbonCredit address
- ProjectNFT address

Copy these addresses into `backend/.env`.
