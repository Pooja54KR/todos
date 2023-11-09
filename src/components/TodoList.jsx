import React, { useState } from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        //to check empty input 
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        const newTodos = [todo, ...todos];
        console.log(newTodos)
        setTodos(newTodos)

    }

    const completeTodo = id => {
        // console.log(todos)
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })

        console.log(updatedTodos)
        setTodos(updatedTodos)
    }
    return (
        <div>
            <h1>To do App</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todo={todos} completeTodo={completeTodo} />
        </div>
    )
}

export default TodoList
