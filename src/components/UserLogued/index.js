import React from 'react';
import './styles.css';


const UserLogued = ({ user, onLogout }) => {
    const logout = () => {
        onLogout();
        window.FB.logout(() => { });
    };
    return (
        <nav className="navbar navbar-light bg-light">
            {user.picture &&
                <img src={user.picture.data.url}
                    className="userImage"
                    alt={user.name}
                />
            }
            <span> {user.name} </span>
            <a className="nav-item nav-link" href="#" onClick={logout}>
                salir
            </a>
        </nav>
    );
};

export default UserLogued;