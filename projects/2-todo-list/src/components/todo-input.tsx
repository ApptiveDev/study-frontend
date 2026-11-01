import { ArrowUpIcon } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../utilities/cn';

type TodoInputProps = {
  onAdd: (text: string) => void;
};

export default function TodoInput({ onAdd }: TodoInputProps) {
  const [value, setValue] = useState('');
  const isEmpty = value.trim() === '';

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (!isEmpty) {
          onAdd(value);
          setValue('');
        }
      }}
      className="relative border-t"
    >
      <textarea
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="할 일을 입력하세요..."
        className="outline-none w-full px-3 pt-2 min-h-20 resize-y"
      />
      <button
        type="submit"
        disabled={isEmpty}
        className={cn(
          'size-8 flex-center rounded-full absolute bottom-1.5 right-1.5',
          'bg-neutral-900 text-white hover:bg-neutral-700 transition-colors',
          isEmpty && 'opacity-30 cursor-not-allowed hover:bg-neutral-900',
        )}
      >
        <ArrowUpIcon className="size-5" />
      </button>
    </form>
  );
}
