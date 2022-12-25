import React from 'react'
import logo from '../assets/images/logo.png'

import { socials } from "../assets"

const Footer = () => {
    return (
        <footer className="bg-[#051726] min-w-full md:px-28 px-8 max-h-screen py-10 pb-4">
            <div className=" text-white flex justify-between px-0 py-2 lg:px-10 md:py-6  md:flex-row flex-col gap-8 ">
                <div className="text-3xl font-bold flex items-center justify-center p-3 flex-1">
                    <a href='/'>
                        <img src={logo} className="h-12 cursor-pointer " alt='Ved Asole' />
                    </a>
                </div>
                <div className="flex flex-col gap-2 flex-[2]">
                    <p className='flex flex-row gap-4 leading-6'>
                        <i className="fa-solid fa-map-pin text-3xl" />
                        123 Market St. #228 <br />
                        Charlottesville, California <br />
                        44635
                    </p>
                    <p className='flex flex-row gap-2 leading-3'>
                        <i className="fa-solid fa-phone text-xl" />
                        <a href='tel:+918390945445'> +91 83909 45445 </a>
                    </p>
                    <p className='flex flex-row gap-2 leading-3 mt-2'>
                        <i className="fa-solid fa-envelope text-xl" />
                        <a href='mailto:vedasole001@gmail.com'> vedasole001@gmail.com </a>
                    </p>
                </div>
                <ul className='flex flex-col gap-3 flex-1'>
                    {['Home', 'About', 'Projects', 'Blog'].map((link, i) => (
                        <li className='leading-3' key={i}>
                            <i className="fa-solid fa-angles-right"></i> &nbsp; <a href={`#${link.toLocaleLowerCase()}`}> {link} </a>
                        </li>
                    ))
                    }
                </ul>
                <div className='flex justify-center lg:flex-row md:flex-col flex-row flex-[0.5]'>
                    {socials.map((social) => (
                        <span className="mx-2 cursor-pointer hover:text-[#81FFD9]" key={social.name}>
                            <a target='_blank' href={social.url}>
                                <i className={` ${social.fa_class} h-7`} />
                            </a>
                        </span>
                    ))}
                </div>
            </div>

            <div className='copyright border-t-[1px] border-white flex justify-center pt-5 text-white'>
                Copyright &copy; {new Date().getFullYear()}  Ved Asole. All Right Reserved.
            </div>
        </footer>
    )
}

export default Footer