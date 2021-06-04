import React from "react";
import { Container, Row, Col, Jumbotron, Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "../style.css";
function LandingPage() {
  // const style = {
  // 	color: 'white',
  // 	backgroundImage: 'url (' + 'https://unsplash.com/photos/Uzg0pq7pDCU' + ')',
  // };
  return (
    <div>
      <div className="hero-image">
        <div className="hero-text">
          <h1>Thomas Jefferson Elementary </h1>
          <p>Home of the Banana Slugs</p>
        </div>
      </div>
      <Container fluid="lg">
        <Row>
          <Col>
            <Jumbotron fluid style={{ float: "left" }}></Jumbotron>
            <br></br>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 style={{ float: "left" }}>
              {" "}
              About Thomas Jefferson Elementary{" "}
            </h3>

            <p style={{ textAlign: "left" }}>
              <br></br>
              <br></br>
              At Thomas Jefferson Elementary School, we are a diverse community
              of global citizens and lifelong learners that lead by example. We
              believe in the power of positivity, respect, and cooperation. We
              manifest our potential through confidence and work ethic.
            </p>
          </Col>
          <Col>
            <br></br>
            <br></br>
            <p style={{ textAlign: "left" }}>
              Since its founding in 1683, Thomas Jefferson Elementary has valued
              positivity, respect, and education. These principles paired with
              diversity and camaraderie amongst our student set TJ above all institutions.
            </p>
          </Col>
        </Row>

        <Row>
          <br></br>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col>
                {/* <Image src="tech-pic.jpg" width="90%" fluid /> */}
                <div className="tech-image"></div>
                {/* <div className="tech-text">
									<h1>Thomas Jefferson Elementary </h1>
									{/* <p>Home of the Banana Slugs</p> */}
                {/* </div> */}
              </Col>
            </Row>
            <Row>
              <Col>
                {/* <Image
									src="kids-at-school.jpg"
									height="80%"
									width="90%"
									fluid
								/> */}
                <div className="kids-image" />
                {/* <div className="kids-text">
									<h1>Student Projects </h1>
									{/* <p>Explore the banana slugs' end of year projects</p> */}
                {/* </div> */}
              </Col>
            </Row>
          </Col>
          <Col>
            <Image src="new-super.jpg" fluid />{" "}
            {/* <p style={{ textAlign: 'left' }}>
							Thomas Jefferson Elementary School's new Superintendent has big
							plans for the schools full return to in person classes next fall.
							Stay tuned for more in the Daily Slug!
						</p> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
