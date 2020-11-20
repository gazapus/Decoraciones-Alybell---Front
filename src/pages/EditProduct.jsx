import NavBar from '../components/NavBar';
import Logo from '../components/Logo';
import LogoutButton from '../components/LogoutButton';
import PageTitleBar from '../components/PageTitleBar';
import { useState } from 'react';
import ProductService from '../services/product.service';
import useLoggedUser from '../hooks/userLogged';
import '../styles/EditPage.css';
import ProductForm from '../components/ProductForm';
import { useHistory} from 'react-router-dom';
import pathnames from '../utils/pathnames';

/** 
 * Edit an existing product or add a new product
 * @constructor
 * @prop {object} location - product to edit - default: empty object
 */
function EditProduct({ location }) {
    let userLogged = useLoggedUser();
    const [loading, setLoading] = useState(false);
    let history = useHistory();
    const [errorMessage, setErrorMessage] = useState("");

    function save(product, id) {
        setLoading(true);
        if (id) {
            ProductService.update(id, product)
                .then(response => {
                    history.push(pathnames.products)
                }).catch(err => {
                    setErrorMessage(err);
                    setLoading(false);
                })
        } else {
            ProductService.create(product)
                .then(response => {
                    history.push(pathnames.products)
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
            <PageTitleBar route={pathnames.products}>PRODUCTO</PageTitleBar>
            {(loading) ? <span>Cargando</span> : ""}
            <div className="EditPage__form">
                <ProductForm
                    product={location.state || {}}
                    handleSubmit={save}
                    errorSubmit={errorMessage}
                />
            </div>
        </div>
    )
}

export default EditProduct;