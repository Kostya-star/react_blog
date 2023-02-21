import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from '../context/context';
import { Login } from '../pages/Login';
import { privateRoutes, publicRoutes } from '../routes/routes';
import { IsAuthContext } from '../types/context';

export const AppRouter = () => {
  const { isAuth } = useContext(AuthContext) as IsAuthContext;

  return (
    <Routes>
      {isAuth
        ? privateRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))
        : publicRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
      <Route path="*" element={<Login />} />
    </Routes>
  );
};
