import '../styles/Logo.css';
import SolucionImage from '../images/solucion.png';
/** 
 * Represents the logo of Decoraciones Alybell
 *
 */
function Logo() {
    return(
        <div className="Logo">
            <img src={SolucionImage} alt="" className="Logo__image"/>
            <h1 className="Logo__text">DECORACIONES ALYBELL</h1>
        </div>
    )
}

export default Logo;