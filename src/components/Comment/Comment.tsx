import { FC } from 'react';
import { IPostComment } from '../../types/posts';
import s from './Comment.module.scss';

interface ICommentProps {
  comment: IPostComment;
}

export const Comment: FC<ICommentProps> = ({ comment }) => {
  return (
    <div className={s.comment}>
      <h3>User: {comment.email}</h3>
      <p>Comment: {comment.body}</p>
    </div>
  );
};
