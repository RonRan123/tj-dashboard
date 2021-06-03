import React from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import '../style.css';
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
						<Jumbotron fluid style={{ flaot: 'left' }}>
							<h3 style={{ float: 'left' }}>
								{' '}
								About Thomas Jefferson Elementary{' '}
							</h3>
							<p style={{ textAlign: 'left' }}>
								Founded in 1806, Thomas Jefferson Elementary is one of the
								oldest public schools in the U.S. Since its founding, TJ has
								been committed to shaping young minds and developing true
								leaders.
							</p>
						</Jumbotron>
						<br></br>
					</Col>

					<Col>
						<br></br>
						<br></br>
						<p style={{ textAlign: 'left' }}>
							Thomas Jefferson Elementary allows its students to explore, and
							endulge their curiousities through a variety of pursuits. At TJ,
							all are welcome that are willing to learn.
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
								<Image src="tech-pic.jpg" width="90%" fluid />
							</Col>
						</Row>
						<Row>
							<Col>
								<Image
									src="kids-at-school.jpg"
									height="80%"
									width="90%"
									fluid
								/>
							</Col>
						</Row>
					</Col>
					<Col>
						<Image src="new-super.jpg" fluid />{' '}
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default LandingPage;
