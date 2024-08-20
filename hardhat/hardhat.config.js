require("@nomiclabs/hardhat-waffle");
const { INFURA_PROJECT_ID, DEPLOYER_PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [`0x${DEPLOYER_PRIVATE_KEY}`]
    }
  }
};
