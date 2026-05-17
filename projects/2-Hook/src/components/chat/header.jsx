import { UsersIcon } from 'lucide-react';

export default function ChatHeader({ name, size }) {
  return (
    <header className="border-b flex gap-2 p-3 items-center">
      <div className="bg-accent rounded-lg border size-10 flex items-center justify-center">
        <UsersIcon className="size-4" />
      </div>

      <div>
        <h2 className="text-sm font-medium">{name}</h2>
        <p className="text-xs text-muted-foreground">참여자 {size}명</p>
      </div>
    </header>
  );
}
