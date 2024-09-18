import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../redux/counterSlice';

function CounterWithRedux(){
    const count = useSelector((state)=>state.counter.count)
    const dispatch = useDispatch();

 function handleIncrement(){
   dispatch(increment()) 
 }

 function handleDecrement(){
    dispatch(decrement())
 }

 function handleReset(){
    dispatch(reset())
 }

 const buttonStyle= {padding:'10px',margin:'0 10px',backgroundColor:'lightBlue',border:'none'}

    return(
        <div>
<h1>Count:{count}</h1>
<button style={buttonStyle} onClick={handleIncrement} >+</button>
<button style={buttonStyle} onClick={handleReset} disabled={count === 0}>reset</button>
<button style={buttonStyle} onClick={handleDecrement} disabled={count === 0}>-</button>
        </div>
    )
}

export default CounterWithRedux