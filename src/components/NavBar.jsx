import '../styles/NavBar.css';

/** 
 * Represents a navigation bar that covers the width of the screen and contains items inside
 * @constructor
 * @param {Array} leftItems - Item/s in the left's bar
 * @param {Array} rightItems - Array of items in the right's bar
 * 
 */
function NavBar({ leftItems, rightItems }) {
    return (
        <div className="NavBar">
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