import React, { useEffect } from 'react'
import { projects } from '../assets'
import { createGlide } from '../assets/utils'

const Projects = () => {
    useEffect(() => {
        createGlide('glide' , [1,2,3])
    }, [])


    return (
        <div className="bg-[#051726] min-w-full md:px-28 px-12 min-h-screen" id="projects">

            <div className="h-screen">
                <section id="projects">
                    <div className="text-center text-white pt-20 w-full m-auto">
                        <h1 className="text-6xl font-bold">Recent <span className="text-secondary">Projects</span> </h1>
                        <p className="pt-4 text-2xl">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque vitae minus reprehenderit qui
                            laboriosam sequi corrupti dolores laudantium est sit.
                        </p>

                        <div id="glide">
                            <div data-glide-el="track" className="glide__track">
                                <ul className="glide__slides">
                                    {projects.map((project, i) =>(
                                        <li className="glide__slide" key={i}>
                                        <div className="card rounded-2xl text-center border-2 mt-20 mx-auto p-10">
                                            <div className="icon text-secondary leading-loose">
                                                <i className="fa-solid fa-gears h-20" />
                                            </div>
                                            <h1 className="text-2xl font-bold pt-5">{project.name}</h1>
                                            <p className="pt-3">
                                                {project.desc}
                                            </p>
                                        </div>
                                    </li>
                                    ))}
                                    
                                </ul>
                            </div>
                        </div>
                        {/* <div className="buttons text-white mt-24">
                            <button className="mx-16 rounded-3xl border-2 py-[1.3rem] px-[2rem] bg-[#09b380]">Prev</button>
                            <button className="mx-16 rounded-3xl border-2 py-[1.3rem] px-[2rem] bg-[#09b380]">Next</button>
                        </div> */}
                    </div>


                </section>
            </div>
        </div>

    )
}

export default Projects