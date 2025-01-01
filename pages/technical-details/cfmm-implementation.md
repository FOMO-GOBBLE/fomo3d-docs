# CFMM Implementation in Gobbler (F8M3)

## Core Implementation
- Built for Solana Virtual Machine (SVM)
- Uses constant function market maker (CFMM) model
- Base formula: `x * y = k^2`
  - x and y represent token quantities in reserve pools
  - Maintains equilibrium: `(x + Δx) * (y - Δy) = x * y = k^2`

## Bonding Curve System
- Novel dual-curve mechanism: `k^2 * k'^2 = virtual_α`
  - k^2: Traditional constant product
  - k'^2: Dynamic constant evolving with liquidity timing
  - virtual_α: Parameter governing k and k' relationship

## Deposit/Withdraw Calculations
For classic AMM design:
- Δx = ΔL * Rx / L
- Δy = ΔL * Ry / L
Where:
- Rx and Ry are total token reserves
- L represents total LP token supply

## Modified Formulas for Bonding Curve
- L *L' = virtual_α
- L' = virtual_α / L
- Δx = ΔL * Rx / virtual_α / L
- Δy = ΔL * Ry / virtual_α / L

**NOTE:** All above information is based off the [F8M3 Security Audit](../security-and-audits/audit-reports/f8m3-security-review.md). More information about SNAPPER implementation coming soon.