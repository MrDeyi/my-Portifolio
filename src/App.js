import Navbar from './components/Navbar/Navbar';
import logo from './logo.svg';
import Header from './Pages/Header/Header.js';
import About from './Pages/About/About';
import Work from './Pages/Work/Work';
import Skills from './Pages/Skills/Skills';
import Footer from './Pages/Footer/Footer';

//import './App.css';

function App() {
  return (
    <div >
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;
