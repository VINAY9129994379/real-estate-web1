const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors'); // Import the cors package



dotenv.config();

const app = express();

// Middleware for JSON parsing
app.use(express.json());


// Middleware
app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from your React app
  }));
  

// User routes
app.use('/api/users', userRoutes); 

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('MongoDB connection error:', error);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
