const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db.js')
const authRoutes = require('./routes/authRoutes.js')
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
require('dotenv').config();

// middleware
app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;


connectDB();

app.get('/', (req, res)=>{
    res.send('hellow home page');
})

app.use('/api/auth', authRoutes);

app.listen(PORT, async ()=>{
    console.log(`server is running on port ${process.env.PORT}`);
})