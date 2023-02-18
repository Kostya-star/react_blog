import { Input } from "./UI/Input/Input";
import { FC, MouseEvent, useState } from 'react';
import { Button } from "./UI/Button/Button";
import { IPost } from "../types/posts";

interface IPostFormProps {
  createPost: (newPost: IPost) => void
}

export const PostForm: FC<IPostFormProps> = ({ createPost }) => {
  const [post, setPost] = useState({ title: '', body: '' });

  
  const onAddPostHandle = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title: post.title,
      body: post.body,
    };
    createPost(newPost)
    setPost({ title: '', body: '' });
  }

  return (
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
      <Button onClick={onAddPostHandle}>Add post</Button>
    </form>
  );
};
