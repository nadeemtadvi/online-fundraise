import React from 'react'

const AboutUs = ({about}) => {
  return (
    <div className="section-home about-us py-12 bg-gray-100">
    <div className="container mx-auto">
      <div className="flex flex-wrap">
        {about.map((cause, index) => (
          <div key={index} className="w-full md:w-1/4 p-4">
            <div className="about-us-col bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 p-6">
              <div className="col-icon-wrapper mb-4">
                <img src={cause.img} alt="" className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="col-title text-xl font-bold mb-2 text-center">{cause.title}</h3>
              <div className="col-details mb-4">
                <p className="text-gray-600 text-center">{cause.details}</p>
              </div>
              <a href="#" className="btn btn-primary bg-blue-500 text-white py-2 px-4 rounded-full block text-center">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default AboutUs