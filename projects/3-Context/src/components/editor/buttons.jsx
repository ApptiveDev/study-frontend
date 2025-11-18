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
  return (
    <ButtonGroup>
      <Button>
        <CloudUploadIcon /> 게시하기
      </Button>
      <Button className="px-2">
        <ChevronDownIcon />
      </Button>
    </ButtonGroup>
  );
}
