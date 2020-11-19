import '../styles/ItemPage.css';
import NavBar from '../components/NavBar';
import Logo from '../components/Logo';
import LogoutButton from '../components/LogoutButton';
import PageTitleBar from '../components/PageTitleBar';
import { useState, useEffect } from 'react';
import NewsService from '../services/news.service';
import Modal from '../components/Modal';
import useLoggedUser from '../hooks/userLogged';
import {useHistory} from 'react-router-dom';
import '../styles/Table.css';
import '../styles/ModalItem.css';
import pathnames from '../utils/pathnames';

function NewsPage() {
    const [newsData, setNewsData] = useState([]);
    const [modalData, setModalData] = useState({});
    let userLogged = useLoggedUser();
    let history = useHistory();

    useEffect(() => {
        if (userLogged) {
            NewsService.getAll()
                .then((response) => {
                    setNewsData(response.data);
                })
                .catch(err => {
                    alert("ERROR: No se pudo traer los datos");
                })
        }
    }, [userLogged])

    if (!userLogged) return <div></div>

    return (
        <div className="itemPage">
            <NavBar
                leftItems={<Logo />}
                rightItems={<LogoutButton />}
            />
            <PageTitleBar route={pathnames.admin}>NOVEDADES</PageTitleBar>
            <div className="itemPage__content">
                <button className="Table__Addbutton" onClick={() => history.push(pathnames.news_edit)}>AGREGAR NOVEDAD</button>
                <table className="Table">
                    <thead className="Table_thead">
                        <tr className="Table_tr">
                            <th className="Table_th"></th>
                            <th className="Table_th">Novedad</th>
                            <th className="Table_th"></th>
                            <th className="Table_th"></th>
                        </tr>
                    </thead>
                    <tbody className="Table_tbody">
                        {newsData.map((e, index) =>
                            <Row
                                news={e}
                                key={index}
                                setModalData={setModalData}
                            />)}
                    </tbody>
                </table>
            </div>
            <Modal
                open={modalData.text}
                onClose={() => setModalData({})}
            >
                <ModalContent news={modalData} />
            </Modal>
        </div>
    )
}

function Row({ news, setModalData }) {
    let history = useHistory();
    return (
        <tr className="Table_tr">
            <td className="Table_td">
                <button
                    className="Table__button"
                    onClick={() => setModalData(news)}
                >
                    VER
                </button>
            </td>
            <td className="Table_td">{news.text}</td>
            <td className="Table_td">
                <button
                    className="Table__button blue_background"
                    onClick={() => history.push({
                        pathname: pathnames.news_edit,
                        state: news
                    })}
                >
                    Modificar
                </button>
            </td>
            <td className="Table_td">
                <button 
                    className="Table__button red_background"
                    onClick={() => {NewsService.remove(news.id); history.go(0)}}
                >
                    Eliminar
                </button>
            </td>
        </tr>
    )
}

function ModalContent({ news }) {
    return (
        <div className="ModalItem">
            <span className="ModalItem__label">Novedad:</span>
            <span className="ModalItem__text">{news.text}</span>
        </div>
    )
}

export default NewsPage;