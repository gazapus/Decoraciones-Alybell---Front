import '../styles/CardButton.css';

function CardButton({backgroundImage="https://cdn.pixabay.com/photo/2019/04/30/20/48/drops-4169515_960_720.jpg", text, handleClick}) {
    return(
        <div className="CardButton" style={{backgroundImage: `url(${backgroundImage})`}}>
            <p className="CardButton__text" onClick={handleClick}>{text}</p>
        </div>
    )
}

export default CardButton;