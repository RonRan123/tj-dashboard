import React, { useState } from 'react';
import {Button, Modal} from 'react-bootstrap';
import AddEditForm from "./AddEditForm"

function StudentForm({buttonLabel,info }){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const retrieveButton = () => {
        if(buttonLabel === 'Edit'){
            return <Button variant='secondary' onClick={handleShow}>{buttonLabel}</Button>
        }
        return <Button variant="success" onClick={handleShow}>{buttonLabel}</Button>
    }
    return (
        <>
            {retrieveButton()}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{buttonLabel === 'Edit'?"Edit Student Form":"Add a Student"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {buttonLabel === 'Edit'?<AddEditForm info={info} isEdit={true} close={handleClose}/>:<AddEditForm isEdit={false} close={handleClose}/>}
                </Modal.Body>
                <Modal.Footer>
                {/* <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button> */}
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default StudentForm;