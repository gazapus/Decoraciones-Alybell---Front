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

function Banner({keyboardOpen}) {
    const [imageSize, setImageSize] = useState("M");
    const [width] = useWindowSize();
    const [networksIcons, setNetworksIcons] = useState([]);
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
        let icons = [];
        NetworkService.getAll()
            .then(res => {
                let networks = res.data;
                for(let i = 0; i < networks.length && i < 2; i++) {
                    icons.push(
                        <Icon 
                            image={networks[i].iconURL} 
                            url={networks[i].pageURL} 
                            key={networks[i].name}
                            size={imageSize}
                        />
                    )
                    setNetworksIcons(icons);
                }
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
                    rightItems={networksIcons}
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
                    <span style={{marginLeft: 1 + 'vmax'}}></span>
                    <ScrollIntoView selector="#about">
                        <Button
                            text="NOSOTROS"
                        />
                    </ScrollIntoView>
                </BannerText>
            </FullScreenPage>
    )
}

export default Banner;