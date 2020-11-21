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
                                backgroundImage="https://pamsoft.es/wp-content/uploads/2016/02/catalogo-online.jpg"
                                text="PRODUCTOS"
                                handleClick={() => { history.push(pathNames.products)}}
                            />
                            <CardButton
                                backgroundImage="https://www.marketingregistrado.com/img/noticias/redes-sociales-google.jpg"
                                text="REDES"
                                handleClick={() => { history.push(pathNames.networks)}}
                            />
                            <CardButton
                                backgroundImage="https://fotografias.lasexta.com/clipping/cmsimages02/2019/05/23/7DAFE6C6-6A2B-4C13-BAA0-A99376C5897A/58.jpg"
                                text="NOTICIAS"
                                handleClick={() => { history.push(pathNames.news)}}
                            />
                            <CardButton
                                backgroundImage="https://www.idibuild.es/wp-content/uploads/2017/02/seguridad-control-accesos-idibuild2.jpg"
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