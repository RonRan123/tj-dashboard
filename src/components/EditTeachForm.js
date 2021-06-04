import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
//import ClassInfo from './ClassInfo';
import { ClassContext, TeacherContext } from "./Home";

function EditTeachForm({ setModal, classID, oldTeacher }) {
  const { teachers, getTeachers } = React.useContext(TeacherContext);
  const { getMyClasses } = React.useContext(ClassContext);

  const [teacherID, setTeacherID] = useState(teachers[0].doc_id);
  const [firstName, setFirstName] = useState(teachers[0].firstName);
  const [lastName, setLastName] = useState(teachers[0].lastName);

  const handleEdit = async (e) => {
    e.preventDefault();

    if ((oldTeacher === "")) {
      const request = await fetch("http://localhost:8080/teachers/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          doc_id: teacherID,
          classID: classID.classID,
          firstName: firstName,
          lastName: lastName,
        }),
      }).then((resp) => {
        resp.json();
        getTeachers();
      });
    } 
	
	else {
      const request = await fetch("http://localhost:8080/teachers/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          doc_id: teacherID,
          classID: classID.classID,
          firstName: firstName,
          lastName: lastName,
        }),
      }).then((resp) => {
        resp.json();
      });

      console.log("Old teacher:" + oldTeacher);

      const requestt = await fetch("http://localhost:8080/teachers/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          doc_id: oldTeacher.doc_id,
          classID: "",
          firstName: oldTeacher.firstName,
          lastName: oldTeacher.lastName,
        }),
      }).then((resp) => {
        resp.json();
        getTeachers();
      });
    }

    setModal(false);
  };

  return (
    <Form onSubmit={handleEdit}>
      <Form.Control as="select" name="teacher" defaultValue="option0">
        {teachers.map((teacher, index) => {
          if (teacher.classID === "") {
            return (
              <option
                value={"option" + index}
                id={teacher.doc_id}
                onClick={(e) => {
                  console.log("CLICKING");
                  setTeacherID(e.target.id);
                  setFirstName(teacher.firstName);
                  setLastName(teacher.lastName);
                  console.log(e.target.id);
                }}
              >
                {teacher.firstName} {teacher.lastName}
              </option>
            );
          }
        })}
      </Form.Control>
      <br />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default EditTeachForm;
