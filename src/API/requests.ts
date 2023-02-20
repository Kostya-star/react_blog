import { instance } from "./instance"

export const postsAPI = {
  getPosts: async () => {
    return await instance.get('/posts')
  }
}