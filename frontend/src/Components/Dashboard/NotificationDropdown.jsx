import React from 'react'

const NotificationDropdown = () => {
    const notifications = [
        {
          type: "success",
          icon: "bi-check-circle-fill",
          message: "Your account has been created successfully.",
          time: "12 days ago"
        },
        {
          type: "info",
          icon: "bi-folder",
          message: "Please check. We have sent a Daily report.",
          time: "10 days ago"
        },
        {
          type: "danger",
          icon: "bi-question-circle",
          message: "Account verification failed.",
          time: "1 hour ago"
        }
      ];
  return (
    <div className="relative">
    <a className="relative cursor-pointer" role="button">
      <i className="bi-bell"></i>
      <span className="absolute top-0 right-0 w-3 h-3 bg-red-600 rounded-full"></span>
    </a>
    <ul className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg">
      <li className="p-2 border-b">
        <small>Notifications</small>
      </li>
      {notifications.map((notification, index) => (
        <li key={index} className="flex items-center p-2 border-b">
          <div className={`p-2 rounded-full bg-${notification.type}-600`}>
            <i className={`bi ${notification.icon} text-white`}></i>
          </div>
          <div className="ml-3">
            <span>{notification.message}</span>
            <p className="text-xs text-gray-500">{notification.time}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default NotificationDropdown