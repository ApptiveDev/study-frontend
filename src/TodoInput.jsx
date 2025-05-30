import React, { useEffect, useState } from "react";
import './index.css'

const TodoInput = ({ onAdd }) => {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") return;
    onAdd(input.trim());
    setInput("");
  };

  return (
    <div className="input-group">
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      />
      <button onClick={handleAdd}>추가</button>
    </div>
  );
};

export default TodoInput;