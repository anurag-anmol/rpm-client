// 'use client';
// import React from "react";


// function Hero() {


//     return (
//         <div className="relative">

//             {/* Hero Section */}
//             <div className="relative bg-[#0c0c1d] bg-[radial-gradient(circle_at_0_0,#99526380,#fff0_35%)] flex flex-col justify-center items-center min-h-[85vh] pt-[180px] pb-[115px] px-[5%] overflow-hidden" >
//                 {/* Background elements */}
//                 <img
//                     src="https://cdn.prod.website-files.com/68149cfdae7cc5226d0569ac/6814a15afea82ff3505d163e_shape-2.avif"
//                     loading="lazy"
//                     alt=""
//                     className="absolute w-[49vw] right-[-110px] top-[130px] transform translate-y-[43.0908px] will-change-transform"
//                 />
//                 <img
//                     src="https://cdn.prod.website-files.com/68149cfdae7cc5226d0569ac/6814a411594d8a7230486656_Color%3DDark%2C-Variant%3DMetallic-(4).avif"
//                     loading="lazy"
//                     alt=""
//                     className="absolute w-[450px] bottom-[-190px] left-[50px] transform translate-y-[43.0908px] will-change-transform blur-[5px]"
//                 />
//                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#000000cc] to-transparent min-h-[200px]"></div>

//                 {/* Content container */}
//                 <div className="container mx-auto w-full max-w-[1200px] relative z-10">
//                     <div className="md:flex-row-reverse justify-start gap-[50px]">
//                         {/* Text content */}
//                         <div className="w-full md:w-[60%] flex flex-col items-center md:items-start">
//                             <h1 className="text-[82px] font-[600] leading-[1.05] bg-gradient-to-r from-white via-white/60 to-white bg-clip-text text-transparent">
//                                 Building the <span className="font-playfair italic font-[500]">future</span> now.
//                             </h1>

//                             <div className="mt-[50px]">
//                                 <p className="text-[22px] font-[500] leading-[1.5] text-center md:text-left opacity-100 text-white max-w-[538px]">
//                                     A cutting-edge Marketing template designed to help visionary brands launch faster.
//                                 </p>

//                                 <div className="mt-[40px] flex flex-col sm:flex-row gap-[20px] items-center justify-center md:justify-start">
//                                     <a
//                                         href="/"
//                                         className="relative bg-white text-[#0c0c1d] uppercase rounded-[40px] px-[24px] py-[15px] text-[14px] font-[700] overflow-hidden group"
//                                     >
//                                         <span className="inline-block transform group-hover:-translate-y-full group-hover:translate-x-full transition-transform duration-300">
//                                             LET'S CONNECT
//                                         </span>
//                                         <img
//                                             src="https://cdn.prod.website-files.com/68149cfdae7cc5226d0569ac/6814a7937c6031105cd4ab11_arrow-right.avif"
//                                             alt=""
//                                             className="absolute w-[20px] right-[24px] top-1/2 transform -translate-y-1/2 group-hover:translate-y-0 transition-transform duration-300"
//                                         />
//                                     </a>

//                                     <a
//                                         href="/"
//                                         className="flex flex-col group"
//                                     >
//                                         <div className="flex items-center gap-[10px]">
//                                             <span className="text-[14px] font-[600] uppercase tracking-[2px] text-white">Explore Features</span>
//                                         </div>
//                                         <div className="w-[15%] h-[1px] bg-white mt-[3px] group-hover:w-full transition-all duration-300"></div>
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Image content would go here in the other half */}
//                         <div className="w-full md:w-[40%]">
//                             {/* Your image content would go here */}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div >
//     )
// }




// export default Hero




// ----------------- responsive web page ---------------------


'use client';
import React from "react";

function Hero() {
    return (
        <div className="relative">
            {/* Hero Section */}
            <div className="relative bg-[#0c0c1d] bg-[radial-gradient(circle_at_0_0,#99526380,#fff0_35%)] flex flex-col justify-center items-center min-h-[85vh] pt-[120px] md:pt-[180px] pb-[80px] md:pb-[115px] px-4 sm:px-[5%] overflow-hidden">

                {/* Background elements */}
                <img
                    src="https://cdn.prod.website-files.com/68149cfdae7cc5226d0569ac/6814a15afea82ff3505d163e_shape-2.avif"
                    loading="lazy"
                    alt=""
                    className="absolute w-[70vw] md:w-[49vw] right-[-60px] md:right-[-110px] top-[100px] md:top-[130px] transform translate-y-[43.0908px] will-change-transform"
                />
                <img
                    src="https://cdn.prod.website-files.com/68149cfdae7cc5226d0569ac/6814a411594d8a7230486656_Color%3DDark%2C-Variant%3DMetallic-(4).avif"
                    loading="lazy"
                    alt=""
                    className="absolute w-[300px] md:w-[450px] bottom-[-120px] md:bottom-[-190px] left-[20px] md:left-[50px] transform translate-y-[43.0908px] will-change-transform blur-[5px]"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#000000cc] to-transparent min-h-[150px] md:min-h-[200px]"></div>

                {/* Content container */}
                <div className="container mx-auto w-full max-w-[1200px] relative z-10">
                    <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-start gap-[30px] md:gap-[50px]">

                        {/* Text content */}
                        <div className="w-full md:w-[60%] flex flex-col items-center md:items-start text-center md:text-left">
                            <h1 className="text-[38px] sm:text-[50px] md:text-[72px] lg:text-[82px] font-[600] leading-[1.1] bg-gradient-to-r from-white via-white/60 to-white bg-clip-text text-transparent">
                                Building the <span className="font-playfair italic font-[500]">future</span> now.
                            </h1>

                            <div className="mt-[30px] md:mt-[50px]">
                                <p className="text-[18px] sm:text-[20px] md:text-[22px] font-[500] leading-[1.5] text-white max-w-[538px]">
                                    A cutting-edge Marketing template designed to help visionary brands launch faster.
                                </p>

                                {/* Buttons */}
                                <div className="mt-[30px] md:mt-[40px] flex flex-col sm:flex-row gap-[20px] items-center justify-center md:justify-start">
                                    <a
                                        href="/"
                                        className="relative bg-white text-[#0c0c1d] uppercase rounded-[40px] px-[24px] py-[15px] text-[14px] font-[700] overflow-hidden group"
                                    >
                                        <span className="inline-block transform group-hover:-translate-y-full group-hover:translate-x-full transition-transform duration-300">
                                            LET'S CONNECT
                                        </span>
                                        <img
                                            src="https://cdn.prod.website-files.com/68149cfdae7cc5226d0569ac/6814a7937c6031105cd4ab11_arrow-right.avif"
                                            alt=""
                                            className="absolute w-[20px] right-[24px] top-1/2 transform -translate-y-1/2 group-hover:translate-y-0 transition-transform duration-300"
                                        />
                                    </a>

                                    <a href="/" className="flex flex-col group">
                                        <div className="flex items-center gap-[10px]">
                                            <span className="text-[14px] font-[600] uppercase tracking-[2px] text-white">Explore Features</span>
                                        </div>
                                        <div className="w-[30%] h-[1px] bg-white mt-[3px] group-hover:w-full transition-all duration-300"></div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Optional image area */}
                        <div className="w-full md:w-[40%]">
                            {/* Placeholder for right-side image if needed */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
