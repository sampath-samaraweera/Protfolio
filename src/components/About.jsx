import {ABOUT_TEXT} from "../constants"
function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">
            About Me
        </h1>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 justify-center">
                <p>{ABOUT_TEXT}</p>
            </div>
        </div>
    </div>
  )
}

export default About
