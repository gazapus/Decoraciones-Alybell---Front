import '../styles/Footer.css';


/** 
 * Represents footer
 * @constructor
 * @prop {array} networksIcons - Icons Array to show on the footer
 * @prop {array} backgroundColor - Background color 
 * @prop {array} textColor - Text color
 */
function Footer({networksIcons=[], backgroundColor="#000", textColor="#fff"}) {
    return(
        <div className="Footer" style={{backgroundColor: backgroundColor}}>
            <div className="Footer__icons">
                {networksIcons.map(e => e)}
            </div>
            <span className="Footer_text" style={{color: textColor}}>© 2020 | Diseñado por Estudio Gazapus</span>
            <span className="Footer_text" style={{color: textColor}}>Decoraciones Alybell | Villa Crespo | Ciudad de Buenos Aires</span>
        </div>
    )
}

export default Footer;