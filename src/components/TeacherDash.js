import React, { useState, useEffect } from 'react';

function TeacherDash() {
	const [students, setStudents] = useState();
	const [myClass, setMyClass] = useState();
	const [classes, setClasses] = useState();
	const getMyClasses = async () => {
		const url = new URL('http://localhost:8080/classes/get');
		let res = await fetch(url).then((resp) => resp.json());
		setClasses(res);
		// console.log('books have been set')
	};

	const getMyStudents = async () => {
		const url = new URL('http://localhost:8080/teachers/get');
		let res = await fetch(url).then((resp) => resp.json());
		setClasses(res);
		// console.log('books have been set')
	};
	useEffect(() => {
		getMyClasses();
	}, []);
	return <div></div>;
}

export default TeacherDash;
