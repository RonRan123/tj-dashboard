import React, { useState, useEffect } from 'react';
import { ListGroup, Tab, Row, Col, Button } from 'react-bootstrap';

function ClassInfo({ index, c, teachers, getClasses }) {
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
			}).then((res) => getClasses());
			//const content = await rawResponse.json();

			//console.log(content);
		})();
	};

	return (
		<div>
			<ListGroup.Item variant="primary" action href={'#link' + index}>
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
			<Tab.Pane eventKey={'#link' + index}>
				{/* {JSON.stringify(c.students)} */}
			</Tab.Pane>
		</div>
	);
}
export default ClassInfo;
