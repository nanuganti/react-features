import { React, useState } from 'react';
import axios from 'axios';

const Counter = () => {
    const [counter, setCounter] = useState(0)
    return (
        <div>
            <p>This is Counter Page</p>
            <button onClick={() => { setCounter(counter + 1) }}>increment</button>
            <div>
                <p>Counter Number</p>
                <div>{counter}</div>
            </div>
        </div>
    );
};

export default Counter;