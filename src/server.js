const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.post('/send-message', async (req, res) => {
    const { phone, message } = req.body;

    try {
        const response = await axios.post('https://your-whatsapp-api-endpoint', {
            phone,
            message,
            // Add any other required parameters
        });

        if (response.data.success) {
            res.status(200).send('Message sent successfully');
        } else {
            console.error('Failed to send message:', response.data);
            res.status(500).send('Failed to send message');
        }
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).send('Error sending message');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
