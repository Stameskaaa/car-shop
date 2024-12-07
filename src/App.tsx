import './App.css';
import { AboutUs } from './components/AboutUs/AboutUs';
import { CarCatalog } from './components/CarCatalog/CarCatalog';
import { ContactInfo } from './components/ContactInfo/ContactInfo';
import { CountryCarShowcase } from './components/CountryCarShowcase/CountryCarShowcase';
import { Header } from './components/Header/Header';
import { MainSection } from './components/MainSection/MainSection';

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <CarCatalog />
      <CountryCarShowcase />
      <AboutUs />
      <ContactInfo />
    </div>
  );
}

export default App;
