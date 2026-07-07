import { useEditor } from '../../lib/providers/editor';
import { cn } from '../../lib/utilities/shadcn';
import { Textarea } from '../ui/textarea';

export default function EditorContent({ className, ...props }) {
  // 여기를 수정하세요.
  const { content, setContent } = useEditor();

  return (
    <Textarea
      {...props}
      className={cn("min-h-60", className)}
      placeholder="본문을 입력하세요..."
      // 여기를 수정하세요.
      value={content}
      onChange={(event) => setContent(event.target.value)}
    />
  );
}
