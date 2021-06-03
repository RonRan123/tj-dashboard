import React from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import StudentForm from "./StudentForm";
import {StudentContext} from "./Home";

function Student({ info , isTeacher}) {
  const {getStudents} = React.useContext(StudentContext);
  
    const deleteStudent = () => {
    console.log(info);
    fetch("http://localhost:8080/students/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    }).then((resp) => {resp.json(); getStudents()});
  };

  const updateGrade = (g) => {
    fetch('http://localhost:8080/students/grade_update', {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({doc_id:info.doc_id, grade:g}),
        }).then(resp => {resp.json(); getStudents()});
  }

  const getActions = () => {
    if(isTeacher){
      return (
        <InputGroup>
          <FormControl placeholder={info.grade} onChange={(e) => updateGrade(e.target.value)}/>
          <InputGroup.Append>
            <InputGroup.Text>/100</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      );
    }
    return (
      <td>
          <div>
            <StudentForm buttonLabel="Edit" info={info} />
            {/* <Button variant="outline-primary" onClick={deleteStudent}>Edit</Button> */}{" "}
            <Button variant="outline-danger" onClick={deleteStudent}>
              Delete
            </Button>
          </div>
        </td>
    );
  };
  return (
    <tbody>
      <tr>
        <td>{info.firstName}</td>
        <td>{info.lastName}</td>
        <td>{info.DOB}</td>
        <td>{info.classID}</td>
        <td>{info.grade}</td>
        {getActions()}
      </tr>
    </tbody>
  );
}
export default Student;
