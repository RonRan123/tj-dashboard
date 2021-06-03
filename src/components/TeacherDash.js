import React, { useState, useEffect } from 'react';
import {ClassContext, StudentContext, TeacherContext} from './Home';
import SelectClassForm from './SelectClassForm';
import StudentDash from './StudentDash';
function TeacherDash() {
	const {classes, getMyClasses} = React.useContext(ClassContext);
	const [classID, setClassID] = useState('allIDs');
	useEffect(() => {
		// getMyClasses();
	}, []);
	return (
		<div>
			<SelectClassForm setClassID={setClassID}/>
			<StudentDash classID={classID} isTeacher={true}/>
		</div>
	);
}

export default TeacherDash;
