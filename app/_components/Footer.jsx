import React from 'react'

function Footer() {
    return (
        <footer className="py-20 px-4 relative overflow-hidden">
            {/* <!-- CTA Section --> */}
            <div className="container mx-auto rounded-2xl bg-[#16162b] m-2 p-2 w-320 border border-muted-foreground">

                <div className="relative pb-20  ml-20 mt-20">
                    <h3 className="text-4xl md:text-5xl lg:text-5xl">
                        Revolutionize <span className='text-muted-foreground'>your brand</span>,
                    </h3>
                    <h3 className="text-4xl md:text-5xl lg:text-5xl">
                        take the <span className="font-light text-muted-foreground">next bold step.</span>
                    </h3>

                    <div className="flex flex-col sm:flex-row gap-6 mb-10 mt-10 ml-10">
                        <a href="/" className="relative group flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full overflow-hidden transition-all duration-300 hover:bg-opacity-90">
                            <span className="relative z-10 transform group-hover:-translate-y-1 transition-transform duration-300 text-[20px]">Get started</span>
                            <img
                                src="https://cdn.prod.website-files.com/68149cfdae7cc5226d0569ac/6814a7937c6031105cd4ab11_arrow-right.avif"
                                alt=""
                                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                                loading="lazy"
                            />
                        </a>

                        <a href="/" className="group gap-2 py-4 text-white rounded-full overflow-hidden transition-all duration-300 hover:bg-opacity-90 text-[20px]">
                            <div className="font-medium">Contact Sales</div>
                            <div className="w-2 h-px bg-white group-hover:w-full transition-all duration-300"></div>
                        </a>
                    </div>

                    {/* <!-- Decorative elements --> */}
                    {/* {/* <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-blue-100 opacity-50 -translate-x-1/2 -translate-y-1/2"></div> */}
                    {/* <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-[#2e1d2e] opacity-50 translate-x-1/2 translate-y-1/2"></div> */}
                </div>

            </div>




            {/* <!-- Footer Content --> */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 m-2 p-5 mt-10">
                {/* <!-- Logo Column --> */}
                <div>
                    <a href="/" className="mt-10 ml-30 text-3xl">RPM
                        {/* <img
                            src="https://cdn.prod.website-files.com/68149cfdae7cc5226d0569ac/681ca552592d590a9a5ccee8_logo.avif"
                            width="120"
                            loading="lazy"
                            alt="Company Logo"
                            className="h-auto mt-2 ml-2"
                        /> */}
                    </a>

                </div>

                {/* <!-- Navigation Links --> */}
                <div>
                    <h4 className="text-lg font-bold mb-4">Navigation</h4>
                    <ul className="space-y-3">
                        <li><a href="/" className="text-white transition-colors">Home</a></li>
                        <li><a href="/about" className="text-white transition-colors">About</a></li>
                        <li><a href="/pricing" className="text-white transition-colors">Work</a></li>
                        <li><a href="/pricing" className="text-white transition-colors">Pricing</a></li>
                        <li><a href="/template-info/style-guide" className="text-white transition-colors">Style Guide</a></li>
                        <li><a href="/template-info/licensing" className="text-white transition-colors">Licensing</a></li>
                    </ul>
                </div>

                {/* <!-- Contact Info --> */}
                <div>
                    <h4 className="text-lg font-bold mb-4">Contact us</h4>
                    <ul className="space-y-3">
                        <li><a href="tel:+18001236789" className="text-white transition-colors">+1 800 - 1236 789</a></li>
                        <li><a href="mailto:info@website.com" className="text-white transition-colors">info@website.com</a></li>
                    </ul>
                </div>

                {/* <!-- Social Links --> */}
                <div>
                    <h4 className="text-lg font-bold mb-4">Find us</h4>
                    <div className="flex gap-4">
                        <a href="https://twitter.com/" target="_blank" className="text-gray-600 hover:text-black transition-colors">
                            <img
                                src="https://cdn.prod.website-files.com/68149cfdae7cc5226d0569ac/681de7749761b3b1e411b17e_x-logo.avif"
                                width="20"
                                loading="lazy"
                                alt="Twitter"
                                className="h-5 w-auto"
                            />
                        </a>
                        <a href="https://instagram.com/" target="_blank" className="text-gray-600 hover:text-black transition-colors">
                            <img
                                src="https://cdn.prod.website-files.com/62f12c77027bfb4b634fc1b9/62f12c77027bfbbf034fc1f7_instagram.svg"
                                width="20"
                                loading="lazy"
                                alt="Instagram"
                                className="h-5 w-auto"
                            />
                        </a>
                        <a href="https://www.slack.com/" target="_blank" className="text-gray-600  transition-colors">
                            <img
                                src="https://cdn.prod.website-files.com/62f12c77027bfb4b634fc1b9/62f12c77027bfb6ed34fc214_slack.svg"
                                width="20"
                                loading="lazy"
                                alt="Slack"
                                className="h-5 w-auto"
                            />
                        </a>
                        <a href="https://www.dribbble.com/" target="_blank" className="text-gray-600  transition-colors">
                            <img
                                src="https://cdn.prod.website-files.com/68149cfdae7cc5226d0569ac/681de7749761b3b1e411b17c_github.svg"
                                width="22"
                                loading="lazy"
                                alt="Dribbble"
                                className="h-5 w-auto"
                            />
                        </a>
                    </div>
                </div>
            </div>

            {/* <!-- Copyright --> */}
            <div className="mt-12 text-center text-gray-500">
                <p>Copyright ©RPM <span className="mx-2">—</span> Powered by RPM</p>
            </div>

        </footer>
    )
}

export default Footer