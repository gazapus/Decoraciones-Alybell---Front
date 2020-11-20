import '../styles/Logo.css';
import Rose from '../images/rosa.svg';
import { Link } from 'react-router-dom';
import pathNames from '../utils/pathnames';
/** 
 * Represents the logo of Decoraciones Alybell
 *
 */
function Logo() {
    return (
        <Link to={pathNames.home} style={{textDecoration: 'none'}}>
            <div className="Logo">
                <img src={Rose} alt="" className="Logo__image" />
                <h1 className="Logo__text">Decoraciones Alybell</h1>
            </div>
        </Link>
    )
}

export default Logo;