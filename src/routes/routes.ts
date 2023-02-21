import { About } from '../pages/About';
import { Login } from '../pages/Login';
import { PostById } from '../pages/PostById';
import { Posts } from '../pages/Posts';

export const privateRoutes = [
  { path: '/posts', element: Posts },
  { path: '/posts/:id', element: PostById },
  { path: '/about', element: About },
];

export const publicRoutes = [
  { path: '/login', element: Login },
];
