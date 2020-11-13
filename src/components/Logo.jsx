import '../styles/Logo.css';
import Rose from '../images/rosa.svg';
/** 
 * Represents the logo of Decoraciones Alybell
 *
 */
function Logo() {
    return(
        <div className="Logo">
            <img src={Rose} alt="" className="Logo__image"/>
            <h1 className="Logo__text">Decoraciones Alybell</h1>
        </div>
    )
}

export default Logo;