import '../styles/Icon.css';
import { useState, useEffect } from 'react';

/** 
 * Represents an icon with an url to access on click
 * @constructor
 * @prop {String} image - Image url of the icon
 * @prop {String} url - Url to access on click
 * @prop {String} size - Size of the icon: XS|S|M|L|XL
 */
function Icon ( {image, url="#", size}) {
    const [iconSize, setIconSize] = useState("Icon__image-medium");
    useEffect(() => {
        switch(size) {
            case "XS": setIconSize("Icon__image-xsmall"); break;
            case "S": setIconSize("Icon__image-small"); break;
            case "M": setIconSize("Icon__image-medium"); break;
            case "L": setIconSize("Icon__image-large"); break;
            case "XL": setIconSize("Icon__image-xlarge"); break;
            default: setIconSize("Icon__image-medium"); break;
        }
    }, [size, iconSize])
    
    return(
        <div className="Icon">
            <img 
                src={image} 
                alt="icon" 
                onClick={() => window.open(url, '_blank')} 
                className={"Icon__image "  + iconSize}
            />
        </div>
    )
}

export default Icon;