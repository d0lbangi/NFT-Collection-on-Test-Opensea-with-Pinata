#### pinata
- npm init
- npm install @pinata/sdk dotenv
- node index.js

#### smart_contracts
- npm init
- npm install hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers
- npx hardhat
- npm install @openzeppelin/contracts dotenv
- npx hardhat compile
- npx hardhat run --network goerli scripts/deploy.js
- npm install @nomiclabs/hardhat-etherscan
- npx hardhat verify --network sepolia 0xC9a966cD7F478186B99AAb0a790a37D922C6Ca4F
