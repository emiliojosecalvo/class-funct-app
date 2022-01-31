import React, { useState } from 'react';

function CounterHooks() {
    const [counter, setCounter] = useState(0);
    return (
        <>
            <h1>Counter Hooks</h1>
            <h2>Counter: {counter}</h2>
            <button onClick={() => setCounter(counter + 1)}>Add 1</button>
        </>
    )
}

export default CounterHooks;
