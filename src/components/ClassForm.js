import React, { useState, } from 'react';
import { Form, Button } from 'react-bootstrap';
//import ClassInfo from './ClassInfo';
import { ClassContext, TeacherContext } from './Home';

function ClassForm({setModal}) {
	
	const {teachers} = React.useContext(TeacherContext);
	const {getMyClasses} = React.useContext(ClassContext);
	
	const [className, setClassName] = useState('');
	const [grade, setGrade] = useState(0);
	const [teacherID, setTeacherID] = useState(teachers[0].doc_id);



	return (
		<Form
			onSubmit={(e) => {
				e.preventDefault();
				console.log(className);
				console.log(grade);
				console.log(teacherID);
				const obj = {
					classID: className,
					teacher: teacherID,
					gradeLevel: grade,
				};
				(async () => {
					const rawResponse = await fetch('http://localhost:8080/classes/add', {
						method: 'POST',
						headers: {
							Accept: 'application/json',
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(obj),
					}).then((res) => getMyClasses());
					//const content = await rawResponse.json();

					//console.log(content);
				})();
				setModal(false);
			}}
		>
			<Form.Label>Class ID</Form.Label>
			<Form.Control
				hasValidation
				required
				placeholder="TJE#"
				name="classID"
				onChange={(e) => {
					setClassName(e.target.value);
				}}
			></Form.Control>
			<br />
			<div key={`inline-${'radio'}`}>
				<Form.Label>Grade Level</Form.Label>
				<br />
				<Form.Group name="radios">
					<Form.Check
						required
						inline
						label="1"
						name="group1"
						type="radio"
						id="1"
						onClick={(e) => {
							setGrade(e.target.id);
						}}
					/>
					<Form.Check
						required
						inline
						label="2"
						name="group1"
						type="radio"
						id="2"
						onClick={(e) => {
							setGrade(e.target.id);
						}}
					/>
					<Form.Check
						required
						inline
						label="3"
						name="group1"
						type="radio"
						id="3"
						onClick={(e) => {
							setGrade(e.target.id);
						}}
					/>
					<Form.Check
						required
						inline
						label="4"
						name="group1"
						type="radio"
						id="4"
						onClick={(e) => {
							setGrade(e.target.id);
						}}
					/>
					<Form.Check
						required
						inline
						label="5"
						name="group1"
						type="radio"
						id="5"
						onClick={(e) => {
							setGrade(e.target.id);
						}}
					/>
				</Form.Group>
			</div>
			<br />
			<Form.Label>Choose Teacher</Form.Label>
			<Form.Control as="select" name="teacher" defaultValue="option0">
				{teachers.map((teacher, index) => {
					return (
						<option
							value={'option' + index}
							id={teacher.doc_id}
							onChange={(e) => {
								console.log('CHANGING');
								setTeacherID(e.target.id);
								console.log(e.target.id);
							}}
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
			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	);
}

export default ClassForm;
