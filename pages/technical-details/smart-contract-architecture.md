# Smart Contract Architecture of FOMO3D

FOMO3D's smart contracts are built on Solana with the following architecture:

- **AMM Core**: Handles liquidity pools, swaps, and LP token minting/burning.
- **Launchpad**: Manages project submissions, token distribution, and vesting schedules.
- **Fee Distribution**: Automatically allocates fees to different parties (LPs, protocol, development).

## Key Functions

- `addLiquidity`: Adds tokens to a pool, mints LP tokens.
- `removeLiquidity`: Burns LP tokens, returns tokens to providers.
- `swap`: Executes token swaps based on pool reserves.

## Interaction

Users interact through the frontend, which communicates with these contracts via Solana's transaction system.