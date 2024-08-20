require("@nomiclabs/hardhat-waffle");

const { INFURA_PROJECT_ID, DEPLOYER_PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: `https://sepolia.infura.io/v3/6e8ee0b6eb3d4b5f8c403d2780293b0f`,
      accounts: [`0x${DEPLOYER_PRIVATE_KEY}`],
    },
    // other networks...
  }
};
