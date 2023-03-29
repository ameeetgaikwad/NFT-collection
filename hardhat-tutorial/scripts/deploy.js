const hre = require("hardhat");
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");
require("dotenv").config();

async function main() {
  const whitelistContract = WHITELIST_CONTRACT_ADDRESS;

  const metadataURL = METADATA_URL;

  const cryptoDevsContract = await ethers.getContractFactory("CryptoDevs");

  const deployedCryptoDevsContract = await cryptoDevsContract.deploy(
    metadataURL,
    whitelistContract
  );

  await deployedCryptoDevsContract.deployed();

  console.log(
    "Crypto Devs Contract Address:",
    deployedCryptoDevsContract.address
  );

  //address: 0x2527D2e6d78915632b408f364c94EC4F6B3729a7
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
