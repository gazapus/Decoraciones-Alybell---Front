import { useState } from 'react';
import AuthService from "../services/auth.service";
import FullScreenPage from './FullScreenPage';
import Footer from './Footer';
import NavBar from './NavBar';
import Logo from './Logo';
import LoginForm from './LoginForm';

import '../styles/Login.css';

function Login() {
    const [errorLogin, setErrorLogin] = useState("");

    function handleLogin(username, password) {
        AuthService.login(username, password)
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                setErrorLogin("Usuario o contraseña invalidos");
                console.log(err);
            })
    }

    return (
        <div className="Login">
            <FullScreenPage>
                <NavBar
                    leftItems={<Logo />}
                />
                <div className="Login__container">
                    <LoginForm 
                        handleLogin={handleLogin}
                        errorLogin={errorLogin}
                    />
                </div>
            </FullScreenPage>
            <Footer />
        </div>
    )
}

export default Login;