import React from 'react'

const ToDo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
    {text}
  </li>
)
const TodoListComponent = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map((todo) => (
      <ToDo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>
)
export default TodoListComponent
