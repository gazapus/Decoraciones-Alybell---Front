import '../styles/ContactForm.css';

function ContactForm() {
    return (
        <form className="Form">
            <input type="text" placeholder="nombre" name="name" className="Form__input" />
            <input type="email" placeholder="email" className="Form__input" />
            <textarea placeholder="mensaje" className="Form__message" />
            <div className="Form__buttonContainer">
                <button className="Form__button">ENVIAR</button>
            </div>
        </form>
    )
}

export default ContactForm;