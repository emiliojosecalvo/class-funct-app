import React, { useEffect, useState } from 'react';

function ClickMe() {
    const [count, setCount] = useState(0);
    //useEffect runs every time that there is a render
    useEffect(() => {
        document.title = `Youve click ${count} times...`;
    })

    return (
        <>
            <button onClick={() => setCount(count + 1)}>Add 1 more! {count}</button>
        </>
    )
}

export default ClickMe;
