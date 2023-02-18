import { FC } from 'react';
import { IPost } from '../types/posts';
import { PostItem } from './Post/PostItem';

interface IPostListProps {
  title: string;
  posts: IPost[];
}

export const PostList: FC<IPostListProps> = ({ title, posts }) => {
  return (
    <div>
      <h1>{title}</h1>
      {posts.map((post) => (
        <PostItem post={post} />
      ))}
    </div>
  );
};
