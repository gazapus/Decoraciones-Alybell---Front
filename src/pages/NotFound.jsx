import '../styles/Dashboard.css';
import NavBar from '../components/NavBar';
import Logo from '../components/Logo';

/**
 * Error page 404
 */
function NotFound() {
    return (
        <div className="Dashboard">
            <NavBar
                leftItems={<Logo />}
            />
            <h1>ERROR: Págino no encontrada</h1>
        </div>
    )
}

export default NotFound;