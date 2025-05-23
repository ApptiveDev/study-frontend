import { useEffect, useState } from 'react';
import Header from './Header';
import TodoList from './TodoList';
import TodoItem from './TodoItem';
import Footer from './Footer';

function App() {
  const [todos, setTodos] = useState([]);

  const [filter, setFilter] = useState(() => {
  return localStorage.getItem('filter') || 'all';
  });

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      input: text,
      completed: false,
    };
    
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);  // 상태 업데이트

    // 로컬스토리지에 저장
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    setTodos(updatedTodos);  // 상태 업데이트
    localStorage.setItem('todos', JSON.stringify(updatedTodos));  // 로컬스토리지에 저장
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    setTodos(updatedTodos);  // 상태 업데이트
    localStorage.setItem('todos', JSON.stringify(updatedTodos));  // 로컬스토리지에 저장
  };

  

  const clearCompleted = () => {
    const updated = todos.filter(todo => !todo.completed);
    setTodos(updated);
    localStorage.setItem('todos', JSON.stringify(updated));
  };

  const getFilteredTodos = () => {
  switch (filter) {
    case 'active':
      return todos.filter(todo => !todo.completed);
    case 'completed':
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
};

const toggleAllTodos = () => {
  const allCompleted = todos.every(todo => todo.completed);
  const updated = todos.map(todo => ({ ...todo, completed: !allCompleted }));
  setTodos(updated);
  localStorage.setItem('todos', JSON.stringify(updated));
};



  // 처음 한 번 localStorage에서 불러오기!
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));  // 로컬스토리지에서 데이터를 읽어와 상태로 설정
    } else {
      setTodos([]);  // 로컬스토리지에 데이터가 없으면 빈 배열로 초기화
    }
  }, []);

  // todos가 바뀔 때마다 localStorage에 저장!
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // filter저장
  useEffect(() => {
  localStorage.setItem('filter', filter);
  }, [filter]);


  return (
    <div className="app-container">
      <Header onAdd={addTodo} onToggleAll={toggleAllTodos} />
      <TodoList
      todos={getFilteredTodos()} // 필터 적용된 항목만 전달
      onComplete={completeTodo}
      onDelete={deleteTodo}
      />
      <Footer
      todos={todos}
      activeFilter={filter}
      onFilterChange={setFilter}
      onClearCompleted={clearCompleted}
      />
    </div>
  );
}

export default App;


