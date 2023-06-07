import "./Projects.css";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import imageSrc from "../../assets/code-coding.gif";
import Github from "../../assets/Octicons-mark-github.svg"
import PythonLogo from "../../assets/Python-logo-notext.svg.png"
import JavaLogo from "../../assets/java.svg"


const About = () => {
  const [visible, setIsVisible] = useState(false);
  const [containerRef, inView] = useInView({});

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [inView]);

  const handleLoad = () => {
    console.log("Image loaded successfully");
  };
  

  useEffect(() => {
    const containerElement = document.getElementById("projects");

    if (visible) {
      containerElement.style.opacity = "1";
      console.log("visible");
    } else {
      containerElement.style.opacity = "0";
      console.log("not visible");
    }
  }, [visible]);

  return (
    <div className=" sm:mb-11">
      <div className="flex justify-center text-xl md:text-7xl font-bold text-slate-400">
        <p>PROJECTS</p>
      </div>
      <div className="flex flex-col md:flex-row mt-10 h-4/5" id="projects" ref={containerRef}>
      <div className="w-full md:w-1/2 px-4 flex flex-col mb-6 sm:mb-0">
      <div className="flex justify-center h-1/2 md:h-1/2 bg-slate-800 rounded-t-lg shadow-inner relative">
       <img
             src={imageSrc}
             alt="imgyyy"
              onLoad={handleLoad}
                className="h-full w-full block rounded-md shadow-2xl hover:opacity-75 object-cover"
          />

       <div className="absolute inset-0 flex items-start justify-start">
  <a href="https://github.com/Ash-Layek/Python-Web-Scraper" target="_blank" rel="noreferrer" className="flex items-start justify-start">
    <img src={Github} className="animate-bounce bg-transparent w-14 lg:w-24" alt="githubLogo" />
    <p className="text-white text-xl font-custom mt-5 lg:text-2xl " id="yes_Button">
      
    </p>
  </a>
</div>

    
    
</div>

            <div className="h-1/2 bg-slate-800 shadow-inner rounded-b-lg">
              <div className="text-slate-400  block">
                <h1 className="whitespace-normal lg:text-3xl sm:text-xl flex justify-center">
                Web Scraper   <a href="https://www.python.org/" target="_blank" rel="noreferrer"><img src={PythonLogo} className=" w-6 lg:w-14" /></a>
                </h1>
              </div>

              <div className="mt-5 font-NeueMontreal text-slate-400  lg:text-xl sm:text-xs  text-center">
              I developed a robust Python script to efficiently check product availability by leveraging web scraping techniques using Selenium. This script extracts real-time data from target website, 
              allowing for accurate analysis of product availability. To stay informed, automated email notifications are implemented to provide timely updates.<br></br>
               The code reliability and quality are ensured through the implementation of comprehensive unit testing using the UnitTest framework.

              </div>

            </div>
            
          </div>

          <div className="w-full md:w-1/2 px-4 flex flex-col">
            <div className="flex justify-center h-1/2 md:h-1/2 bg-slate-800 rounded-t-lg shadow-inne relative">
              <img
                src={imageSrc}
                alt="imgyyy"
                onLoad={handleLoad}
                className="h-full w-full block rounded-md shadow-2xl hover:opacity-75 object-cover"
              />
              <div className=" absolute inset-0 flex items-start justify-start lg:justify-end text-slate-400">
                <p> <a href="https://github.com/Ash-Layek/Java_Server" target="_blank" > <img src={Github}   className="animate-bounce w-14 lg:w-24" alt="githubLogo" /> 
                </a></p>
              </div>
            </div>
            <div className="h-1/2 bg-slate-800 shadow-inner rounded-b-lg">
              <div className="text-slate-400  block">
                <h1 className="whitespace-normal lg:text-3xl sm:text-xl flex justify-center">
                Game: Client - Server Communication <a href="https://www.java.com/en/" target="_blank"> <img src={JavaLogo} className=" w-10 lg:w-16"/></a> 
                </h1>
              </div>

              <div className="mt-5 font-NeueMontreal text-slate-400  lg:text-xl sm:text-xs  text-center">
              I  created a Java game that allows communication between a server and clients using multithreading and sockets. 
              Players can connect to the server and engage in gameplay with each other in real-time. 
              The game. While there may be some ongoing development and debugging efforts to address any existing issues, 
              the game demonstrates the potential for exciting multiplayer gameplay and the use of networking technologies in Java.

              </div>

            </div>
            
          </div>
        
      </div>
    </div>
  );
};

export default About;
