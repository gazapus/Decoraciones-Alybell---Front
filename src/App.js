import { useState } from 'react';
import './App.css';
import ShopSection from './components/ShopSection';
import MainBanner from './pages/main/MainBanner';
import MainCards from './pages/main/MainCards';
import MainFooter from './pages/main/MainFooter';
import MainAbout from './pages/main/MainAbout';
import MainContact from './pages/main/MainContact';

function App() {
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const colors = {
    color1: '#542437',
    color2: '#53777A',
    color3: '#ECD078',
    color4: '#D95B43',
    light: 'white',
    dark: 'black',
    semidark: '#171717',
    semilight: '#ECD078'
  }

  return (
    <div className="App">
      <MainBanner keyboardOpen={keyboardOpen} colors={colors}/>
      <MainCards colors={colors}/>
      <ShopSection 
        backgroundColor={colors.color1}
        textColor={colors.color3}
        buttonBgColor={colors.color4}
        buttonTextColor={colors.light}
      />
      <MainAbout 
        keyboardOpen={keyboardOpen}
        backgroundColor = {colors.color2}
        textColor = {colors.light}
        highlightedColor = {colors.color3}
      />
      <MainContact 
        keyboardOpen={keyboardOpen} 
        setKeyboardOpen={setKeyboardOpen}
        borderColor = {colors.color1}
        backgroundColor = {'#FFFFFFAA'} 
        footerColor = {colors.color1}
        buttonColor = {colors.color4}
        buttonText = {colors.light}
        footerText = {colors.color3}
      />
      <MainFooter colors={colors}/>
    </div>
  );
}

export default App;
