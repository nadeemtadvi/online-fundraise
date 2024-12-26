import React from "react";

const OurCauses = ({ causes, handleOpen }) => {
  return (
    <div className="container mx-auto my-12">
      <h2 className="text-center text-4xl font-bold mb-12">Our Causes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {causes.map((cause, index) => (
          <div
            key={index}
            className="border border-blue-600 p-6 rounded-lg shadow-lg"
          >
            <img
              src={cause.img}
              alt={cause.title}
              className="w-full mb-4 rounded-lg h-[132px] object-cover"
            />
            <div className="relative w-full bg-gray-200 h-4 mb-4 rounded-lg">
              <div
                className="absolute top-0 left-0 h-4 bg-blue-600 rounded-lg"
                style={{ width: cause.progress }}
              ></div>
              <span className="absolute top-0 left-0 text-[11px] text-white px-2">
                {cause.funds}
              </span>
            </div>
            <h4 className="text-2xl font-bold mb-4 !capitalize sm:h-[60px]">{cause.title}</h4>
            <p className="text-sm mb-4 sm:h-[80px]">{cause.details}</p>
            <div className="">
              <a
                href="#"
                onClick={() => handleOpen()}
                className="bg-blue-600 text-white py-2 px-4  w-full inline-block text-center rounded hover:bg-blue-600 transition"
              >
                DONATE NOW
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCauses;
