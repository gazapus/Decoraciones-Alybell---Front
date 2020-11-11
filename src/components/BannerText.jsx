import '../styles/BannerText.css';
import { useEffect, useState } from 'react';


function BannerText({ mainText = "", subText = [], children }) {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [textClass, setTextClass] = useState("");
    const [openingText, setOpeningText] = useState(true);

    useEffect( () => {
        run()
    }, [])


    function nextText() {
        if (currentTextIndex < subText.length - 1) {
            setCurrentTextIndex(currentTextIndex + 1);
        } else {
            setCurrentTextIndex(0);
        }
    }

    function run() {
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
            <h2 className="BannerText__main">{mainText}</h2>
            <div className="SubText">
                <p
                    className={`SubText__text ${textClass}`}
                    onTransitionEnd={run}
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