import React, { useState, useEffect } from "react";
import Form from "./Form";

const Contact = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    // Add event listener to update screen size on window resize
    window.addEventListener("resize", handleResize);

    // Initial check for screen size on component mount
    setIsSmallScreen(window.innerWidth < 768);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isSmallScreen]);

  return (
    <div className=""> 
      <div className="flex justify-center">
        <div className="mt-11 px-4">
          {isSmallScreen ? (
            <div className="mt">
            <h1 className="text-center sm:text-end text-2xl">
            Want to work together or have any questions?
            </h1>
            </div>
          ) : (
            <h1 className="text-center text-4xl ">
              Are you minding a project ? Let's work together.
            </h1>
          )}
        </div>
      </div>
      <Form />
    </div>
  );
};

export default Contact;
