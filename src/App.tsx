import { MouseEvent, useState } from 'react';
import { PostList } from './components/PostList';
import { Button } from './components/UI/Button/Button';
import { Input } from './components/UI/Input/Input';
import './scss/app.scss';

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript 1', body: 'Javascript Description' },
    { id: 2, title: 'Javascript 2', body: 'Javascript Description' },
    { id: 3, title: 'Javascript 3', body: 'Javascript Description' },
  ]);

  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({ title: '', body: '' });
  };

  return (
    <div className="container">
      <form>
        <Input
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="Post title"
        />
        <Input
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          type="text"
          placeholder="Post description"
        />
        <Button title="Add post" onClick={addNewPost} />
      </form>
      <PostList title="Javascript Posts" posts={posts} />
    </div>
  );
};

export default App;
