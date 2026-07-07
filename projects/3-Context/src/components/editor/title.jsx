import { useEditor } from '../../lib/providers/editor';
import { Input } from '../ui/input';

export default function EditorTitle({ className, ...props }) {
  // useEditor 훅을 사용하여 title과 setTitle 상태를 가져옴
  // setTitle : title 상태를 업데이트하는 함수
  const {title, setTitle} = useEditor();

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
