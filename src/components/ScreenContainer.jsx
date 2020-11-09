import '../styles/ScreenContainer.css';

/** 
 * Represents a container that covers the height and width of the screen
 * @constructor
 * @param {string} backgroundImageSrc - Optional: The url of the background image
 * @param {string} color - Color in Hexadecimal of the background. Default: #000
 */
function ScreenContainer({
    children,
    backgroundImageSrc,
    color = "#000"
}) {
    var style = {};
    if (backgroundImageSrc) {
        style = { backgroundImage: 'url(' + backgroundImageSrc + ')' }
    } else {
        style = { backgroundColor: color }
    }

    return (
        <div className="ScreenContainer" style={style}>
            <div className="ScreenContainer__content">
                {children}
            </div>
        </div>
    );
}

export default ScreenContainer;