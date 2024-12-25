import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const Carousel = ({handleOpen}) => {
  const carouselData = [
    {
      img: "https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Because they need your help",
      subtitle: "Do not let them down",
      buttonText: "DONATE NOW",
      buttonLink: "#",
    },
    {
      img: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Together we can improve their lives",
      subtitle: "So let's do it!",
      buttonText: "DONATE NOW",
      buttonLink: "#",
    },
    {
      img: "https://images.unsplash.com/photo-1502781252888-9143ba7f074e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "A penny is a lot of money, if you have not got a penny.",
      subtitle: "You can make the difference!",
      buttonText: "DONATE NOW",
      buttonLink: "#",
    },
  ];

  return (
    <div className="carousel-container">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {carouselData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[90vh]">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
                <h2 className="text-3xl font-bold text-white mb-2 animate__animated animate__bounceInDown">
                  {item.title}
                </h2>
                <h4 className="text-xl text-white mb-4 animate__animated animate__bounceInUp">
                  {item.subtitle}
                </h4>
                <a
                onClick={() => handleOpen()}
                  href={item.buttonLink}
                  className="btn bg-blue-600 text-white py-2 px-4 rounded animate__animated animate__bounceInUp"
                >
                  {item.buttonText}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
