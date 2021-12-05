import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import LoginButton from './components/LoginButton';
import UserLogued from './components/UserLogued';
import Post from './components/Post';
import * as storage from './utils/storage';

function App() {
  const [user, setUser] = useState(null);

  const onLogin = (user) => {
    //almacenar los datos en el locaStorage
    storage.setUser(user); 
    setUser(user);
  };

  const onLogout = () => {
    storage.clear();
    setUser(null);
  };

  useEffect(() => {
    const checkSession = () => {
      const user = storage.getUser(); //leer el user storage
      if (user) {
        setUser(user);
      }
    };
    checkSession();
  }, []);

  return (
    <div className="container-fuild">
      <Header>
        {user && <UserLogued user={user} onLogout={onLogout} />}
      </Header>
      <div className="row" style={{ padding: '24px 16px' }}>
        {!user && <LoginButton onLogin={onLogin} />}
        {user && <Post />}
      </div>
      <Footer />
    </div>
  );
}

export default App;