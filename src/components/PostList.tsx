import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../scss/app.scss';
import { IPost } from '../types/posts';
import { PostItem } from './Post/PostItem';
import { Button } from './UI/Button/Button';

interface IPostListProps {
  title: string;
  posts: IPost[];
  deletePost: (post: IPost) => void;
}

export const PostList: FC<IPostListProps> = ({ title, posts, deletePost }) => {
  const navigate = useNavigate();

  const onNavigatePostId = (id: number) => {
    navigate('/posts/' + id);
  };

  return (
    <div>
      <h1>{title}</h1>
      <TransitionGroup>
        {posts.length ? (
          posts.map((post) => (
            <CSSTransition key={post.id} timeout={500} classNames="post">
              <PostItem post={post}>
                <Button onClick={() => onNavigatePostId(post.id)}>Open</Button>
                <Button onClick={() => deletePost(post)}>Delete</Button>
              </PostItem>
            </CSSTransition>
          ))
        ) : (
          <h1 style={{ textAlign: 'center' }}>No posts</h1>
        )}
      </TransitionGroup>
    </div>
  );
};
