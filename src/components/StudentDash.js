import React, {useState, useEffect} from 'react'
import Student from './StudentInfo';
import {Card} from 'react-bootstrap';

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
            {students && students.map(s => <Student info={s} />)}
        </div>
    );

}

export default StudentDash;