export interface IPost {
  id: number;
  title: string;
  body: string;
}

export interface IPostComment {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
}
