import '../styles/Dashboard.css';
import NavBar from '../components/NavBar';
import Logo from '../components/Logo';
import LogoutButton from '../components/LogoutButton';
import ValidationService from "../services/validation.service";
import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import pathNames from '../utils/pathnames';
import CardButton from '../components/CardButton';

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
                                backgroundImage="https://iili.io/FEPGkJ.jpg"
                                text="PRODUCTOS"
                                handleClick={() => { history.push(pathNames.products)}}
                            />
                            <CardButton
                                backgroundImage="https://iili.io/FEP1dg.jpg"
                                text="REDES"
                                handleClick={() => { history.push(pathNames.networks)}}
                            />
                            <CardButton
                                backgroundImage="https://iili.io/FEPE7a.jpg"
                                text="NOTICIAS"
                                handleClick={() => { history.push(pathNames.news)}}
                            />
                            <CardButton
                                backgroundImage="https://iili.io/FEPMmv.jpg"
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