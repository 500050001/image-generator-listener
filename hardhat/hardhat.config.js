require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/6e8ee0b6eb3d4b5f8c403d2780293b0f`,
      accounts: [`0xbf0a2f2a792715672918b67b869eccd7df1eb5d2ebc27e5672cbf2439975175d
`],
    },
  },
};

