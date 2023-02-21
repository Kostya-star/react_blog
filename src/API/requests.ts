import { instance } from './instance';

export const postsAPI = {
  getPosts: async (_limit = 5, _page = 1) => {
    return await instance.get('/posts', {
      params: {
        _limit,
        _page,
      },
    });
  },

  getPostById: async (id: number) => {
    return await instance.get('/posts/' + id)
  },

  getCommentsById: async (id: number) => {
    return await instance.get(`/posts/${id}/comments`)
  }
};
