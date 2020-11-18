import '../styles/FullScreenPage.css';
import useWindowSize from "../hooks/useWindowSize";
import { useEffect, useState } from "react";

/** 
 * Represents a container that covers the height and width of the screen
 * @constructor
 * @prop {string} backgroundImageSrc - Optional: The url of the background image
 * @prop {string} backgroundColor - Color in Hexadecimal of the background. Default: #000
 * @prop {boolean} keyboardOpen - Define if the mobile keyboard is open. Default = false
 */
function FullScreenPage({
    keyboardOpen = false,
    backgroundImageSrc,
    backgroundColor = "#00000000",
    children
}) {
    // eslint-disable-next-line no-unused-vars
    const [width, height] = useWindowSize();
    const [style, setStyle] = useState({});
    const [originalHeight, setOriginalHeight] = useState(0);
    const [inputsFocus, setInputsFocus] = useState(0);

    useEffect(() => {
        let newStyle = {};
        if (backgroundImageSrc) {
            newStyle = { backgroundImage: 'url(' + backgroundImageSrc + ')' };
        } else {
            newStyle = { backgroundColor: backgroundColor };
        }
        if (keyboardOpen) {
            newStyle.height = originalHeight + 'px';
            setInputsFocus(inputsFocus + 1);
        } else {
            if(inputsFocus === 0) {
                newStyle.height = height + 'px';
                setOriginalHeight(height);
            }
            if(inputsFocus === 1) {
                newStyle.height = height + 'px';
                setOriginalHeight(height);
                setInputsFocus(inputsFocus - 1);
            }
            if(inputsFocus > 1) {
                setInputsFocus(inputsFocus - 1);
            }
            
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