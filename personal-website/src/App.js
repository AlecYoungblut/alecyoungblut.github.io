import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="block bg-gray-200">
        <Navbar></Navbar>
        <About></About>
        <div>
          Previous Projects
        </div>
        <Cards></Cards>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
