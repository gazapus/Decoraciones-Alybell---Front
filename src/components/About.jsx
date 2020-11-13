import '../styles/About.css';
import Modal from './Modal';
import { useState } from 'react';

/** 
 * Represents the 'about us' page section
 * @constructor
 * @prop {string} backgroundColor - Background color
 * @prop {string} textColor - Text color
 * @prop {string} highlightedColor - highlighted text color
 * 
 */

function About({ backgroundColor = "#000", textColor = "#fff", highlightedColor = "#FF0000" }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');

    function openImage(imageURL) {
        setModalImage(imageURL);
        setModalOpen(true)
    }

    function onLoadImg({target:img}) {
        if(img.offsetHeight >= img.offsetWidth) {
            img.style.width = 70 + '%';
        } else {
            img.style.width = 100 + '%';
        }
    }

    return (
        <div className="AbotContainer">
            <div className="About" style={{ backgroundColor: backgroundColor }}>
                <div className="About__text" style={{ color: textColor }}>
                    <div className="AboutDescription">
                        <span className="AboutDescription__pre" style={{ color: highlightedColor }}>ACERCA DE NOSOTROS</span>
                        <h3 className="AboutDescription__title">A RICH FEATURED, EPIC y PREMIUM WORK</h3>
                        <p className="AboutDescription__text">
                            Suspendisse facilisis commodo lobortis. Nullam mollis lobortis ex vel faucibus.
                            Proin nec viverra turpis. Nulla eget justo scelerisque, pretium purus vel, congue
                            libero. Suspendisse potenti.
                        </p>
                    </div>
                    <div className="AboutDetails">
                        <span className="AboutDetails__title">Web Design y Development</span>
                        <div className="AboutDetails__listContainer">
                            <ul className="AboutDetails__list">
                                <li className="AboutDetails__item">web content</li>
                                <li className="AboutDetails__item">web content2</li>
                                <li className="AboutDetails__item">web content2</li>
                            </ul>
                            <ul className="AboutDetails__list">
                                <li className="AboutDetails__item">web content3</li>
                                <li className="AboutDetails__item">web content2</li>
                                <li className="AboutDetails__item">web content4</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="About__media">
                    <div className="AboutMedia__1image">
                        <div
                            className="AboutMedia__image"
                            style={{ backgroundImage: `url(https://media.timeout.com/images/105320237/image.jpg)` }}
                            onClick={() => openImage('https://media.timeout.com/images/105320237/image.jpg')}
                        >
                            ▶
                        </div>
                    </div>
                    <div className="AboutMedia__2images">
                        <div
                            className="AboutMedia__image"
                            style={{ backgroundImage: `url(https://images-na.ssl-images-amazon.com/images/I/71CvVL2uzmL._AC_SL1500_.jpg)` }}
                            onClick={() => openImage('https://images-na.ssl-images-amazon.com/images/I/71CvVL2uzmL._AC_SL1500_.jpg')}
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
                <img src={modalImage} alt="" onLoad={onLoadImg}/>
            </Modal>
        </div>
    )
}

export default About;