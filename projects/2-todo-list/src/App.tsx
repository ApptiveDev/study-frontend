import { useState } from 'react';
import type { Todo } from './types';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(text: string) {
    // 여기에 코드를 작성해 주세요
  }

  function toggleTodo(id: string) {
    // 여기에 코드를 작성해 주세요
  }

  function deleteTodo(id: string) {
    // 여기에 코드를 작성해 주세요
  }

  return (
    <div className="w-100 bg-white border rounded-xl overflow-hidden">
      <div className="max-h-100 overflow-y-auto">{/* 여기에 할 일 목록을 그려 주세요 */}</div>

      {/* 여기에 입력창을 넣어 주세요 */}
    </div>
  );
}

export default App;
