import '../styles/ShopSection.css';
import Button from './Button';
import { useEffect, useState } from 'react';
import NetworkService from '../services/network.service';

/** 
 * Represents a container that covers the height and width of the screen
 * @props
 * @prop {string} backgroundColor - Color in Hexadecimal of the background. Default: #000
 * @prop {string} textColor - Color in Hexadecimal of the text. Default: #fff
 * @prop {string} buttonBgColor - Background button color. Default: #fff
 * @prop {string} buttonTextColor - text button Color. Default: #000
 */
function ShopSection({
    backgroundColor="#000", 
    textColor="#fff",
    buttonBgColor="#fff",
    buttonTextColor="#000"
}) {
    const [link, setLink] = useState("#");

    useEffect(() => {
        NetworkService.getAll()
            .then(res => {
                let mercadolibre = res.data.find(e => e.name === "mercadolibre");
                if(mercadolibre) setLink(mercadolibre.pageURL)
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <div className="ShopSection">
            <div className="Shop" style={{backgroundColor: backgroundColor}}>
                <div className="Shop__text" style={{color: textColor}}>
                    <h3 className="Shop__title">CONSIGUE NUESTROS PRODUCTOS ONLINE</h3>
                    <p className="Shop__description"> Visita nuestro catalogo completo en mercadolibre y encontrá aquello que estabas buscando </p>
                </div>
                <div className="Shop__buttonContainer">
                    <Button
                        text="CATALOGO"
                        handleClick={() => window.open(link, '_blank') }
                        backgroundColor={buttonBgColor}
                        textColor={buttonTextColor}
                    />
                </div>
            </div>
        </div>
    )
}

export default ShopSection;