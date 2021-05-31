const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require("./firebase");
db.settings({ ignoreUndefinedProperties: true });
const fetch = require('node-fetch');

PORT = 8080;
app = express();

app.use(express.json());
app.use(cors({origin: true}));

app.get("/", (req,res) => {
    res.send("You have a server that's running!");
})

app.get("/classes/get", async (req, res) => {
    const classes = [];
    const snapshot = await db.collection("classes").get();
    // console.log(snapshot);
    snapshot.forEach((doc) => {
        // console.log(doc.id, "=>", doc.data());
        classes.push({...doc.data(), doc_id: doc.id})
    });
    res.json(classes);
})

app.get("/teachers/get", async (req, res) => {
    const teachers = [];
    const snapshot = await db.collection("teachers").get();
    // console.log(snapshot);
    snapshot.forEach((doc) => {
        // console.log(doc.id, "=>", doc.data());
        teachers.push({...doc.data(), doc_id: doc.id})
    });
    res.json(teachers);
})

app.get("/students/get", async (req, res) => {
    const students = [];
    const snapshot = await db.collection("students").get();
    // console.log(snapshot);
    snapshot.forEach((doc) => {
        // console.log(doc.id, "=>", doc.data());
        students.push({...doc.data(), doc_id: doc.id})
    });
    res.json(students);
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`)
})