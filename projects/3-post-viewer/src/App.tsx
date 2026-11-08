import { useState } from 'react';

function App() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className="w-4xl h-144 grid grid-cols-[18rem_1fr] bg-white border rounded-xl overflow-hidden">
      <aside className="border-r overflow-y-auto">{/* 여기에 게시글 목록을 넣어 주세요 */}</aside>
      <main className="overflow-y-auto p-6">{/* 여기에 고른 게시글과 댓글을 넣어 주세요 */}</main>
    </div>
  );
}

export default App;
