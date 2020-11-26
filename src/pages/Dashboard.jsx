import '../styles/Dashboard.css';
import NavBar from '../components/NavBar';
import Logo from '../components/Logo';
import LogoutButton from '../components/LogoutButton';
import ValidationService from "../services/validation.service";
import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import pathNames from '../utils/pathnames';
import CardButton from '../components/CardButton';

/** 
 * Dashboard Page
 */
function Dashboard() {
    const [userAuthorizedLoaded, setUserAuthorizedLoaded] = useState(false);
    let history = useHistory();

    useEffect(() => {
        ValidationService.isAdminOrMod()
            .then(response => {
                setUserAuthorizedLoaded(response.status === 200);
            })
            .catch(err => {
                history.push(pathNames.login)
            })
    }, [history])

    return (
        <div className="Dashboard">
            <NavBar
                leftItems={<Logo />}
                rightItems={<LogoutButton />}
            />
            {
                (userAuthorizedLoaded) ?
                    <div className="Dashboard__options">
                        <h2 className="Dashboard__title">ADMINISTRACIÓN</h2>
                        <div className="Dashboard__cards">
                            <CardButton
                                backgroundImage="https://i.ibb.co/hB27kQB/tqt96-vf0f9.webp"
                                text="PRODUCTOS"
                                handleClick={() => { history.push(pathNames.products)}}
                            />
                            <CardButton
                                backgroundImage="https://i.ibb.co/9pJ1Lf9/t0ty8-78kzf.webp"
                                text="REDES"
                                handleClick={() => { history.push(pathNames.networks)}}
                            />
                            <CardButton
                                backgroundImage="https://i.ibb.co/k39GyFW/tdtf5-dw08f.webp"
                                text="NOTICIAS"
                                handleClick={() => { history.push(pathNames.news)}}
                            />
                            <CardButton
                                backgroundImage="https://i.ibb.co/YLhwqTn/t20az-gc4ww.webp"
                                text="USUARIOS"
                                handleClick={() => { history.push(pathNames.user)}}
                            />
                        </div>
                    </div>
                    :
                    <p>Cargando</p>
            }
        </div>
    )
}

export default Dashboard;