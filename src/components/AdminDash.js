import React, { useState, useEffect, useContext } from 'react';
import { ListGroup, Tab, Row, Col } from 'react-bootstrap';
import ClassDash from './ClassDash';
import {ClassContext, StudentContext, TeacherContext} from './Home';
import ClassInfo from './ClassInfo';
function AdminDash() {
	const {classes, getMyClasses} = React.useContext(ClassContext);
	const {teachers, getTeachers} = React.useContext(TeacherContext);

	
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
		<div>
			<div style={{ maxHeight: 'max-content', maxWidth: '25%', margin: '1%' }}>
				<ClassDash
					getClasses={getMyClasses}
					classes={classes}
					teachers={teachers}
				></ClassDash>
			</div>
		</div>
	);
}

export default AdminDash;
