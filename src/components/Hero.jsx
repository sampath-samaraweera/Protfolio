import {HERO_CONTENT} from "../constants"
import profilePic from "../assets/kevinRushProfile.jpg"

const Hero = () => {  
  
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
            <div className="flex flex-col items-center lg:items-start">
              <h6 className="pb-6 text-2xl font-thin lg:mt-12 lg:text-5xl">
                  Hello, I&apos;m
              </h6>
              <h1 className="pb-8 text-6xl text-blue-500 font-light tracking-tight 
              lg:mt-2 lg:text-8xl">
                  Sampath Samaraweera
              </h1>
              <span className="text-4xl font-light">
                  Full Stack Developer
              </span>
              <p className="my-2 max-w-xl py-3 font-light tracking-tighter">
                  {HERO_CONTENT}
              </p>
              <button className="mb-6 text-blue-500 font-semibold text-lg border-2
              border-blue-500 px-6 py-2 rounded-lg hover:bg-blue-500 hover:text-black"
              onClick={() => {
                scrollToSection("contact");
              }}>
                Hire Me
              </button>
            </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-12">
            <div className="flex justify-center">
                <img src={profilePic} alt="Sampath"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero