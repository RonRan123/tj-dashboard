import React, { useState } from 'react';
import {Button, Modal} from 'react-bootstrap';
import AddEditForm from "./AddEditForm"

function StudentForm({buttonLabel,info }){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const retrieveButton = () => {
        if(buttonLabel === 'Edit'){
            return <Button variant='outline-primary' onClick={handleShow}>{buttonLabel}</Button>
        }
        return <Button variant="outline-success">{buttonLabel}</Button>
    }
    return (
        <>
            {retrieveButton()}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddEditForm info={info}/>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default StudentForm;