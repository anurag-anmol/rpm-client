import React from 'react'

function Work() {
    return (
        <>
            <section className="relative py-20 px-4 overflow-hidden">
                <div className="container mx-auto">
                    {/* <!-- Header section --> */}
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                            <span className="font-light italic">Excellence?</span> We set the <span className="font-playfair italic font-[500]">standard</span>.
                        </h2>

                        <div className="mt-12 flex justify-center">
                            <a href="/" className="group items-center">
                                <span className="mr-2 font-bold text-2xl text-muted-foreground">view all work</span>
                                <div className="w-5 h-px bg-white group-hover:w-38 transition-all duration-300"></div>
                            </a>
                        </div>
                    </div>

                    {/* <!-- Work grid --> */}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 h-auto ">

                        {/* <!-- Project 1 - Design Depth --> */}

                        <div className='w-150 mt-10 ml-35'>

                            <a href="/" className="group relative overflow-hidden">
                                <div className="relative h-130 rounded-xl overflow-hidden w-full">
                                    {/* <!-- Logo in center --> */}
                                    <div className="absolute inset-0 flex items-center justify-center z-10">
                                        {/* <img src="https://cdn.prod.website-files.com/68149cfdae7cc5226d0569bd/681a1d23ba6ba04766e4b996_logoipsum-372.svg" */}
                                        <img src="https://cdn.prod.website-files.com/68149cfdae7cc5226d0569bd/681a1f519748296471299501_logo-1.avif"

                                            loading="lazy"
                                            alt="logo"
                                            className="w-24 h-24 object-contain transform group-hover:scale-90 transition-transform duration-500" />
                                    </div>

                                    {/* <!-- Project image --> */}
                                    <img src="https://cdn.prod.website-files.com/68149cfdae7cc5226d0569bd/681a21a57bb122a438b3d1d5_work-2.avif"
                                        loading="eager"
                                        alt="project"
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 filter group-hover:blur-sm" />
                                </div>

                                {/* <!-- Project info --> */}
                                <div className="mt-6 flex ml-2">
                                    <div className="">
                                        <h3 className="text-2xl font-bold">Clicks and Magic</h3>
                                        <div className="ml-2 relative w-16 h-px bg-black mt-3 overflow-hidden">
                                            <div className="absolute top-0 left-0 w-full h-full bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                                        </div>
                                    </div>
                                    <p className="ml-auto text-muted-foreground">Web Design, Marketing</p>
                                </div>
                            </a>
                        </div>


                        {/* <!-- Project 2 - Design Depth --> */}

                        <div className='w-150 mt-10 mr-35'>

                            <a href="/" className="group relative overflow-hidden">
                                <div className="relative h-130 rounded-xl overflow-hidden w-full">
                                    {/* <!-- Logo in center --> */}
                                    <div className="absolute inset-0 flex items-center justify-center z-10">
                                        <img src="https://cdn.prod.website-files.com/68149cfdae7cc5226d0569bd/681a1d23ba6ba04766e4b996_logoipsum-372.svg"
                                            loading="lazy"
                                            alt="logo"
                                            className="w-24 h-24 object-contain transform group-hover:scale-90 transition-transform duration-500" />
                                    </div>

                                    {/* <!-- Project image --> */}
                                    <img src="https://cdn.prod.website-files.com/68149cfdae7cc5226d0569bd/681a10cfe46dc96cac217cc7_Silhouetted%20Hands%20with%20Gradient%20Tablet.avif"
                                        loading="eager"
                                        alt="project"
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 filter group-hover:blur-sm" />
                                </div>

                                {/* <!-- Project info --> */}
                                <div className="mt-6 flex ml-2">
                                    <div className="">
                                        <h3 className="text-2xl font-bold">Design Depth</h3>
                                        <div className="ml-2 relative w-16 h-px bg-black mt-3 overflow-hidden">
                                            <div className="absolute top-0 left-0 w-full h-full bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                                        </div>
                                    </div>
                                    <p className="ml-auto text-muted-foreground">Concept, Web Design</p>
                                </div>
                            </a>
                        </div>


                        {/* <!-- Project 3 - Design Depth --> */}

                        <div className='w-150 ml-35'>

                            <a href="/" className="group relative overflow-hidden">
                                <div className="relative h-130 rounded-xl overflow-hidden w-full">
                                    {/* <!-- Logo in center --> */}
                                    <div className="absolute inset-0 flex items-center justify-center z-10">
                                        <img src="https://cdn.prod.website-files.com/68149cfdae7cc5226d0569bd/681a1db4646871985ea4b500_logoipsum-352.svg"
                                            loading="lazy"
                                            alt="logo"
                                            className="w-24 h-24 object-contain transform group-hover:scale-90 transition-transform duration-500" />
                                    </div>

                                    {/* <!-- Project image --> */}
                                    <img src="https://cdn.prod.website-files.com/68149cfdae7cc5226d0569bd/681a1b54d571e0efde8f9c67_Focused%20Athlete%20Profile%20(2).avif"
                                        loading="eager"
                                        alt="project"
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 filter group-hover:blur-sm" />
                                </div>

                                {/* <!-- Project info --> */}
                                <div className="mt-6 flex ml-2">
                                    <div className="">
                                        <h3 className="text-2xl font-bold">Digital Direction</h3>
                                        <div className="ml-2 relative w-16 h-px bg-black mt-3 overflow-hidden">
                                            <div className="absolute top-0 left-0 w-full h-full bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                                        </div>
                                    </div>
                                    <p className="ml-auto text-muted-foreground">Strategy, Web Design, Marketing</p>
                                </div>
                            </a>
                        </div>

                        {/* <!-- Project 4 - Design Depth --> */}

                        <div className='w-150 mr-35'>

                            <a href="/" className="group relative overflow-hidden">
                                <div className="relative h-130 rounded-xl overflow-hidden w-full">
                                    {/* <!-- Logo in center --> */}
                                    <div className="absolute inset-0 flex items-center justify-center z-10">
                                        <img src="https://cdn.prod.website-files.com/68149cfdae7cc5226d0569bd/681a202b96dbee5f08616dfb_logo-2.avif"
                                            loading="lazy"
                                            alt="logo"
                                            className="w-24 h-24 object-contain transform group-hover:scale-90 transition-transform duration-500" />
                                    </div>

                                    {/* <!-- Project image --> */}
                                    <img src="https://cdn.prod.website-files.com/68149cfdae7cc5226d0569bd/681a2226e6b380d91856b922_work-1.avif"
                                        loading="eager"
                                        alt="project"
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 filter group-hover:blur-sm" />
                                </div>

                                {/* <!-- Project info --> */}
                                <div className="mt-6 flex ml-2">
                                    <div className="">
                                        <h3 className="text-2xl font-bold">Studio Focus</h3>
                                        <div className="ml-2 relative w-16 h-px bg-black mt-3 overflow-hidden">
                                            <div className="absolute top-0 left-0 w-full h-full bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                                        </div>
                                    </div>
                                    <p className="ml-auto text-muted-foreground">Web Design, Marketing</p>
                                </div>
                            </a>
                        </div>

                    </div>


                </div>

            </section>

        </>
    )
}

export default Work