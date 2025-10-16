# PlatePal - AI Meal Planning on Base

AI-powered meal planning & social food challenges on Base blockchain.

## Features

- 🤖 **AI Recipe Generation**: Personalized recipes based on pantry, diet, and fitness goals
- 🏆 **Proof-of-Plate Challenges**: Join challenges, share meals, earn onchain rewards
- 🎖️ **NFT Badges**: Collect unique badges for healthy eating achievements
- 👥 **Social Sharing**: Discover and share recipes within the Farcaster network

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (L2 on Ethereum)
- **Wallet**: OnchainKit for identity and transactions
- **Social**: Farcaster Mini App integration
- **Styling**: Tailwind CSS with Coinbase theme

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

Create a `.env.local` file:

```
NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_api_key_here
```

## Project Structure

```
app/
├── page.tsx              # Home page
├── recipes/              # Recipe discovery
├── challenges/           # Proof-of-Plate challenges
├── badges/               # NFT badge collection
├── profile/              # User profile & settings
└── components/           # Shared components

lib/
├── types.ts              # TypeScript interfaces
└── mockData.ts           # Sample data

public/
└── .well-known/
    └── farcaster.json    # Mini App manifest
```

## Base Mini App Integration

- Chain ID: 8453 (Base Mainnet)
- Testnet: 84532 (Base Sepolia)
- OnchainKit for wallet and identity
- MiniKit for Farcaster context
- Gasless transactions via Paymaster

## License

MIT
