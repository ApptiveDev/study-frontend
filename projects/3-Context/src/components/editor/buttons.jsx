import { Button } from '../ui/button';
import { ButtonGroup } from '../ui/button-group';

export default function EditorButtons() {
  return (
    <div>
      <ButtonGroup>
        <Button>Bold</Button>
        <Button>Italic</Button>
        <Button>Underline</Button>
      </ButtonGroup>
    </div>
  );
}
