const express = require('express');
const cors = require('cors');
require('dotenv').config();
// const db = require("./firebase");
// db.settings({ ignoreUndefinedProperties: true });
const fetch = require('node-fetch');

PORT = 8080;
app = express();

app.use(express.json());
app.use(cors({origin: true}));

app.get("/", (req,res) => {
    res.send("You have a server that's running!");
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`)
})