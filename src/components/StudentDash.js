import React, {useState, useEffect} from 'react'
import Student from './StudentInfo';
import {Card, Table} from 'react-bootstrap';
import StudentForm from './AddStudent';

function StudentDash(){
    const [students, setStudents] = useState();

    const getStudents = async () => {
        const url = new URL('http://localhost:8080/students/get');
        let res = await fetch(url).then((resp) => resp.json());
        setStudents(res);
        // console.log('books have been set')
    }
    useEffect( () => {
        getStudents();
    },[])
    return (
        <div>
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Birth Date</th>
                <th>Remove</th>
                </tr>
            </thead>
            {students && students.map(s => <Student info={s} />)}
        </Table>
        
        </div>
    );

}

export default StudentDash;