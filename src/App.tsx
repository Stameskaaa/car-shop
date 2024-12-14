import './App.css';
import { AboutUs } from './components/AboutUs/AboutUs';
import { CarCatalog } from './components/CarCatalog/CarCatalog';
import { ContactInfo } from './components/ContactInfo/ContactInfo';
import { CountryCarShowcase } from './components/CountryCarShowcase/CountryCarShowcase';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { MainSection } from './components/MainSection/MainSection';
import { SwiperComponent } from './components/Swiper/Swiper';

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <CarCatalog />
      <CountryCarShowcase />
      <AboutUs />
      <SwiperComponent />
      <ContactInfo />
      <Footer />
    </div>
  );
}

export default App;
