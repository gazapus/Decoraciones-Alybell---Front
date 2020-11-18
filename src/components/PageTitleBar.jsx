import '../styles/PageTitleBar.css';
import { useHistory} from 'react-router-dom';

/** 
 * Arrow to go previus page and page title
 * @constructor
 * @prop {string} route - route name to go when the arrow is clicked
 * @children  page title
 */
function PageTitleBar({route, children}) {
    let history = useHistory();

    return (
        <div className="PageTitleBar">
            <button className="PageTitleBar__arrow" onClick={() => history.push(route) }>⇦</button>
            <h2 className="PageTitleBar__title">{children}</h2>
        </div>
    )
}

export default PageTitleBar;