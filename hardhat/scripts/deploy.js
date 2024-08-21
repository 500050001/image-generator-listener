async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Using Infura Project ID:", process.env.INFURA_PROJECT_ID);
  console.log("Private key length:", process.env.DEPLOYER_PRIVATE_KEY.length);

  const balance = await deployer.getBalance();
  console.log("Account balance:", balance.toString());

  // Your deployment logic here
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
