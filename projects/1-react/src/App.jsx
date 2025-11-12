import { useState } from 'react';
import './index.css';

import Input from './components/input';
import Item from './components/item';
import Placeholder from './components/placeholder'
import Count from './components/count'

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(text) {
    const newTodo = {
      id : Date.now(),
      text : text,
      completed : false
    };
    setTodos([...todos, newTodo]); // 기존에 존재하던 항목 뒤에 새 항목을 포함하는 '새로운' 배열을 만들어야 한다..
  }

  function toggleTodo(id) {
    setTodos(
      todos.map(
        (todo) => todo.id === id ? { // 배열 안의 것을 하나씩 돌아가며 id가 일치하는 것의 completed 반대로
          ...todo, completed : !todo.completed // completed만 반대되는 것으로 반환
        } : todo // 변경되지 않은 것 반환
      )
    );
  }

  function deleteTodo(id) {
    // 해당 항목을 포함하지 않는 새 배열을 제공
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function countIncompleted() {
    const incompleteCount = todos.filter(todo => !todo.completed).length;
    return incompleteCount;
  }

  return (  
    <div className="w-100 border rounded-xl overflow-hidden">
      <div className="max-h-100 overflow-y-auto">
        <Count countIncomp={countIncompleted()}/>
      </div>
      <div className="max-h-100 overflow-y-auto">
        {todos.length === 0 ? (<Placeholder />) : ( // 조건부 렌더링. 리스트가 비어있을 때 플레이스홀더 렌더링
          todos.map((todo) =>
            <Item
              key = {todo.id}
              todo = {todo}
              onToggle = {toggleTodo}
              onDelete = {deleteTodo}
            />
          )
        )}
      </div>

      <Input onAdd={addTodo}/>
    </div>
  );
}

export default App;
