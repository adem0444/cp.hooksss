import './App.css';
import {Routes,Route} from "react-router-dom"; 
import Home from './components/Home.js';
import About from './components/About.js';
import Mnu from './Mnu.js';
import Contact from './components/Contact.js';

function App() {

  return (
    <div className="App">
  <Mnu/>
  <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/About' element={<About/>}/>
<Route path='/Contact' element={<Contact/>}/>



  </Routes>

    </div>
  );
}

export default App;
