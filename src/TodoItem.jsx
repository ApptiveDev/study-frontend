import React, { useEffect, useState } from "react";
import './index.css'

const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <li className="todo-item">
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span className={todo.completed ? "completed" : ""}>
          {todo.text}
        </span>
      </div>
      <button onClick={() => onRemove(todo.id)}>X</button>
    </li>
  );
};

export default TodoItem;