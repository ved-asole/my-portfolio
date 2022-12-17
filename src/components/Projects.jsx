import React from 'react'

const Projects = () => {
    return (
        <div className="container bg-[#051726] min-w-full px-28">
            <div className="h-screen">
                <section id="projects">
                    <div className="text-center text-white pt-20 w-1/2 m-auto">
                        <h1 className="text-6xl font-bold">Recent <span className="text-secondary">Projects</span> </h1>
                        <p className="pt-4 text-2xl">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque vitae minus reprehenderit qui
                            laboriosam sequi corrupti dolores laudantium est sit.
                        </p>
                        <div className="card rounded-2xl text-center border-2 mt-36 mx-auto">
                            <div className="icon text-secondary leading-loose">
                                <i className="fa-solid fa-gears h-20" />
                            </div>
                            <h1 className="text-2xl font-bold pt-5">Backend Development</h1>
                            <p className="pt-3">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque vitae minus reprehenderit qui
                                laboriosam sequi corrupti dolores laudantium est sit.
                            </p>
                        </div>
                        <div className="buttons text-white mt-24">
                            <button className="mx-16 rounded-3xl border-2 py-[1.3rem] px-[2rem] bg-[#09b380]">Prev</button>
                            <button className="mx-16 rounded-3xl border-2 py-[1.3rem] px-[2rem] bg-[#09b380]">Next</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>

    )
}

export default Projects