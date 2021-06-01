import React, { useState, useEffect } from "react";
import { ListGroup, Tab, Row, Col, Modal, Form, Button } from "react-bootstrap";
import ClassInfo from "./ClassInfo";

function ClassDash({ classes, teachers }) {
  const [modal, setModal] = useState(false);
  const [className, setClassName] = useState("");
  const [grade, setGrade] = useState(0);

  const handleClick = (e) => {
    //alert('whats up');
    setModal(true);
    e.preventDefault();
  };

  return (
    <Tab.Container defaultActiveKey="#link0">
      <ListGroup>
        {classes &&
          classes.map((c, index) => {
            console.log(c);
            return <ClassInfo c={c} index={index}></ClassInfo>;
          })}
        <ListGroup.Item variant="dark" action onClick={handleClick}>
          Add a Class
        </ListGroup.Item>
      </ListGroup>
      <Modal
        show={modal}
        onHide={() => {
          setModal(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a Class</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              const classID= e.target.classID.value;
			  let gl = "";
				e.preventDefault();
              //const formData = new FormData(e.target);
              //formDataObj = Object.fromEntries(formData.entries());
              //console.log(e.target.group1);
			  for(let radio in e.target.group1){
				  if(e.target.group1[radio].checked) {
					  gl = parseInt(radio) + 1;
				  }
			  }
			  const teacher = e.target.teacher.value;

			  console.log(classID);
			  console.log(gl);
			  console.log(teacher);

            }}
          >
            <Form.Label>Class ID</Form.Label>
            <Form.Control
              hasValidation
              required
              placeholder="TJE#"
              name="classID"
            ></Form.Control>
            <br />
            <div key={`inline-${"radio"}`}>
              <Form.Label>Grade Level</Form.Label>
              <br />
              <Form.Group name="radios">
                <Form.Check
                  required
                  inline
                  label="1"
                  name="group1"
                  type="radio"
                  id="1"
				  checked
                />
                <Form.Check
                  required
                  inline
                  label="2"
                  name="group1"
                  type="radio"
                  id="2"
                />
                <Form.Check
                  required
                  inline
                  label="3"
                  name="group1"
                  type="radio"
                  id="3"
                />
                <Form.Check
                  required
                  inline
                  label="4"
                  name="group1"
                  type="radio"
                  id="4"
                />
                <Form.Check
                  required
                  inline
                  label="5"
                  name="group1"
                  type="radio"
                  id="5"
                />
              </Form.Group>
            </div>
            <br />
            <Form.Label>Choose Teacher</Form.Label>
            <Form.Control as="select" name='teacher'>
              {teachers.map((teacher) => {
                return (
                  <option id={teacher.doc_id}>
                    {teacher.firstName} {teacher.lastName}
                  </option>
                );
              })}
              {/* <option>Choose...</option>
            <option>...</option> */}
            </Form.Control>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Tab.Container>
  );
}

export default ClassDash;
