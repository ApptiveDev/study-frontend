import type { Post } from '../types';

type PostDetailProps = {
  post: Post;
};

export default function PostDetail({ post }: PostDetailProps) {
  return (
    <article>
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p className="mt-3 whitespace-pre-line text-neutral-700">{post.body}</p>
    </article>
  );
}
