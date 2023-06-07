import React, {useEffect} from "react";

import "./NavBar.css"
const NavBar = () => {

   
      
  const scrollToSection = (sectionId) => {


        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
          
        }

        if (section != "home"){

            const section = document.getElementById("navbarLine");

                                                                        // remove the navbar line when the element is not the homepage once an item in the navbar is clicked
            section.style.borderBottom = "0px";

        }
        

  };



  useEffect(() => {


   
const handleScroll = () => {

    console.log("Scroll changed ");
    
};

window.addEventListener('scroll', handleScroll);


return () =>  {window.removeEventListener('scroll', handleScroll)}




  },[] )




  return (
    <div className="sticky top-0 z-10 border-b-2 border-slate-400 " id="navbarLine" >
    <div className="mx-auto max-w-full">
      <ul className="flex justify-end space-x-5 text-slate-400 text-3xl font-semibold">
        <li className="mr-auto px-2">
          <button onClick={() => scrollToSection("home")}>Home</button>
        </li>
        <li>
          <button onClick={() => scrollToSection("about")}>Projects</button>
        </li>
        <li className="text-purple-700 px-2">
            <button onClick={() => scrollToSection("hire")}> Hire me</button>
        </li>
      </ul>
      </div>
    </div>
  );
};

export default NavBar;
