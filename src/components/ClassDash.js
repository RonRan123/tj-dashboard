import React, { useState, useEffect } from "react";
import { ListGroup, Tab, Row, Col, Modal, Form } from "react-bootstrap";
import ClassInfo from "./ClassInfo";

function ClassDash({ classes }) {
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
			<Form.Label>Class ID</Form.Label>
          <Form.Control
            placeholder="TJE#"
            onChange={(e) => {
              setClassName(e.target.value);
            }}
          ></Form.Control><br/>
          <div key={`inline-${'radio'}`}>
            <Form.Label>Grade Level</Form.Label><br/>
			<Form.Check
              inline
              label="1"
              name="group1"
              type='radio'
            />
            <Form.Check
              inline
              label="2"
              name="group1"
              type='radio'
            />
			<Form.Check
              inline
              label="3"
              name="group1"
              type='radio'
            />
			<Form.Check
              inline
              label="4"
              name="group1"
              type='radio'
            />
			<Form.Check
              inline
              label="5"
              name="group1"
              type='radio'
            />
          </div>
        </Modal.Body>
      </Modal>
    </Tab.Container>
  );
}

export default ClassDash;
