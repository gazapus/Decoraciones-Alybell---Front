import { useEffect, useState } from 'react';
import '../styles/ItemForm.css';
import Button from './Button';
import validator from 'validator';

/** 
 * New user Form
 * @constructor
 * @prop {string} backgroundColor 
 * @prop {string} textColor 
 * @prop {function} handleSubmit - function to call when the data is sended
 * @prop {string} errorSubmit - error message to show
 */
function NetworkForm({ backgroundColor = "#000", textColor = "#fff", handleSubmit, errorSubmit }) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        setErrorMessage(errorSubmit)
    }, [errorSubmit])

    function isValidForm() {
        return (validator.isEmail(email) && !validator.isEmpty(username) && !validator.isEmpty(password))
    }

    function handleSubmitForm(e) {
        e.preventDefault();
        if(isValidForm()) {
            handleSubmit(username, email, password, isAdmin);
        } else {
            setErrorMessage("Uno de los datos ingresados no es correcto")
        }
    }

    return (
        <form
            className="ItemForm"
            style={{ backgroundColor: backgroundColor, color: textColor }}
        >
            <span className="ItemForm__errorMessage">{errorMessage}</span>
            <label htmlFor="username" className="ItemForm__label">Nombre de usuario:</label>
            <input
                id="username"
                type="text"
                className="ItemForm__input"
                value={username}
                onInput={(e) => setUsername(e.target.value)}
                placeholder="Pepe123"
            />
            <label htmlFor="password" className="ItemForm__label">Password:</label>
            <input
                type="text"
                id="password"
                className="ItemForm__input"
                value={password}
                onInput={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="email" className="ItemForm__label">Email:</label>
            <input
                type="email"
                id="email"
                className="ItemForm__input"
                value={email}
                onInput={(e) => setEmail(e.target.value)}
                placeholder="pepe@pepe.com"
            />
            <label htmlFor="isAdmin" className="ItemForm__label">Es Administrador:</label>
            <input
                type="checkbox"
                id="isAdmin"
                className="ItemForm__checkbox"
                onChange={(e) => setIsAdmin(!isAdmin)}
                checked={isAdmin}
            />
            <div className="ItemForm__buttonContainer">
                <Button
                    text="GUARDAR"
                    size="S"
                    backgroundColor={textColor}
                    textColor={backgroundColor}
                    handleClick={handleSubmitForm}
                />
            </div>
        </form>
    )
}

export default NetworkForm;