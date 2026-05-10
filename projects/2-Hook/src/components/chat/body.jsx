export default function ChatBody({ children }) {
  return (
    <div className="p-4 flex flex-col overflow-y-auto max-h-[400px] gap-2">
      {children}
    </div>
  );
}
