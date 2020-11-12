import '../styles/BannerButton.css';

function BannerButton({text, handleClick, color="#000", size="M"}) {
    let style = {
        paddingTop: 0.5 + 'em',
        paddingBottom: 0.5 + 'em',
        backgroundColor: color
    };
    switch(size) {
        case "S": style.paddingLeft = 1.5 + 'em'; style.paddingRight = 1.5 + 'em'; break;
        case "M": style.paddingLeft = 2.5 + 'em'; style.paddingRight = 2.5 + 'em'; break;
        case "L": style.paddingLeft = 3 + 'em'; style.paddingRight = 3 + 'em'; break;
        default: style.paddingLeft = 2.5 + 'em'; style.paddingRight = 2.5 + 'em'; break;
    }
    return(
        <div className="BannerButton">
            <button onClick={handleClick} className="BannerButton__button" style={style}>
                {text}
            </button>
        </div>
    )
}

export default BannerButton;  