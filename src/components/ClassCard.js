import React, {useState} from 'react';
import { Card, Tab, Row, Col, Button, Modal } from 'react-bootstrap';
import EditTeachForm from './EditTeachForm';
import { ClassContext, TeacherContext } from './Home';

function ClassCard(classID) {
	//need access to teacher name, class id,
	const { classes, getMyClasses } = React.useContext(ClassContext);
	const { teachers, getTeachers } = React.useContext(TeacherContext);
	const [modal, setModal] = useState(false);

	let oldTeacher = "";

	const getTeacherName = (classID) => {
		let teacherName = '';
		for (let teach in teachers) {
			if (teachers[teach].classID === classID.classID) {
				oldTeacher = teachers[teach];
				return (teacherName +=
					teachers[teach].firstName + ' ' + teachers[teach].lastName);
			}
			console.log(
				'Teacher ID ' + teachers[teach].doc_id + ' GLobal classID ' + JSON.stringify(classID)
			);
		}
		return 'None Assigned';
	};
	return (
		<Card>
			<Card.Header as="h5"> {classID.classID} </Card.Header>
			{classID.classID !== "allIDs" ? (<Card.Body>
				<Card.Title style={{ float: 'left' }}>
					{' '}
					<strong>Teacher:</strong> {getTeacherName(classID)}{' '}
				</Card.Title>

				<Button style={{ float: 'right' }} variant="secondary" onClick={() => setModal(true)}>
					{' '}
					Edit Teacher{' '}
				</Button>
			</Card.Body>) : null}
			<Modal show={modal} onHide={() => {setModal(false)}}><Modal.Header closeButton><Modal.Title>Edit Teacher</Modal.Title></Modal.Header><EditTeachForm setModal={setModal} classID={classID} oldTeacher={oldTeacher}/></Modal>
		</Card>
	);
}

export default ClassCard;
