import Button from "./Button";


const Home = () => {



    const scrolltoSection = (sectionID) => {

        const element = document.getElementById(sectionID);

        if (element){
            element.scrollIntoView({behavior: "smooth"});
        }

    }

  return (
    <div className="min-h-screen">
      <div className="flex flex-col mt-40 text-7xl font-bold ml-3 text-slate-400">
        <h1>Hi There! My name is KAML.</h1>
        <p>I'm a <span className="text-purple-700"> Developer</span></p>
        <p>Located in Montreal.</p>
      </div>
      <div className="flex flex-row max-w-2xl">
        <p className="text-2xl mt-5 break-words break-before-right text-gray-500 font-sans ml-3"><p>As someone who used to have fun making mods for games as a kid, I am thrilled that I can now proudly call myself a software developer and continue indulging in my passion for manipulating abstract data as part of my professional career. It's incredibly fulfilling to see how my childhood hobby has evolved into a fulfilling vocation, allowing me to apply my 
          skills in creating innovative solutions and shaping the digital world around us</p><br></br></p>
      </div>
      <div className="mt-20 flex justify-center" onClick={() => {
        scrolltoSection('hire')
      }} >
        <Button />
      </div>
    </div>
  );
};

export default Home;
