import NavBar from '../components/NavBar';
import Logo from '../components/Logo';
import LogoutButton from '../components/LogoutButton';
import PageTitleBar from '../components/PageTitleBar';
import { useState, useEffect } from 'react';
import AuthService from '../services/auth.service';
import ValidationService from '../services/validation.service';
import '../styles/EditPage.css';
import UserForm from '../components/UserForm';
import { useHistory } from 'react-router-dom';
import pathnames from '../utils/pathnames';

/** 
 * Add an new user
 */
function EditUser() {
    const [userLogged, setUserLogged] = useState(false);
    const [loading, setLoading] = useState(false);
    let history = useHistory();
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        console.log("s")
        ValidationService.isAdmin()
            .then(response => {
                setUserLogged(true);
            })
            .catch(err => {
                alert(err.response.data.message);
                if(err.response.status === 403) history.push(pathnames.admin);
            })
    }, [history])

    function save(username, email, password, isAdmin) {
        setLoading(true);
        AuthService.register(username, email, password, isAdmin)
            .then(response => {
                history.push(pathnames.user);
            }).catch(err => {
                setErrorMessage(err.response.data.message);
                setLoading(false);
            })
    }

    if (!userLogged) return <div></div>

    return (
        <div className="EditPage">
            <NavBar
                leftItems={<Logo />}
                rightItems={<LogoutButton />}
            />
            <PageTitleBar route={pathnames.news}>USUARIO</PageTitleBar>
            {(loading) ? <span>PROCESANDO</span> : ""}
            <div className="EditPage__form">
                <UserForm
                    handleSubmit={save}
                    errorSubmit={errorMessage}
                />
            </div>
        </div>
    )
}

export default EditUser;