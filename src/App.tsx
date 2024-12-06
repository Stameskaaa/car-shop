import './App.css';
import { CarCatalog } from './components/CarCatalog/CarCatalog';
import { Header } from './components/Header/Header';
import { MainSection } from './components/MainSection/MainSection';

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <CarCatalog />
    </div>
  );
}

export default App;
