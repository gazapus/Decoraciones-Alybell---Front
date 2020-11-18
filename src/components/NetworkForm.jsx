import { useEffect, useState } from 'react';
import '../styles/ItemForm.css';
import Button from './Button';
import validator from 'validator';

/** 
 * New or edit network Form, contains username and password field
 * @constructor
 * @prop {string} backgroundColor 
 * @prop {string} textColor 
 * @prop {function} handleSubmit - function to call when the data is sended
 * @prop {string} errorSubmit - error message to show
 */
function NetworkForm({ backgroundColor = "#000", textColor = "#fff", handleSubmit, errorSubmit, network= {} }) {
    const [name, setName] = useState(network.name || "");
    const [iconURL, setIconURL] = useState(network.iconURL || "");
    const [pageURL, setPageURL] = useState(network.pageURL || "");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        setErrorMessage(errorSubmit)
    }, [errorSubmit])

    function isValidForm() {
        return (validator.isURL(iconURL) && validator.isURL(pageURL) && !validator.isEmpty(name))
    }

    function handleSubmitForm(e) {
        e.preventDefault();
        if(isValidForm()) {
            handleSubmit({
                name: name,
                iconURL: iconURL,
                pageURL: pageURL
            }, network.id || "");
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
            <div className="ItemForm__image" style={{ backgroundImage: `url(${iconURL})` }}></div>
            <label htmlFor="iconURL" className="ItemForm__label">URL del icono:</label>
            <input
                type="url"
                id="iconURL"
                className="ItemForm__input"
                value={iconURL}
                onInput={(e) => setIconURL(e.target.value)}
                minLength={1}
                placeholder="https://www.images.com/image.png"
                required={true}
            />
            <label htmlFor="name" className="ItemForm__label">Nombre:</label>
            <input
                id="name"
                type="text"
                className="ItemForm__input"
                value={name}
                onInput={(e) => setName(e.target.value)}
                placeholder="Hermoso decorado de guirnaldas de temporada, varios colores"
            />
            <label htmlFor="pageURL" className="ItemForm__label">URL de la página:</label>
            <input
                type="url"
                id="pageURL"
                className="ItemForm__input"
                value={pageURL}
                onInput={(e) => setPageURL(e.target.value)}
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