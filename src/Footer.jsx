import { useState, useEffect } from 'react';

function Footer({ todos, activeFilter, onFilterChange, onClearCompleted }) {
  if (!todos) return null;

  // 완료되지 않은 할 일 개수
  const remainingCount = todos.filter(todo => !todo.completed).length;

  return (
    <footer>
      <span>{remainingCount} items left</span>
      <button
        onClick={() => onFilterChange('all')}
        className={activeFilter === 'all' ? 'selected' : ''}
      >
        All
      </button>
      <button
        onClick={() => onFilterChange('active')}
        className={activeFilter === 'active' ? 'selected' : ''}
      >
        Active
      </button>
      <button
        onClick={() => onFilterChange('completed')}
        className={activeFilter === 'completed' ? 'selected' : ''}
      >
        Completed
      </button>
      <button onClick={onClearCompleted}>Clear Completed</button>
    </footer>
  );
}

export default Footer;





