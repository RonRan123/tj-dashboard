import React, {useState, useEffect} from 'react';
import {Card, Button, Table} from 'react-bootstrap';
import StudentForm from './StudentForm'

function Student({info}){
    
    const deleteStudent = () => {
        console.log(info)
        fetch('http://localhost:8080/students/delete', {
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(info),
        })
        .then( resp => resp.json())

    }
    
    return (
            <tbody>
                <tr>
                    <td>{info.firstName}</td>
                    <td>{info.lastName}</td>
                    <td>{info.DOB}</td>
                    <td>{info.classID}</td>
                    <td>
                        <div>
                            <StudentForm buttonLabel="Edit" info={info}/>
                            {/* <Button variant="outline-primary" onClick={deleteStudent}>Edit</Button> */}
                            {' '}
                            <Button variant="outline-danger" onClick={deleteStudent}>Delete</Button>
                        </div>
                    </td>
                </tr>
            </tbody>

        
        
    );
}
export default Student;