import React from 'react'

const Services = () => {
    return (
        <div className="bg-[#030f17] min-h-screen min-w-full md:px-28 px-12">
            <section id="work" className="text-white pt-15">
                <div className="pt-20">
                    <p className="text-2xl md:text-3xl   leading-loose">My <span className="text-secondary">Services</span> </p>
                    <h1 className="text-5xl md:text-6xl font-bold">What I do</h1>
                </div>
                <div className="work py-20 md:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 gap-4 ">
                        <div className="bg-[#051726] p-[3rem] rounded-2xl text-center">
                            <div className="icon text-secondary leading-loose">
                                <i className="fa-solid fa-gears h-20" />
                            </div>
                            <h1 className="text-2xl font-bold pt-5">Backend Development</h1>
                            <p className="pt-3">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque vitae minus reprehenderit qui
                                laboriosam sequi corrupti dolores laudantium est sit.
                            </p>
                        </div>
                        <div className="bg-[#051726] p-[3rem] rounded-2xl text-center">
                            <div className="icon text-secondary leading-loose">
                                <i className="fa-solid fa-gears h-20" />
                            </div>
                            <h1 className="text-2xl font-bold pt-5">Backend Development</h1>
                            <p className="pt-3">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque vitae minus reprehenderit qui
                                laboriosam sequi corrupti dolores laudantium est sit.
                            </p>
                        </div>
                        <div className="bg-[#051726] p-[3rem] rounded-2xl text-center">
                            <div className="icon text-secondary leading-loose">
                                <i className="fa-solid fa-gears h-20" />
                            </div>
                            <h1 className="text-2xl font-bold pt-5">Backend Development</h1>
                            <p className="pt-3">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque vitae minus reprehenderit qui
                                laboriosam sequi corrupti dolores laudantium est sit.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Services