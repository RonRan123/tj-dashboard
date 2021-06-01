import React, {useEffect} from 'react';


function Class({info}){
    
    return (
        <div>
            <h1>{info.classID}</h1>
            <p>{info.teacher}</p>
            <p>{JSON.stringify(info)}</p>
            <p></p>
        </div>
        
    );
}
export default Class;