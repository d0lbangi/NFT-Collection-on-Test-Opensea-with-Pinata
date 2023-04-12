const pinataSDK = require('@pinata/sdk');
require('dotenv').config()
const fs = require('fs');

const pinata = new pinataSDK(process.env.PINATA_API_KEY, process.env.PINATA_API_SECRET);
const readableStreamForFile = fs.createReadStream('./images/22.jpg');

const options = {
    pinataMetadata: {
        name: "My NFT Collection",
        keyvalues: {
            customKey: 'customValue',
            customKey2: 'customValue2'
        }
    },
    pinataOptions: {
        cidVersion: 0
    }
};

const pinFileToIPFS = () => {
    return pinata.pinFileToIPFS(readableStreamForFile, options).then((result) => {
        //handle result here
        return `https://gateway.pinata.cloud/ipfs/${result.IpfsHash}`

    }).catch((err) => {
        //handle error here
        console.log(err);
    });
}

const pinJSONToIPFS = (body) => {
    return pinata.pinJSONToIPFS(body, options).then((result) => {
        //handle results here
        return `https://gateway.pinata.cloud/ipfs/${result.IpfsHash}`
    }).catch((err) => {
        //handle error here
        console.log(err);
    });
}

const getMetadata = async () => {
    const imageUrl = await pinFileToIPFS()
    const body = {
        name: 'My NFT Collection',
        description: "This is my awesome collection of NFTs",
        image: imageUrl
    };

    const metadata = await pinJSONToIPFS(body);
    console.log(metadata);
}

getMetadata()

// NFT 22 = https://gateway.pinata.cloud/ipfs/QmYsD5etzexdzgyMiLAo95hFmAFtHYhRTfBzaqAxFk3fGk


/* test 목적 */
// pinata.testAuthentication().then((result) => {
//     //handle successful authentication here
//     console.log(result);
// }).catch((err) => {
//     //handle error here
//     console.log(err);
// });