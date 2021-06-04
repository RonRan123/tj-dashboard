import React, { useState, useEffect } from 'react';
import { ListGroup, Tab, Row, Col, Modal, Form, Button } from 'react-bootstrap';
import ClassInfo from './ClassInfo';
import ClassForm from './ClassForm';
import { ClassContext, StudentContext, TeacherContext } from './Home';
import ClassCard from './ClassCard';
function ClassDash({ setClassID }) {
	const { classes, getMyClasses } = React.useContext(ClassContext);
	const { teachers } = React.useContext(TeacherContext);

	const [modal, setModal] = useState(false);

	const handleClick = (e) => {
		//alert('whats up');
		setModal(true);
		e.preventDefault();
	};

	useEffect(() => {}, []);
	return (
		<Tab.Container defaultActiveKey="#link0">
			<ListGroup style={{width:'max-content'}}>
				<div>
					<ListGroup.Item
						variant="secondary"
						onClick={() => setClassID('allIDs')}
						action
						href={'#link' + 0}
					>
						<h4> Show All Students </h4>
					</ListGroup.Item>
				</div>
				{classes &&
					classes.map((c, index) => {
						console.log(c);
						return (
							<ClassInfo
								c={c}
								index={index + 1}
								setClassID={setClassID}
							></ClassInfo>
						);
					})}
				<ListGroup.Item variant="success" action onClick={handleClick} active style={{backgroundColor:'#198754'}}>
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
					<ClassForm setModal={setModal} />
				</Modal.Body>
			</Modal>
		</Tab.Container>
	);
}

export default ClassDash;
