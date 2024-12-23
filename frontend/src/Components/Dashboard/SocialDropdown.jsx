import React from 'react'

const SocialDropdown = () => {
    
const socialLinks = [
    { name: "Google", img: "images/social/search.png" },
    { name: "Spotify", img: "images/social/spotify.png" },
    { name: "Telegram", img: "images/social/telegram.png" },
    { name: "Snapchat", img: "images/social/snapchat.png" },
    { name: "Tiktok", img: "images/social/tiktok.png" },
    { name: "Youtube", img: "images/social/youtube.png" }
  ];
  
  return (
    <div className="relative">
    <a className="cursor-pointer" role="button">
      <i className="bi-three-dots-vertical"></i>
    </a>
    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-2">
      <div className="grid grid-cols-3 gap-2">
        {socialLinks.map((link, index) => (
          <a key={index} className="text-center" href="#">
            <img src={link.img} className="w-8 h-8 mx-auto" alt={link.name} />
            <span className="text-xs">{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  </div>
  )
}

export default SocialDropdown