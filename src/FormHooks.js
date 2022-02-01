import React from 'react';
import useFormState from './hooks/useFormState';

function FormHooks() {
    const [email, handleChangeEmail, resetEmail] = useFormState('');
    return (
        <div>
            <h1>You are writting ... {email}</h1>
            <input
                type='text'
                value={email}
                onChange={handleChangeEmail}
            />
            <button onClick={resetEmail}>Reset</button>
        </div>
    )
}

export default FormHooks;
