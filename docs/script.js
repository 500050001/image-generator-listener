// Initialize Web3
if (typeof window.ethereum !== 'undefined') {
    // Modern dapp browsers...
    window.web3 = new Web3(window.ethereum);
    try {
        // Request account access if needed
        await window.ethereum.enable();
        console.log("Web3 initialized.");
    } catch (error) {
        // User denied account access...
        console.error("User denied account access");
    }
} else if (typeof window.web3 !== 'undefined') {
    // Legacy dapp browsers...
    window.web3 = new Web3(window.web3.currentProvider);
} else {
    // Non-dapp browsers...
    console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
}

const contractABI = [ /* Your contract ABI here */ ];
const contractAddress = '0xa529090E398aE13269a23a3670D20328Bc1a0279'; // Replace with your contract address
const contract = new web3.eth.Contract(contractABI, contractAddress);

async function getCurrentPrice() {
    try {
        const price = await contract.methods.currentPrice().call();
        document.getElementById("price").innerText = web3.utils.fromWei(price, "ether") + " ETH";
    } catch (error) {
        console.error("Error fetching price:", error);
    }
}

// Call the function on page load
document.addEventListener('DOMContentLoaded', () => {
    getCurrentPrice();
    loadImages(); // Load images from IPFS as per your existing function
});

async function requestImage(description) {
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0]; // User's account
    const price = await contract.methods.currentPrice().call(); // Get the current price

    try {
        await contract.methods.requestImage(description).send({
            from: account,
            value: price
        });
        console.log("Image requested successfully");
    } catch (error) {
        console.error("Error requesting image:", error);
    }
}

// Attach the function to a button click event
document.getElementById("requestButton").onclick = function() {
    const description = document.getElementById("descriptionInput").value;
    requestImage(description);
};

async function loadImages() {
    const response = await fetch('https://ipfs.infura.io/ipfs'); // Replace with actual IPFS gateway
    const images = await response.json();
    const timeline = document.getElementById('timeline');

    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.url;
        timeline.appendChild(imgElement);
    });
}

document.addEventListener('DOMContentLoaded', loadImages);
