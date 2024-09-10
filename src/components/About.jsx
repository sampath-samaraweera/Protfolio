import {ABOUT_TEXT1} from "../constants"
import {ABOUT_TEXT2} from "../constants"
import {ABOUT_TEXT3} from "../constants"
import profilePic from "../assets/about.jpg"

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-16 text-center text-4xl">
            About Me
        </h1>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 lg:p-12 flex justify-center">
            <img src={profilePic} alt="Sampath" className="rounded-lg"/>
          </div>
          <div className="w-full mt-8 lg:mt-0 lg:w-1/2 lg:p-12">
            <p>{ABOUT_TEXT1}</p><br/>
            <p>{ABOUT_TEXT2}</p><br/>
            <p>{ABOUT_TEXT3}</p>
          </div>
        </div>
    </div>
  )
}

export default About
