import { Button } from '../components/UI/Button/Button';
import { Input } from '../components/UI/Input/Input';
import { useContext } from 'react';
import { AuthContext } from '../context/context';
import { IsAuthContext } from '../types/context';
import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext) as IsAuthContext
  const navigate = useNavigate()

  const onLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsAuth(true)
    localStorage.setItem('isAuth', JSON.stringify(true))
    navigate('/posts')
  }

  return (
    <div className="login__conatiner">
      <div className="login__form">
        <h1>Login</h1>
        <form onSubmit={onLogin}>
          <Input type="text" placeholder="Insert name" required/>
          <Input type="password" placeholder="Insert password" required/>
          <Button style={{ marginTop: '20px' }}>Log in</Button>
        </form>
      </div>
    </div>
  );
};
