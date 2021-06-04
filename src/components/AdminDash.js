import React, { useState, useEffect, useContext } from 'react';
import ClassDash from './ClassDash';
import StudentDash from './StudentDash';
import { Container, Row, Col } from 'react-bootstrap';
import { ClassContext, StudentContext, TeacherContext } from './Home';
import ClassCard from './ClassCard';
import TeacherAdminDash from './TeacherAdminDash';

function AdminDash() {
	const { classes, getMyClasses } = React.useContext(ClassContext);
	const { teachers, getTeachers } = React.useContext(TeacherContext);
	const [classID, setClassID] = useState('allIDs');

	// const [classes, setClasses] = useState([]);
	// const [teachers, setTeachers] = useState([]);
	// const getMyClasses = async () => {
	// 	console.log('fetching classes');
	// 	const url = new URL('http://localhost:8080/classes/get');
	// 	let res = await fetch(url).then((resp) => resp.json());
	// 	setClasses(res);
	// 	// console.log('books have been set')
	// };

	// const getTeachers = async () => {
	// 	console.log('fetching teachers');
	// 	const url = new URL('http://localhost:8080/teachers/get');
	// 	let res = await fetch(url).then((resp) => resp.json());
	// 	setTeachers(res);
	// 	console.log(res);
	// };
	useEffect(() => {
		getMyClasses();
		getTeachers();
	}, []);
	return (
		<div style={{margin:'3%'}}>
			<Container style={{}}>
				<Row>
					<Col md='auto' style={{margin:'auto'}}>
						{/* <div style={{ maxHeight: 'max-content', maxWidth: '25%', margin: '1%' }}> */}
						<ClassDash setClassID={setClassID} />
					</Col>

					<Col md='auto'> 
						<ClassCard classID={classID}> </ClassCard>
						<StudentDash classID={classID} />
					</Col>
					<Col>
					<TeacherAdminDash/>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default AdminDash;
