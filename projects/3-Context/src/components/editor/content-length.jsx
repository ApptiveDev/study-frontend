import { useEditor } from '../../lib/providers/editor';

export default function EditorContentLength() {
  const { content } = useEditor();

  return (
    <p className="text-muted-foreground text-sm">
      본문 {content.length}자
    </p>
  );
}