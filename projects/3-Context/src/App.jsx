import EditorButtons from './components/editor/buttons';
import EditorContent from './components/editor/content';
import EditorContentLength from './components/editor/content-length';
import EditorTitle from './components/editor/title';
import { EditorProvider } from './lib/providers/editor';
import './index.css';

function App() {
  return (
    <EditorProvider>
      <div className="w-[80%] max-w-lg flex flex-col gap-4">
        <EditorContentLength />
        <EditorButtons />
        <div>
          <EditorTitle className="rounded-b-none border-b-0" />
          <EditorContent className="rounded-t-none" />
        </div>
      </div>
    </EditorProvider>
  );
}

export default App;
