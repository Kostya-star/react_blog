import { useMemo, useState } from 'react';
import { PostFilter } from './components/PostFilter';
import { PostForm } from './components/PostForm';
import { PostList } from './components/PostList';
import './scss/app.scss';
import { IPost } from './types/posts';

const App = () => {
  const [posts, setPosts] = useState<IPost[]>([
    { id: 1, title: 'aa', body: 'cc' },
    { id: 2, title: 'bb', body: 'bb' },
    { id: 3, title: 'cc', body: 'aa' },
  ]);
  const [filter, setFilter] = useState({ sort: '', search: '' });

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        // @ts-expect-error
        a[filter.sort].localeCompare(b[filter.sort]),
      );
    }
    return posts;
  }, [posts, filter.sort]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.search.toLowerCase()),
    );
  }, [filter.search, sortedPosts]);

  const createNewPost = (newPost: IPost) => {
    setPosts([...posts, newPost]);
  };

  const deletePost = (post: IPost) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="container">
      <PostForm createPost={createNewPost} />
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        title="Javascript Posts"
        posts={sortedAndSearchedPosts}
        deletePost={deletePost}
      />
    </div>
  );
};

export default App;
