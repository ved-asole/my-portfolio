import React from 'react'

const Footer = () => {
    return (
        <footer className="container bg-[#051726] min-w-full px-28">
            <div className="py-20 text-white flex justify-between">
                <h1 className="text-3xl font-bold pl-32">Ved Asole</h1>
                <div className="pl-12 pr-10">
                    <h3>
                        123 Market St. #228 <br />
                        Charlottesville, California <br />
                        44635
                    </h3>
                    <h3 className="pt-16">+91 1234567890</h3>
                    <h3 className="pt-6">vedasole001@gmail.com</h3>
                </div>
                <div className="flex space-between ml-0 pl-0 pr-40">
                    <div className="ml-34 mr-60">
                        <ul>
                            <li>About</li>
                            <li>Growers</li>
                            <li>Merchants</li>
                            <li>Partners</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>LinkedIn</li>
                            <li>Instagram</li>
                            <li>Github</li>
                            <li>Facebook</li>
                        </ul>
                    </div>
                    <div className="text-5xl pl-24">
                        <i className="fa-solid fa-circle-up" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer