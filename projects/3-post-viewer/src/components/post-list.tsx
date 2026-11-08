import type { Post } from '../types';
import { cn } from '../utilities/cn';

type PostListProps = {
  posts: Post[];
  selectedId: number | null;
  onSelect: (id: number) => void;
};

export default function PostList({ posts, selectedId, onSelect }: PostListProps) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id} className="not-last:border-b">
          <button
            onClick={() => onSelect(post.id)}
            className={cn(
              'w-full px-4 py-3 text-left truncate hover:bg-neutral-50 transition-colors',
              post.id === selectedId && 'bg-neutral-100 font-semibold hover:bg-neutral-100',
            )}
          >
            {post.title}
          </button>
        </li>
      ))}
    </ul>
  );
}
