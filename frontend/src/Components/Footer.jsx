import React from "react";

const Footer = () => {
  return (
    <footer className="main-footer bg-gray-800 text-white py-8">
      <div className="footer-top bg-gray-700 py-4"></div>
      <div className="footer-main py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
              <div className="footer-col">
                <h4 className="footer-title text-2xl font-bold mb-4">
                  About Us
                </h4>
                <div className="footer-content text-gray-300">
                  <p>
                    <strong>Sadaka</strong> ipsum dolor sit amet, consectetur
                    adipiscing elit. Ut at eros rutrum turpis viverra elementum
                    semper quis ex. Donec lorem nulla, aliquam quis neque vel,
                    maximus lacinia urna.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    at eros rutrum turpis viverra elementum semper quis ex.
                    Donec lorem nulla, aliquam quis neque vel, maximus lacinia
                    urna.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
              <div className="footer-col">
                <h4 className="footer-title text-2xl font-bold mb-4">
                  Last Tweets
                </h4>
                <div className="footer-content text-gray-300">
                  <ul className="tweets list-none">
                    {[
                      "20 Surprise Eggs, Kinder Surprise Cars 2 Thomas Spongebob Disney Pixar http://t.co/fTSazikPd4",
                      "20 Surprise Eggs, Kinder Surprise Cars 2 Thomas Spongebob Disney Pixar http://t.co/fTSazikPd4",
                      "20 Surprise Eggs, Kinder Surprise Cars 2 Thomas Spongebob Disney Pixar http://t.co/fTSazikPd4",
                    ].map((tweet, index) => (
                      <li key={index} className="tweet mb-2">
                        {tweet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4">
              <div className="footer-col">
                <h4 className="footer-title text-2xl font-bold mb-4">
                  Contact Us
                </h4>
                <div className="footer-content text-gray-300">
                  <form action="php/mail.php" className="space-y-4">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control w-full px-3 py-2 rounded-md text-gray-800"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="form-control w-full px-3 py-2 rounded-md text-gray-800"
                        placeholder="E-mail"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        name="message"
                        className="form-control w-full px-3 py-2 rounded-md text-gray-800"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-submit bg-blue-500 text-white py-2 px-4 rounded-md"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom bg-gray-700 py-4">
        <div className="container mx-auto px-4 text-right">
          Sadaka @ copyrights 2015 - by{" "}
          <a
            href="http://www.ouarmedia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400"
          >
            Ouarmedia
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
