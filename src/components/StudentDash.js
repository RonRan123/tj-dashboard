import React, {useState, useEffect} from 'react'
import Student from './StudentInfo';
import {Table} from 'react-bootstrap';
import StudentForm from './StudentForm'
// import StudentForm from './AddStudent';
import {ClassContext, StudentContext, TeacherContext} from './Home';
function StudentDash({classID}){

    // const [students, setStudents] = useState();

    // const getStudents = async () => {
    //     const url = new URL('http://localhost:8080/students/get');
    //     let res = await fetch(url).then((resp) => resp.json());
    //     setStudents(res);
    //     // console.log('books have been set')
    // }
    const {students, getStudents} = React.useContext(StudentContext);
    
    useEffect( () => {
        getStudents();
    },[]);
    if(classID !== 'allIDs'){
        var showStudents = students.filter(s => s.classID === classID);
    }
    else{
        var showStudents = students;
    }
    return (
        <div>
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Birth Date</th>
                <th>Class ID</th>
                <th>Grade</th>
                <th>Actions</th>
                </tr>
            </thead>
            {students && showStudents.map(s => <Student id={s.doc} info={s} />)}
        </Table>
        <StudentForm buttonLabel="Add Student"/>
        </div>
    );

}

export default StudentDash;