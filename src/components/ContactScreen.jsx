import '../styles/ContactScreen.css';
import Icon from './Icon';
import IconFacebook from '../images/facebook.svg';
import IconInstagram from '../images/instagram.svg';
import MercadoLibre from '../images/meli.png';
import ContactForm from "./ContactForm";

function ContactScreen({ onOpenKeyboard, onCloseKeyoboard }) {

    return (
        <div className="ContactScreen">
            <div className="ContactScreen__container">
                <div className="Form">
                    <div className="Form__header">
                        <h3 className="Form__title">CONTACTANOS</h3>
                        <hr className="Form__line" />
                        <p className="Form__subtitle">Dejanos un mensaje y te responderemos a la brevedad</p>
                    </div>
                    <div className="Form__inputs">
                        <ContactForm
                            onOpenKeyboard={onOpenKeyboard}
                            onCloseKeyoboard={onCloseKeyoboard}
                        />
                    </div>
                    <div className="Form__networks">
                        <Icon image={IconFacebook} url={"#"} size={"S"} />
                        <Icon image={IconInstagram} url={"#"} size={"S"} />
                        <Icon image={MercadoLibre} url={"#"} size={"S"} />
                    </div>
                </div>
                <div className="Map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.4095521018694!2d-58.446289784592054!3d-34.593803864480854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5f5b97c4b45%3A0x5936bf3b742b1b58!2sVillarroel%201150%2C%20C1414%20AMD%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1604987755236!5m2!1ses-419!2sar"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        aria-hidden="false"
                        tabIndex="0"
                        title="map">
                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default ContactScreen;