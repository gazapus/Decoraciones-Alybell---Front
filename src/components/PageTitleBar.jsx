import '../styles/PageTitleBar.css';
import { useHistory} from 'react-router-dom';

function PageTitleBar({children}) {
    let history = useHistory();

    return (
        <div className="PageTitleBar">
            <button className="PageTitleBar__arrow" onClick={() => history.goBack() }>⇦</button>
            <h2 className="PageTitleBar__title">{children}</h2>
        </div>
    )
}

export default PageTitleBar;