import { useState } from 'react';
import { PostForm } from './components/PostForm';
import { PostList } from './components/PostList';
import './scss/app.scss';
import { IPost } from './types/posts';

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript 1', body: 'Javascript Description' },
    { id: 2, title: 'Javascript 2', body: 'Javascript Description' },
    { id: 3, title: 'Javascript 3', body: 'Javascript Description' },
  ]);

  const createNewPost = (newPost: IPost) => {
    setPosts([...posts, newPost]);
  };

  const deletePost = (post: IPost) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="container">
      <PostForm createPost={createNewPost} />

      {posts.length ? (
        <PostList
          title="Javascript Posts"
          posts={posts}
          deletePost={deletePost}
        />
      ) : (
        <h1 style={{textAlign: 'center'}}>No posts</h1>
      )}

    </div>
  );
};

export default App;
