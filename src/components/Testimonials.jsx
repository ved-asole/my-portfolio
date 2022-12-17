import React from 'react'

const Testimonials = () => {
    return (
        <div className="container bg-[#030f17] min-w-full px-28">
            <div className="h-screen">
                <section id="testominals">
                    <div className="text-white pt-15 w-1/2">
                        <div className="pt-28">
                            <p className="text-3xl leading-loose text-secondary">
                                TESTIMONIALS
                            </p><h1 className="text-6xl font-bold text-white">What Client Say</h1>
                            <p />
                            <div className="buttons text-white mt-24">
                                <button className="mx-16 rounded-3xl border-2 py-[1.3rem] px-[2rem] bg-[#09b380]">Prev</button>
                                <button className="mx-16 rounded-3xl border-2 py-[1.3rem] px-[2rem] bg-[#09b380]">Next</button>
                            </div>
                        </div>
                    </div>
                    <div className="testimonials mt-20 text-white">
                        <div className="grid grid-cols-3 gap-3">
                            <div className="card rounded-2xl border-2 pt-10 px-4">
                                <div className="icon text-secondary leading-loose flex text-5xl pl-10">
                                    <i className="fa-solid fa-quote-left" />
                                    <div className="rating text-2xl pl-40 pt-2">
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-regular fa-star" />
                                        <i className="fa-regular fa-star" />
                                    </div>
                                </div>
                                <div className="p-10">
                                    <p className="text-center text-xl">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque vitae minus reprehenderit qui
                                        laboriosam sequi corrupti dolores laudantium est sit.
                                    </p>
                                    <div className="flex justify-between pt-7 pl-3 pr-3">
                                        <div className="pr-7">
                                            <img src="https://randomuser.me/api/portraits/men/75.jpg" className="h-20 rounded-full" alt="Name" />
                                        </div>
                                        <div>
                                            <h1 className="text-3xl font-medium">Vighnesh Gupta</h1>
                                            <h3 className="text-xl">Web Developer</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card rounded-2xl border-2 pt-10 px-4">
                                <div className="icon text-secondary leading-loose flex text-5xl pl-10">
                                    <i className="fa-solid fa-quote-left" />
                                    <div className="rating text-2xl pl-40 pt-2">
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-regular fa-star" />
                                        <i className="fa-regular fa-star" />
                                    </div>
                                </div>
                                <div className="p-10">
                                    <p className="text-center text-xl">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque vitae minus reprehenderit qui
                                        laboriosam sequi corrupti dolores laudantium est sit.
                                    </p>
                                    <div className="flex justify-between pt-7 pl-3 pr-3">
                                        <div className="pr-7">
                                        <img src="https://randomuser.me/api/portraits/men/75.jpg" className="h-20 rounded-full" alt="Name" />
                                        </div>
                                        <div>
                                            <h1 className="text-3xl font-medium">Priyanshu Nagar</h1>
                                            <h3 className="text-xl">Software Engineer</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card rounded-2xl border-2 pt-10 px-4">
                                <div className="icon text-secondary leading-loose flex text-5xl pl-10">
                                    <i className="fa-solid fa-quote-left" />
                                    <div className="rating text-2xl pl-40 pt-2">
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-regular fa-star" />
                                        <i className="fa-regular fa-star" />
                                    </div>
                                </div>
                                <div className="p-10">
                                    <p className="text-center text-xl">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque vitae minus reprehenderit qui
                                        laboriosam sequi corrupti dolores laudantium est sit.
                                    </p>
                                    <div className="flex justify-between pt-7 pl-3 pr-3">
                                        <div className="pr-7">
                                        <img src="https://randomuser.me/api/portraits/men/75.jpg" className="h-20 rounded-full" alt="Name" />
                                        </div>
                                        <div>
                                            <h1 className="text-3xl font-medium">Liza Mathur</h1>
                                            <h3 className="text-xl">Database Developer</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>

    )
}

export default Testimonials