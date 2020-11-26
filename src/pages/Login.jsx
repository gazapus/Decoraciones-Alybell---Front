import { useState, useEffect } from 'react';
import AuthService from "../services/auth.service";
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Logo from '../components/Logo';
import LoginForm from '../components/LoginForm';
import { useHistory } from "react-router-dom";
import pathNames from '../utils/pathnames';
import ValidationService from "../services/validation.service";

import '../styles/Login.css';

/** 
 * Login Page
 */

function Login() {
    const [errorLogin, setErrorLogin] = useState("");
    let history = useHistory();

    // Verify if there an user logged
    useEffect(() => {
        if (AuthService.getCurrentUser()) {
            ValidationService.isAdminOrMod()
                .then(response => {
                    if (response.status === 200) history.push(pathNames.admin)
                })
        }
    }, [history])

    function handleLogin(username, password) {
        AuthService.login(username, password)
            .then(response => {
                history.push(pathNames.admin)
            })
            .catch(err => {
                setErrorLogin("Usuario o contraseña invalidos");
            })
    }

    return (
        <div className="Login">
                <NavBar
                    leftItems={<Logo />}
                />
                <div className="Login__container">
                    <LoginForm
                        handleLogin={handleLogin}
                        errorLogin={errorLogin}
                    />
                </div>
            <Footer />
        </div>
    )
}

export default Login;