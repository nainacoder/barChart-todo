import React from 'react';


const Input =({onChange,name,value})=>{
    return(
        <input onChange={onChange} name={name} value={value}/>
    )
}

export default Input;