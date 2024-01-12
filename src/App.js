import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {NavBar} from './Components/NavBar';
import {Home} from './Components/Home';
import { About } from './Components/About';
import { Qualifications } from './Components/Qualifications';
import { Services } from './Components/Services';
import { Projects } from './Components/Projects';
import { Contact } from './Components/Contact';
import {Footer} from './Components/Footer';

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <br/><br/>
      <Home/>
      <br/><br/>
      <About/>
      <br/><br/>
      <Qualifications/>
      <br/><br/>
      <Services/>
      <br/><br/>
      <Projects/>
      <br/><br/>
      <Contact/>
      <br/><br/>
      <Footer/>
    </div>
  );
}

export default App;
