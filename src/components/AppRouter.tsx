import { Route, Routes } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Posts } from '../pages/Posts';
import { privateRoutes, publicRoutes } from '../routes/routes';

export const AppRouter = () => {
  const isAuth = false;
  return (
    <Routes>
      {isAuth
        ? privateRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={<route.element />} />
          ))
        : publicRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={<route.element />} />
          ))}
      <Route path="*" element={<Login />} />
    </Routes>
  );
};
