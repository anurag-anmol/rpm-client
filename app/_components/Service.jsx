// import { Button } from '@/components/ui/button'
// import React from 'react'

// function Service() {
//     return (
//         <div>
//             {/* services section */}


//             <section className="py-20 px-4">

//                 {/* fist div */}

//                 <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
//                     {/* <!-- Video Section --> */}
//                     <div className="md:w-1/2 relative overflow-hidden rounded-2xl">
//                         <div className="ml-20 rounded-lg w-[560px] h-[590px] bg-cover bg-center" style={{ backgroundImage: "url('./logo.jpg    ')" }}>
//                             <video
//                                 autoPlay
//                                 loop
//                                 muted
//                                 playsInline
//                                 className="w-full h-full object-cover rounded-lg"
//                                 poster="./logo.jpg"
//                             >
//                                 <source src="https://cdn.prod.website-files.com/68149cfdae7cc5226d0569ac%2F6814d04f46882c084ce989b5_getimg_ai_vid-0rTbTfCOEALhWEXRKsds9-transcode.mp4" type="video/mp4" />
//                                 <source src="https://cdn.prod.website-files.com/68149cfdae7cc5226d0569ac%2F6814d04f46882c084ce989b5_getimg_ai_vid-0rTbTfCOEALhWEXRKsds9-transcode.webm" type="video/webm" />
//                             </video>
//                         </div>
//                     </div>

//                     {/* <!-- Content Section --> */}
//                     <div className="w-10 md:w-1/2 ">
//                         <h2>
//                             <p className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">Outdoor Adverting</p>
//                             <p>From standout branding to inventive marketing and powerful advertising, we deliver everything you need to elevate your business to the next level.
//                                 Our team brings bold branding, forward-thinking marketing, and compelling advertising together to help your business rise above the noise</p>
//                         </h2>

//                         <div className="mt-10">
//                             <div className="flex flex-col sm:flex-row items-center gap-6">
//                                 <a href="/" className="relative group flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all duration-300 hover:bg-opacity-90">
//                                     <span className="relative z-10 transform group-hover:-translate-y-1 transition-transform duration-300">about us</span>
//                                     <img
//                                         src="https://cdn.prod.website-files.com/68149cfdae7cc5226d0569ac/6814a7937c6031105cd4ab11_arrow-right.avif"
//                                         alt=""
//                                         className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
//                                         loading="lazy"
//                                     />
//                                 </a>

//                                 <a
//                                     href="/"
//                                     className="flex flex-col group"
//                                 >
//                                     <div className="flex items-center gap-[10px]">
//                                         <span className="text-[14px] font-[600] uppercase tracking-[2px] text-white">Explore Features</span>
//                                     </div>
//                                     <div className="w-[15%] h-[1px] bg-white mt-[3px] group-hover:w-full transition-all duration-300"></div>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* second div */}

//                 <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-12 m-20 p-20">

//                     {/* <!-- Content Section --> */}
//                     <div className="w-10 md:w-1/2  ml-30">
//                         <h2>
//                             <p className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">Digital Marketing</p>
//                             <p>From standout branding to inventive marketing and powerful advertising, we deliver everything you need to elevate your business to the next level.
//                                 Our team brings bold branding, forward-thinking marketing, and compelling advertising together to help your business rise above the noise</p>
//                         </h2>

//                         <div className="mt-10">
//                             <div className="flex flex-col sm:flex-row items-center gap-6">
//                                 <a href="/" className="relative group flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all duration-300 hover:bg-opacity-90">
//                                     <span className="relative z-10 transform group-hover:-translate-y-1 transition-transform duration-300">about us</span>
//                                     <img
//                                         src="https://cdn.prod.website-files.com/68149cfdae7cc5226d0569ac/6814a7937c6031105cd4ab11_arrow-right.avif"
//                                         alt=""
//                                         className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
//                                         loading="lazy"
//                                     />
//                                 </a>

//                                 <a
//                                     href="/"
//                                     className="flex flex-col group"
//                                 >
//                                     <div className="flex items-center gap-[10px]">
//                                         <span className="text-[14px] font-[600] uppercase tracking-[2px] text-white">Explore Features</span>
//                                     </div>
//                                     <div className="w-[15%] h-[1px] bg-white mt-[3px] group-hover:w-full transition-all duration-300"></div>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>

//                     {/* <!-- Video Section --> */}
//                     <div className="md:w-1/2 relative overflow-hidden rounded-2xl">
//                         <div className="ml-20 rounded-lg w-[560px] h-[590px] bg-cover bg-center" style={{ backgroundImage: "url('./logo.jpg    ')" }}>
//                             <video
//                                 autoPlay
//                                 loop
//                                 muted
//                                 playsInline
//                                 className="w-full h-full object-cover rounded-lg"
//                                 poster="./logo.jpg"
//                             >
//                                 <source src="https://cdn.prod.website-files.com/68149cfdae7cc5226d0569ac%2F6814d04f46882c084ce989b5_getimg_ai_vid-0rTbTfCOEALhWEXRKsds9-transcode.mp4" type="video/mp4" />
//                                 <source src="https://cdn.prod.website-files.com/68149cfdae7cc5226d0569ac%2F6814d04f46882c084ce989b5_getimg_ai_vid-0rTbTfCOEALhWEXRKsds9-transcode.webm" type="video/webm" />
//                             </video>
//                         </div>
//                     </div>
//                 </div>

//             </section>

//         </div>
//     )
// }

// export default Service



// --------responsive web page ----------------



'use client';
import React from 'react';

function Service() {
    return (
        <section className="py-16 px-4 md:px-8 bg-[#0c0c1d] text-white">
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
                {/* Video Section */}
                <div className="w-full md:w-1/2 relative overflow-hidden rounded-2xl">
                    <div className="rounded-lg w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[590px] bg-cover bg-center" style={{ backgroundImage: "url('./logo.jpg')" }}>
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

                {/* Content Section */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                        Outdoor Advertising
                    </h2>
                    <p className="text-base md:text-lg leading-relaxed">
                        From standout branding to inventive marketing and powerful advertising, we deliver everything you need to elevate your business to the next level.
                        Our team brings bold branding, forward-thinking marketing, and compelling advertising together to help your business rise above the noise.
                    </p>

                    <div className="mt-8">
                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <a href="/" className="relative group flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all duration-300 hover:bg-opacity-90">
                                <span className="relative z-10 transform group-hover:-translate-y-1 transition-transform duration-300">About Us</span>
                                <img
                                    src="https://cdn.prod.website-files.com/68149cfdae7cc5226d0569ac/6814a7937c6031105cd4ab11_arrow-right.avif"
                                    alt=""
                                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                                    loading="lazy"
                                />
                            </a>

                            <a href="/" className="flex flex-col group">
                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-semibold uppercase tracking-[2px] text-white">Explore Features</span>
                                </div>
                                <div className="w-[30%] h-[1px] bg-white mt-[3px] group-hover:w-full transition-all duration-300"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Second Block */}
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                {/* Video Section */}
                <div className="w-full md:w-1/2 relative overflow-hidden rounded-2xl">
                    <div className="rounded-lg w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[590px] bg-cover bg-center" style={{ backgroundImage: "url('./logo.jpg')" }}>
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

                {/* Content Section */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                        Digital Marketing
                    </h2>
                    <p className="text-base md:text-lg leading-relaxed">
                        From standout branding to inventive marketing and powerful advertising, we deliver everything you need to elevate your business to the next level.
                        Our team brings bold branding, forward-thinking marketing, and compelling advertising together to help your business rise above the noise.
                    </p>

                    <div className="mt-8">
                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <a href="/" className="relative group flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all duration-300 hover:bg-opacity-90">
                                <span className="relative z-10 transform group-hover:-translate-y-1 transition-transform duration-300">About Us</span>
                                <img
                                    src="https://cdn.prod.website-files.com/68149cfdae7cc5226d0569ac/6814a7937c6031105cd4ab11_arrow-right.avif"
                                    alt=""
                                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                                    loading="lazy"
                                />
                            </a>

                            <a href="/" className="flex flex-col group">
                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-semibold uppercase tracking-[2px] text-white">Explore Features</span>
                                </div>
                                <div className="w-[30%] h-[1px] bg-white mt-[3px] group-hover:w-full transition-all duration-300"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Service;
