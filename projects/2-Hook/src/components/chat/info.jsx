export default function ChatInfo({ message }) {
  return (
    <div className="text-xs -mx-4 py-1.5 my-1 text-center bg-muted text-muted-foreground">
      {message}
    </div>
  );
}
