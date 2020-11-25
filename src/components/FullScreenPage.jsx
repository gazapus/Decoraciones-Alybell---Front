import '../styles/FullScreenPage.css';
import useWindowSize from "../hooks/useWindowSize";
import { useEffect, useState } from "react";

/** 
 * Represents a container that covers the height and width of the screen
 * @constructor
 * @prop {string} backgroundImageSrc - Optional: The url of the background image
 * @prop {string} backgroundColor - Color in Hexadecimal of the background. Default: #000
 */
function FullScreenPage({
    backgroundImageSrc,
    backgroundColor = "#00000000",
    children
}) {
    // eslint-disable-next-line no-unused-vars
    const [width, height] = useWindowSize();
    const [style, setStyle] = useState({});
    const [firstRender, setFirstRender] = useState(true);

    useEffect(() => {
        let newStyle = {};
        if (backgroundImageSrc) {
            newStyle = { backgroundImage: 'url(' + backgroundImageSrc + ')' };
        } else {
            newStyle = { backgroundColor: backgroundColor };
        }
        if (height !== 0) {
            setFirstRender(false)
        }
        if (firstRender) {
            newStyle.minHeight = height + 'px';
            setStyle(newStyle);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [height])

    return (
        <div className="FullScreenPage" style={style}>
            <div className="FullScreenPage__content">
                {children}
            </div>
        </div>
    );
}

export default FullScreenPage;
