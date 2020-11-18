import '../styles/ProductsPage.css';
import NavBar from '../components/NavBar';
import Logo from '../components/Logo';
import LogoutButton from '../components/LogoutButton';
import PageTitleBar from '../components/PageTitleBar';
import { useState, useEffect } from 'react';
import ProductService from '../services/product.service';
import Modal from '../components/Modal';
import useLoggedUser from '../hooks/userLogged';
import {useHistory} from 'react-router-dom';
import '../styles/Table.css';
import '../styles/ModalItem.css';
import pathnames from '../utils/pathnames';

function ProductPage() {
    const [productsData, setProductsData] = useState([]);
    const [modalData, setModalData] = useState({});
    let userLogged = useLoggedUser();
    let history = useHistory();

    useEffect(() => {
        if (userLogged) {
            ProductService.getAll()
                .then((response) => {
                    setProductsData(response.data);
                })
                .catch(err => {
                    alert("ERROR: No se pudo traer los datos");
                })
        }
    }, [userLogged])

    if (!userLogged) return <div></div>

    return (
        <div className="ProductPage">
            <NavBar
                leftItems={<Logo />}
                rightItems={<LogoutButton />}
            />
            <PageTitleBar>PRODUCTOS</PageTitleBar>
            <div className="ProductPage__content">
                <button className="Table__Addbutton" onClick={() => history.push(pathnames.product_edit)}>AGREGAR PRODUCTO</button>
                <table className="Table">
                    <thead className="Table_thead">
                        <tr className="Table_tr">
                            <th className="Table_th"></th>
                            <th className="Table_th">Imagen</th>
                            <th className="Table_th">Descripcion</th>
                            <th className="Table_th">Precio</th>
                            <th className="Table_th">Link</th>
                            <th className="Table_th"></th>
                            <th className="Table_th"></th>
                        </tr>
                    </thead>
                    <tbody className="Table_tbody">
                        {productsData.map((e, index) =>
                            <Row
                                product={e}
                                key={index}
                                setModalData={setModalData}
                            />)}
                    </tbody>
                </table>
            </div>
            <Modal
                open={modalData.description}
                onClose={() => setModalData({})}
            >
                <ModalContent product={modalData} />
            </Modal>
        </div>
    )
}

function Row({ product, setModalData }) {
    let history = useHistory();
    return (
        <tr className="Table_tr">
            <td className="Table_td">
                <button
                    className="Table__button"
                    onClick={() => setModalData(product)}
                >
                    VER
                </button>
            </td>
            <td className="Table_td">
                <img className="Table__image" src={product.imageURL} alt="" />
            </td>
            <td className="Table_td">{product.description}</td>
            <td className="Table_td">{product.price}</td>
            <td className="Table_td">{product.shopURL}</td>
            <td className="Table_td">
                <button
                    className="Table__button blue_background"
                    onClick={() => history.push({
                        pathname: pathnames.product_edit,
                        state: product
                    })}
                >
                    Modificar
                </button>
            </td>
            <td className="Table_td">
                <button 
                    className="Table__button red_background"
                    onClick={() => {ProductService.remove(product.id); history.go(0)}}
                >
                    Eliminar
                </button>
            </td>
        </tr>
    )
}

function ModalContent({ product }) {
    return (
        <div className="ModalItem">
            <img className="ModalItem__img" src={product.imageURL} alt="" />
            <span className="ModalItem__label">DESCRIPCIÓN:</span>
            <span className="ModalItem__text">{product.description}</span>
            <span className="ModalItem__label">PRECIO:</span>
            <span className="ModalItem__text">{product.price}</span>
            <span className="ModalItem__label">LINK:</span>
            <span className="ModalItem__text">
                <a href={product.shopURL} target="_blank" rel="noreferrer">{product.shopURL} </a>
            </span>
        </div>
    )
}

export default ProductPage;