import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { postsAPI } from '../API/requests';
import { Comment } from '../components/Comment/Comment';
import { PostItem } from '../components/Post/PostItem';
import { Loader } from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';
import { IPost, IPostComment } from './../types/posts';

export const PostById = () => {
  const { id } = useParams();

  const [post, setPost] = useState<IPost>({} as IPost);
  const [comments, setComments] = useState<IPostComment[]>([]);

  const [fetchPost, isPostLoading, postError] = useFetching(async () => {
    const resp = await postsAPI.getPostById(Number(id));
    setPost(resp.data);
  });

  const [fetchComments, isCommentsLoading, commentsError] = useFetching(
    async () => {
      const resp = await postsAPI.getCommentsById(Number(id));
      setComments(resp.data);
    },
  );

  useEffect(() => {
    fetchPost();
    fetchComments();
  }, []);

  return (
    <div style={{ marginTop: '20px' }} className="container">
      <h1>Post:</h1>
      {isPostLoading ? <Loader /> : post ? <PostItem post={post} /> : null}

      {isCommentsLoading ? (
        <Loader />
      ) : (
        <div>
          <h1>Comments:</h1>
          {comments?.length
            ? comments.map((comment) => (
                <Comment key={comment.id} comment={comment} />
              ))
            : null}
        </div>
      )}
    </div>
  );
};
