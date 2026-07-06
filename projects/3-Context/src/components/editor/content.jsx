import { useEditor } from '../../lib/providers/editor';
import { cn } from '../../lib/utilities/shadcn';
import { Textarea } from '../ui/textarea';

export default function EditorContent({ className, ...props }) {
  const { content, setContent } = useEditor();

  return (
    <Textarea
      {...props}
      className={cn("min-h-60", className)}
      placeholder="본문을 입력하세요..."
      value={content}
      onChange={(e) => setContent(e.target.value)}
    />
  );
}
