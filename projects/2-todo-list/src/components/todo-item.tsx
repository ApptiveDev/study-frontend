import { CheckIcon } from 'lucide-react';
import type { Todo } from '../types';
import { cn } from '../utilities/cn';

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className="flex not-last:border-b h-11">
      <div
        className="flex-1 flex items-center min-w-0 hover:bg-neutral-50 transition-colors"
        onClick={() => onToggle(todo.id)}
      >
        <Checkbox className="mx-3" checked={todo.completed} />
        <p
          className={cn(
            'flex-1 cursor-default overflow-hidden text-ellipsis whitespace-nowrap',
            todo.completed && 'text-neutral-400 line-through',
          )}
        >
          {todo.text}
        </p>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="px-4 border-l text-red-500 hover:bg-red-500 hover:text-white transition-colors"
      >
        삭제
      </button>
    </div>
  );
}

type CheckboxProps = {
  checked: boolean;
  className?: string;
};

function Checkbox({ checked, className }: CheckboxProps) {
  return (
    <span
      className={cn(
        'size-4 shrink-0 flex-center rounded-sm border border-neutral-300',
        checked && 'border-neutral-900 bg-neutral-900',
        className,
      )}
    >
      <CheckIcon className={cn('size-3 text-white', !checked && 'opacity-0')} strokeWidth={3} />
    </span>
  );
}
