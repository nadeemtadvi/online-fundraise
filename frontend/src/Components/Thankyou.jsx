import React from 'react'

const Thankyou = () => {
  return (
    <div className="modal fade" id="donateModal" tabIndex="-1" role="dialog" aria-labelledby="donateModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header flex justify-between items-center border-b border-gray-200 py-2 px-4">
          <button type="button" className="close text-gray-500" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 className="modal-title text-xl font-bold" id="donateModalLabel">Donate Now</h4>
        </div>
        <div className="modal-body p-6">
          <form className="form-donation space-y-4">
            <h3 className="title-style-1 text-center text-2xl font-bold mb-4">Thank you for your donation</h3>
            <div className="form-group">
              <input type="text" className="form-control w-full px-3 py-2 rounded-md text-gray-800" id="amount" placeholder="AMOUNT (€)" />
            </div>
            <div className="flex space-x-4">
              <div className="form-group w-1/2">
                <input type="text" className="form-control w-full px-3 py-2 rounded-md text-gray-800" name="firstName" placeholder="First name*" />
              </div>
              <div className="form-group w-1/2">
                <input type="text" className="form-control w-full px-3 py-2 rounded-md text-gray-800" name="lastName" placeholder="Last name*" />
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="form-group w-1/2">
                <input type="text" className="form-control w-full px-3 py-2 rounded-md text-gray-800" name="email" placeholder="Email*" />
              </div>
              <div className="form-group w-1/2">
                <input type="text" className="form-control w-full px-3 py-2 rounded-md text-gray-800" name="phone" placeholder="Phone" />
              </div>
            </div>
            <div className="form-group">
              <input type="text" className="form-control w-full px-3 py-2 rounded-md text-gray-800" name="address" placeholder="Address" />
            </div>
            <div className="form-group">
              <textarea cols="30" rows="4" className="form-control w-full px-3 py-2 rounded-md text-gray-800" name="note" placeholder="Additional note"></textarea>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary bg-blue-600 text-white py-2 px-4 rounded-md w-full">Donate Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Thankyou