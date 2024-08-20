require('dotenv').config();
const Web3 = require('web3');
const fetch = require('node-fetch');
const ipfsClient = require('ipfs-http-client');

const web3 = new Web3(new Web3.providers.WebsocketProvider(`wss://rinkeby.infura.io/ws/v3/${process.env.INFURA_PROJECT_ID}`));
const contractABI = [...]; // ABI of your contract
const contractAddress = "0xYourContractAddress";
const contract = new web3.eth.Contract(contractABI, contractAddress);

const ipfs = ipfsClient("https://ipfs.infura.io:5001");

contract.events.ImageRequested({}, async (error, event) => {
    if (error) {
        console.error("Error", error);
        return;
    }

    const { requester, description, amount } = event.returnValues;

    try {
        const imageUrl = await generateImage(description);
        const ipfsLink = await storeImage(imageUrl);

        console.log(`Image generated for ${requester}: ${ipfsLink}`);
    } catch (err) {
        console.error("Error generating or storing image", err);
    }
});

async function generateImage(description) {
    const response = await fetch("https://api.openai.com/v1/images/generations", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`, // Use the API key from environment variables
        },
        body: JSON.stringify({
            prompt: description,
            n: 1,
            size: "1024x1024"
        }),
    });

    if (!response.ok) {
        throw new Error("Failed to generate image");
    }

    const data = await response.json();
    const imageUrl = data.data[0].url;
    return imageUrl;
}

async function storeImage(imageUrl) {
    const response = await fetch(imageUrl);
    const imageBuffer = await response.buffer();

    const { path } = await ipfs.add(imageBuffer);
    return `https://ipfs.infura.io/ipfs/${path}`;
}
