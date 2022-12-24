import React from 'react'
import profile from '../assets/images/profile.png'

import { socials } from '../assets'

const Hero = () => {
    return (
        <div className="bg-[#051726] min-w-full md:px-28 px-12 max-h-screen py-10" id="top">
            <section id="home">
                <main className="header sm:flex justify-around block flex-wrap  text-white">
                    <div className="main flex-[0.5] h-full self-center">
                        <div>
                            <p className="md:text-4xl text-lg leading-snug">Hello, <span className="text-secondary">I'm</span></p>
                            <h1 className=" md:text-6xl text-5xl font-bold text-secondary leading-[1.6] md:leading-[1.5]">Ved Asole</h1>
                            <p className="md:text-3xl text-base  leading-snug font-medium">Software Developer and Designer</p>
                            <p className="py-4 md:w-3/4 w-full">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum non nihil, minus minima qui dolore  odit eligendi. Praesentium accusamus mollitia ullam rerum recusandae.
                            </p>
                        </div>
                        <div className="my-4">
                            <button className="bg-[#00cf91] px-5 py-2 rounded-xl text-white text-2xl font-medium border-2 border-[#00cf91]
                      hover:text-[#00cf91] hover:bg-[#051726] hover:border-2 hover:border-[#81FFD9] mr-2">Let's Talk</button>
                        </div>
                        <div className="social-links text-xl mt-12 flex flex-col lg:flex-row">
                            <p className="leading-10 lg:mr-2">Checkout Out My</p>
                            <div className="icons  md:py-2 ">
                                {socials.map((social) => (

                                    <span className="mx-2 cursor-pointer hover:text-[#81FFD9]" key={social.name}>
                                        <a target='_blank' href={social.url}>
                                            <i className={` ${social.fa_class} h-7`} />
                                        </a>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className=" justify-center flex-[0.5] object-contain hidden lg:flex max-h-4/5">
                        <img src={profile} alt="Ved Asole" className="w-1/2 min-h-4/5 max-h-4/5" />
                    </div>
                </main>
            </section>
        </div>

    )
}

export default Hero