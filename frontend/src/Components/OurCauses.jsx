import React from 'react'

const OurCauses = ({ causes }) => {
  return (
    <div className="container mx-auto my-12">
    <h2 className="text-center text-4xl font-bold mb-12">Our Causes</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {causes.map((cause, index) => (
        <div key={index} className="border border-blue-600 p-6 rounded-lg shadow-lg">
          <img src={cause.img} alt={cause.title} className="w-full mb-4 rounded-lg" />
          <div className="relative w-full bg-gray-200 h-4 mb-4 rounded-lg">
            <div className="absolute top-0 left-0 h-4 bg-blue-600 rounded-lg" style={{ width: cause.progress }}></div>
            <span className="absolute top-0 left-0 text-xs text-white p-1">{cause.funds}</span>
          </div>
          <h4 className="text-2xl font-bold mb-4">{cause.title}</h4>
          <p className="text-sm mb-4">{cause.details}</p>
          <div className="text-center">
            <a href="#" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition">DONATE NOW</a>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default OurCauses