const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const itemsRoute = require('./routes/items');
const bodyParser = require('body-parser');

dotenv.config();
connectDB();

const app = express();
app.use(bodyParser.json());

app.use(cors());

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/items', itemsRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});