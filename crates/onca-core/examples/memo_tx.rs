//! Emit an unsigned Solana transaction (base64) built entirely by `onca-core`,
//! so it can be fed to Solana's own tooling (`@solana/web3.js`, a devnet
//! `simulateTransaction`) to prove the hand-rolled encoding is real.
//!
//!     cargo run --example memo_tx

use onca_core::pubkey::Pubkey;
use onca_core::tx::{compile_message, memo_instruction, unsigned_transaction_base64};

fn main() {
    // A valid fee payer / signer (any real pubkey).
    let fee = Pubkey::from_base58("7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU").unwrap();
    let ix = memo_instruction("onca:attest s=bme280-a v=23.4 u=C seq=42 t=1753000000", &[fee]);
    // The blockhash is replaced by the simulator; any 32 bytes works here.
    let msg = compile_message(&fee, [0u8; 32], &[ix]);
    println!("{}", unsigned_transaction_base64(&msg));
}
