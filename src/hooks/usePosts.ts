import { useMemo } from 'react';
import { IPost } from '../types/posts';

export const useSortedPosts = (posts: IPost[], sort: string) => {
  const sortedPosts = useMemo(() => {
    if (sort) {
      // @ts-expect-error
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [posts, sort]);

  return sortedPosts;
};

export const usePosts = (posts: IPost[], sort: string, search: string) => {
  const sortedPosts = useSortedPosts(posts, sort)

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search, sortedPosts]);

  return sortedAndSearchedPosts
}
