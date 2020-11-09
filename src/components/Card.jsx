import '../styles/Card.css';
import { useState } from 'react';

function Card({ imageURL, description, price = 0, redirectURL = "#", large}) {
    const [descriptionVisible, setDescriptionVisible] = useState(false);

    return (
        <div
            className="Card"
            style={{ width: large + 'px', height: large + 'px' }}
            onMouseEnter={() => setDescriptionVisible(true)}
            onMouseLeave={() => setDescriptionVisible(false)}
        >
            <div
                className={(descriptionVisible) ? 'Card__image Card__image-hidden' : 'Card__image'}
                style={{ backgroundImage: 'url(' + imageURL + ')' }}
            ></div>
            <div
                className={(descriptionVisible) ? 'Card__description Card__description-show' : 'Card__description'}
                onClick={() => window.open({ redirectURL })}
            >
                <p className="CardDescription__title">Decoraciones Alybell</p>
                <hr className="CardDescription__line" />
                <p className="CardDescription__text">{description}</p>
                <a href={redirectURL} target="_blank" rel="noopener noreferrer" className="CardDescription__link">VER</a>
                <p className="CardDescription__price">{(price !== 0) ? '$' + price : ''}</p>
            </div>
        </div>
    )
}

export default Card;