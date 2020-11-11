import '../styles/BannerButton.css';

function BannerButton({text, handleClick, color="#000"}) {
    return(
        <div className="BannerButton">
            <button onClick={handleClick} className="BannerButton__button" style={{backgroundColor: color}}>
                {text}
            </button>
        </div>
    )
}

export default BannerButton;  