import React, {useState, useEffect} from 'react';
import {Button, Form} from 'react-bootstrap';


export default function StudentForm(){
    
    
    const state = {
        firstName: '',
        lastName: '',
        DOB: '',
        classID: '',
        grade: '',

    }


    
    const addStudent = () => {
        console.log(info)
        fetch('http://localhost:8080/students/add', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                DOB: this.state.DOB,
                classID: this.state.classID,
                grade: this.state.grade
            }),
        })
        .then( resp => resp.json())

    }

    

    return(
        <Form>
            <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="email" placeholder="Enter First Name" />
            </Form.Group>

            <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name" />
            </Form.Group>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridMonth">
                <Form.Label>Month</Form.Label>
                <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridDate">
                <Form.Label>Day</Form.Label>
                <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Year</Form.Label>
                <Form.Control />
                </Form.Group>
            </Form.Row>

            <Form.Group>
                <Form.Label>Class ID</Form.Label>
                <Form.Control type="text" placeholder="Enter Class ID" />
            </Form.Group>

            <Form.Group>
                <Form.Label>Grade</Form.Label>
                <Form.Control type="text" placeholder="Enter Student's Grade" />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={addStudent}>
                Submit
            </Button>
        </Form>

    );
}