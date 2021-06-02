import React, {useState, useEffect} from 'react'
import StudentDir from './InfoStudentDirectory';
import {Table} from 'react-bootstrap';


function StudentDirectory(){
    const [students, setStudents] = useState();

    const getTeachers = async () => {
        const url = new URL('http://localhost:8080/students/get');
        let res = await fetch(url).then((resp) => resp.json());
        setStudents(res);
        // console.log('books have been set')
    }
    useEffect( () => {
        getTeachers();
    },[])
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
                </tr>
            </thead>
            {students && students.map(s => <StudentDir id={s.doc} info={s} />)}
        </Table>
        
        </div>
    );

}

export default StudentDirectory;