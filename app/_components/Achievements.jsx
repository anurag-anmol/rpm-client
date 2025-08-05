// import React from 'react'

// function Achievements() {
//     return (
//         <section className="py-20 px-4 relative overflow-hidden">
//             {/* <!-- Achievements Section --> */}
//             <div className="container mx-auto">

//                 <div className="border-t border-gray-700 pt-16">
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//                         {/* <!-- Title --> */}
//                         <h2 className="text-4xl md:text-5xl lg:text-4xl font-bold ml-30 mt-14">Our achiev<span className='text-muted-foreground'>ements</span></h2>

//                         {/* <!-- Stats Grid --> */}
//                         <div className="grid grid-cols-2 gap-7">
//                             {/* <!-- Stat 1 --> */}
//                             <div>
//                                 <h3 className="text-5xl lg:text-8xl md:text-6xl font-bold mb-2">150</h3>
//                                 <p className="text-gray-600 text-[20px]">Digital products launched</p>
//                             </div>

//                             {/* <!-- Stat 2 --> */}
//                             <div>
//                                 <h3 className="text-5xl lg:text-8xl md:text-6xl font-bold mb-2">95%</h3>
//                                 <p className="text-gray-600 text-[20px]">Average client retention rate</p>
//                             </div>

//                             {/* <!-- Stat 3 --> */}
//                             <div>
//                                 <h3 className="text-5xl lg:text-8xl md:text-6xl font-bold mb-2">$1.2B</h3>
//                                 <p className="text-gray-600 text-[20px]">Client revenue growth</p>
//                             </div>

//                             {/* <!-- Stat 4 --> */}
//                             <div>
//                                 <h3 className="text-5xl lg:text-8xl md:text-6xl font-bold mb-2">5+</h3>
//                                 <p className="text-gray-600 text-[20px]">Teams working globally</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* <!-- Testimonials Section --> */}
//                 <div className="mt-32 lg:mt-40 relative">
//                     {/* <!-- Decorative circles --> */}
//                     {/* <div className="hidden lg:block absolute -top-20 -left-20 w-40 h-40 rounded-full bg-[#482d40] opacity-50 ml-20"></div> */}
//                     {/* <div className="hidden lg:block absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-red-500 opacity-50"></div> */}

//                     <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 rounded-4xl w-300 h-180 ml-39 bg-[#16162b]">
//                         {/* <!-- Testimonial Content --> */}
//                         <div className="lg:w-1/2">
//                             {/* <div className=" hidden lg:block absolute -top-20 -left-20 w-40 h-40 rounded-full bg-[#df20a6] opacity-10 ml-50"></div> */}
//                             <h2 className="text-2xl md:text-2xl mt-7 ml-5">Testimonials</h2>

//                             <blockquote className="text-1xl md:text-2xl lg:text-3xl leading-tight mb-12 ml-10 mt-35">
//                                 {/* “They helped us dig deep into our brand's identity and translate that into */}
//                                 <span className="font-light">“They helped us dig deep into our <br /> brand's identity and translate that <br /> into solutions that actually resonate <br /> with our audience„</span>
//                             </blockquote>

//                             <div className="flex items-center ml-13 mt-70">
//                                 <div ><img className="w-16 h-16 rounded-full mr-6" src="https://cdn.prod.website-files.com/68149cfdae7cc5226d0569ac/681b3cb24e5161eaa46883fd_Portrait%20of%20a%20Person%20with%20Red%20Hair.avif" alt="" />
//                                 </div>
//                                 <div>
//                                     <h3 className="text-xl font-bold">Sophia Smith,</h3>
//                                     <p className="text-gray-600 font-light">Marketing Logoispum</p>
//                                 </div>
//                             </div>
//                         </div>


//                         {/* <!-- Testimonial Image --> */}
//                         <div className="lg:w-1/2 relative">
//                             <div className="relative">
//                                 <img
//                                     src="https://cdn.prod.website-files.com/68149cfdae7cc5226d0569ac/681b3cb24e5161eaa46883fd_Portrait%20of%20a%20Person%20with%20Red%20Hair.avif"
//                                     srcSet="https://cdn.prod.website-files.com/68149cfdae7cc5226d0569ac/681b3cb24e5161eaa46883fd_Portrait%20of%20a%20Person%20with%20Red%20Hair-p-500.avif 500w, 
//                     https://cdn.prod.website-files.com/68149cfdae7cc5226d0569ac/681b3cb24e5161eaa46883fd_Portrait%20of%20a%20Person%20with%20Red%20Hair-p-800.avif 800w, 
//                     https://cdn.prod.website-files.com/68149cfdae7cc5226d0569ac/681b3cb24e5161eaa46883fd_Portrait%20of%20a%20Person%20with%20Red%20Hair-p-1080.avif 1080w, 
//                     https://cdn.prod.website-files.com/68149cfdae7cc5226d0569ac/681b3cb24e5161eaa46883fd_Portrait%20of%20a%20Person%20with%20Red%20Hair.avif 1999w"
//                                     sizes="(max-width: 1999px) 100vw, 1999px"
//                                     loading="lazy"
//                                     alt="Portrait"
//                                     className="w-full h-auto p-5 rounded-[40] mt-9"
//                                 />
//                                 <img
//                                     src="https://cdn.prod.website-files.com/68149cfdae7cc5226d0569ac/6814b302b8a033c63e5fb504_logoipsum-367.svg"
//                                     loading="lazy"
//                                     width="170"
//                                     alt="Logo"
//                                     className="absolute top-139 left-8 w-40 h-auto p-4 rounded-xl bg-[#a47c5c]"
//                                 />
//                             </div>
//                         </div>
//                     </div>

//                 </div>

//             </div>
//         </section>
//     )
// }

// export default Achievements

















// ---------------responsive web page---------------

import React from 'react'

function Achievements() {
    return (
        <section className="py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden">
            <div className="container mx-auto">
                {/* Achievements Title & Stats */}
                <div className="border-t border-gray-700 pt-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Title */}
                        <h2 className="text-4xl md:text-5xl font-bold ml-6">
                            Our <span className="text-muted-foreground">achievements</span>
                        </h2>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-6 sm:gap-10">
                            <div>
                                <h3 className="text-5xl md:text-6xl font-bold mb-2">150</h3>
                                <p className="text-gray-600 text-lg">Digital products launched</p>
                            </div>
                            <div>
                                <h3 className="text-5xl md:text-6xl font-bold mb-2">95%</h3>
                                <p className="text-gray-600 text-lg">Average client retention rate</p>
                            </div>
                            <div>
                                <h3 className="text-5xl md:text-6xl font-bold mb-2">$1.2B</h3>
                                <p className="text-gray-600 text-lg">Client revenue growth</p>
                            </div>
                            <div>
                                <h3 className="text-5xl md:text-6xl font-bold mb-2">5+</h3>
                                <p className="text-gray-600 text-lg">Teams working globally</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonials Section */}
                <div className="mt-32 lg:mt-40 relative">
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-24 rounded-3xl bg-[#16162b] p-6 md:p-10 lg:p-16">
                        {/* Testimonial Content */}
                        <div className="lg:w-1/2 w-full">
                            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">Testimonials</h2>

                            <blockquote className="text-lg md:text-xl lg:text-2xl leading-relaxed text-white mb-8">
                                “They helped us dig deep into our <br />
                                brand's identity and translate that <br />
                                into solutions that actually resonate <br />
                                with our audience„
                            </blockquote>

                            <div className="flex items-center gap-4">
                                <img
                                    className="w-14 h-14 md:w-16 md:h-16 rounded-full"
                                    src="https://cdn.prod.website-files.com/68149cfdae7cc5226d0569ac/681b3cb24e5161eaa46883fd_Portrait%20of%20a%20Person%20with%20Red%20Hair.avif"
                                    alt="Client"
                                />
                                <div>
                                    <h3 className="text-lg font-bold text-white">Sophia Smith</h3>
                                    <p className="text-gray-400 text-sm">Marketing Logoispum</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial Image */}
                        <div className="lg:w-1/2 w-full relative">
                            <div className="relative w-full">
                                <img
                                    src="https://cdn.prod.website-files.com/68149cfdae7cc5226d0569ac/681b3cb24e5161eaa46883fd_Portrait%20of%20a%20Person%20with%20Red%20Hair.avif"
                                    alt="Portrait"
                                    className="w-full rounded-2xl"
                                    loading="lazy"
                                />
                                <img
                                    src="https://cdn.prod.website-files.com/68149cfdae7cc5226d0569ac/6814b302b8a033c63e5fb504_logoipsum-367.svg"
                                    alt="Logo"
                                    width="140"
                                    className="absolute bottom-4 left-4 bg-[#a47c5c] p-3 rounded-xl"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Achievements
