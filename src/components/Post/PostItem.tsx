import { FC } from 'react';
import { IPost } from '../../types/posts';
import s from './Post.module.scss';

interface IPostProps {
  post: IPost
}

export const PostItem: FC<IPostProps> = ({ post }) => {
  return (
    <div className={s.post}>
      <div>
        <strong>
          {post.id}. {post.body}
        </strong>
        <p>{post.body}</p>
      </div>
      <div>
        <button>Delete</button>
      </div>
    </div>
  );
};
