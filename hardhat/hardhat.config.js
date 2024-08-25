require("@nomiclabs/hardhat-waffle");

module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: [process.env.DEPLOYER_PRIVATE_KEY] // No need to add `0x` again here
    }
  },
  solidity: "0.8.0",
};
