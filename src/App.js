import { useEffect, useState } from 'react';
import './App.css';
import ScreenContainer from './components/ScreenContainer';
import NavBar from './components/NavBar';
import Logo from './components/Logo';
import IconFacebook from './images/facebook.svg';
import IconInstagram from './images/instagram.svg';
import Icon from './components/Icon';
import useWindowSize from './components/useWindowSize';
import BannerText from './components/BannerText';
import BannerButton from './components/BannerButton';
import CardsContainer from './components/CardsContainer';
import ContactScreen from './components/ContactScreen';

function App() {
  const [imageSize, setImageSize] = useState("M");
  const [width] = useWindowSize();

  useEffect(() => {
    if (width <= 500) {
      setImageSize("XS");
    } else if (width < 800 && width > 500) {
      setImageSize("S");
    } else {
      setImageSize("M");
    }
  }, [width])

  const fbURL = "https://www.facebook.com";
  const igURL = "https://www.instagram.com";

  return (
    <div className="App">
      <ScreenContainer
        backgroundImageSrc='https://i.ibb.co/zmbN1fH/hero-bg.jpg'
      >
        <NavBar
          leftItems={<Logo />}
          rightItems={[
            <Icon image={IconFacebook} url={fbURL} key="fb" size={imageSize} />,
            <Icon image={IconInstagram} url={igURL} key="ig" size={imageSize} />
          ]}
        />
        <BannerText
          mainText="LUCES Y DECORACIONES PARA TU HOGAR Y EVENTO SIEMPRE"
          subText="Packed with all the goodies you can get, Kallyas is our flagship premium template. per bue que en fin"
        >
          <BannerButton
            text="SHOP"
            handleClick={() => console.log("a")}
          />
          <BannerButton
            text="CONTACTO"
            handleClick={() => console.log("ab")}
          />
        </BannerText>
      </ScreenContainer>
      <ScreenContainer
        backgroundImageSrc='https://i.ibb.co/rp6Wk35/photos-2017-9-5-fst-bokeh-texture-colorful.jpg'
      >
        <CardsContainer />
      </ScreenContainer>
      <ScreenContainer
        backgroundImageSrc="https://i.ibb.co/5k3KVkX/11.jpg"
      >
        <ContactScreen/>
      </ScreenContainer>
    </div>
  );
}

export default App;
