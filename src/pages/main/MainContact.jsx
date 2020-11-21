import FullScreenPage from '../../components/FullScreenPage';
import '../../styles/ContactScreen.css';
import ContactForm from "../../components/ContactForm";
/** 
 * Represents contact form component
 * @constructor
 * @prop {function} onOpenKeyboard - function to run when focus an input
 * @prop {function} onCloseKeyoboard - function to run when blur an input
 * @prop {string} backgroundColor - Form background color
 * @prop {string} borderColor - Form border color
 * @prop {string} footerColor - Form footer background color
 */
function MainContact({
    keyboardOpen,
    setKeyboardOpen,
    borderColor = "#000",
    backgroundColor = "#00000021",
    footerColor = "#000000A8",
    buttonColor = "#000",
    buttonText = "#fff",
    footerText = "#fff"
}) {
    return (
        <FullScreenPage
            keyboardOpen={keyboardOpen}
        >
            <div className="ContactScreen">
                <div className="ContactScreen__container" style={{ borderColor: borderColor, backgroundColor: backgroundColor }}>
                    <div className="Form">
                        <div className="Form__header">
                            <h3 className="Form__title">CONTACTANOS</h3>
                            <hr className="Form__line" />
                            <p className="Form__subtitle">Dejanos un mensaje y te responderemos a la brevedad</p>
                        </div>
                        <div className="Form__inputs">
                            <ContactForm
                                onOpenKeyboard={() => setKeyboardOpen(true)}
                                onCloseKeyoboard={() => setKeyboardOpen(false)}
                                buttonBgColor = {buttonColor}
                                buttonTextColor = {buttonText}
                            />
                        </div>
                        <div className="Form__networks" style={{ backgroundColor: footerColor }}>
                            <a href="mailto:elcorreoquequieres@correo.com?Subject=Contacto%20Decoraciones%20Alybell"
                                style={{color: footerText}}
                            >
                                o escribenos un mail aquí
                            </a>
                        </div>
                    </div>
                    <div className="Map" style={{ borderColor: borderColor }}>
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
        </FullScreenPage>
    )
}

export default MainContact;