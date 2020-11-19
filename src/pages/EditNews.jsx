import NavBar from '../components/NavBar';
import Logo from '../components/Logo';
import LogoutButton from '../components/LogoutButton';
import PageTitleBar from '../components/PageTitleBar';
import { useState } from 'react';
import NewsService from '../services/news.service';
import useLoggedUser from '../hooks/userLogged';
import '../styles/EditPage.css';
import NewsForm from '../components/NewsForm';
import { useHistory } from 'react-router-dom';
import pathnames from '../utils/pathnames';

/** 
 * Edit an existing news or add a new news
 * @constructor
 * @prop {object} location - news to edit - default: empty object
 */
function EditNews({ location }) {
    let userLogged = useLoggedUser();
    const [loading, setLoading] = useState(false);
    let history = useHistory();
    const [errorMessage, setErrorMessage] = useState("");

    function save(news, id) {
        setLoading(true);
        if (id) {
            NewsService.update(id, news)
                .then(response => {
                    history.push(pathnames.news)
                }).catch(err => {
                    setErrorMessage(err);
                    setLoading(false);
                })
        } else {
            NewsService.create(news)
                .then(response => {
                    history.push(pathnames.news)
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
            <PageTitleBar route={pathnames.news}>NOVEDAD</PageTitleBar>
            {(loading) ? <span>PROCESANDO</span> : ""}
            <div className="EditPage__form">
                <NewsForm
                    news={location.state || {}}
                    handleSubmit={save}
                    errorSubmit={errorMessage}
                />
            </div>
        </div>
    )
}

export default EditNews;