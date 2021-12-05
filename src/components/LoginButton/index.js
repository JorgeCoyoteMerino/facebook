import React from 'react';
import './styles.css';

const LoginButton = ({onLogin}) => {                            
    const facebookLogin = () => {
        if (!window.FB) return;

               //hacer login
        window.FB.getLoginStatus(response => {
            if (response.status === "connected") {
                //leer los datos de usuario
                facebookLoginHandler(response);
            } else {
                //intentar iniciar sesion
                window.FB.login(facebookLoginHandler, { scope: 'public_profile, email' });
            }
        });
    };

    const facebookLoginHandler = (response) => {
        console.log(response);

        if (response.status === "connected") {
            //leer datos del usuario 
            window.FB.api('/me?fields=id,name,email,picture', userData => {
                console.log(userData)

                    //almacenar la sesion del usuario en nuestra app
                    const user ={
                        ...userData, 
                        accessToken: response.authResponse.accessToken
                    };

                onLogin(user); //llamar a la funcion del componente padre 
            });

        }
    };

    return (
        <div className="loginWrapper">
            <a onClick={facebookLogin} className="login">
                <span>Conéctame con Facebook</span>
            </a>
        </div>
    );
};
export default LoginButton;
