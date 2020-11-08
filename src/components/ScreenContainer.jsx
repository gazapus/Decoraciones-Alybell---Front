import '../styles/ScreenContainer.css';

/** 
 * Represents a container that covers the height and width of the screen
 * @constructor
 * @param {string} backgroundImage - The url of the background image
 */
function ScreenContainer({ 
        children,
        backgroundImage = 'https://i.ibb.co/zmbN1fH/hero-bg.jpg',
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