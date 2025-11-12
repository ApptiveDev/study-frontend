import EditorButtons from './components/editor/buttons';
import EditorContent from './components/editor/content';
import EditorTitle from './components/editor/title';
import { EditorProvider } from './lib/providers/editor';
import './index.css';

function App() {
  return (
    <EditorProvider>
      <EditorButtons />
      <div>
        <EditorTitle />
        <EditorContent />
      </div>
    </EditorProvider>
  );
}

export default App;
