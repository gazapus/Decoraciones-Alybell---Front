import FullScreenPage from '../../components/FullScreenPage';
import '../../styles/ContactScreen.css';
import ContactForm from "../../components/ContactForm";
import { useEffect, useState } from 'react';

/** 
 * Represents contact form component
 * @constructor
 * @prop {string} backgroundColor - Form background color
 * @prop {string} borderColor - Form border color
 * @prop {string} footerColor - Form footer background color
 */
function MainContact({
    borderColor = "#000",
    backgroundColor = "#00000021",
    footerColor = "#000000A8",
    buttonColor = "#000",
    buttonText = "#fff",
    footerText = "#fff"
}) {
    const [map, setMap] = useState(<p>Cargando mapa</p>)

    useEffect(() => {
        window.addEventListener('load', () => {
            setMap( 
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
            </iframe>)
        })
    }, [])


    return (
        <FullScreenPage>
            <div className="ContactScreen" id="contact">
                <div className="ContactScreen__container" style={{ borderColor: borderColor, backgroundColor: backgroundColor }}>
                    <div className="Form">
                        <div className="Form__header">
                            <h3 className="Form__title">CONTACTANOS</h3>
                            <hr className="Form__line" />
                            <p className="Form__subtitle">Dejanos tu consulta y te responderemos a la brevedad</p>
                        </div>
                        <div className="Form__inputs">
                            <ContactForm
                                buttonBgColor = {buttonColor}
                                buttonTextColor = {buttonText}
                            />
                        </div>
                        <div className="Form__networks" style={{ backgroundColor: footerColor }}>
                            <span style={{color: footerText}}>
                                o escribenos por nuestras redes <strong>⬇</strong>
                            </span>
                        </div>
                    </div>
                    <div className="Map" style={{ borderColor: borderColor }}>
                        {map}
                    </div>
                </div>
            </div>
        </FullScreenPage>
    )
}

export default MainContact;