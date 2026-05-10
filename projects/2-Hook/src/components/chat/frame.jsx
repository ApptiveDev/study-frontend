export default function ChatFrame({ children }) {
  return (
    <div className="w-[400px] rounded-lg border overflow-hidden shadow-lg">
      {children}
    </div>
  );
}
