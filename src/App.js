
import './App.css';
import Hero from './Hero'; 
import Services from './services';
import Project from './project';
import About from './about';
import Contact from './contact';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Hero/> 
      <Services/>
      <Project/>
      <About/>
      <Contact></Contact>
      <Footer/>
    </div>
  );
}

export default App;
