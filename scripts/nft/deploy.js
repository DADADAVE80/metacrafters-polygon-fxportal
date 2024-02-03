const hre = require("hardhat");
import {ethers} from "hardhat";

async function main() {
    const NFTaFactory = await ethers.getContractFactory("MetaToken");
    const NFTa = await NFTaFactory.deploy();
    await NFTa.deployed();
    console.log("MetaToken NFT deployed to: ", NFTa.address);
}

main().catch(error => {
    console.error(error);
    process.exit(1);
});