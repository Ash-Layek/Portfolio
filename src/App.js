
import './App.css';
import Home from "./components/Home/Home"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"

function App() {
  return (
    <div className=" h-screen overflow-y-auto overflow-x-hidden" >
     
        <Navbar/>
     
       
        <div id="home">
         <Home />
        </div>
      
        
      
    <div className=" mt-10 min-h-screen" id="about">

         <Projects/>
    
    </div>

    <div className="min-h-screen" id="hire">

    <Contact />
    </div>
    </div>
  );
}

export default App;
