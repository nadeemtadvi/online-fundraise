import React from 'react'

const Sidebar = () => {
  return (
    <nav className="w-64 bg-gray-100 p-4 flex-shrink-0">
    <ul className="space-y-2">
      <li>
        <a className="flex items-center p-2 rounded bg-blue-600 text-white" href="index.html">
          <i className="bi-house-fill mr-3"></i> Overview
        </a>
      </li>
      <li>
        <a className="flex items-center p-2 rounded hover:bg-gray-200" href="wallet.html">
          <i className="bi-wallet mr-3"></i> My Wallet
        </a>
      </li>
      <li>
        <a className="flex items-center p-2 rounded hover:bg-gray-200" href="profile.html">
          <i className="bi-person mr-3"></i> Profile
        </a>
      </li>
      <li>
        <a className="flex items-center p-2 rounded hover:bg-gray-200" href="setting.html">
          <i className="bi-gear mr-3"></i> Settings
        </a>
      </li>
      <li>
        <a className="flex items-center p-2 rounded hover:bg-gray-200" href="help-center.html">
          <i className="bi-question-circle mr-3"></i> Help Center
        </a>
      </li>
      <li className="mt-8">
        <img src="images/credit-card.png" className="w-full mb-2" alt="Upgrade" />
        <a className="btn btn-primary w-full" href="#">
          Upgrade
        </a>
      </li>
      <li className="mt-auto">
        <a className="flex items-center p-2 rounded hover:bg-gray-200" href="#">
          <i className="bi-box-arrow-left mr-3"></i> Logout
        </a>
      </li>
    </ul>
  </nav>
  )
}

export default Sidebar