# Smart Contract Architecture of Gobbler (F8M3)

## Program Flow Charts
1. Deposit Process
   - Initial pool status verification
   - Token amount calculation
   - LP token minting
   - State updates

2. Withdraw Process
   - Pool status verification
   - Virtual liquidity calculation
   - Token transfers
   - LP token burning

3. Swap Process
   - Swap direction determination
   - Fee calculation (protocol, trading, fund fees)
   - Token transfers
   - State updates

## Testing Implementation
- Based on Raydium CP-Swap fork
- Analyzed 1,271,870 transactions
- Focused on high-volume scenarios
- Simulated real-world conditions

## Repository Details
- Current: https://github.com/staccDOTsol/raydium-cp-swap/tree/master
- Commit: a1b39110a246cfb22108e4ade9186f172abb41da
- Future: https://github.com/FOMO-GOBBLE/mono-fomo

**NOTE:** All above information is based off the [F8M3 Security Audit](../security-and-audits/audit-reports/f8m3-security-review.md). More information about SNAPPER implementation coming soon.