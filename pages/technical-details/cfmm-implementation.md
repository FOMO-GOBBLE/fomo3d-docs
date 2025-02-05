# CFMM Implementation in Snapper

Snapper's Constant Function Market Maker (CFMM) model combines dynamic reserve management with a dual-reserve bonding curve system to deliver both price precision and liquidity consistency.

## Core Implementation
- **Platform Integration:**  
  - Constructed for the Solana Virtual Machine (SVM) using the robust Anchor framework.
- **Dual-Reserve System:**
  - **Virtual Reserves:** Facilitate high-precision pricing and effective slippage control.
  - **Real Reserves:** Maintain the on-chain token balances and enforce liquidity constraints.
- **Invariant Maintenance:**  
  - The product of the virtual reserves is preserved through all swap operations, ensuring consistent pricing.

## Bonding Curve Mechanism
- **Dynamic Reserve Adjustment:**  
  - Swap operations adjust both virtual and real reserves to sustain the invariant.
  - The bonding curve mechanism dynamically recalculates reserves in response to liquidity events.
- **Pricing Functions:**  
  - Detailed methods update reserve levels when processing buy and sell operations.

## Deposit and Withdrawal Calculations
- Liquidity events trigger a recalibration routine that synchronizes virtual reserves with actual token balances, ensuring that changes in liquidity are immediately reflected in pricing.

## Bonding Curve Calculation Details
- **Buy Operation:**
  1. Compute the invariant product:  
     product = virtualSOL × virtualTOKEN  
  2. Adjust the virtual token reserve:  
     new_virtualTOKEN = virtualTOKEN − Δ tokens  
  3. Derive the new virtual SOL reserve:  
     new_virtualSOL = (product ÷ new_virtualTOKEN) + 1  
  4. Determine the SOL cost:  
     SOL cost = new_virtualSOL − virtualSOL

- **Sell Operation:**  
  - A similar process applies, dynamically adjusting reserves based on the token amount sold while maintaining the invariant.

**Note:** These formulas represent the robust mechanism underpinning Snapper's swap operations, ensuring market-responsive pricing with precision and reliability.