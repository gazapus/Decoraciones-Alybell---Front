import '../styles/Icon.css';
/** 
 * Represents an icon with an url to access on click
 * @constructor
 * @param {image} image - Image source of the icon
 * @param {String} url - Url to access on click
 * @param {String} size - Size of the icon: XS|S|M|L|XL
 */
function Icon ( {image, url="#", size}) {
    let iconSize;
    switch(size) {
        case "XS": iconSize = "Icon__image-xsmall"; break;
        case "S": iconSize = "Icon__image-small"; break;
        case "M": iconSize = "Icon__image-medium"; break;
        case "L": iconSize = "Icon__image-large"; break;
        case "XL": iconSize = "Icon__image-xlarge"; break;
        default: iconSize = "Icon__image-medium"; break;
    }
    return(
        <div className={"Icon " + iconSize}>
            <img src={image} alt="icon" onClick={() => window.open(url, '_blank')} className="Icon__image"/>
        </div>
    )
}

export default Icon;