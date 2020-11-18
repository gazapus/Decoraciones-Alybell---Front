import '../styles/ItemPage.css';
import NavBar from '../components/NavBar';
import Logo from '../components/Logo';
import LogoutButton from '../components/LogoutButton';
import PageTitleBar from '../components/PageTitleBar';
import { useState, useEffect } from 'react';
import NetworkService from '../services/network.service';
import Modal from '../components/Modal';
import useLoggedUser from '../hooks/userLogged';
import {useHistory} from 'react-router-dom';
import '../styles/Table.css';
import '../styles/ModalItem.css';
import pathnames from '../utils/pathnames';

function NetworkPage() {
    const [networksData, setNetworksData] = useState([]);
    const [modalData, setModalData] = useState({});
    let userLogged = useLoggedUser();
    let history = useHistory();

    useEffect(() => {
        if (userLogged) {
            NetworkService.getAll()
                .then((response) => {
                    setNetworksData(response.data);
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
            <PageTitleBar route={pathnames.admin}>REDES</PageTitleBar>
            <div className="itemPage__content">
                <button className="Table__Addbutton" onClick={() => history.push(pathnames.network_edit)}>AGREGAR RED</button>
                <table className="Table">
                    <thead className="Table_thead">
                        <tr className="Table_tr">
                            <th className="Table_th"></th>
                            <th className="Table_th">Icono</th>
                            <th className="Table_th">Nombre</th>
                            <th className="Table_th">URL</th>
                            <th className="Table_th"></th>
                            <th className="Table_th"></th>
                        </tr>
                    </thead>
                    <tbody className="Table_tbody">
                        {networksData.map((e, index) =>
                            <Row
                                network={e}
                                key={index}
                                setModalData={setModalData}
                            />)}
                    </tbody>
                </table>
            </div>
            <Modal
                open={modalData.name}
                onClose={() => setModalData({})}
            >
                <ModalContent network={modalData} />
            </Modal>
        </div>
    )
}

function Row({ network, setModalData }) {
    let history = useHistory();
    return (
        <tr className="Table_tr">
            <td className="Table_td">
                <button
                    className="Table__button"
                    onClick={() => setModalData(network)}
                >
                    VER
                </button>
            </td>
            <td className="Table_td">
                <img className="Table__image" src={network.iconURL} alt="" />
            </td>
            <td className="Table_td">{network.name}</td>
            <td className="Table_td">{network.pageURL}</td>
            <td className="Table_td">
                <button
                    className="Table__button blue_background"
                    onClick={() => history.push({
                        pathname: pathnames.network_edit,
                        state: network
                    })}
                >
                    Modificar
                </button>
            </td>
            <td className="Table_td">
                <button 
                    className="Table__button red_background"
                    onClick={() => {NetworkService.remove(network.id); history.go(0)}}
                >
                    Eliminar
                </button>
            </td>
        </tr>
    )
}

function ModalContent({ network }) {
    return (
        <div className="ModalItem">
            <img className="ModalItem__img--small" src={network.iconURL} alt="" />
            <span className="ModalItem__label">NOMBRE:</span>
            <span className="ModalItem__text">{network.name}</span>
            <span className="ModalItem__label">SITIO:</span>
            <span className="ModalItem__text">
                <a href={network.pageURL} target="_blank" rel="noreferrer">{network.pageURL} </a>
            </span>
        </div>
    )
}

export default NetworkPage;