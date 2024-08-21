async function main() {
  const ImageRequest = await ethers.getContractFactory("ImageRequest");
  const imageRequest = await ImageRequest.deploy();

  await imageRequest.deployed();
  console.log("ImageRequest deployed to:", imageRequest.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
