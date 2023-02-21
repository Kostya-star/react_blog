import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../Button/Button';
import s from './Navbar.module.scss';
import { useContext } from 'react'
import { AuthContext } from '../../../context/context';
import { IsAuthContext } from '../../../types/context';

export const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext) as IsAuthContext
  const navigate = useNavigate()

  const onLogout = () => {
    setIsAuth(false)
    localStorage.removeItem('isAuth')
    navigate('/login')
  }

  return (
    <nav className={s.navbar}>
      <div>
        <Link to="/posts">Posts</Link>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Button onClick={onLogout}>Log out</Button>
      </div>
    </nav>
  );
};
