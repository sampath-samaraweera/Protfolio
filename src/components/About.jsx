import {ABOUT_TEXT} from "../constants"
import profilePic from "../assets/about.jpg"

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-16 text-center text-4xl">
            About Me
        </h1>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 lg:p-12">
              <div className="flex justify-center">
                  <img src={profilePic} alt="Sampath" className="rounded-lg"/>
              </div>
          </div>
          <div className="w-full lg:w-1/2 lg:p-12">
              <p>{ABOUT_TEXT}</p>
          </div>
        </div>
    </div>
  )
}

export default About
