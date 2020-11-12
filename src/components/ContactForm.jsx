import '../styles/ContactForm.css';
import BannerButton from './BannerButton';

function ContactForm({onOpenKeyboard, onCloseKeyoboard}) {
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
                <BannerButton
                    text="ENVIAR"
                    handleClick={() => console.log("Ep")}
                    color="#afaaaa"
                    size="S"
                />
            </div>
        </form>
    )
}

export default ContactForm;