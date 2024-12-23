import React from 'react'

const ProfileDropdown = () => {
  return (
    <div className="relative">
    <a className="cursor-pointer" role="button">
      <img
        src="images/medium-shot-happy-man-smiling.jpg"
        className="w-8 h-8 rounded-full"
        alt="Profile"
      />
    </a>
    <ul className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
      <li className="p-2 border-b flex items-center">
        <img
          src="images/medium-shot-happy-man-smiling.jpg"
          className="w-8 h-8 rounded-full"
          alt="Profile"
        />
        <div className="ml-3">
          <small>Thomas</small>
          <a href="#" className="block text-xs text-gray-500">
            thomas@site.com
          </a>
        </div>
      </li>
      <li className="p-2 border-b">
        <a href="profile.html" className="flex items-center text-sm">
          <i className="bi-person mr-2"></i> Profile
        </a>
      </li>
      <li className="p-2 border-b">
        <a href="setting.html" className="flex items-center text-sm">
          <i className="bi-gear mr-2"></i> Settings
        </a>
      </li>
      <li className="p-2 border-b">
        <a href="help-center.html" className="flex items-center text-sm">
          <i className="bi-question-circle mr-2"></i> Help
        </a>
      </li>
      <li className="p-2 border-t mt-2">
        <a href="#" className="flex items-center text-sm text-red-600">
          <i className="bi-box-arrow-left mr-2"></i> Logout
        </a>
      </li>
    </ul>
  </div>
  )
}

export default ProfileDropdown