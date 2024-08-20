require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",  // Specify your Solidity version
  networks: {
    sepolia: {  // Configure Sepolia network
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,  // Use Sepolia's Infura endpoint
      accounts: [`0x${process.env.DEPLOYER_PRIVATE_KEY}`]  // Your private key with '0x' prefix
    }
  }
};

