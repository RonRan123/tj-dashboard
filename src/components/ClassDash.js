import React, { useState, useEffect } from 'react';
import { ListGroup, Tab, Row, Col } from 'react-bootstrap';
import ClassInfo from './ClassInfo';

function ClassDash({ classes }) {
	const [modal, setModal] = useState(false);

	const handleClick = (e) => {
		//alert('whats up');
		setModal(!modal);
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
		</Tab.Container>
	);
}

export default ClassDash;
