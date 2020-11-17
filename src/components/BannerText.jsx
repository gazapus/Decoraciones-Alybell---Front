import '../styles/BannerText.css';
import { useEffect, useState } from 'react';

/** 
 * Represents the text on the banner page
 * @constructor
 * @prop {string} mainText - main text to show first
 * @prop {array} subText - String's Array of secondary text that run the animation on the banner
 * @param {string} mainTextColor - Main text color
 * @param {string} secondaryTextColor - Secondary text color
 * @param {string} secondaryTextBGColor - Secondary text background color
 * @param {children} children - Buttons that will show under the subText
 */
function BannerText({ 
    mainText, 
    subText = [], 
    mainTextColor = "#000",
    secondaryTextColor = "#000",
    secondaryTextBGColor = "#AEAEAE",
    children,
}) {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [textClass, setTextClass] = useState("");
    const [openingText, setOpeningText] = useState(true);

    useEffect( () => {
        runAnimation()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    function nextText() {
        if (currentTextIndex < subText.length - 1) {
            setCurrentTextIndex(currentTextIndex + 1);
        } else {
            setCurrentTextIndex(0);
        }
    }

    function runAnimation() {
        if (openingText) {
            setTimeout(() => {
                setTextClass('SubText__text-out');
                setOpeningText(false);
            }, 6000);
        } else {
            nextText();
            setTextClass('SubText__text-in');
            setOpeningText(true);
        }
    }

    return (
        <div className="BannerText">
            <h2 className="BannerText__main" style={{color: mainTextColor}}>{mainText}</h2>
            <div className="SubText" style={{backgroundColor: secondaryTextBGColor}}> 
                <p
                    className={`SubText__text ${textClass}`}
                    onTransitionEnd={runAnimation}
                    style={{color: secondaryTextColor}}
                >
                    {subText[currentTextIndex]}
                </p>
            </div>
            <div className="BannerText__children">
                {children}
            </div>
        </div>
    )
}

export default BannerText;  