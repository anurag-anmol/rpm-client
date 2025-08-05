import React from 'react'

function CustomerReview() {
    return (

        <section className="py-20 px-4 relative overflow-hidden">

            <div className="container mx-auto">
                {/* <!-- Header with avatars and star rating --> */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 mt-10">
                    <h2 className="text-4xl md:text-5xl mb-6 md:mb-0 ml-30">
                        Customer <span className="font-light italic text-muted-foreground">reviews</span>
                    </h2>

                    <div className=" flex sm:flex-row items-center gap-6 mr-30">
                        {/* <!-- Avatar group --> */}
                        <div className="flex -space-x-3">
                            <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                            <div className="w-12 h-12 rounded-full bg-gray-400"></div>
                            <div className="w-12 h-12 rounded-full bg-gray-500"></div>
                            <div className="w-12 h-12 rounded-full bg-gray-600"></div>
                            <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-white">
                                34+
                            </div >
                        </div>

                        {/* <!-- Star rating --> */}
                        <div className="">
                            <img src="https://cdn.prod.website-files.com/68149cfdae7cc5226d0569ac/681b4893b4fda30d5a815c34_star.svg"
                                loading="lazy"
                                alt="Star"
                                className="w-20 h-5" />
                            <p className="text-sm">Chosen by global brands</p>
                        </div>
                    </div>
                </div>

                {/* <!-- Testimonials Marquee --> */}
                <div className="relative overflow-x-hidden py-8">
                    {/* <!-- Marquee Container --> */}
                    <div className="whitespace-wrap animate-scroll flex">
                        {/* <!-- Testimonial Cards - Group 1 --> */}
                        <div className="inline-flex mr-8">

                            {/* <!-- Card 1 --> */}
                            <div className="w-96 bg-[#16162b] text-white p-8 rounded-xl mr-8 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-[#39263a] opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
                                <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-[#39263a] opacity-40 translate-x-1/2 translate-y-1/2"></div>

                                <img src="https://cdn.prod.website-files.com/68149cfdae7cc5226d0569ac/681b73c6e2b2918f05d617f5_star-white.svg"
                                    loading="lazy"
                                    alt="Star"
                                    className="w-20 h-5 mb-4" />

                                <blockquote className="text-xl font-medium mb-6">
                                    “Working with them was a game-changer — they brought clarity to our messaging and gave us a brand we're truly proud of„
                                </blockquote>

                                <div className="flex items-center">
                                    <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                                    <div>
                                        <h3 className="font-bold">Clara Jensen,</h3>
                                        <p className="text-gray-300 font-light">Marketing Director</p>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Card 2 --> */}
                            <div className="w-96 bg-[#16162b] text-white p-8 rounded-xl mr-8 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-[#39263a] opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
                                <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-[#39263a] opacity-20 translate-x-1/2 translate-y-1/2"></div>

                                <img src="https://cdn.prod.website-files.com/68149cfdae7cc5226d0569ac/681b73c6e2b2918f05d617f5_star-white.svg"
                                    loading="lazy"
                                    alt="Star"
                                    className="w-20 h-5 mb-4" />

                                <blockquote className="text-xl font-medium mb-6">
                                    “Their team didn't just deliver designs; they delivered strategy, purpose, and results. We saw immediate engagement improvement„
                                </blockquote>

                                <div className="flex items-center">
                                    <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                                    <div>
                                        <h3 className="font-bold">David Morales,</h3>
                                        <p className="text-gray-300 font-light">Head of Product</p>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Card 3 --> */}
                            <div className="w-96 bg-[#16162b] text-white p-8 rounded-xl mr-8 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-[#39263a] opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
                                <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-[#39263a] opacity-70 translate-x-1/2 translate-y-1/2"></div>

                                <img src="https://cdn.prod.website-files.com/68149cfdae7cc5226d0569ac/681b73c6e2b2918f05d617f5_star-white.svg"
                                    loading="lazy"
                                    alt="Star"
                                    className="w-20 h-5 mb-4" />


                                <blockquote className="text-xl font-medium mb-6">
                                    “From day one, they understood our vision and turned it into something far beyond what we imagined. Absolute professionals„
                                </blockquote>

                                <div className="flex items-center">
                                    <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                                    <div>
                                        <h3 className="font-bold">Leila Khan,</h3>
                                        <p className="text-gray-300 font-light">Co Founder</p>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Card 4 --> */}
                            <div className="w-96 bg-[#16162b] text-white p-8 rounded-xl mr-8 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-[#39263a] opacity-70 -translate-x-1/2 -translate-y-1/2"></div>
                                <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-[#39263a] opacity-20 translate-x-1/2 translate-y-1/2"></div>

                                <img src="https://cdn.prod.website-files.com/68149cfdae7cc5226d0569ac/681b73c6e2b2918f05d617f5_star-white.svg"
                                    loading="lazy"
                                    alt="Star"
                                    className="w-20 h-5 mb-4" />


                                <blockquote className="text-xl font-medium mb-6">
                                    “Their insight and creativity helped us reconnect with our audience in an authentic, impactful way„
                                </blockquote>

                                <div className="flex items-center">
                                    <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                                    <div>
                                        <h3 className="font-bold">Tomas Richter,</h3>
                                        <p className="text-gray-300 font-light">CEO at UrbanLogix</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>


    )
}

export default CustomerReview