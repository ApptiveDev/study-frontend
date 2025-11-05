import { ArrowUpIcon } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../utilities/shadcn';

export default function TodoInput({ onAdd }) {
  const [value, setValue] = useState('');
  const isEmpty = value.trim() === '';

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isEmpty) {
      onAdd(value);
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative border-t">
      <textarea
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="할 일을 입력하세요..."
        className="outline-none w-full px-3 pt-2 min-h-20 resize-y"
      />
      <button
        type="submit"
        disabled={isEmpty}
        className={cn(
          'size-8 flex-center rounded-full absolute bottom-1.5 right-1.5',
          'bg-white text-black hover:bg-white/80 transition-colors',
          isEmpty && 'opacity-50 cursor-not-allowed hover:bg-white',
        )}
      >
        <ArrowUpIcon className="stroke-2! size-5!" />
      </button>
    </form>
  );
}
