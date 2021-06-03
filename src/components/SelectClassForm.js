import React, { useEffect } from 'react';
import {Form} from 'react-bootstrap';
import {ClassContext} from './Home';
function SelectClassForm({setClassID}){
    const {classes, getMyClasses} = React.useContext(ClassContext);
    useEffect(() => getMyClasses(), []);
    return (
        <Form>
            <Form.Group>
                <Form.Label>Select a class to display</Form.Label>
                <Form.Control as="select" defaultValue="allIDs" name="classID">
                    <option
                        value="allIDs"
                        label=""
                        onClick={ e => {
                            setClassID(e.target.value)
                        }}  
                    ></option>
                    {classes.map((c, index) => {
                        return (
                            <option
                                value={c.classID}
                                id={c.classID}
                                label={c.classID}
                                onClick={ e => {
                                    setClassID(e.target.value)
                                }}   
                            >
                            </option>
                        )
                    })}

                </Form.Control>
            </Form.Group>
        </Form>

    );
}

export default SelectClassForm;