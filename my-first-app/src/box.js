import React from 'react';
import './App.css'

function Box(props)
{
    return(
        <div class='Box'  style={{backgroundColor: props.color}}>
             <h3>Count {props.count}</h3>
            <button onClick ={() => props.increment()}>+</button>
            <button onClick={() => props.decrement() }>-</button>
            <button onClick={() => props.reset() }>RESET</button>
        </div>
    );
    
}

export default Box;