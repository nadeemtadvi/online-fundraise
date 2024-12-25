import React from 'react'

const OurSponsors = ({sponsors}) => {
 
  return (
    <div className="container mx-auto my-20">
    <h2 className="text-center text-4xl font-bold mb-12">Our Sponsors</h2>
    <div className="flex justify-center flex-wrap space-x-8">
      {sponsors.map((sponsor, index) => (
        <img key={index} src={sponsor} alt={`Sponsor ${index + 1}`} className="w-24 h-24 object-contain" />
      ))}
    </div>
  </div>
  )
}

export default OurSponsors