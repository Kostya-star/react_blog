import { Route, Routes } from 'react-router-dom';
import { About } from '../pages/About';
import { Error } from '../pages/Error';
import { Posts } from '../pages/Posts';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/posts" element={<Posts />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};