import '../styles/ShopSection.css';
import Button from './Button';

/** 
 * Represents a container that covers the height and width of the screen
 * @props
 * @prop {string} backgroundColor - Color in Hexadecimal of the background. Default: #000
 * @prop {string} textColor - Color in Hexadecimal of the text. Default: #fff
 * @prop {string} buttonBgColor - Background button color. Default: #fff
 * @prop {string} buttonTextColor - text button Color. Default: #000
 */
function ShopSection({
    url="#", 
    backgroundColor="#000", 
    textColor="#fff",
    buttonBgColor="#fff",
    buttonTextColor="#000"
}) {
    return (
        <div className="ShopSection">
            <div className="Shop" style={{backgroundColor: backgroundColor}}>
                <div className="Shop__text" style={{color: textColor}}>
                    <h3 className="Shop__title">FOR BUILDING THE MODERN WEBSITE</h3>
                    <p className="Shop__description">Packed with all the goodies you can get, Kallyas is our flagship premium template.</p>
                </div>
                <div className="Shop__buttonContainer">
                    <Button
                        text="CATALOGO"
                        handleClick={() => window.open(url, '_blank') }
                        backgroundColor={buttonBgColor}
                        textColor={buttonTextColor}
                    />
                </div>
            </div>
        </div>
    )
}

export default ShopSection;