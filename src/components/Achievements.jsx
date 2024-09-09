import { ACHIEVEMENTS } from "../constants"

const Achievements = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-16 text-center text-4xl">
                Achievements
            </h1>
            <div className="flex flex-wrap item-center justify-center gap-8">
                {ACHIEVEMENTS.map((achievements, index) => (
                    <div key={index} className="bg-neutral-800 rounded-lg mb-8 item-center p-6 lg:max-w-[350px]
                    lg:justify-center shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                        <div className="flex w-full justify-center">
                            <img
                                src={achievements.image}
                                alt={achievements.competitionName}
                                className="mb-4 rounded-lg w-full h-auto object-cover"
                                style={{ maxHeight: '200px' }}
                            />
                        </div>
                        <div className="w-full">
                            <h4 className="font-semibold text-2xl">{achievements.position}</h4>
                            <h6 className="font-semibold text-xl">{achievements.competitionName}</h6>
                            <h6 className="font-thin">{achievements.team}</h6>
                            <h6 className="mb-4 font-thin">{achievements.year}</h6>
                            <p className="mb-4 text-neutral-400">{achievements.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Achievements;