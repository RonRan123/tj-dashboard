import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';

function AddEditForm({info}){
    const fields = {
        firstName: '',
        lastName: '',
        DOB: '',
        classID: '',
        grade: '',

    }
    if(!info){
        info = fields;
    }
    const [state, setState] = useState(info);
    const onChange = e => {
        setState({...state, [e.target.name]: e.target.value})
    }
    const handleSubmit = () => {
        console.log(state);
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
            <Form.Row>
                <Form.Group controlId="formGridMonth">
                <Form.Label>Month</Form.Label>
                <Form.Control type="number"/>
                </Form.Group>

                <Form.Group controlId="formGridDate">
                <Form.Label>Day</Form.Label>
                <Form.Control type="number"/>
                </Form.Group>

                <Form.Group controlId="formGridZip">
                <Form.Label>Year</Form.Label>
                <Form.Control type="number"/>
                </Form.Group>
            </Form.Row>
            <Button onClick={handleSubmit}>Submit</Button>
        </Form>
    );
}

export default AddEditForm;