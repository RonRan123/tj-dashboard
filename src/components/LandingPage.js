import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import '../index.css';
function LandingPage() {
	return (
		<Container fluid="lg">
			<Row>
				<Col>
					<div className="hero-image">
						<div className="hero-text">
							<h1>I am John Doe</h1>
							<p>And I'm a Photographer</p>
							<button>Hire me</button>
						</div>
					</div>
					{/* {' '}
					<Image src="erika-fletcher-MZxqc6n9qCw-unsplash.jpg" width="110%" /> */}
				</Col>
			</Row>
		</Container>
	);
}

export default LandingPage;
