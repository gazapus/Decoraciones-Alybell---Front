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

function MainBanner({ keyboardOpen }) {
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
            backgroundImageSrc='https://i.ibb.co/d0jRB7w/Vintage-color-filter-cosmos-flower-field.jpg'
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
            />
            <BannerText
                mainText="LUCES Y DECORACIONES PARA TU HOGAR Y EVENTO"
                subText={news}
            >
                <ScrollIntoView selector="#products">
                    <Button
                        text="PRODUCTOS"
                    />
                </ScrollIntoView>
                <span style={{ marginLeft: 1 + 'vmax' }}></span>
                <ScrollIntoView selector="#about">
                    <Button
                        text="NOSOTROS"
                    />
                </ScrollIntoView>
            </BannerText>
        </FullScreenPage>
    )
}

export default MainBanner;