import '../styles/NavBar.css';

/** 
 * Represents a navigation bar that covers the width of the screen and contains items inside
 * @constructor
 * @prop {Array} leftItems - Item/s in the left's bar
 * @prop {Array} rightItems - Array of items in the right's bar
 * @prop {string} backgroundColor - background color in hex format
 */
function NavBar({ leftItems, rightItems, backgroundColor="#000000" }) {
    return (
        <div className="NavBar" style={{backgroundColor: backgroundColor + 'CA'}}>
            <div className="NavBar__leftItems">
                {leftItems}
            </div>
            <div className="NavBar__rightItems">
                {rightItems}
            </div>
        </div>
    );
}

export default NavBar;