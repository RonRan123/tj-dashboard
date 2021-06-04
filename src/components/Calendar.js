import React from 'react';
import {Container, Row, Col, Image} from "react-bootstrap"
function Calendar() {
	return (
		<Container>
			 <Row>
			<Col>
		<iframe
			style={{margin:'3%'}}
			src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23F6BF26&amp;ctz=America%2FNew_York&amp;src=amNicWhtcGJlcXQxbWVqMThiZGRobzNibG9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23F4511E&amp;color=%230B8043&amp;title=TJ%20Elementary%20Calendar"
			//style="border:solid 1px #777"
			width="800"
			height="600"
			frameborder="0"
			scrolling="no"
		></iframe>
		</Col>
		<Col></Col>
		<Col>
		 <a href="https://youtu.be/W9EVa8p5b58?t=136" target="_blank"><Image src="slug.png" fluid/></a>
		 </Col>
		</Row>
		 </Container>
	);
}

export default Calendar;
