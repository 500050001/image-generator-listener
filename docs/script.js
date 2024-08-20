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
