import { createContext, useContext, useState } from 'react';

const EditorContext = createContext();

export function EditorProvider({ children }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <EditorContext.Provider value={{ title, setTitle, content, setContent }}>
      {children}
    </EditorContext.Provider>
  );
}

export function useEditor() {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error('useEditor must be used within an EditorProvider');
  }
  return context;
}
