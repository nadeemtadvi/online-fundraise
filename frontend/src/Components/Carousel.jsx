import React from "react";

const Carousel = () => {
    const carouselData = [
        {
          img: "assets/images/slider/home-slider-1.jpg",
          title: "Because they need your help",
          subtitle: "Do not let them down",
          buttonText: "DONATE NOW",
          buttonLink: "#",
          isActive: true
        },
        {
          img: "assets/images/slider/home-slider-2.jpg",
          title: "Together we can improve their lives",
          subtitle: "So let's do it!",
          buttonText: "DONATE NOW",
          buttonLink: "#",
          isActive: false
        },
        {
          img: "assets/images/slider/home-slider-3.jpg",
          title: "A penny is a lot of money, if you have not got a penny.",
          subtitle: "You can make the difference!",
          buttonText: "DONATE NOW",
          buttonLink: "#",
          isActive: false
        }
      ];
  return (
    <div
      id="homeCarousel"
      className="carousel slide carousel-home relative"
      data-ride="carousel"
    >
      <ol className="carousel-indicators absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {carouselData.map((item, index) => (
          <li
            key={index}
            data-target="#homeCarousel"
            data-slide-to={index}
            className={`w-3 h-3 rounded-full ${
              item.isActive ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></li>
        ))}
      </ol>

      <div className="carousel-inner relative w-full overflow-hidden">
        {carouselData.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${
              item.isActive ? "active" : ""
            } relative float-left w-full`}
          >
            <img
              src={item.img}
              alt=""
              className="block w-full h-96 object-cover"
            />
            <div className="container mx-auto">
              <div className="carousel-caption absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                <h2 className="carousel-title text-3xl font-bold text-white mb-2 animate__animated animate__bounceInDown">
                  {item.title}
                </h2>
                <h4 className="carousel-subtitle text-xl text-white mb-4 animate__animated animate__bounceInUp">
                  {item.subtitle}
                </h4>
                <a
                  href={item.buttonLink}
                  className="btn btn-lg bg-blue-500 text-white py-2 px-4 rounded hidden md:inline-block animate__animated animate__bounceInUp"
                >
                  {item.buttonText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <a
        className="left carousel-control absolute top-1/2 transform -translate-y-1/2 left-4"
        href="#homeCarousel"
        role="button"
        data-slide="prev"
      >
        <span
          className="fa fa-angle-left text-3xl text-white"
          aria-hidden="true"
        ></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="right carousel-control absolute top-1/2 transform -translate-y-1/2 right-4"
        href="#homeCarousel"
        role="button"
        data-slide="next"
      >
        <span
          className="fa fa-angle-right text-3xl text-white"
          aria-hidden="true"
        ></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
