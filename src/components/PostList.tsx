import { FC } from 'react';
import { IPost } from '../types/posts';
import { PostItem } from './Post/PostItem';

interface IPostListProps {
  title: string;
  posts: IPost[];
  deletePost: (post: IPost) => void;
}

export const PostList: FC<IPostListProps> = ({ title, posts, deletePost }) => {
  return (
    <div>
      <h1>{title}</h1>
      {posts.length ? (
        posts.map((post, index) => (
          <PostItem
            id={index + 1}
            key={post.id}
            post={post}
            deletePost={deletePost}
          />
        ))
      ) : (
        <h1 style={{ textAlign: 'center' }}>No posts</h1>
      )}
    </div>
  );
};
