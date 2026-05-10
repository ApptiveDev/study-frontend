import { useState } from 'react';
import './index.css';
import Placeholder from './components/placeholder'
import Item from './components/item'
import TodoInput from './components/input';

function App() {
  const [todos, setTodos] = useState([]); 
  //useState는 [value, function]을 return한다
  //즉 todos = [] 로 초기화, 그걸 update하기위한 function의 이름이 setTodos 가 된다

  function addTodo(text) {
    const newTodo ={ //newTodo라는 이름을 가진걸 하나 만듬
      id:crypto.randomUUID(), //랜덤 id 할당
      text, //내용은 함수의 매개변수
      completed: false, // completed 값을 넣어 toggle 가능하게 만들기
    };
    setTodos([...todos, newTodo]); 
    //todos전개 후 newTodo와 합친 배열을 todos로 초기화
  }

  function toggleTodo(id) {
    setTodos(todos.map((todo)=>
      todo.id === id ? {...todo, completed: !todo.completed} : todo)) 
    //삼항연산자 이용
    //찾는 id라면 completed 값만 반전시켜서 return / 아니라면 그대로 return
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
    // 찾는 id가 아닌 놈들만 남기는 filtering
  }

  return (
    <div className="w-100 border rounded-xl overflow-hidden">
      <div className="max-h-100 overflow-y-auto">
      {todos.length === 0 ? (
        <Placeholder/>
        ) : (
          todos.map((todo) => (<Item 
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            />
          ))
        )
      }
      </div>
      <TodoInput onAdd={addTodo}/>
    </div>
  );
}

export default App;
