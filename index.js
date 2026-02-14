require('dotenv').config();
const { ethers } = require('ethers');

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

async function main() {
  console.log('Starting yield bot...');
  const balance = await provider.getBalance(wallet.address);
  console.log('Balance:', ethers.formatEther(balance));
}

main().catch(console.error);
