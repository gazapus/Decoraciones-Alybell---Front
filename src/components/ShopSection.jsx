import '../styles/ShopSection.css';
import BannerButton from './BannerButton';

function ShopSection({url="#"}) {
    return (
        <div className="ShopSection">
            <div className="Shop">
                <div className="Shop__text">
                    <h3 className="Shop__title">FOR BUILDING THE MODERN WEBSITE</h3>
                    <p className="Shop__description">Packed with all the goodies you can get, Kallyas is our flagship premium template.</p>
                </div>
                <div className="Shop__buttonContainer">
                    <BannerButton
                        text="CATALOGO"
                        handleClick={() => window.open(url, '_blank') }
                        color="#01b774"
                    />
                </div>
            </div>
        </div>
    )
}

export default ShopSection;