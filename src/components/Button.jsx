import '../styles/Button.css';

/** 
 * Represents a button
 * @constructor
 * @prop {string} text - Button text
 * @prop {function} handleClick - Function to run on click
 * @prop {string} backgroundColor - Button color . Default: #000
 * @prop {string} textColor - Text color . Default: #FFF
 * @prop {string} size - Button Size: S|M|L. Defaul: M
 */
function Button({text="", handleClick, backgroundColor="#000", textColor="#fff", size="M"}) {
    let style = {
        paddingTop: 0.5 + 'em',
        paddingBottom: 0.5 + 'em',
        backgroundColor: backgroundColor,
        color: textColor
    };
    switch(size) {
        case "S": style.paddingLeft = 1.5 + 'em'; style.paddingRight = 1.5 + 'em'; break;
        case "M": style.paddingLeft = 2.5 + 'em'; style.paddingRight = 2.5 + 'em'; break;
        case "L": style.paddingLeft = 3 + 'em'; style.paddingRight = 3 + 'em'; break;
        default: style.paddingLeft = 2.5 + 'em'; style.paddingRight = 2.5 + 'em'; break;
    }
    return(
        <div className="Button">
            <button onClick={handleClick} className="Button__button" style={style}>
                {text}
            </button>
        </div>
    )
}

export default Button;  