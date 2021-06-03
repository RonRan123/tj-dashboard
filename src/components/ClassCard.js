import React from 'react';
import { Card, Tab, Row, Col, Button } from 'react-bootstrap';
import { ClassContext, TeacherContext } from './Home';
function ClassCard(classID) {
	//need access to teacher name, class id,
	const { classes, getMyClasses } = React.useContext(ClassContext);
	const { teachers, getTeachers } = React.useContext(TeacherContext);
	const getTeacherName = (classID) => {
		let teacherName = '';
		for (let teach in teachers) {
			if (teachers[teach].classID === classID.classID) {
				return (teacherName +=
					teachers[teach].firstName + ' ' + teachers[teach].lastName);
			}
			console.log(
				'Teacher ID ' + teachers[teach].classID + ' GLobal classID ' + classID
			);
		}
		return 'None Assigned';
	};
	return (
		<Card>
			<Card.Header as="h5"> {classID.classID} </Card.Header>
			<Card.Body>
				<Card.Title style={{ float: 'left' }}>
					{' '}
					<strong>Teacher:</strong> {getTeacherName(classID)}{' '}
				</Card.Title>

				<Button style={{ float: 'right' }} variant="dark">
					{' '}
					Edit Teacher{' '}
				</Button>
			</Card.Body>
		</Card>
	);
}

export default ClassCard;
