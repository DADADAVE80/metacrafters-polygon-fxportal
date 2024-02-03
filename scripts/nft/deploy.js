const hre = require("hardhat");

async function main() {
    const metatokennft = await hre.ethers.deployContract("MetaToken");
    console.log("MetaToken NFT deployed to: ", NFTa.address);
}

main().catch(error => {
    console.error(error);
    process.exit(1);
});