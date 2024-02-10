# Overview

---
This project involves the creation and deployment of an ERC721A-compliant NFT (Non-Fungible Token)
contract named MetaTokenNFT on Goerli Ethereum testnet then approve and deposit the NFT to Polygon
Mumbai using their fxPortal bridge. The NFTs represent a collection of skyscrapers, each featuring
a distinct artistic style and angle.

## Getting Started

---
### Prerequisites

- Install [nvm](http://nvm.sh).
- Use **Node.js version 16** or higher.
```shell
nvm install 16
nvm use 16
```

## Project Initialization

---
```shell
git clone <this-repo-url>
```
```shell
cd <the-repo>
```
```shell
npm install
```

## Configuration

---
First compile the contract using `npx hardhat compile` then deploy the contract onto
Goerli Ethereum testnet using the following command:
```shell
npx hardhat run --network goerli scripts/nft/deploy.js
```
Then you get a 

## Author

David Dada 
[@DadaAyo5](https://twitter.com/DadaAyo5)


## License

This project is licensed under the MIT License - see the LICENSE.md file for details