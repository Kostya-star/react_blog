import { FC, ReactNode } from 'react';
import { IPost } from '../../types/posts';
import s from './PostItem.module.scss';

interface IPostProps {
  post: IPost;
  children?: ReactNode;
}

export const PostItem: FC<IPostProps> = ({ post, children }) => {
  return (
    <div className={s.post}>
      <div>
        <strong>
          {post.id}. {post.title}
        </strong>
        <p>{post.body}</p>
      </div>
      <div className={s.post__buttons}>{children}</div>
    </div>
  );
};
