async function main() {
  const ImageRequest = await ethers.getContractFactory("ImageRequest");
  const contract = await ImageRequest.deploy();

  await contract.deployed();

  console.log("Contract deployed to:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
