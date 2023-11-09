import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
    const [input, setInput] = useState('');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    })

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('') //setting back to empty string
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name='text'
                    value={input}
                    placeholder='Add a todo'
                    onChange={handleChange}
                    ref={inputRef} />
                <button type='submit'>Add</button>
            </form>

        </>
    )
}

export default TodoForm