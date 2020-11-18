import ValidationService from "../services/validation.service";
import { useHistory } from 'react-router-dom';
import pathNames from '../utils/pathnames';
import { useEffect, useState } from 'react';

function useLoggedUser() {
    const [userLoggeed, setUserLogged] = useState(false);
    const history = useHistory();

    useEffect(() => {
        ValidationService.isAdminOrMod()
            .then(response => {
                setUserLogged(response.status === 200);
            })
            .catch(err => {
                history.push(pathNames.login);
            })
    }, [history]);
    return userLoggeed;
}

export default useLoggedUser;