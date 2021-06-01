import React, {useState, useEffect} from 'react';
import {Card, Button, Table} from 'react-bootstrap';
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
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Birth Date</th>
                <th>Remove</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>{info.firstName}</td>
                    <td>{info.lastName}</td>
                    <td>{info.DOB}</td>
                    <td><Button onClick={deleteStudent}>Remove</Button></td>
                </tr>
            </tbody>

        </Table>
        
    );
}
export default Student;