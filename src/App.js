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
import ContactScreen from './components/ContactScreen';
import FullScreenPage from './components/FullScreenPage';
import CardsPage from './components/CardsPage';
import About from './components/About';
import ShopSection from './components/ShopSection';

function App() {
  const [imageSize, setImageSize] = useState("M");
  const [width] = useWindowSize();
  const [keyobardOpen, setKeyboardOpen] = useState(false);

  useEffect(() => {
    if (width <= 500) {
      setImageSize("XS");
    } else if (width < 800 && width > 500) {
      setImageSize("S");
    } else {
      setImageSize("M");
    }
  }, [width])

  const color = "#01b774";
  const fbURL = "https://www.facebook.com";
  const igURL = "https://www.instagram.com";
  const subText = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et la po",
    "minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum "
  ];

  return (
    <div className="App">
      <FullScreenPage
        backgroundImageSrc='https://i.ibb.co/d0jRB7w/Vintage-color-filter-cosmos-flower-field.jpg'
        keyboardOpen={keyobardOpen}
      >
        <NavBar
          color={color + "a1"}
          leftItems={<Logo />}
          rightItems={[
            <Icon image={IconFacebook} url={fbURL} key="fb" size={imageSize} />,
            <Icon image={IconInstagram} url={igURL} key="ig" size={imageSize} />
          ]}
        />
        <BannerText
          mainText="LUCES Y DECORACIONES PARA TU HOGAR Y EVENTO"
          subText={subText}
        >
          <BannerButton
            text="SHOP"
            handleClick={() => console.log("a")}
            color={color}
          />
          <BannerButton
            text="CONTACTO"
            handleClick={() => console.log("ab")}
            color={color}
          />
        </BannerText>
      </FullScreenPage>
      <CardsPage />
      <ShopSection/>
      <FullScreenPage
        color="#2A1481"
        keyboardOpen={keyobardOpen}
      >
        <About/>
      </FullScreenPage>
      <FullScreenPage
        backgroundImageSrc="https://i.ibb.co/5k3KVkX/11.jpg"
        keyboardOpen={keyobardOpen}

      >
        <ContactScreen
          onOpenKeyboard={() => setKeyboardOpen(true)}
          onCloseKeyoboard={() => setKeyboardOpen(false)}
        />
      </FullScreenPage>
    </div>
  );
}

export default App;
