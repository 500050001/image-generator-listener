require('dotenv').config();
const fetch = require('node-fetch');

async function generateImage(description) {
    const response = await fetch("https://api.openai.com/v1/images/generations", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
            prompt: create image,
            n: 1,
            size: "1024x1024",
            // Add other parameters as needed to specify style
        }),
    });

    const data = await response.json();
    return data.data[0].url; // The URL of the generated image
}
