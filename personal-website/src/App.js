import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="block bg-gray-200">
        <a id="top"></a>
        <Navbar></Navbar>
        <About></About>
        <div className="pt-6 text-5xl font-semibold">
          Portfolio
        </div>
        <span id="portfolio" className="pt-10 text-xl font-semibold italic opacity-40">(last updated 2021-01-16</span>
        <Cards></Cards>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
