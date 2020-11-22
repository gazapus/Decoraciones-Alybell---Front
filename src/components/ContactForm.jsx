import '../styles/ContactForm.css';
import Button from './Button';
import { useRef, useState } from 'react';
import Validator from 'validator';
import MailService from '../services/mail.service';

/** 
 * Represents contact form component
 * @constructor
 * @prop {function} onOpenKeyboard - function to run when focus an input
 * @prop {function} onCloseKeyoboard - function to run when blur an input
 * @prop {string} buttonBgColor - background color button
 * @prop {string} buttonTextColor - text color button
 */
function ContactForm({ onOpenKeyboard, onCloseKeyoboard, buttonBgColor = "#000", buttonTextColor = "#fff" }) {
    const [sendingForm, setSendingForm] = useState(false);
    const [formMessage, setFormMessage] = useState("");

    const nameInput = useRef("");
    const emailInput = useRef("");
    const messageInput = useRef("");
    const messageForm = useRef("");

    function validateInputs() {
        let validInputs = true;
        if (Validator.isEmpty(nameInput.current.value)) {
            nameInput.current.classList.add('ContactForm__input-wrong');
            validInputs = false;
        }
        if (!Validator.isEmail(emailInput.current.value)) {
            emailInput.current.classList.add('ContactForm__input-wrong');
            validInputs = false;
        }
        if (Validator.isEmpty(messageInput.current.value)) {
            messageInput.current.classList.add('ContactForm__input-wrong');
            validInputs = false;
        }
        return validInputs;
    }

    function handleSumbit(e) {
        e.preventDefault();
        if (validateInputs()) {
            setSendingForm(true);
            setFormMessage("Enviando...");
            MailService.sendMail({
                name: nameInput.current.value,
                email: emailInput.current.value,
                message: messageInput.current.value
            })
                .then(res => {
                    console.log("OK");
                    clearForm();
                    setFormMessage("Enviado exitosamente");
                    messageForm.current.classList.add("ContactForm__messageSend-success");
                })
                .catch(err => {
                    console.log(err)
                    messageForm.current.classList.add("ContactForm__messageSend-failed");
                    setFormMessage("Error, no se pudo enviar");
                })
                .finally(() => {
                    setTimeout(() => {
                        messageForm.current.className = "ContactForm__messageSend";
                        setSendingForm(false)
                    }, 3500);
                })
        }
    }

    function clearForm() {
        nameInput.current.value = "";
        emailInput.current.value = "";
        messageInput.current.value = "";
    }

    return (
        <form className="ContactForm">
            <input
                type="text"
                ref={nameInput}
                placeholder="nombre"
                name="name"
                className="ContactForm__input"
                onFocus={onOpenKeyboard}
                onBlur={onCloseKeyoboard}
                maxLength={50}
                minLength={1}
                onChange={() => nameInput.current.classList.remove('ContactForm__input-wrong')}
            />
            <input
                type="email"
                ref={emailInput}
                placeholder="email"
                className="ContactForm__input"
                onFocus={onOpenKeyboard}
                onBlur={onCloseKeyoboard}
                maxLength={50}
                minLength={1}
                onChange={() => emailInput.current.classList.remove('ContactForm__input-wrong')}
            />
            <textarea
                placeholder="mensaje"
                ref={messageInput}
                className="ContactForm__message"
                onFocus={onOpenKeyboard}
                onBlur={onCloseKeyoboard}
                maxLength={500}
                minLength={1}
                onChange={() => messageInput.current.classList.remove('ContactForm__input-wrong')}
            />
            <div className="ContactForm__buttonContainer">
                {(sendingForm ?
                    <p ref={messageForm} className="ContactForm__messageSend">{formMessage}</p>
                    :
                    <Button
                        text="ENVIAR"
                        handleClick={handleSumbit}
                        backgroundColor={buttonBgColor}
                        textColor={buttonTextColor}
                        size="S"
                    />
                )}
            </div>
        </form>
    )
}

export default ContactForm;