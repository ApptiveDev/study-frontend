import './App.css';

import { useState } from 'react';

function Header({ onAdd, onToggleAll }) {
  const [inputText, setInputText] = useState('');

  const handleChange = (e) => setInputText(e.target.value);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputText.trim() !== '') {
      onAdd(inputText.trim());
      setInputText('');
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <div className="toggle-all-wrapper">
        <button className="toggle-all" onClick={onToggleAll}>⌄</button>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={inputText}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      </div>
    </header>
  );
}

export default Header;

