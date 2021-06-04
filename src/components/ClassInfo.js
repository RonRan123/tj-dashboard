import React, { useState, useEffect } from "react";
import { ListGroup, Tab, Row, Col, Button, Modal } from "react-bootstrap";
import { ClassContext, TeacherContext } from "./Home";
import ClassEditForm from "./ClassEditForm";

function ClassInfo({ index, c, setClassID }) {
  const { teachers } = React.useContext(TeacherContext);
  const { getMyClasses } = React.useContext(ClassContext);
  const [modal, setModal] = useState(false);

  const getTeacherName = (teacherID) => {
    let teacherName = "";
    for (let teach in teachers) {
      if (teachers[teach].doc_id === teacherID) {
        return (teacherName +=
          teachers[teach].firstName + " " + teachers[teach].lastName);
      }
    }
    return "TEACHER NOT FOUND";
  };

  const onClick = (e) => {
    e.preventDefault();
    console.log(c);
    console.log(c.doc_id);

    (async () => {
      const rawResponse = await fetch("http://localhost:8080/classes/delete", {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ doc: c.doc_id }),
      }).then((res) => getMyClasses());
      //const content = await rawResponse.json();

      //console.log(content);
    })();
  };

  const handleEdit = () => {
    setModal(true);
  };

  return (
    <div>
      <ListGroup.Item
        variant="secondary"
        id={c.classID}
        onClick={() => setClassID(c.classID)}
        action
        href={"#link" + index}
      >
        <Modal
          show={modal}
          onHide={() => {
            setModal(false);
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Class</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ClassEditForm c={c} setModal={setModal} />
          </Modal.Body>
        </Modal>

        {/* <br></br>
        <br></br> */}
        <div style={{ display: "inline-grid", marginRight: "1%" }}>
          <h4 style={{}}>Class: {c.classID} </h4>
          {/* <p> Teacher: {getTeacherName(c.teacher)} </p> */}
          <p style={{ margin: "0" }}>Grade Level: {c.gradeLevel} </p>
        </div>

        <div>
          <Button
            variant="secondary"
            style={{ display: "inline", marginRight:'2%' }}
            onClick={handleEdit}
          >
            Edit
          </Button>
          <Button onClick={onClick} variant="danger" style={{}}>
            Delete
          </Button>
        </div>
      </ListGroup.Item>
    </div>
  );
}
export default ClassInfo;
