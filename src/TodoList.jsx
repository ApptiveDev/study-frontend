import './App.css';

import { useState, useEffect } from 'react';

function Footer({ todos }) {
  const [activeFilter, setActiveFilter] = useState('all');

  // 완료되지 않은 할 일 개수
  const completedCount = todos.filter(todo => !todo.completed).length;

  // 필터링된 todos 리스트 (activeFilter 상태에 따라 변경)
  const filteredTodos = todos.filter(todo => {
    if (activeFilter === 'all') {
      return true;  // 모든 항목을 보여줌
    }
    if (activeFilter === 'active') {
      return !todo.completed;  // 완료되지 않은 항목만
    }
    if (activeFilter === 'completed') {
      return todo.completed;  // 완료된 항목만
    }
    return true;
  });

  // 버튼 클릭 시 필터 상태 변경
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);  // 필터 상태 업데이트
  };

  return (
    <footer>
      <span>{completedCount} items left</span>
      <button onClick={() => handleFilterChange('all')}>All</button>
      <button onClick={() => handleFilterChange('active')}>Active</button>
      <button onClick={() => handleFilterChange('completed')}>Completed</button>
      <button>Clear Completed</button>
    </footer>
  );
}

function TodoList({ todos, onComplete, onDelete }) {
  return (
    <div className="todoList">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onComplete={onComplete} onDelete={onDelete} />
      ))}
    </div>
  );
}

function TodoItem({ todo, onComplete, onDelete }) {
  return (
    <div className="todoItem">
      <input
        className="completed"
        type="checkbox"
        checked={todo.completed}
        onChange={() => onComplete(todo.id)}
      />
      <span className="text">{todo.input}</span>
      <button className="delete" type="button" onClick={() => onDelete(todo.id)}>
        x
      </button>
    </div>
  );
}

export default TodoList;

