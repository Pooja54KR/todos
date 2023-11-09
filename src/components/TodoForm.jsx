import React, { useState } from 'react';

function TodoForm() {
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setInput('') //setting back to empty string
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={input} placeholder='Add a todo' onChange={handleChange} />
                <button type='submit'>Add</button>
            </form>

        </>
    )
}

export default TodoForm