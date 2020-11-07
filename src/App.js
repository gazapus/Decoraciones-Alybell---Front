import './App.css';
import ScreenContainer from './components/ScreenContainer';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <ScreenContainer>
        <NavBar 
          leftItems={<h1>pepe</h1>}
          rightItems={[<p key="12">popo</p>,<p key="132">pepein</p>]}
        />
      </ScreenContainer>
    </div>
  );
}

export default App;
