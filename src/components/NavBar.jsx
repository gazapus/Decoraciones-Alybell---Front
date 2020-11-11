import '../styles/NavBar.css';

/** 
 * Represents a navigation bar that covers the width of the screen and contains items inside
 * @constructor
 * @param {Array} leftItems - Item/s in the left's bar
 * @param {Array} rightItems - Array of items in the right's bar
 * @param {string} color - background color in hex format
 * 
 */
function NavBar({ leftItems, rightItems, color }) {
    return (
        <div className="NavBar" style={{backgroundColor: color}}>
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