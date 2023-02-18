import { FC } from 'react';
import { IPost } from '../../types/posts';
import { Button } from '../UI/Button/Button';
import s from './PostItem.module.scss';

interface IPostProps {
  post: IPost
  id: number
}

export const PostItem: FC<IPostProps> = ({ post, id }) => {
  return (
    <div className={s.post}>
      <div>
        <strong>
          {id}. {post.body}
        </strong>
        <p>{post.body}</p>
      </div>
      <div>
      {/* <Button title='Delete'/> */}
      </div>
    </div>
  );
};
