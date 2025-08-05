import React from 'react'

function Contact() {
    return (
        <div className="relative bg-[#0c0c1d] min-h-screen overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-48 md:pb-32 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                        Let's turn your vision into a <span className="font-light italic">reality.</span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Reach out to discuss your project requirements
                    </p>
                </div>
            </div>

            {/* Background Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#000000cc] to-transparent"></div>

            <img
                src="https://cdn.prod.website-files.com/68149cfdae7cc5226d0569ac/6814a411594d8a7230486656_Color%3DDark%2C-Variant%3DMetallic-(4).avif"
                loading="lazy"
                alt=""
                className="absolute bottom-0 left-0 w-full max-w-[450px] opacity-50 blur-[9px]"
            />

            <img
                src="https://cdn.prod.website-files.com/68149cfdae7cc5226d0569ac/681cbc239f127c3685456513_Color%3DDark%2C%20Variant%3DMetallic%20(7).avif"
                loading="lazy"
                alt=""
                className="absolute top-1/2 right-0 w-full max-w-[450px] -translate-y-1/2 opacity-50"
            />
        </div>
    )
}

export default Contact