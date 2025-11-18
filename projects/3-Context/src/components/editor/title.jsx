import { Input } from '../ui/input';

export default function EditorTitle({ className, ...props }) {
  return (
    <Input
      {...props}
      type="text"
      className={className}
      placeholder="제목을 입력하세요..."
    />
  );
}
