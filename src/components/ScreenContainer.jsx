import '../styles/ScreenContainer.css';

/** 
 * Represents a container that covers the height and width of the screen
 * @constructor
 * @param {string} backgroundImage - The url of the background image
 */
function ScreenContainer({ 
        children,
        backgroundImage = 'https://upload.wikimedia.org/wikipedia/commons/c/ca/View_Ilha_Grande.JPG',
        })
    {
    return (
        <div className="ScreenContainer" style={{backgroundImage: 'url(' + backgroundImage + ')'}}>
            <div className="ScreenContainer__content">
                {children}
            </div>
        </div>
    );
}

export default ScreenContainer;