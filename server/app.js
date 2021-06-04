// import {db, firebase} from "./firebase";
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./firebase").firestore();
const firestore = require("./firebase").firestore;
db.settings({ ignoreUndefinedProperties: true });
const fetch = require("node-fetch");

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(cors({ origin: true }));

app.get("/", (req, res) => {
  res.send("You have a server that's running!");
});

app.get("/classes/get", async (req, res) => {
  const classes = [];
  const snapshot = await db.collection("classes").get();
  // console.log(snapshot);
  snapshot.forEach((doc) => {
    // console.log(doc.id, "=>", doc.data());
    classes.push({ ...doc.data(), doc_id: doc.id });
  });
  res.json(classes);
});

app.post("/classes/add", async (req, res) => {
  const { classID, teacher, gradeLevel, ...rest } = req.body;
  // console.log(averageRating);
  const students = [];
  const resp = await db.collection("classes").add({
    classID,
    teacher,
    students,
    gradeLevel,
  });

  console.log("Added document to classes with ID: ", resp.id);
  res.sendStatus(200);
});

app.put("/classes/update", async (req, res) => {
  const { doc_id, classID, gradeLevel, ...rest } = req.body;

  const resp = await db.collection("classes").doc(doc_id).update({
    classID: classID,
    gradeLevel: gradeLevel,
    students: [],
    teacher: "No Teacher Assigned",
  });
  res.send("Got a PUT request to update student");
});

app.delete("/classes/delete", async (req, res) => {
  const { doc, ...rest } = req.body;
  const resp = await db.collection("classes").doc(doc).delete();
  console.log("From classes, deleted: ", doc);
  res.send("Got a DELETE request");
});
app.delete("/classes/delete_student", async (req, res) => {
  const { doc, studentDoc, ...rest } = req.body;
  const resp = await db
    .collection("classes")
    .doc(doc)
    .update({ students: firestore.FieldValue.arrayRemove(studentDoc) });
  console.log(`For class ${doc}, deleted `, studentDoc);
  res.send("Got a DELETE request");
});

app.put("/classes/add_student", async (req, res) => {
  const { doc, studentDoc, ...rest } = req.body;
  const resp = await db
    .collection("classes")
    .doc(doc)
    .update({ students: firestore.FieldValue.arrayUnion(studentDoc) });
  console.log(`For class ${doc}, added `, studentDoc);
  res.send("Got a PUT request");
});

app.get("/teachers/get", async (req, res) => {
  const teachers = [];
  const snapshot = await db.collection("teachers").get();
  // console.log(snapshot);
  snapshot.forEach((doc) => {
    // console.log(doc.id, "=>", doc.data());
    teachers.push({ ...doc.data(), doc_id: doc.id });
  });
  res.json(teachers);
});

app.post("/teachers/add", async (req, res) => {
  const { classID, firstName, lastName, ...rest } = req.body;
  // console.log(averageRating);
  const resp = await db.collection("teachers").add({
    classID,
    firstName,
    lastName,
  });

  console.log("Added document to teachers with ID: ", resp.id);
  res.sendStatus(200);
});


app.put("/teachers/update", async (req, res) => {
	const { doc_id, classID, firstName, lastName, ...rest } = req.body;
  
	const resp = await db.collection("teachers").doc(doc_id).update({
	  classID: classID,
	  firstName: firstName,
	  lastName: lastName
	
	});
	res.send("Got a PUT request to update teacher");
  });

app.delete("/teachers/delete", async (req, res) => {
  const { doc, ...rest } = req.body;
  const resp = await db.collection("teachers").doc(doc).delete();
  console.log("From teachers, deleted: ", doc);
  res.send("Got a DELETE request");
});

app.get("/students/get", async (req, res) => {
  const students = [];
  const snapshot = await db.collection("students").get();
  // console.log(snapshot);
  snapshot.forEach((doc) => {
    // console.log(doc.id, "=>", doc.data());
    students.push({ ...doc.data(), doc_id: doc.id });
  });
  res.json(students);
});

app.post("/students/add", async (req, res) => {
  const { classID, firstName, lastName, DOB, ...rest } = req.body;
  // console.log(averageRating);
  const grade = 0;
  const resp = await db.collection("students").add({
    classID,
    firstName,
    lastName,
    DOB,
    grade,
  });

  console.log("Added document to students with ID: ", resp.id);
  res.sendStatus(200);
});

app.put("/students/update", async (req, res) => {
  const { doc_id, classID, firstName, lastName, DOB, grade, ...rest } =
    req.body;
  const resp = await db.collection("students").doc(doc_id).update({
    classID: classID,
    firstName: firstName,
    lastName: lastName,
    DOB: DOB,
    grade: grade,
  });
  res.send("Got a PUT request to update student");
});

app.put("/students/grade_update", async (req, res) => {
  const { grade, doc_id, ...rest } = req.body;
  const resp = await db
    .collection("students")
    .doc(doc_id)
    .update({ grade: grade });
  res.send("Got a PUT request");
});

app.delete("/students/delete", async (req, res) => {
  const { doc_id, ...rest } = req.body;
  console.log(doc_id);
  const resp = await db.collection("students").doc(doc_id).delete();
  console.log("From students, deleted: ", doc_id);
  res.send("Got a DELETE request");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
