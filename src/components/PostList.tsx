import { FC } from 'react';
import { IPost } from '../types/posts';
import { PostItem } from './Post/PostItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../scss/app.scss';

interface IPostListProps {
  title: string;
  posts: IPost[];
  deletePost: (post: IPost) => void;
}

export const PostList: FC<IPostListProps> = ({ title, posts, deletePost }) => {
  return (
    <div>
      <h1>{title}</h1>
      <TransitionGroup>
        {posts.length ? (
          posts.map((post) => (
            <CSSTransition key={post.id} timeout={500} classNames="post">
              <PostItem post={post} deletePost={deletePost} />
            </CSSTransition>
          ))
        ) : (
          <h1 style={{ textAlign: 'center' }}>No posts</h1>
        )}
      </TransitionGroup>
    </div>
  );
};
