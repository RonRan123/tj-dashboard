import React, {useState, useEffect} from 'react'
import Teacher from './TeacherInfo';
import {Table} from 'react-bootstrap';


function TeacherDirectory(){
    const [teachers, setTeachers] = useState();

    const getTeachers = async () => {
        const url = new URL('http://localhost:8080/teachers/get');
        let res = await fetch(url).then((resp) => resp.json());
        setTeachers(res);
        // console.log('books have been set')
    }
    useEffect( () => {
        getTeachers();
    },[])
    return (
        <div style={{margin:'3%'}}>
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Class</th>
                </tr>
            </thead>
            {teachers && teachers.map(s => <Teacher id={s.doc} info={s} />)}
        </Table>
        
        </div>
    );

}

export default TeacherDirectory;