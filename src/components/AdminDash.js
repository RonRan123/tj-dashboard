import React, { useState, useEffect } from 'react';
import { ListGroup, Tab, Row, Col } from 'react-bootstrap';
import ClassDash from './ClassDash';

import ClassInfo from './ClassInfo';
function AdminDash() {
	const [classes, setClasses] = useState();
	const getMyClasses = async () => {
		console.log('fetching classes');
		const url = new URL('http://localhost:8080/classes/get');
		let res = await fetch(url).then((resp) => resp.json());
		setClasses(res);
		// console.log('books have been set')
	};
	useEffect(() => {
		getMyClasses();
	}, []);
	return (
		<div>
			<div style={{ maxHeight: 'max-content', maxWidth: '25%', margin: '1%' }}>
				<ClassDash classes={classes}></ClassDash>
			</div>
		</div>
	);
}

export default AdminDash;
