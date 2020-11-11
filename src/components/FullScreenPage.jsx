import '../styles/FullScreenPage.css';
import useWindowSize from "./useWindowSize";
import { useEffect, useState } from "react";

/** 
 * Represents a container that covers the height and width of the screen
 * @constructor
 * @param {string} backgroundImageSrc - Optional: The url of the background image
 * @param {string} color - Color in Hexadecimal of the background. Default: #000
 * @param {boolean} keyboardOpen - Define if the mobile keyboard is open. Default = false
 */
function FullScreenPage({
    keyboardOpen = false,
    backgroundImageSrc,
    color = "#000",
    children
}) {
    // eslint-disable-next-line no-unused-vars
    const [width, height] = useWindowSize();
    const [style, setStyle] = useState({});
    const [originalHeight, setOriginalHeight] = useState(0);

    useEffect(() => {
        let newStyle = {};
        if (backgroundImageSrc) {
            newStyle = { backgroundImage: 'url(' + backgroundImageSrc + ')' };
        } else {
            newStyle = { backgroundColor: color };
        }
        if (keyboardOpen) {
            newStyle.height = originalHeight + 'px';
        } else {
            newStyle.height = height + 'px';
            setOriginalHeight(height);
        }
        setStyle(newStyle);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [keyboardOpen, height])

    return (
        <div className="FullScreenPage" style={style}>
            <div className="FullScreenPage__content">
                {children}
            </div>
        </div>
    );
}

export default FullScreenPage;