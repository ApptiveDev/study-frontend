import { useState } from 'react';
import type { Todo } from './types';

import Placeholder from './components/placeholder';
import TodoInput from './components/todo-input';
import TodoItem from './components/todo-item';


function App() { // 
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(text: string) { // 추가 함수
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  function toggleTodo(id: string) { //완료 체크 함수, 체크/해제 상태 바꾸기
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function deleteTodo(id: string) { //삭제 함수
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="w-100 bg-white border rounded-xl overflow-hidden">
      <div className="max-h-100 overflow-y-auto">
        {todos.length === 0 ? (
          <Placeholder />
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))
        )}
        </div>

      <TodoInput onAdd={addTodo} />
    </div>
  );
}

export default App;
