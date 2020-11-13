import '../styles/Card.css';
import { useState } from 'react';

/** 
 * Represents a button
 * @constructor
 * @prop {string} imageURL - Card Image URL
 * @prop {function} description - Card Description
 * @prop {string} redirectURL - Card redirect link
 * @prop {number} large - Pixel number of large
 * @prop {number} price - Card Price - Defaul: 0
 * @prop {string} priceBGColor - background color of the price footer - Defaul: #000
 * @prop {string} priceTextColor - text color of the price footer - Defaul: #fff
 */
function Card({
    imageURL,
    description,
    price = 0,
    redirectURL = "#",
    large,
    priceBGColor = "#000",
    priceTextColor = "#fff"
}) {
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
                <p 
                    className="CardDescription__price" 
                    style={{ backgroundColor: priceBGColor, color: priceTextColor}}
                >
                    {(price !== 0) ? '$' + price : '.'}
                </p>
            </div>
        </div>
    )
}

export default Card;