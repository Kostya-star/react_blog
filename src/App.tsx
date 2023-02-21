import { useState, useEffect } from 'react';
import { AppRouter } from './components/AppRouter';
import { Navbar } from './components/UI/Navbar/Navbar';
import { AuthContext } from './context/context';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('isAuth')) {
      setIsAuth(true)
    }
  }, [])

  return (
    <>
      <AuthContext.Provider value={{ isAuth, setIsAuth }}>
        <Navbar />
        <AppRouter />
      </AuthContext.Provider>
    </>
  );
};

export default App;
