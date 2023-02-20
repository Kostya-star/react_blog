import { useEffect, useState } from 'react';
import { postsAPI } from './API/requests';
import { PostFilter } from './components/PostFilter';
import { PostForm } from './components/PostForm';
import { PostList } from './components/PostList';
import { Button } from './components/UI/Button/Button';
import { Loader } from './components/UI/Loader/Loader';
import { Modal } from './components/UI/Modal/Modal';
import { usePosts } from './hooks/usePosts';
import './scss/app.scss';
import { IPost } from './types/posts';

const App = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [filter, setFilter] = useState({ sort: '', search: '' });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.search);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const resp = await postsAPI.getPosts();
        setPosts(resp.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const createNewPost = (newPost: IPost) => {
    setPosts([...posts, newPost]);
    setIsModalVisible(false);
  };

  const deletePost = (post: IPost) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="container">
      <Button
        onClick={() => setIsModalVisible(true)}
        style={{ marginTop: '30px' }}
      >
        Add post
      </Button>
      <Modal isVisible={isModalVisible} setIsVisible={setIsModalVisible}>
        <PostForm createPost={createNewPost} />
      </Modal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {isLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Loader />
        </div>
      ) : (
        <PostList
          title="Javascript Posts"
          posts={sortedAndSearchedPosts}
          deletePost={deletePost}
        />
      )}
    </div>
  );
};

export default App;
