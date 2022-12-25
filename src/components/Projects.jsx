import React, { useEffect } from 'react'
import { projects } from '../assets'
import Glide from '@glidejs/glide'
import { createGlide } from '../assets/utils'

const Projects = () => {
    useEffect(() => {
        createGlide('slider', 'project-glide' , 10000);
    }, [])


    return (
        <div className="bg-[#051726] min-w-full md:px-28 px-12 min-h-screen p-10" >

            <section id="projects">
                <div className="text-center text-white pt-20 w-full m-auto">
                    <h1 className="text-6xl font-bold">Recent <span className="text-[#00cf91]">Projects</span> </h1>
                    <p className="pt-4 text-2xl mb-20">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque vitae minus reprehenderit qui
                        laboriosam sequi corrupti dolores laudantium est sit.
                    </p>

                    <div id="project-glide" className='overflow-hidden'>
                        <div data-glide-el="track" className="glide__track">
                            <ul className="glide__slides flex content-center">
                                {projects.map((project, i) => (
                                    <li className="glide__slide z-0" key={i}>
                                        <div className="rounded-2xl text-center border-2 mx-auto p-10">
                                            <div className="icon text-[#00cf91] leading-loose">
                                                <i className="fa-solid fa-gears h-20" />
                                            </div>
                                            <h1 className="text-2xl font-bold pt-5">{project.name}</h1>
                                            <p className="pt-3">
                                                {project.desc}
                                            </p>
                                            <div className='flex text-center flex-wrap mt-3 justify-center'>
                                                {project.tech.map((eachTech, i) => (
                                                    <p className='bg-[#09b380] m-1 p-2 rounded-lg' key={i}> {eachTech} </p>
                                                ))}
                                            </div>
                                        </div>
                                    </li>
                                ))}

                            </ul>
                        </div>

                        <div className="buttons text-white mt-24" data-glide-el="controls">
                            <button data-glide-dir="<" className="mx-2 md:mx-16 rounded-3xl border-2 py-[1.3rem] px-[2rem] bg-[#09b380]">Prev</button>
                            <button data-glide-dir=">" className="mx-2 md:mx-16 rounded-3xl border-2 py-[1.3rem] px-[2rem] bg-[#09b380]">Next</button>
                        </div>
                    </div>
                </div>


            </section>
        </div>

    )
}

export default Projects