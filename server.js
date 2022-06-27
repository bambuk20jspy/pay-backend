const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const dbConnect = require('./config/db');
const router = require('./routes/payRoute');


const app = express();
app.use(express.json());
app.use(cors());

//! Mongo DB Connection
dbConnect();


app.use('/api/pay', router)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Server run 5000');
});