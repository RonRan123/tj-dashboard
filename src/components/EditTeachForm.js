import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
//import ClassInfo from './ClassInfo';
import { ClassContext, TeacherContext } from './Home';

function EditTeachForm() {
	const { teachers } = React.useContext(TeacherContext);
	const { getMyClasses } = React.useContext(ClassContext);

	const [className, setClassName] = useState('');
	const [grade, setGrade] = useState(0);
	const [teacherID, setTeacherID] = useState(teachers[0].doc_id);
	return (
		<Form>
			<Form.Control as="select" name="teacher" defaultValue="option0">
				{teachers.map((teacher, index) => {
					return (
						<option
							value={'option' + index}
							id={teacher.doc_id}
							onClick={(e) => {
								console.log('CLICKING');
								setTeacherID(e.target.id);
								console.log(e.target.id);
							}}
						>
							{teacher.firstName} {teacher.lastName}
						</option>
					);
				})}
				{/* <option>Choose...</option>
<option>...</option> */}
			</Form.Control>
		</Form>
	);
}

export default EditTeachForm;
