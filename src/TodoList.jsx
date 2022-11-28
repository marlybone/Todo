import React, { useState } from 'react'
import Todo from './Todo'

export default function TodoList() {
  const [todos, setTodos] = useState([])
  const addTodo = todo => {
    if(!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos)
  }


  return(
    <div>
      <Todo onSubmit={addTodo}
        />
    </div>
    )
}