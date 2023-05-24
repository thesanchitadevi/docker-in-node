require("dotenv").config();

const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 4000;

const authRoute = require('./routes/auth');

mongoose.set("strictQuery", false);
// gamedb
// BYQSaEnFjqHF6r8J
const uri = process.env.MONGO_DB;

mongoose.connect(uri);

app.use('/api/auth', authRoute)

// middleware
app.use(cors());
app.use(express.json());


app.get('/', async (req, res) => {
    res.send('server is running');
})


app.listen(PORT, () => console.log(`Server running on ${PORT}`));
