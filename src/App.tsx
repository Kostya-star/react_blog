import { useState } from 'react';
import { PostForm } from './components/PostForm';
import { PostList } from './components/PostList';
import { Select } from './components/UI/Select/Select';
import './scss/app.scss';
import { IPost } from './types/posts';

const selectOptions = [
  { value: 'title', name: 'По названию' },
  { value: 'body', name: 'По описанию' },
];

const App = () => {
  const [posts, setPosts] = useState<IPost[]>([
    { id: 1, title: 'aa', body: 'cc' },
    { id: 2, title: 'bb', body: 'bb' },
    { id: 3, title: 'cc', body: 'aa' },
  ]);
  const [selectedSort, setSelectedSort] = useState('');

  const createNewPost = (newPost: IPost) => {
    setPosts([...posts, newPost]);
  };

  const deletePost = (post: IPost) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (val: string) => {
    setSelectedSort(val);
    // @ts-expect-error
    setPosts([...posts].sort((a, b) => a[val].localeCompare(b[val])));
  };

  return (
    <div className="container">
      <PostForm createPost={createNewPost} />
      <hr style={{margin: '15px 0'}}/>
      <div>
        <Select
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          options={selectOptions}
        />
      </div>

      {posts.length ? (
        <PostList
          title="Javascript Posts"
          posts={posts}
          deletePost={deletePost}
        />
      ) : (
        <h1 style={{ textAlign: 'center' }}>No posts</h1>
      )}
    </div>
  );
};

export default App;
