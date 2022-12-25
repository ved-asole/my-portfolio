import React from 'react'
import { services } from '../assets'

const Services = () => {


    return (
        <div className="bg-[#030f17] min-h-screen min-w-full md:px-28 px-12">
            <section id="work" className="text-white pt-15">
                <div className="pt-20">
                    <p className="text-2xl md:text-3xl   leading-loose">My <span className="text-[#00cf91]">Services</span> </p>
                    <h1 className="text-5xl md:text-6xl font-bold">What I do</h1>
                </div>
                <div className="work py-20 md:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 gap-4 ">

                        {services.map((service,i) => (
                            <div className="bg-[#051726] p-[3rem] rounded-2xl text-center" key={i}>
                                <div className="icon text-[#00cf91] leading-loose">
                                    <i className="fa-solid fa-gears h-20" />
                                </div>
                                <h1 className="text-2xl font-bold pt-5">{service.name}</h1>
                                <p className="pt-3">
                                    {service.desc}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </div>

    )
}

export default Services