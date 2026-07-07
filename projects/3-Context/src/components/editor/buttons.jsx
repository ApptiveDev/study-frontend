import {
  ChevronDownIcon,
  CloudUploadIcon,
  MoonIcon,
  SunIcon,
} from 'lucide-react';
import { Button } from '../ui/button';
import { ButtonGroup } from '../ui/button-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { useTheme } from '../../lib/providers/theme';
import { useEditor } from '../../lib/providers/editor';

export default function EditorButtons() {
  return (
    <div className="flex gap-2 justify-end">
      <ThemeSelector />
      <PublishButton />
    </div>
  );
}

function ThemeSelector() {
  const [isDarkMode, setIsDarkMode] = useTheme();

  return (
    <Select
      value={isDarkMode ? 'dark' : 'light'}
      onValueChange={(value) => setIsDarkMode(value === 'dark')}
    >
      <SelectTrigger>
        <SelectValue placeholder="테마 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light" onSelect={() => setIsDarkMode(false)}>
          <SunIcon /> 밝은 테마
        </SelectItem>
        <SelectItem value="dark" onSelect={() => setIsDarkMode(true)}>
          <MoonIcon /> 어두운 테마
        </SelectItem>
      </SelectContent>
    </Select>
  );
}

function PublishButton() {
  // useEditor 훅을 사용하여 title과 content 상태를 가져오기
  const { title, content } = useEditor();

  // 게시 버튼 클릭 시 title과 content를 alert로 표시
  return (
    <ButtonGroup>
      <Button onClick={() => alert(`제목: ${title}\n본문: ${content}`)}>
        <CloudUploadIcon /> 게시하기
      </Button>
      <Button className="px-2!">
        <ChevronDownIcon />
      </Button>
    </ButtonGroup>
  );
}
