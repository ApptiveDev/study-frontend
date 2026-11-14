import type { Comment, Post } from './types';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

// 로딩 화면을 눈으로 확인할 수 있도록 응답을 0.3–1초 늦춥니다.
function wait() {
  return new Promise((resolve) => setTimeout(resolve, 300 + Math.random() * 700));
}

export async function getPosts(): Promise<Post[]> {
  await wait();
  const response = await fetch(`${BASE_URL}/posts?_limit=20`);

  if (!response.ok) {
    throw new Error('게시글 목록을 불러오지 못했습니다');
  }

  return response.json();
}

export async function getPost(id: number): Promise<Post> {
  await wait();
  const response = await fetch(`${BASE_URL}/posts/${id}`);

  if (!response.ok) {
    throw new Error('게시글을 불러오지 못했습니다');
  }

  return response.json();
}

export async function getComments(postId: number): Promise<Comment[]> {
  await wait();
  const response = await fetch(`${BASE_URL}/posts/${postId}/comments`);

  if (!response.ok) {
    throw new Error('댓글을 불러오지 못했습니다');
  }

  return response.json();
}
