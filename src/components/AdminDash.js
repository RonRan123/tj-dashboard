import React, { useState, useEffect } from "react";
import { ListGroup, Tab, Row, Col } from "react-bootstrap";
import Class from "./Class";

function AdminDash() {
  const [classes, setClasses] = useState();
  const getMyClasses = async () => {
    const url = new URL("http://localhost:8080/classes/get");
    let res = await fetch(url).then((resp) => resp.json());
    setClasses(res);
    // console.log('books have been set')
  };
  useEffect(() => {
    getMyClasses();
  }, []);
  return (
    <div>
      <div style={{ maxHeight: "max-content", maxWidth: "25%", margin: "1%" }}>
        <Tab.Container defaultActiveKey="#link0">
          <ListGroup>
            {classes &&
              classes.map((c, index) => {
                console.log(c);
                return (
                  <div>
                    <ListGroup.Item action href={"#link" + index}>
                      <Class info={c} />
                    </ListGroup.Item>
                    <Tab.Pane eventKey={'#link'+index}>{JSON.stringify(c.students)}</Tab.Pane>
                  </div>
                );
              })}
          </ListGroup>
        </Tab.Container>
      </div>
    </div>
  );
}

export default AdminDash;
