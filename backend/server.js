// backend/server.js
const express = require('express');
const cors = require('cors'); // Importe o pacote cors
const app = express();
const port = 3000;

const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');

app.use(cors()); // Use o middleware cors
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

app.listen(port, () => {
    console.log(`Backend server is running on http://localhost:${port}`);
});
