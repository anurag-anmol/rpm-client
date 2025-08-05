// import React from 'react';

function NextGen() {
  const details = [
    {
      title: "Marketing",
      icon: "https://cdn.prod.website-files.com/68149cfdae7cc5226d0569ac/6814bb2535c881f4257784a4_icons8-marketing-192.avif",
    },
    {
      title: "Social Media",
      icon: "https://cdn.prod.website-files.com/68149cfdae7cc5226d0569ac/6814bb63c20ed156b22776d1_icons8-share-192.avif",
    },
    {
      title: "Paid Media",
      icon: "https://cdn.prod.website-files.com/68149cfdae7cc5226d0569ac/6814bbd1577f442c9f5f91cc_icons8-tech-192.avif",
    },
    {
      title: "Content Creation",
      icon: "https://cdn.prod.website-files.com/68149cfdae7cc5226d0569ac/681a07bfb8ac9774d88d9ed0_icons8-design-192%20(1).avif",
    },
    {
      title: "SEO Optimization",
      icon: "https://cdn.prod.website-files.com/68149cfdae7cc5226d0569ac/681a07bf15b18b02a0a3b54f_icons8-omnichannel-192%20(1).avif",
    },
    {
      title: "Growth Marketing",
      icon: "https://cdn.prod.website-files.com/68149cfdae7cc5226d0569ac/681a07bf046e14c4a5507a85_icons8-growth-192%20(1).avif",
    },
  ];

  return (
    <section id="Features" className="relative py-20 px-4 bg-gradient-to-b from-[#0c0c1d] overflow-hidden">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Next-gen <span className="text-muted-foreground">features</span><br />
            to <span className="italic font-light">solve <span className="italic text-muted-foreground">problems</span>.</span>
          </h2>
        </div>

        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {details.map((item, idx) => (
              <div
                key={idx}
                className="relative p-8 bg-[#120f20] rounded-lg shadow-md hover:shadow-lg transition-shadow hover:border border-muted-foreground hover:animate-bounce duration-300"
              >
                {/* Icon */}
                <div className="mb-4">
                  <img
                    src={item.icon}
                    loading="lazy"
                    alt="Marketing icon"
                    className="bg-white rounded-lg w-[70px] h-[70px]"
                  />
                </div>

                {/* Title */}
                <h3 className="font-bold text-2xl text-white mb-2">{item.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground font-bold text-[19px] mb-4">
                  Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit.
                </p>

                {/* Button */}
                <div>
                  <a href="/" className="flex flex-col group">
                    <div className="flex items-center gap-[10px]">
                      <span className="text-[14px] font-[600] uppercase tracking-[2px] text-white">Explore Features</span>
                    </div>
                    <div className="w-[15%] h-[1px] bg-white mt-[3px] group-hover:w-40 transition-all duration-300"></div>
                  </a>
                </div>

                {/* Gradient lines */}
                <div className="absolute top-0 left-0 h-full w-0.5 bg-gradient-to-b from-[#55525e] to-transparent opacity-20"></div>
                <div className="absolute top-0 right-0 h-full w-0.5 bg-gradient-to-b from-[#55525e] to-transparent opacity-20"></div>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#55525e] to-transparent opacity-20"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="/"
            className="inline-flex items-center px-8 py-4 bg-white text-black rounded-full group overflow-hidden transition-all duration-300 hover:bg-opacity-90"
          >
            <span className="mr-2 group-hover:-translate-y-1 transition-transform duration-300 font-bold text-[20px]">contact us</span>
            <img
              src="https://cdn.prod.website-files.com/68149cfdae7cc5226d0569ac/6814a7937c6031105cd4ab11_arrow-right.avif"
              loading="lazy"
              alt="arrow"
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default NextGen;
