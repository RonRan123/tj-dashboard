import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function AddEditForm({info, close}){
    const fields = {
        firstName: '',
        lastName: '',
        DOB: '06/02/2021',
        classID: '',
        grade: '',

    }
    
    if(!info){
        info = fields;
    }
    const [startDate, setStartDate] = useState(new Date());
    const [state, setState] = useState(info);
    
    const onChange = e => {
        setState({...state, [e.target.name]: e.target.value})
    }
    const changeDate = (d) => {
        const date = (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear();
        setStartDate(d);
        console.log(date);
        setState({...state, DOB: date});
    } 
    const handleSubmit = () => {
        fetch('http://localhost:8080/students/update', {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(state),
        }).then(resp => resp.json());
        close();
    }
      
    return (
        <Form id={info.doc?info.doc:'no-id'}>
            <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter First Name" name="firstName" onChange={onChange} value={state.firstName}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name" name="lastName" onChange={onChange} value={state.lastName}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Select Date of Birth</Form.Label>
                <DatePicker selected={startDate} onChange={(date) => changeDate(date)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Grade</Form.Label>
                <Form.Control type="text" placeholder="Enter Grade" name="grade" onChange={onChange} value={state.grade}/>
            </Form.Group>
            <Button onClick={handleSubmit}>Submit</Button>
        </Form>
    );
}

export default AddEditForm;