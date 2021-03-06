import React from 'react';


const Header=(props)=>{
    return (
        <nav className="navbar navbar/light bg ligth">
            <div>
                <img src="logo192.png" width="32" height="32" className="d-inline-block align-top mr-sm-2" alt="logo"/>
                <a className="navbar-bar" href="/">Facebook Login</a>
            </div>
            {props.children}
        </nav>
    );
};
export default Header;