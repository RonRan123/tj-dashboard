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

app.post("/classes/add", async (req, res) => {
    const {ID, Teacher, ...rest} = req.body;
    // console.log(averageRating);
    const Students = [];
    const resp = await db.collection("classes").add({
        classID,
        teacher,
        students,
    });

    console.log("Added document to classes with ID: ", resp.id);
    res.sendStatus(200);
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

app.post("/teachers/add", async (req, res) => {
    const {classID, firstName, lastName, ...rest} = req.body;
    // console.log(averageRating);
    const resp = await db.collection("teachers").add({
        classID,
        firstName,
        lastName, 
    });

    console.log("Added document to teachers with ID: ", resp.id);
    res.sendStatus(200);
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

app.post("/students/add", async (req, res) => {
    const {classID, firstName, lastName, DOB, ...rest} = req.body;
    // console.log(averageRating);
    const grade = 0;
    const resp = await db.collection("students").add({
        classID,
        firstName,
        lastName, 
        dob,
        grade,
    });

    console.log("Added document to students with ID: ", resp.id);
    res.sendStatus(200);
})


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`)
})