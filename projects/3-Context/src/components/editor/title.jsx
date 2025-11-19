import { useEditor } from '../../lib/providers/editor';
import { Input } from '../ui/input';

export default function EditorTitle({ className, ...props }) {
  // 여기를 수정하세요.

  return (
    <Input
      {...props}
      type="text"
      className={className}
      placeholder="제목을 입력하세요..."
      // 여기를 수정하세요.
    />
  );
}
