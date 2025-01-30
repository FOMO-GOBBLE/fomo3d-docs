# SnapperDEX Smart Contract Security Audit Report

[Download Full Report](https://github.com/AuditaSecurity/Public-Reports/blob/main/SnapperDEX_SecurityAudit_January2025.pdf)

## Audit Overview
- **Date**: January 28th, 2025
- **Client**: Solana.fun - DEX and Launchpad (solana.fun)
- **Auditor**: Audita Security (audita.io)
- **Network**: Solana
- **Language**: Rust
- **Audit Period**: January 20th - January 28th, 2025
- **Audit Commit**: ae421fc13a1c83ad5853d702d00efaf0000a6abd

## Severity Summary
| Severity | Count | Acknowledged |
|----------|--------|--------------|
| Critical | 0 | - |
| High | 2 | [RESOLVED] |
| Medium | 2 | [RESOLVED] |
| Low | 3 | [RESOLVED] |
| Informational | 7 | [RESOLVED] |

## High Severity Findings

### SNAP-01: Incorrect Deposit Function Token Calculation
- The calculations for input tokens in the deposit function are being rounded in wrong direction
- **Impact**: Malicious users could mint LP shares for free, effectively stealing funds from other liquidity providers
- **Recommendation**: Change rounding direction from `RoundDirection::Floor` to `RoundDirection::Ceiling` in deposit calculations

### SNAP-02: Incorrect Constant Product Calculations
- Swap calculations include accumulated fees in token amounts
- **Impact**: Constant product calculations will be incorrect due to inclusion of fee amounts
- **Recommendation**: Use total token amounts without swap fees for constant product calculations

## Medium Severity Findings

### SNAP-03: Insufficient TWAP Observation Window
- Fixed-size circular buffer (100 observations) limits historical price data to 25 minutes
- **Impact**: TWAP calculations may fail to include intended time frame leading to price inaccuracies
- **Recommendation**: Increase observation buffer size to 150-200 entries

### SNAP-04: TWAP Update Interval Mismatch
- 15-second update interval is too long for Solana's 400ms block time
- **Impact**: Rapid price changes within update interval are missed, leading to inaccurate pricing
- **Recommendation**: Reduce update interval to ~5 seconds to better match Solana's block time

## Key Recommendations
1. Fix high severity deposit function rounding issue
2. Correct constant product calculations to exclude fees
3. Increase TWAP observation buffer and reduce update interval
4. Implement deadline checks in swap functions
5. Update vulnerable dependencies
6. Add comprehensive integration testing suite

## Dependencies Requiring Updates
- curve25519-dalek: RUSTSEC-2024-0344
- ed25519-dalek: RUSTSEC-2022-0093

## Overall Assessment
Once the High and Medium severity vulnerabilities are addressed, Snapper's smart contracts are considered safe and pose no significant risks to the protocol and its users.

## Disclaimer
This audit does not provide absolute guarantees of security. Multiple independent audits and ongoing security practices are recommended. Smart contract platforms and their programming languages are not immune to potential vulnerabilities.