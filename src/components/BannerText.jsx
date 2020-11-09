import '../styles/BannerText.css';

function BannerText({ mainText = "", subText = "", children }) {

    return (
        <div className="BannerText">
            <h2 className="BannerText__main">{mainText}</h2>
            <p className="BannerText__sub">{subText}</p>
            <div className="BannerText__children">
                {children}
            </div>
        </div>
    )
}

export default BannerText;  