import '../styles/BannerButton.css';

function BannerButton({text, handleClick}) {
    return(
        <div className="BannerButton">
            <button onClick={handleClick} className="BannerButton__button">
                {text}
            </button>
        </div>
    )
}

export default BannerButton;  