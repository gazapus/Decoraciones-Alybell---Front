import NavBar from '../components/NavBar';
import Logo from '../components/Logo';
import LogoutButton from '../components/LogoutButton';
import PageTitleBar from '../components/PageTitleBar';
import { useState } from 'react';
import NetworkService from '../services/network.service';
import useLoggedUser from '../hooks/userLogged';
import '../styles/EditPage.css';
import NetworkForm from '../components/NetworkForm';
import { useHistory } from 'react-router-dom';
import pathnames from '../utils/pathnames';

/** 
 * Edit an existing network or add a new network
 * @constructor
 * @prop {object} location - network to edit - default: empty object
 */
function EditNetwork({ location }) {
    let userLogged = useLoggedUser();
    const [loading, setLoading] = useState(false);
    let history = useHistory();
    const [errorMessage, setErrorMessage] = useState("");

    function save(network, id) {
        setLoading(true);
        if (id) {
            NetworkService.update(id, network)
                .then(response => {
                    history.push(pathnames.networks)
                }).catch(err => {
                    setErrorMessage(err);
                    setLoading(false);
                })
        } else {
            NetworkService.create(network)
                .then(response => {
                    history.push(pathnames.networks)
                }).catch(err => {
                    setErrorMessage(err.response.data.message);
                    setLoading(false);
                })
        }
    }

    if (!userLogged) return <div></div>

    return (
        <div className="EditPage">
            <NavBar
                leftItems={<Logo />}
                rightItems={<LogoutButton />}
            />
            <PageTitleBar route={pathnames.networks}>RED</PageTitleBar>
            {(loading) ? <span>PROCESANDO</span> : ""}
            <div className="EditPage__form">
                <NetworkForm
                    network={location.state || {}}
                    handleSubmit={save}
                    errorSubmit={errorMessage}
                />
            </div>
        </div>
    )
}

export default EditNetwork;