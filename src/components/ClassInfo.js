import React, { useState, useEffect } from 'react';
import { ListGroup, Tab, Row, Col } from 'react-bootstrap';

function ClassInfo({ index, c, teachers }) {
	
	const getTeacherName = (teacherID) => {
		let teacherName = "";
		for(let teach in teachers) {
			if(teachers[teach].doc_id === teacherID) {
				return teacherName += teachers[teach].firstName + " " + teachers[teach].lastName;
			}
		}
		return "TEACHER NOT FOUND";
	}
	
	return (
		<div>
			<ListGroup.Item variant="primary" action href={'#link' + index}>
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
