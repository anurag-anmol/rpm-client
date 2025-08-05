import React from 'react'

function Owner() {
    return (
        <>
            <section className="py-20 relative bg-[#0c0c1d] overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 h-full">
                    <div className="relative p-8 rounded-3xl w-full h-full bg-[#16162b] m-3">

                        {/* Background Circles */}
                        <div className="absolute top-[-80px] left-[-80px] w-40 h-40 bg-gradient-to-br from-[#ff0080] to-[#7928ca] rounded-full opacity-20 blur-3xl z-0" ></div>
                        <div className="absolute bottom-[-80px] right-[-80px] w-40 h-40 bg-gradient-to-tr from-[#ff8c00] to-[#ff0080] rounded-full opacity-20 blur-3xl z-0"></div>

                        {/* Top Gradient Line */}
                        {/* <div className="h-[1px] w-full bg-gradient-to-r from-[#55525e] via-[#ffffff33] to-[#55525e] mb-8"></div> */}

                        {/* Quote Wrapper */}
                        <div className="relative z-10">
                            {/* Author Info */}
                            <div className="items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-full bg-gray-500 bg-cover bg-center ml-160 m-2 p-2" style={{ backgroundImage: `url('./owner.png')` }}></div>
                                <h2 className="text-white ml-150 m-2 p-2 font-bold text-x">Raj Solanki
                                    ,&nbsp;
                                    <span className="italic font-light text-muted-foreground">Founder</span>
                                </h2>
                            </div>

                            {/* Quote */}
                            <h2 className="md:text-3xl lg:text-4xl text-white max-w-4xl ml-70">
                                “From gathering insights to understanding your ideal audience, we pinpoint what makes your brand unique
                                <span className="font-light text-muted-foreground ml-10">—&nbsp;and help you turn that into real solutions</span>„
                            </h2>
                        </div>

                        {/* Bottom Gradient Lines */}
                        {/* <div className="absolute bottom-0 left-0 w-[40%] h-[1px] bg-gradient-to-r from-[#55525e] via-[#ffffff33] to-transparent"></div>
                        <div className="absolute bottom-0 right-0 w-[40%] h-[1px] bg-gradient-to-l from-[#55525e] via-[#ffffff33] to-transparent"></div> */}
                    </div>
                </div>
            </section>


        </>
    )
}

export default Owner