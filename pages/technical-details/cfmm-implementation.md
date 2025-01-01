# CFMM Implementation in Gobbler (F8M3)

## Core Implementation
- Built for Solana Virtual Machine (SVM)
- Uses constant function market maker (CFMM) model
- Base formula: `x * y = k^2`
  - x and y represent token quantities in reserve pools
  - Maintains equilibrium: `(x + Δx) * (y - Δy) = x * y = k^2`

## Bonding Curve System
- Dual-curve mechanism: `k^2 * k'^2 = virtual_α`
- Components:
  - k^2: Traditional constant product
  - k'^2: Dynamic constant evolving with liquidity timing
  - virtual_α: Parameter governing k and k' relationship

## Liquidity Pool Types
1. Traditional LP Pools
   - Operates like conventional DEXs
   - Liquidity providers earn swap-based fees
   - Withdrawals available anytime

2. Bonding Curve LPs
   - LP tokens priced on bonding curve
   - Early depositors receive higher potential returns
   - Incentivizes delayed withdrawals
   - Uses game-theory approach for liquidity management

## Liquidity Mechanics
- Early providers receive more tokens (L(t_early) > L(t_late))
- Fee allocation f(t) proportional to L(t)
- System encourages maintained positions for longer periods

**NOTE:** All above information is based off the [F8M3 Security Audit](../security-and-audits/audit-reports/f8m3-security-review.md). More information about SNAPPER implementation coming soon.