import React, { useState } from 'react';
import useToggler from './hooks/useToggler';

function Toggle() {
    const [isHappy, toggleIsHappy] = useToggler(true);
    const [isSad, toggleIsSad] = useToggler(true);
    return (
        <div>
            <h1 onClick={toggleIsHappy}>{isHappy ? ':)' : ':('}</h1>
            <img style={{ width: '15rem' }} onClick={toggleIsSad} src={isSad ? 'https://cdn3.vectorstock.com/i/1000x1000/89/82/yellow-sad-face-negative-people-emotion-icon-vector-14658982.jpg' : 'https://i.pinimg.com/originals/cf/bb/36/cfbb362525a2bd016de8e77e313d0845.jpg'} />
            {/* <h1 onClick={() => setIsHappy(!isHappy)}>{isHappy ? ':)' : ':('}</h1> */}
        </div>
    )
}

export default Toggle;
