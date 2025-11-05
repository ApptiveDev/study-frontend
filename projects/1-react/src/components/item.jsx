import { CheckIcon } from 'lucide-react';
import { cn } from '../utilities/shadcn';

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="flex not-last:border-b h-11">
      <div
        className="flex-1 flex items-center hover:bg-white/5 transition-colors"
        onClick={() => onToggle(todo.id)}
      >
        <Checkbox className="mx-3" checked={todo.completed} />
        <p className="flex-1 cursor-default overflow-hidden break-keep text-ellipsis whitespace-nowrap">
          {todo.text}
        </p>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(todo.id);
        }}
        className={cn(
          'px-4 border-l text-red-400',
          'hover:bg-red-500 hover:text-white transition-colors',
        )}
      >
        삭제
      </button>
    </div>
  );
}

function Checkbox({ checked, className }) {
  return (
    <span
      className={cn(
        'size-4 flex-center rounded-sm border',
        checked && 'border-white bg-white',
        className,
      )}
    >
      <CheckIcon
        className={cn(
          'size-3 stroke-2! transition-opacity text-black',
          !checked && 'opacity-0',
        )}
      />
    </span>
  );
}
