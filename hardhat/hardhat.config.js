require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/6e8ee0b6eb3d4b5f8c403d2780293b0f`,
      accounts: [`e044651b6913502676380008e40bae161960dee6812471e7c12efd03e78adb93`],
    },
  },
};

