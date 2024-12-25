import React from 'react'

const HomeReasons = ({ reasons }) => {
  return (
    <div className="section-home home-reasons py-12 bg-gray-100">
    <div className="container mx-auto">
      <div className="flex flex-wrap">
        {reasons.map((reason, index) => (
          <div key={index} className="w-full md:w-1/2 p-4">
            <div className="parent-box relative h-[520px] reasons-col bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
              <img src={reason.img} alt="" className="w-full h-full object-cover" />
              <div className="p-6 absolute bottom-0 left-0 bg-[#2563ebcf]  w-full text-white uppercase text-center">
                <h3 className="text-2xl font-bold mb-2">{reason.title}</h3>
                <h5 className="text-lg -600 mb-4">{reason.subtitle}</h5>
                
              </div>
              <div className="child-box p-12 absolute top-0 h-[calc(100%_-_132px)] border-b border-white left-0 bg-[#2563ebcf]  w-full text-white">
                  <p className="mb-4">{reason.description}</p>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default HomeReasons