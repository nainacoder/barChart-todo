import React,{useState} from 'react';

function Counter(){
const[count, setCount]=useState(0)

function handleIncrement(){
    setCount((prev)=> prev+1)
}

function handleDecrement(){
    setCount((prev)=>prev-1)
}

function handleReset(){
setCount(0)
}

console.log(count,'+++count')
const buttonStyle= {padding:'10px',margin:'0 10px',backgroundColor:'lightBlue',border:'none'}
    return(
        <div>
<h1>{count}</h1>
<button style={buttonStyle} onClick={handleIncrement}>+</button>
<button style={buttonStyle} onClick={handleReset} disabled={count===0}>reset</button>
<button style={buttonStyle}  onClick={handleDecrement} disabled={count===0}>-</button>
        </div>
    )
}
export default Counter;