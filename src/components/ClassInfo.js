import React, { useState, useEffect } from 'react';
import { ListGroup, Tab, Row, Col, Button } from 'react-bootstrap';
import { ClassContext, TeacherContext } from './Home';

function ClassInfo({ index, c, setClassID }) {
	const {teachers} = React.useContext(TeacherContext);
	const {getMyClasses} = React.useContext(ClassContext);
	
	const getTeacherName = (teacherID) => {
		let teacherName = '';
		for (let teach in teachers) {
			if (teachers[teach].doc_id === teacherID) {
				return (teacherName +=
					teachers[teach].firstName + ' ' + teachers[teach].lastName);
			}
		}
		return 'TEACHER NOT FOUND';
	};

	const onClick = (e) => {
		e.preventDefault();
		console.log(c);
		console.log(c.doc_id);

		(async () => {
			const rawResponse = await fetch('http://localhost:8080/classes/delete', {
				method: 'DELETE',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ doc: c.doc_id }),
			}).then((res) => getMyClasses());
			//const content = await rawResponse.json();

			//console.log(content);
		})();
	};

	return (
		<div>
			<ListGroup.Item variant="primary" id={c.classID} onClick={() => setClassID(c.classID)} action href={'#link' + index}>
				<Button variant="secondary" style={{ float: 'left' }}>
					{' '}
					Edit{' '}
				</Button>

				<Button onClick={onClick} variant="danger" style={{ float: 'right' }}>
					Delete
				</Button>
				<br></br>
				<br></br>
				<h4> Class: {c.classID} </h4>
				<p> Teacher: {getTeacherName(c.teacher)} </p>
				<p> Grade: {c.gradeLevel} </p>
			</ListGroup.Item>
		</div>
	);
}
export default ClassInfo;
