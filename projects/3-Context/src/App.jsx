import EditorButtons from './components/editor/buttons';
import EditorContent from './components/editor/content';
import EditorTitle from './components/editor/title';
import { EditorProvider } from './lib/providers/editor';
import { ThemeProvider } from './lib/providers/theme';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <EditorProvider>
        <div className="w-[80%] max-w-lg flex flex-col gap-4">
          <EditorButtons />
          <div>
            <EditorTitle className="rounded-b-none border-b-0" />
            <EditorContent className="rounded-t-none" />
          </div>
        </div>
      </EditorProvider>
    </ThemeProvider>
  );
}

export default App;
