import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

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
            <form onSubmit={handleSubmit} className='todo-form'>
                {props.edit ? (
                    <><input
                        type="text"
                        name='text'
                        value={input}
                        placeholder='Update your todo'
                        className='todo-input edit'
                        onChange={handleChange}
                        ref={inputRef} />
                        <button className='todo-button edit' type='submit'>Update</button>
                    </>) : (
                    <>
                        <input
                            type="text"
                            name='text'
                            value={input}
                            placeholder='Add a todo'
                            className='todo-input'
                            onChange={handleChange}
                            ref={inputRef} />
                        <button className='todo-button' type='submit'>Add</button>
                    </>
                )

                }

            </form>

        </>
    )
}

export default TodoForm