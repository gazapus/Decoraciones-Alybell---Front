import '../styles/ShopBanner.css';

function ShopBanner({link, heightSpare}) {
    return(
        <div className={((window.innerHeight / 10) < heightSpare) ? "ShopBanner" : "ShopBanner-invisible"}>
            <a href={link} target="_blank" rel="noopener noreferrer" className="ShopBanner__link" style={{height: heightSpare + 'px'}}>
                <span className="ShopBanner__button">SHOP ONLINE</span>
            </a>
        </div>
    )
}

export default ShopBanner;