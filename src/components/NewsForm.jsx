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
function NewsForm({ backgroundColor = "#000", textColor = "#fff", handleSubmit, errorSubmit, news= {} }) {
    const [newsText, setNewsText] = useState(news.text || "");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        setErrorMessage(errorSubmit)
    }, [errorSubmit])

    function isValidForm() {
        return (!validator.isEmpty(newsText))
    }

    function handleSubmitForm(e) {
        e.preventDefault();
        if(isValidForm()) {
            handleSubmit({
                text: newsText
            }, news.id || "");
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
            <label htmlFor="text" className="ItemForm__label">Texto:</label>
            <textarea
                id="text"
                type="text"
                className="ItemForm__input ItemForm__textArea"
                value={newsText}
                onInput={(e) => setNewsText(e.target.value)}
                placeholder="Luces y Guirnaldas de excelente calidad, tematicas de flores y otra cosa"
                maxLength={100}
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

export default NewsForm;