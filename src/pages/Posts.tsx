import {
  LegacyRef,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import { postsAPI } from '../API/requests';
import { PostFilter } from '../components/PostFilter';
import { PostForm } from '../components/PostForm';
import { PostList } from '../components/PostList';
import { Button } from '../components/UI/Button/Button';
import { Loader } from '../components/UI/Loader/Loader';
import { Modal } from '../components/UI/Modal/Modal';
import { Pagination } from '../components/UI/Pagination/Pagination';
import { useFetching } from '../hooks/useFetching';
import { useObserver } from '../hooks/useObserver';
import { usePosts } from '../hooks/usePosts';
import { IPost } from '../types/posts';
import { getPageCount } from '../utils/pages';

export const Posts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const [filter, setFilter] = useState({ sort: '', search: '' });

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [pagesCount, setPagesCount] = useState(0);
  const [pagesLimit, setPagesLimit] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const lastElement = useRef<HTMLDivElement>(null);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.search);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const resp = await postsAPI.getPosts(pagesLimit, currentPage);
    setPosts(resp.data);
    const totalPostsCount = resp.headers['x-total-count'];
    setPagesCount(getPageCount(totalPostsCount, pagesLimit));
  });

  // useObserver(lastElement, currentPage < pagesCount, isPostsLoading, () =>
  //   setCurrentPage(currentPage + 1),
  // );

  useEffect(() => {
    fetchPosts();
  }, [currentPage]);

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
      {postError && (
        <h1>
          <>There has been an error `${postError}`</>
        </h1>
      )}

      {/* <div ref={lastElement} style={{ height: '20px', background: 'red' }}></div> */}

      {isPostsLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Loader />
        </div>
      ) : (
        <>
          <PostList
            title="Javascript Posts"
            posts={sortedAndSearchedPosts}
            deletePost={deletePost}
          />
          <Pagination
            pagesCount={pagesCount}
            currentPage={currentPage}
            onChangePage={(page) => setCurrentPage(page)}
          />
        </>
      )}
    </div>
  );
};
