import React, { useState, useEffect } from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {

    // const [todos, setTodos] = useState([]);

    let initialTodo;
    if (localStorage.getItem('todos') === null) {
        initialTodo = []
    } else {
        initialTodo = JSON.parse(localStorage.getItem('todos'))
    }

    const [todos, setTodos] = useState(initialTodo);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    },[todos])

    const addTodo = (todo) => {
        //to check empty input 
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        const newTodos = [todo, ...todos];
        // console.log(newTodos)
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));

    }

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const removeTodo = (id) => {
        const remove = [...todos].filter(todo => todo.id !== id);
        setTodos(remove)
    }

    const completeTodo = id => {
        // console.log(todos)
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })

        // console.log(updatedTodos)
        setTodos(updatedTodos)
    }
    return (
        <div>
            <h1>"Prioritize & Achieve: Your To-Do Hub"</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
        </div>
    )
}

export default TodoList
