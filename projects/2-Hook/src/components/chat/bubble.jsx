import { UserIcon } from "lucide-react";

export default function ChatBubble({ name, text }) {
  return (
    <div className="flex items-start gap-2">
      <div className="bg-accent shrink-0 rounded-full border size-8 flex items-center justify-center">
        <UserIcon className="size-3" />
      </div>

      <div>
        <p className="text-xs font-medium">{name}</p>
        <div className="text-sm">{text}</div>
      </div>
    </div>
  );
}
