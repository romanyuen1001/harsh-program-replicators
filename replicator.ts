import express from "express";

const app = express();
const PORT = process.env.PORT || 3001; // You can set different ports for different replicators

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(express.text());

// POST endpoint to catch and log incoming requests
app.post('/replicate', (req, res) => {
    const data = req.body;

    console.log(data);
    console.log(`data ${data.data}`);

    console.log(`Received data on replicator at port ${PORT}:` + ' data: ' + data);

    // Send back a response
    res.status(200).json({ message: "Data received successfully " + `${PORT}` + ' data: ' + data});

});

// Start the Express server
app.listen(PORT, () => {
    console.log(`Replicator is running on http://localhost:${PORT}`);
});

// To run:
// PORT=3001 bun  --watch replicator.ts
// PORT=3002 bun  --watch replicator.ts