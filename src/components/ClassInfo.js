import React, { useState, useEffect } from 'react';
import { ListGroup, Tab, Row, Col } from 'react-bootstrap';

function ClassInfo({ index, c }) {
	return (
		<div>
			<ListGroup.Item variant="primary" action href={'#link' + index}>
				<h4> Class: {c.classID} </h4>
				<p> Teacher: {c.teacher} </p>
				<p> Grade: {c.gradeLevel} </p>
			</ListGroup.Item>
			<Tab.Pane eventKey={'#link' + index}>
				{/* {JSON.stringify(c.students)} */}
			</Tab.Pane>
		</div>
	);
}
export default ClassInfo;
