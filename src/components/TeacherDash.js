import React, {useState, useEffect} from 'react'
import Class from "./Class"

function TeacherDash(){
    const [students, setStudents] = useState();
    const [myClass, setMyClass] = useState();
    const [classes, setClasses] = useState();
    const getMyClasses = async () => {
        const url = new URL('http://localhost:8080/classes/get');
        let res = await fetch(url).then((resp) => resp.json());
        setClasses(res);
        // console.log('books have been set')
    }

    const getMyStudents = async () => {
        const url = new URL('http://localhost:8080/teachers/get');
        let res = await fetch(url).then((resp) => resp.json());
        setClasses(res);
        // console.log('books have been set')
    }
    useEffect( () => {
        getMyClasses();
    },[])
    return (
        <div>
            {classes && classes.map(c => <Class info={c} />)}
            {students && students.map(c => <Class info={c} />)}
        </div>
    );
}

export default TeacherDash;