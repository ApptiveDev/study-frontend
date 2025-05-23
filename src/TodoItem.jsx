
import './App.css';

import { useState } from 'react'

function TodoItem({ todos, onComplete, onDelete }) {
  return (
    <div className="todoItem">
      <input
        className="completed"
        type="checkbox"
        checked={todos.completed}  // completed 값에 따라 체크박스 상태 반영
        onChange={() => onComplete(todos.id)}  // 체크박스 클릭 시 onComplete 호출
      />
      <span className="text">{todos.input}</span>
      <button className="delete" type="button" onClick={() => onDelete(todos.id)}>
        x
      </button>
    </div>
  );
}


export default TodoItem
