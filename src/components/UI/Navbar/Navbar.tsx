import { Link } from 'react-router-dom';
import s from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <Link to="/posts">Posts</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};
