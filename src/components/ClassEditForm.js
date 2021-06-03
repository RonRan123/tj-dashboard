import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { ClassContext } from "./Home";

function ClassEditForm({ c, setModal }) {
  const [className, setClassName] = useState(c.classID);
  const [grade, setGrade] = useState(c.gradeLevel);

  const { getMyClasses } = React.useContext(ClassContext);

  let arr = [];
  for (let i = 0; i < 5; i++) {
    if (i === c.gradeLevel - 1) {
      arr[i] = true;
    } else {
      arr[i] = false;
    }
  }

  const handleEdit = async (e) => {
    e.preventDefault();
    const request = await fetch("http://localhost:8080/classes/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        doc_id: c.doc_id,
        classID: className,
        gradeLevel: grade,
      }),
    }).then((resp) => {
      resp.json();
      getMyClasses();
    });
    setModal(false);
  };

  //   useEffect(() => {
  //     setChecked(arr);
  //     console.log(arr);
  //   }, []);

  return (
    <Form onSubmit={handleEdit}>
      <Form.Label>Class ID</Form.Label>
      <Form.Control
        defaultValue={c.classID}
        required
        placeholder="TJE#"
        name="classID"
        onChange={(e) => {
          setClassName(e.target.value);
        }}
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
            onClick={(e) => {
              setGrade(e.target.id);
              console.log(e.target.id);
            }}
            defaultChecked={arr[0]}
          />
          <Form.Check
            required
            inline
            label="2"
            name="group1"
            type="radio"
            id="2"
            onClick={(e) => {
              setGrade(e.target.id);
              console.log(e.target.id);
            }}
            defaultChecked={arr[1]}
          />
          <Form.Check
            required
            inline
            label="3"
            name="group1"
            type="radio"
            id="3"
            onClick={(e) => {
              setGrade(e.target.id);
              console.log(e.target.id);
            }}
            defaultChecked={arr[2]}
          />
          <Form.Check
            required
            inline
            label="4"
            name="group1"
            type="radio"
            id="4"
            onClick={(e) => {
              setGrade(e.target.id);
              console.log(e.target.id);
            }}
            defaultChecked={arr[3]}
          />
          <Form.Check
            required
            inline
            label="5"
            name="group1"
            type="radio"
            id="5"
            onClick={(e) => {
              setGrade(e.target.id);
              console.log(e.target.id);
            }}
            defaultChecked={arr[4]}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
}

export default ClassEditForm;
