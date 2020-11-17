import { useEffect, useState } from 'react';
import '../styles/LoginForm.css';
import Button from './Button';

function LoginForm({ backgroundColor = "#000", textColor = "#fff", handleLogin, errorLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [validInputs, setValidInputs] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");


    useEffect(() => {
        setValidInputs(username.length > 0 && password.length > 0);
    }, [username, password]);

    useEffect(() => {
        setErrorMessage(errorLogin)
    }, [errorLogin])

    function handleSubmit(e) {
        e.preventDefault();
        if(validInputs){
            setErrorMessage("")
            console.log("ok")
            handleLogin(username, password);
        } else {
            setErrorMessage("Debe ingresar un usuario y contraseña")
        }
    }

    return (
        <form 
            className="LoginForm" 
            style={{ backgroundColor: backgroundColor, color: textColor }}
        >
            <span className="LoginForm__errorMessage">{errorMessage}</span>
            <label htmlFor="username" className="LoginForm__label">Usuario</label>
            <input
                type="text"
                id="username"
                className="LoginForm__input"
                value={username}
                onInput={(e) => setUsername(e.target.value)}
                minLength={4}
                maxLength={12}
                required
            />
            <label htmlFor="password" className="LoginForm__label">Contraseña</label>
            <input
                type="password"
                id="password"
                className="LoginForm__input"
                value={password}
                onInput={(e) => setPassword(e.target.value)}
                minLength={6}
                maxLength={12}
                required
            />
            <div className="LoginForm__buttonContainer">
                <Button
                    text="ACCEDER"
                    size="S"
                    backgroundColor={textColor}
                    textColor={backgroundColor}
                    handleClick={handleSubmit}
                />
            </div>
        </form>
    )
}

export default LoginForm;