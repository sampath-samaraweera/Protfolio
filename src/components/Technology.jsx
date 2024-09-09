import { RiReactjsLine } from "react-icons/ri"
import { DiNodejs } from "react-icons/di"
import { DiMongodb } from "react-icons/di"
import { TbSql } from "react-icons/tb"
import Python from "../assets/TechIcon/Python.png"
import SQLA from "../assets/TechIcon/SQLAlchemy.png"
import { RiTailwindCssFill } from "react-icons/ri"

const Technology =() => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h1 className="my-20 text-center text-4xl">
            Technologies
        </h1>
        <div className="flex flex-wrap item-center justify-center gap-4">
            <div className="p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </div>
            <div className="p-4">
                <RiTailwindCssFill className="text-7xl text-cyan-500"/>
            </div>
            <div className="p-4">
                <img className='w-16' src={Python} alt="Python"/>
            </div>
            <div className="p-4">
                <DiNodejs className="text-7xl text-green-500"/>
            </div>
            <div className="p-4">
                <DiMongodb className="text-7xl text-green-500"/>
            </div>
            <div className="p-4">
                <TbSql className="text-7xl"/>
            </div>
            <div className="p-4">
                <img className='w-20' src={SQLA} alt="SQLA"/>
            </div>
        </div>
    </div>
  )
}

export default Technology
