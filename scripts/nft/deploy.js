const hre = require("hardhat");

async function main() {
    const metaTokenNft = await hre.ethers.deployContract("MetaTokenNFT");
    
    
    console.log(`MetaToken NFT deployed to: ${metaTokenNft.target}`);
}

main().catch(error => {
    console.error(error);
    process.exit(1);
});