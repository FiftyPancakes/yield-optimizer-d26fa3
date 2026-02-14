module.exports = {
  pools: [
    { protocol: 'uniswap_v3', pair: 'ETH/USDC', fee: 3000 },
    { protocol: 'aave_v3', asset: 'WETH' },
  ],
  minProfit: 0.001,
  gasLimit: 500000,
};
