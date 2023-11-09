import React, { useState } from 'react'
import TodoForm from './TodoForm';
import { RiEditFill } from 'react-icons/ri'
import { RiCloseCircleLine } from 'react-icons/ri'


function Todo({ todos, completeTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })
    // console.log(todos)
    // return (
    //     todos.map((todo, index) => (
    //         <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
    //             <div className={todo.id} onClick={() => completeTodo(todo.id)}>
    //                 {todo.text}
    //             </div>
    //             <div className='icons'>
    //                 <RiCloseCircleLine />
    //                 <RiEditFill />
    //             </div>
    //         </div>
    //     ))
    // )


}

export default Todo