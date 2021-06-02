import React, { useState, useEffect } from 'react';
import { ListGroup, Tab, Row, Col, Modal, Form, Button } from 'react-bootstrap';
import ClassInfo from './ClassInfo';
import ClassForm from './ClassForm';

function ClassDash({ classes, teachers, getClasses }) {
	const [modal, setModal] = useState(false);

	const handleClick = (e) => {
		//alert('whats up');
		setModal(true);
		e.preventDefault();
	};

	useEffect(() => {}, []);
	return (
		<Tab.Container defaultActiveKey="#link0">
			<ListGroup>
				{classes &&
					classes.map((c, index) => {
						console.log(c);
						return (
							<ClassInfo c={c} index={index} teachers={teachers}></ClassInfo>
						);
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
					<ClassForm
						getClasses={getClasses}
						teachers={teachers}
						setModal={setModal}
					/>
				</Modal.Body>
			</Modal>
		</Tab.Container>
	);
}

export default ClassDash;
