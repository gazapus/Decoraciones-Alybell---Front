import { useEffect, useState } from 'react';
import './App.css';
import ScreenContainer from './components/ScreenContainer';
import NavBar from './components/NavBar';
import Logo from './components/Logo';
import IconFacebook from './images/facebook.svg';
import IconInstagram from './images/instagram.svg';
import Icon from './components/Icon';
import useWindowSize from './components/useWindowSize';

function App() {
  const [imageSize, setImageSize] = useState("M");
  const [width, height] = useWindowSize();

  useEffect(() => {
    if(width <= 500) {
      setImageSize("XS");
    } else if(width < 800 && width > 500) {
      setImageSize("S");
    } else {
      setImageSize("M");
    }
  }, [width])

  const fbURL = "https://www.facebook.com";
  const igURL = "https://www.instagram.com";

  return (
    <div className="App">
      <ScreenContainer>
        <NavBar
          leftItems={<Logo />}
          rightItems={[
            <Icon image={IconFacebook} url={fbURL} key="fb" size={imageSize}  />,
            <Icon image={IconInstagram} url={igURL} key="ig"  size={imageSize} />
          ]}
        />
      </ScreenContainer>
    </div>
  );
}

export default App;
