import { FC } from 'react';
import { IPost } from '../../types/posts';
import s from './PostItem.module.scss';
import { Button } from './../UI/Button/Button';

interface IPostProps {
  post: IPost
  deletePost: (post: IPost) => void
}

export const PostItem: FC<IPostProps> = ({ post, deletePost }) => {
  return (
    <div className={s.post}>
      <div>
        <strong>
          {post.id}. {post.title}
        </strong>
        <p>{post.body}</p>
      </div>
      <div>
      <Button onClick={() => deletePost(post)}>Delete</Button>
      </div>
    </div>
  );
};
