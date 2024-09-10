import { PROJECTS } from "../constants"

const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-16 text-center text-4xl">
                Projects
            </h1>
            <div className="flex flex-wrap item-center justify-center gap-8">
                
                {PROJECTS.map((project, index) => (
                    <div 
                        key={index} 
                        className="bg-neutral-800 rounded-lg mb-8 item-center p-6 lg:max-w-[350px]
                            lg:justify-center shadow-lg hover:-translate-y-2 hover:shadow-2xl"
                        onClick={() => {
                            if (project.link) {
                                window.location.href = project.link;
                            }}}>
                        <div className="flex w-full justify-center">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="mb-4 rounded-lg w-full h-auto object-cover"
                                style={{ maxHeight: '200px' }}
                            />
                        </div>
                        <div className="w-full">
                            <h4 className="font-semibold text-2xl">{project.title}</h4>
                            <h6 className="font-thin">{project.subTitle}</h6>
                            <h6 className="font-thin">{project.role}</h6>
                            <h6 className="mb-4 font-thin">{project.year}</h6>
                            <p className="mb-4 text-neutral-400">{project.description}</p>
                            <div className="flex flex-wrap">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="mr-2 mb-2 rounded-lg border-2 border-blue-500 px-3
                                    py-1 text-sm font-medium text-blue-500">
                                        {tech}
                                    </span>
                                ))}   
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;