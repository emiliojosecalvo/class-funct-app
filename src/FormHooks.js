import React, { useState } from 'react';

function FormHooks() {
    const [email, setEmail] = useState('');
    const handleChange = (e) => {
        setEmail(e.target.value)
    }
    return (
        <div>
            <h1>You are writting ... {email}</h1>
            <input
                type='text'
                value={email}
                onChange={handleChange}
            />
        </div>
    )
}

export default FormHooks;
