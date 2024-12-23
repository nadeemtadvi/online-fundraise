import React from 'react'

const HomeReasons = ({ reasons }) => {
  return (
    <div className="section-home home-reasons py-12 bg-gray-100">
    <div className="container mx-auto">
      <div className="flex flex-wrap">
        {reasons.map((reason, index) => (
          <div key={index} className="w-full md:w-1/2 p-4">
            <div className="reasons-col bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
              <img src={reason.img} alt="" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                <h5 className="text-md text-gray-600 mb-4">{reason.subtitle}</h5>
                <div className="on-hover hidden md:block">
                  <p className="mb-4">{reason.description}</p>
                </div>
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