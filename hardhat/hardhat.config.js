require("@nomiclabs/hardhat-waffle");

const INFURA_PROJECT_ID = process.env.INFURA_PROJECT_ID || "";
const DEPLOYER_PRIVATE_KEY = process.env.DEPLOYER_PRIVATE_KEY || "";

if (!INFURA_PROJECT_ID || !DEPLOYER_PRIVATE_KEY) {
  console.error("Error: INFURA_PROJECT_ID or DEPLOYER_PRIVATE_KEY is not set.");
  process.exit(1);
}

module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [DEPLOYER_PRIVATE_KEY] // No need to add 0x here since it's already included in the secret
    }
  },
  solidity: "0.8.0",
};
