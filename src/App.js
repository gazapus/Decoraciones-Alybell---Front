import './App.css';
import ScreenContainer from './components/ScreenContainer';
import NavBar from './components/NavBar';
import Logo from './components/Logo';
import IconFacebook from './images/facebook.svg';
import IconInstagram from './images/instagram.svg';
import Icon from './components/Icon';

function App() {
  const fbURL = "https://www.facebook.com";
  const igURL = "https://www.instagram.com";

  return (
    <div className="App">
      <ScreenContainer>
        <NavBar
          leftItems={<Logo />}
          rightItems={[
            <Icon image={IconFacebook} url={fbURL} key="fb"/>,
            <Icon image={IconInstagram} url={igURL} key="ig" />
          ]}
        />
      </ScreenContainer>
    </div>
  );
}

export default App;
