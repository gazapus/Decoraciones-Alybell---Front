import { useEffect, useState } from 'react';
import './App.css';
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
import Footer from './components/Footer';
import Email from './images/email.svg';
import Meli from './images/meli.png';

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
      <ShopSection />
      <FullScreenPage
        color="#ffffff00"
        keyboardOpen={keyobardOpen}
      >
        <About />
      </FullScreenPage>
      <FullScreenPage
        keyboardOpen={keyobardOpen}
        color="#ffffff00"

      >
        <ContactScreen
          onOpenKeyboard={() => setKeyboardOpen(true)}
          onCloseKeyoboard={() => setKeyboardOpen(false)}
        />
      </FullScreenPage>
      <Footer
        networksIcons={[
          <Icon
            image={IconFacebook}
            url={"#"}
            size={"XS"}
            key={1}
          />,
          <Icon
            image={IconInstagram}
            url={"#"}
            size={"XS"}
            key={2}
          />,
          <Icon
            image={Email}
            url={"#"}
            size={"XS"}
            key={3}
          />,
          <Icon
            image={Meli}
            url={"#"}
            size={"XS"}
            key={4}
          />
        ]}
      />
    </div>
  );
}

export default App;
