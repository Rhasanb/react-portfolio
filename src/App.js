
import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Portfolio from './Components/Portfolio/Portfolio';
import Price from './Components/Price';
import Service from './Components/Service';

function App() {
  return (
    <div className="App">
      
      <Header/>
      <Portfolio/>
      <NavBar/>
      <About/>
      <Service/>
      <Price/>
      <Footer/>
    </div>
  );
}

export default App;
