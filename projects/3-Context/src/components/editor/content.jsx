import { useEditor } from '../../lib/providers/editor';
import { cn } from '../../lib/utilities/shadcn';
import { Textarea } from '../ui/textarea';

export default function EditorContent({ className, ...props }) {
  // useEditor 훅을 사용하여 content와 setContent 상태를 가져옴
  // setContent : content 상태를 업데이트하는 함수
  const {content, setContent} = useEditor();

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
