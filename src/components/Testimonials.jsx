import React, { useEffect } from 'react'
import { testimonials, projects } from '../assets'
import { createGlide } from '../assets/utils';

const Testimonials = () => {
    useEffect(() => {
        createGlide('carousel', 'testimonial-glide', 2000);
    }, [])
    return (
        <div data-aos="fade-right" className="container bg-[#030f17] md:px-28 px-12 min-h-screen p-10">
            <section id="testominals">
                <div className="text-white pt-15">
                    <div className="pt-20">
                        <p className="text-3xl leading-loose text-secondary">TESTIMONIALS</p>
                        <h1 className="text-6xl font-bold text-white">What Client Say</h1>
                    </div>
                </div>
                <div className="testimonials py-20 text-white">
                    <div id="testimonial-glide">
                        <div data-glide-el="track" className="glide__track">
                            <ul className="glide__slides flex content-center">
                                {testimonials.map((testimonial, i) => (
                                    <li className="glide__slide z-0" key={i}>
                                        <div className="testimonial-card rounded-2xl border-2 pt-10 px-4">
                                            <div className="icon text-secondary leading-loose flex justify-between text-5xl px-2 md:px-10">
                                                <i className="fa-solid fa-quote-left" />
                                                <div className="rating text-2xl pt-2">

                                                    {[1, 1, 1, 1, 1].map((_, i) => {
                                                        if (testimonial.stars > i)
                                                            return <i className="fa-solid fa-star" />
                                                        else return <i className="fa-regular fa-star" />
                                                    })}
                                                </div>
                                            </div>
                                            <div className="p-4 md:p-10">
                                                <p className="text-center text-xl">
                                                    {testimonial.testimonial}
                                                </p>
                                                <div className="flex justify-center md:justify-start pt-7 pl-3 pr-3">
                                                    <img src={testimonial.imgUrl} className="h-12 md:h-16 mr-2 md:mr-6 object-contain rounded-full" alt="Name" />                                                    <div>
                                                        <h1 className="text-xl md:text-3xl font-medium">{testimonial.name}</h1>
                                                        <h3 className="text-md md:text-xl">{testimonial.position}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </section>
        </div>

    )
}

export default Testimonials