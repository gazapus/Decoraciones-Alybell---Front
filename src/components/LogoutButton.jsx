import '../styles/LogoutButton.css';
import AuthService from "../services/auth.service";
import pathNames from '../utils/pathnames';
import { useHistory } from "react-router-dom";


function LogoutButton() {
    let history = useHistory();

    function handleLogout() {
        AuthService.logout();
        history.push(pathNames.login)
    }

    return (
        <div className="Logout">
            <button className="Logout__button" onClick={handleLogout}>SALIR</button>
        </div>
    )
}

export default LogoutButton;