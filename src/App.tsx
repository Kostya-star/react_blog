import { useState } from 'react';
import { PostList } from './components/PostList';
import './scss/app.scss';

const App = () => {
  const [posts1, setPosts1] = useState([
    { id: 1, title: 'Javascript 1', body: 'Javascript Description' },
    { id: 2, title: 'Javascript 2', body: 'Javascript Description' },
    { id: 3, title: 'Javascript 3', body: 'Javascript Description' },
  ]);
  const [posts2, setPosts2] = useState([
    { id: 1, title: 'Python 1', body: 'Python Description' },
    { id: 2, title: 'Python 2', body: 'Python Description' },
    { id: 3, title: 'Python 3', body: 'Python Description' },
  ]);

  return (
    <div className="container">
      <PostList title="Javascript Posts" posts={posts1} />
      <PostList title="Javascript Posts" posts={posts2} />
    </div>
  );
};

export default App;
