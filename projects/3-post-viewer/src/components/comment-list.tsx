import type { Comment } from '../types';

type CommentListProps = {
  comments: Comment[];
};

export default function CommentList({ comments }: CommentListProps) {
  return (
    <section className="mt-8">
      <h3 className="font-semibold">댓글 {comments.length}개</h3>
      <ul className="mt-3 space-y-3">
        {comments.map((comment) => (
          <li key={comment.id} className="rounded-lg border p-3">
            <p className="text-sm text-neutral-400">{comment.email}</p>
            <p className="mt-1 whitespace-pre-line">{comment.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
