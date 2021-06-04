import React, { useState, useEffect } from 'react';
import { InputGroup } from 'react-bootstrap';
import {ClassContext, StudentContext, TeacherContext} from './Home';
import SelectClassForm from './SelectClassForm';
import StudentDash from './StudentDash';
function TeacherDash() {
	const {classes, getMyClasses} = React.useContext(ClassContext);
	const {students} = React.useContext(StudentContext);
	const [classID, setClassID] = useState('allIDs');
	useEffect(() => {
		// getMyClasses();
	}, []);

	return (
		<div>
			<div style={{display: 'flex', justifyContent: 'center'}}>
				<SelectClassForm setClassID={setClassID}/>
				
			</div>
			<StudentDash classID={classID} isTeacher={true}/>
		</div>
	);
}

export default TeacherDash;
