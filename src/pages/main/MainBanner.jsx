import { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import Logo from '../../components/Logo';
import Icon from '../../components/Icon';
import useWindowSize from '../../hooks/useWindowSize';
import BannerText from '../../components/BannerText';
import Button from '../../components/Button';
import FullScreenPage from '../../components/FullScreenPage';
import NetworkService from '../../services/network.service';
import NewsService from '../../services/news.service';
import ScrollIntoView from 'react-scroll-into-view';

function MainBanner({ keyboardOpen, colors }) {
    const [imageSize, setImageSize] = useState("M");
    const [width] = useWindowSize();
    const [networks, setNetworksIcons] = useState([]);
    const [news, setNews] = useState([]);

    useEffect(() => {
        if (width <= 500) {
            setImageSize("XS");
        } else if (width < 800 && width > 500) {
            setImageSize("S");
        } else {
            setImageSize("M");
        }
    }, [width]);

    useEffect(() => {
        NetworkService.getAll()
            .then(res => {
                setNetworksIcons(res.data.slice(0, 2));
            })
            .catch(err => {
                console.log(err)
            })
        NewsService.getAll()
            .then(response => {
                setNews(response.data.map(e => e.text))
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <FullScreenPage
            backgroundImageSrc='https://i.ibb.co/28N1qrz/aaaa.jpg'
            keyboardOpen={keyboardOpen}
        >
            <NavBar
                leftItems={<Logo />}
                rightItems={networks.map(e =>
                    <Icon
                        image={e.iconURL}
                        url={e.pageURL}
                        size={imageSize}
                        key={e.name}
                    />)
                }
                backgroundColor={colors.color1}
            />
            <BannerText
                mainText="GUIRNALDAS, LUCES Y DECORACIONES PARA TU HOGAR O EVENTO"
                subText={news}
                mainTextColor={colors.color2}
                secondaryTextColor={colors.color3}
                secondaryTextBGColor={colors.color2}
            >
                <ScrollIntoView selector="#products">
                    <Button
                        text="PRODUCTOS"
                        backgroundColor={colors.color4}
                        textColor={colors.light}
                    />
                </ScrollIntoView>
                <span style={{ marginLeft: 1 + 'vmax' }}></span>
                <ScrollIntoView selector="#about">
                    <Button
                        text="NOSOTROS"
                        backgroundColor={colors.color4}
                        textColor={colors.light}
                    />
                </ScrollIntoView>
            </BannerText>
        </FullScreenPage>
    )
}

export default MainBanner;