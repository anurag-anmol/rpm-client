import { Button } from '@/components/ui/button'
import React from 'react'

function Service() {
    return (
        <div>
            {/* services section */}

            {/* <section >
                <div className='flex flex-col items-center m-6 p-6 font-bold text-6xl'>
                    <h1>Services</h1>
                </div>
                <div>

                    
                    <div>
                        <div className=' flex ml-5 p-2'>
                            <div className='container h-114 w-200 ml-4'>
                                <h2 className='text-6xl m-4 p-4 ml-20'>Outdoor Advertising</h2>
                                <p className='mt-5 ml-40'> At our marketing agency, we recognize  the power of<br /> outdoor advertising in amplifying brand presence and <br />accelerating customer engagement. </p>
                                <Button className="mt-8 ml-60 hover:bg-red-500 hover:text-white" variant="secondary">Know more!</Button>
                            </div>
                            <div className='container h-114 w-200'>
                                <img src="./logo.jpg" alt="outdoor Image" className='rounded-2xl hover:animate-out' />
                            </div>
                        </div>
                        <div className=' flex ml-5 pt-2'>
                            <div className='container h-114 w-200 ml-4'>
                                <img src="./logo.jpg" alt="digitalMarketing Image" className='rounded-2xl hover:animate-out' />
                            </div>
                            <div className='container h-114 w-200'>
                                <h2 className='text-6xl m-4 p-4 ml-20'>Digital Marketing</h2>
                                <p className='mt-5 ml-40'>Unleash the full potential of your digital <br />marketing efforts with our expert team by your side. <br />Say goodbye to ineffective ads and hello to great ROI.</p>
                                <Button className="mt-8 ml-60 hover:bg-red-500 hover:text-white" variant="secondary">Know more!</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section > */}

            <section className="py-20 px-4">

                {/* fist div */}

                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                    {/* <!-- Video Section --> */}
                    <div className="md:w-1/2 relative overflow-hidden rounded-2xl">
                        <div className="ml-20 rounded-lg w-[560px] h-[590px] bg-cover bg-center" style={{ backgroundImage: "url('./logo.jpg    ')" }}>
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover rounded-lg"
                                poster="./logo.jpg"
                            >
                                <source src="https://cdn.prod.website-files.com/68149cfdae7cc5226d0569ac%2F6814d04f46882c084ce989b5_getimg_ai_vid-0rTbTfCOEALhWEXRKsds9-transcode.mp4" type="video/mp4" />
                                <source src="https://cdn.prod.website-files.com/68149cfdae7cc5226d0569ac%2F6814d04f46882c084ce989b5_getimg_ai_vid-0rTbTfCOEALhWEXRKsds9-transcode.webm" type="video/webm" />
                            </video>
                        </div>
                    </div>

                    {/* <!-- Content Section --> */}
                    <div className="w-10 md:w-1/2 ">
                        <h2>
                            <p className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">Outdoor Adverting</p>
                            <p>From standout branding to inventive marketing and powerful advertising, we deliver everything you need to elevate your business to the next level.
                                Our team brings bold branding, forward-thinking marketing, and compelling advertising together to help your business rise above the noise</p>
                        </h2>

                        <div className="mt-10">
                            <div className="flex flex-col sm:flex-row items-center gap-6">
                                <a href="/" className="relative group flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all duration-300 hover:bg-opacity-90">
                                    <span className="relative z-10 transform group-hover:-translate-y-1 transition-transform duration-300">about us</span>
                                    <img
                                        src="https://cdn.prod.website-files.com/68149cfdae7cc5226d0569ac/6814a7937c6031105cd4ab11_arrow-right.avif"
                                        alt=""
                                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                                        loading="lazy"
                                    />
                                </a>

                                <a
                                    href="/"
                                    className="flex flex-col group"
                                >
                                    <div className="flex items-center gap-[10px]">
                                        <span className="text-[14px] font-[600] uppercase tracking-[2px] text-white">Explore Features</span>
                                    </div>
                                    <div className="w-[15%] h-[1px] bg-white mt-[3px] group-hover:w-full transition-all duration-300"></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* second div */}

                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-12 m-20 p-20">

                    {/* <!-- Content Section --> */}
                    <div className="w-10 md:w-1/2  ml-30">
                        <h2>
                            <p className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">Digital Marketing</p>
                            <p>From standout branding to inventive marketing and powerful advertising, we deliver everything you need to elevate your business to the next level.
                                Our team brings bold branding, forward-thinking marketing, and compelling advertising together to help your business rise above the noise</p>
                        </h2>

                        <div className="mt-10">
                            <div className="flex flex-col sm:flex-row items-center gap-6">
                                <a href="/" className="relative group flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all duration-300 hover:bg-opacity-90">
                                    <span className="relative z-10 transform group-hover:-translate-y-1 transition-transform duration-300">about us</span>
                                    <img
                                        src="https://cdn.prod.website-files.com/68149cfdae7cc5226d0569ac/6814a7937c6031105cd4ab11_arrow-right.avif"
                                        alt=""
                                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                                        loading="lazy"
                                    />
                                </a>

                                <a
                                    href="/"
                                    className="flex flex-col group"
                                >
                                    <div className="flex items-center gap-[10px]">
                                        <span className="text-[14px] font-[600] uppercase tracking-[2px] text-white">Explore Features</span>
                                    </div>
                                    <div className="w-[15%] h-[1px] bg-white mt-[3px] group-hover:w-full transition-all duration-300"></div>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Video Section --> */}
                    <div className="md:w-1/2 relative overflow-hidden rounded-2xl">
                        <div className="ml-20 rounded-lg w-[560px] h-[590px] bg-cover bg-center" style={{ backgroundImage: "url('./logo.jpg    ')" }}>
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover rounded-lg"
                                poster="./logo.jpg"
                            >
                                <source src="https://cdn.prod.website-files.com/68149cfdae7cc5226d0569ac%2F6814d04f46882c084ce989b5_getimg_ai_vid-0rTbTfCOEALhWEXRKsds9-transcode.mp4" type="video/mp4" />
                                <source src="https://cdn.prod.website-files.com/68149cfdae7cc5226d0569ac%2F6814d04f46882c084ce989b5_getimg_ai_vid-0rTbTfCOEALhWEXRKsds9-transcode.webm" type="video/webm" />
                            </video>
                        </div>
                    </div>
                </div>

            </section>

        </div>
    )
}

export default Service