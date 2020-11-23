import FullScreenPage from '../../components/FullScreenPage';
import '../../styles/About.css';
import Modal from '../../components/Modal';
import { useState } from 'react';

/** 
 * Represents the 'about us' page section
 * @constructor
 * @prop {string} backgroundColor - Background color
 * @prop {string} textColor - Text color
 * @prop {string} highlightedColor - highlighted text color
 * 
 */
function MainAbout({ backgroundColor = "#000", textColor = "#fff", highlightedColor = "#FF0000", keyboardOpen }) {

    const [modalOpen, setModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');

    function openImage(imageURL) {
        setModalImage(imageURL);
        setModalOpen(true)
    }

    function onLoadImg({ target: img }) {
        if (img.offsetHeight >= img.offsetWidth) {
            img.style.width = 70 + '%';
        } else {
            img.style.width = 100 + '%';
        }
    }

    return (
        <FullScreenPage
            keyboardOpen={keyboardOpen}
        >
            <div className="AbotContainer">
                <div className="About" style={{ backgroundColor: backgroundColor }}>
                    <div className="About__text" style={{ color: textColor }}>
                        <div className="AboutDescription">
                            <span className="AboutDescription__pre" style={{ color: highlightedColor }}>ACERCA DE NOSOTROS</span>
                            <h3 className="AboutDescription__title">DISEÑOS ORIGINALES EN ILUMINACIÓN</h3>
                            <p className="AboutDescription__text">
                                Decoraciones Alybell es un emprendimiento ubicado en Villa Crespo, Buenos Aires, especializado en la producción de guirnaldas 
                                lúminicas de flores. Para hacer nuestras guirnaldas combinamos la tecnología de las luces led con telas 
                                de calidad selladas manualmente, cuidando cada detalle para entregar productos de calidad.
                        </p>
                        </div>
                        <div className="AboutDetails">
                            <span className="AboutDetails__title">NUESTROS PRODUCTOS</span>
                            <div className="AboutDetails__listContainer">
                                <ul className="AboutDetails__list">
                                    <li className="AboutDetails__item">Guirnaldas de flores</li>
                                    <li className="AboutDetails__item">Pantallas de lámpara</li>
                                    <li className="AboutDetails__item">Luces LED</li>
                                </ul>
                                <ul className="AboutDetails__list">
                                    <li className="AboutDetails__item">Flores de tela</li>
                                    <li className="AboutDetails__item">Lámparas LED</li>
                                    <li className="AboutDetails__item">Productos personalizados</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="About__media">
                        <div className="AboutMedia__1image">
                            <div
                                className="AboutMedia__image"
                                style={{ backgroundImage: `url(https://i.ibb.co/NLLBhDx/D-NQ-NP-621916-MLA40800570687-022020-O-min.webp)` }}
                                onClick={() => openImage('https://i.ibb.co/NLLBhDx/D-NQ-NP-621916-MLA40800570687-022020-O-min.webp')}
                            >
                                ▶
                        </div>
                        </div>
                        <div className="AboutMedia__2images">
                            <div
                                className="AboutMedia__image"
                                style={{ backgroundImage: `url(https://i.ibb.co/dfTxCGZ/D-NQ-NP-722308-MLA44096521117-112020-O.webp)` }}
                                onClick={() => openImage('https://i.ibb.co/dfTxCGZ/D-NQ-NP-722308-MLA44096521117-112020-O.webp')}
                            >
                                ▶
                        </div>
                            <div
                                className="AboutMedia__image"
                                style={{ backgroundImage: 'url(https://images-na.ssl-images-amazon.com/images/I/61stTKXPvJL._AC_SL1000_.jpg)' }}
                                onClick={() => openImage('https://images-na.ssl-images-amazon.com/images/I/61stTKXPvJL._AC_SL1000_.jpg')}
                            >
                                ▶
                        </div>
                        </div>
                    </div>
                </div>
                <Modal
                    open={modalOpen}
                    onClose={() => setModalOpen(false)}
                >
                    <img src={modalImage} alt="" onLoad={onLoadImg} />
                </Modal>
            </div>
        </FullScreenPage>
    )
}

export default MainAbout;