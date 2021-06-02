import React from 'react';



function StudentDir({info}){
    
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
                    <td>{info.grade}</td>
                </tr>
            </tbody>

        
        
    );
}
export default StudentDir;