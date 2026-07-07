import { createContext, useContext, useEffect, useState } from 'react';

const EditorContext = createContext();

function getInitialTitle() {
  return sessionStorage.getItem('editorTitle') ?? '';
}

function getInitialContent() {
  return sessionStorage.getItem('editorContent') ?? '';
}

export function EditorProvider({ children }) {
  const [title, setTitle] = useState(getInitialTitle);
  const [content, setContent] = useState(getInitialContent);

  useEffect(() => {
    sessionStorage.setItem('editorTitle', title);
  }, [title]);

  useEffect(() => {
    sessionStorage.setItem('editorContent', content);
  }, [content]);

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
