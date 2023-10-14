const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const db=require('./Config/db')
const PORT=process.env.PORT || 5000;

/* app.use(cors({
    origin:["https:/stock-price-api.vercel.app"],
     methods:["POST","GET"],
    credentials:true
})); */

app.use(cors());


const stocks = ["AAPL", "GOOGL", "MSFT", "AMZN"]; // predefine stock
app.get("/", (req, res) => {
    console.log('Server is running');
    res.json({
        message: "Called Page"
    });
});
app.get('/api/stock', async (req, res) => {
    const { symbol } = req.query;
    try {
        const price = await fetchMockStockPrice(symbol); // Mock api call
        res.json({ price });
    } catch (error) {
        console.error('Error fetching stock price:', error);
        res.status(500).send('Error fetching stock price');
    }
});

// Mock api function
async function fetchMockStockPrice(symbol) {
    // Return mock data
    const randomPrice = Math.random() * 1000;
    return randomPrice.toFixed(2);
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
