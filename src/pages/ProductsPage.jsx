import '../styles/ProductsPage.css';
import NavBar from '../components/NavBar';
import Logo from '../components/Logo';
import LogoutButton from '../components/LogoutButton';
import PageTitleBar from '../components/PageTitleBar';

function ProductPage() {
    return(
        <div className="ProductPage">
             <NavBar
                leftItems={<Logo />}
                rightItems={<LogoutButton />}
            />
            <PageTitleBar>PRODUCTOS</PageTitleBar>
        </div>
    )
}

export default ProductPage;