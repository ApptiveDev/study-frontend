import { useEditor } from '../../lib/providers/editor';
import { Input } from '../ui/input';

export default function EditorTitle({ className, ...props }) {
  const { title, setTitle } = useEditor();

  return (
    <Input
      {...props}
      type="text"
      className={className}
      placeholder="제목을 입력하세요..."
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
  );
}
