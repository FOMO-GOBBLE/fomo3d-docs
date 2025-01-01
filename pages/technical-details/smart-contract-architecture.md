# Smart Contract Architecture of Gobbler (F8M3)

## Repository Information
- Current Repository: https://github.com/staccDOTsol/raydium-cp-swap/tree/master
- Commit (audit): a1b39110a246cfb22108e4ade9186f172abb41da
- Future Migration: https://github.com/FOMO-GOBBLE/mono-fomo

## Core Processes
1. Deposit Process
   - User calls deposit function
   - Pool status verification
   - Token amount calculation
   - LP token minting

2. Withdraw Process
   - User calls withdraw function
   - Pool status verification
   - Liquidity calculation
   - Token transfer and LP token burning

3. Swap Process
   - Pool status verification
   - Fee calculation
   - Token transfer execution
   - State updates

## Security Status
- Audit Period: September 20th - October 31st, 2024
- Critical Issues Resolved:
  1. GOBBLER_01: Bonding curve calculation correction
  2. GOBBLER_02: Fee distribution alignment

## Testing Methodology
- Analyzed 1,271,870 transactions
- Included swaps and LP changes
- Simulated high-volume market conditions
- Focus on real-world operation scenarios

**NOTE:** All above information is based off the [F8M3 Security Audit](../security-and-audits/audit-reports/f8m3-security-review.md). More information about SNAPPER implementation coming soon.