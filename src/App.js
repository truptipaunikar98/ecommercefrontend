import './App.css';
import Allroutes from './allroutes/Allroutes';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Navsearch from './components/Navsearch';
import SignUp from './components/SignUp';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Navsearch/>
      <Allroutes/>
      <Footer/>
    </div>
  );
}

export default App;
