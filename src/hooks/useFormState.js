import { useState } from 'react';

function useFormState(inicialValue) {
    const [value, setValue] = useState(inicialValue);
    //update the current value
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    //clear the input
    const reset = () => {
        setValue('');
    };
    return [value, handleChange, reset];
};

export default useFormState;