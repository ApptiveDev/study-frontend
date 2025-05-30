import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import './index.css'

const TodoList = ({ todos, onToggle, onRemove }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
};

export default TodoList;