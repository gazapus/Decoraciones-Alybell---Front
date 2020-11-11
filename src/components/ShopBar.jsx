import '../styles/ShopBar.css';

function ShopBar({ text = "", logo, url = "#", backgroundImage}) {
    return (
        <div className="ShopBar" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="ShopBar__content">
                <a href={url} target="_blanck" rel="noopener noreferrer" className="ShopBar__content-anchor">
                    <p className="ShopBarAnchor__text">{text}</p>
                    <img src={logo} alt="" className="ShopBarAnchor__img" />
                </a>
            </div>
        </div>
    );
}

export default ShopBar;