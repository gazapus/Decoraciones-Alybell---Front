import '../styles/ContactForm.css';
import Button from './Button';

/** 
 * Represents contact form component
 * @constructor
 * @prop {function} onOpenKeyboard - function to run when focus an input
 * @prop {function} onCloseKeyoboard - function to run when blur an input
 * @prop {string} buttonBgColor - background color button
 * @prop {string} buttonTextColor - text color button
 */
function ContactForm({onOpenKeyboard, onCloseKeyoboard, buttonBgColor="#000", buttonTextColor="#fff" }) {
    return (
        <form className="ContactForm">
            <input 
                type="text" 
                placeholder="nombre" 
                name="name" 
                className="ContactForm__input" 
                onFocus={onOpenKeyboard}
                onBlur={onCloseKeyoboard}
            />
            <input 
                type="email" 
                placeholder="email" 
                className="ContactForm__input"
                onFocus={onOpenKeyboard}
                onBlur={onCloseKeyoboard}
            />
            <textarea 
                placeholder="mensaje" 
                className="ContactForm__message"
                onFocus={onOpenKeyboard}
                onBlur={onCloseKeyoboard}
            />
            <div className="ContactForm__buttonContainer">
                <Button
                    text="ENVIAR"
                    handleClick={() => console.log("Ep")}
                    backgroundColor={buttonBgColor}
                    textColor={buttonTextColor}
                    size="S"
                />
            </div>
        </form>
    )
}

export default ContactForm;