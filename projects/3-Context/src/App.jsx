import EditorButtons from './components/editor/buttons';
import EditorContent from './components/editor/content';
import EditorTitle from './components/editor/title';
import { EditorProvider, useEditor } from './lib/providers/editor';
import './index.css';

function CharacterCount() {
  const { content } = useEditor();

  return (
    <p className="text-muted-foreground text-sm">
      본문 글자 수: {content.length}자
    </p>
  );
}

function App() {
  return (
    <EditorProvider>
      <div className="w-[80%] max-w-lg flex flex-col gap-4">
        <div className="flex items-center justify-between gap-2">
          <CharacterCount />
          <EditorButtons />
        </div>
        <div>
          <EditorTitle className="rounded-b-none border-b-0" />
          <EditorContent className="rounded-t-none" />
        </div>
      </div>
    </EditorProvider>
  );
}

export default App;
