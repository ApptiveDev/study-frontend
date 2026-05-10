import useStorageState from '../../lib/hooks/storage';

export default function ChatInput() {
  const [text, setText] = useStorageState('chat-input', '');

  return (
    <div className="flex flex-col border-t">
      <textarea
        className="h-24 outline-none p-4 text-sm resize-vertical"
        placeholder="메시지를 입력하세요..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
