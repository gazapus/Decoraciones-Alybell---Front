import { useState } from 'react';
import './App.css';
import ShopSection from './components/ShopSection';
import MainBanner from './pages/main/Banner';
import MainCards from './pages/main/MainCards';
import MainFooter from './pages/main/MainFooter';
import MainAbout from './pages/main/MainAbout';
import MainContact from './pages/main/MainContact';

function App() {
  const [keyboardOpen, setKeyboardOpen] = useState(false);

  return (
    <div className="App">
      <MainBanner keyboardOpen={keyboardOpen}/>
      <MainCards/>
      <ShopSection />
      <MainAbout keyboardOpen={keyboardOpen}/>
      <MainContact keyboardOpen={keyboardOpen} setKeyboardOpen={setKeyboardOpen}/>
      <MainFooter/>
    </div>
  );
}

export default App;
