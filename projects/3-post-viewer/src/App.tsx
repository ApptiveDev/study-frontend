import { useSuspenseQueries, useSuspenseQuery } from '@tanstack/react-query';
import { Suspense, useState } from 'react';
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';
import { getComments, getPost, getPosts } from './api';
import CommentList from './components/comment-list';
import ErrorMessage from './components/error-message';
import Loading from './components/loading';
import PostDetail from './components/post-detail';
import PostList from './components/post-list';

function ErrorFallback({ error }: FallbackProps) {
  const message = error instanceof Error ? error.message : '알 수 없는 오류가 발생했습니다.';
  return <ErrorMessage message={message} />;
}

type PostListSectionProps = {
  selectedId: number | null;
  onSelect: (id: number) => void;
};

function PostListSection({ selectedId, onSelect }: PostListSectionProps) {
  const { data: posts } = useSuspenseQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  return <PostList posts={posts} selectedId={selectedId} onSelect={onSelect} />;
}

type PostDetailSectionProps = {
  postId: number;
};

function PostDetailSection({ postId }: PostDetailSectionProps) {
  const [{ data: post }, { data: comments }] = useSuspenseQueries({
    queries: [
      {
        queryKey: ['post', postId],
        queryFn: () => getPost(postId),
      },
      {
        queryKey: ['comments', postId],
        queryFn: () => getComments(postId),
      },
    ],
  });

  return (
    <>
      <PostDetail post={post} />
      <CommentList comments={comments} />
    </>
  );
}

function App() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className="w-4xl h-144 grid grid-cols-[18rem_1fr] bg-white border rounded-xl overflow-hidden">
      <aside className="border-r overflow-y-auto">
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<Loading label="게시글 목록을 불러오는 중..." />}>
            <PostListSection selectedId={selectedId} onSelect={setSelectedId} />
          </Suspense>
        </ErrorBoundary>
      </aside>
      <main className="overflow-y-auto p-6">
        {selectedId === null ? (
          <p className="flex h-full items-center justify-center text-neutral-400">
            게시글을 골라 주세요.
          </p>
        ) : (
          <ErrorBoundary FallbackComponent={ErrorFallback} resetKeys={[selectedId]}>
            <Suspense fallback={<Loading label="게시글을 불러오는 중..." />}>
              <PostDetailSection postId={selectedId} />
            </Suspense>
          </ErrorBoundary>
        )}
      </main>
    </div>
  );
}

export default App;
